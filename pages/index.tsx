import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.margin}
        >
          Small
        </Button>
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Medium
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.margin}
          onClick={() => {}}
        >
          Small
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </div>
      <div>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default Home;
