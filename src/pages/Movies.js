import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MoviePoster from "../component/MoviePoster";
import { connect } from "react-redux";
import { getMovies, getMovie } from "../redux/actions/moviesAction";

export class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }


  render() {
    const {
      moviesData: { loading, movies }
    } = this.props;
    const moviesMarkup = loading ? (
      <p>Loading....</p>
    ) : (
      movies.map((movie, index) => (
        <Grid item sm={3} key={index}>
          <MoviePoster movie={movie}  />
        </Grid>
      ))
    );
    return (
      <Grid container>
        <Grid item sm={10}>
          <Grid container>{moviesMarkup}</Grid>
        </Grid>
        <Grid item sm={2}>
        <p>Filter</p>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  moviesData: state.moviesData
});

const mapActionToState = {
     getMovies,
     getMovie 
}

export default connect(mapStateToProps,mapActionToState )(Movies);
