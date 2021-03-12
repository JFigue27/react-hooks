import {
  Container,
  Grid,
  IconButton,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const Characters = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {characters.map((char) => (
          <Grid item xs={3}>
            <Card className={classes.root}>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;
