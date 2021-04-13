import {
  Container,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// InitiaState
const initialState = {
  favorites: [],
};

// Actions
const favoriteRender = (state, action) => {
  //
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, dispatch] = useReducer(favoriteRender, initialState);
  const searchInput = useRef(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleFavorites = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  // Antes de useRef
  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item>
          <Search
            search={search}
            searchInput={searchInput}
            handleSearch={handleSearch}
          />
          {/* <input
            type="text"
            value={search}
            ref={searchInput}
            onChange={handleSearch}
          /> */}
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {favorites.favorites.map((fav) => (
          <Grid item xs={2}>
            {fav.name}
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {filteredUsers.map((char) => (
          <Grid item xs={3}>
            <Card className={classes.root} key={char.id}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={char.species}
                subheader={char.status}
              />
              <CardMedia
                className={classes.media}
                image={char.image}
                title={char.gender}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {char.name}
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="add to favorites cart"
                  onClick={() => handleFavorites(char)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;
