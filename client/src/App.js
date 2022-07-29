import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./features/postSlice";

function App() {
  const classes = useStyles();
  const theme = createTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography variant="h3" className={classes.heading}>
            Memories
          </Typography>
          <img
            className={classes.image}
            src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
}

export default App;
