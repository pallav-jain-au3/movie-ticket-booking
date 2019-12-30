import React, { Component } from "react";
import { getMovie } from "../redux/actions/moviesAction";
import { connect } from "react-redux";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = {
  image: {
    width: "80%",
    height : 400
  }
};
class Movie extends Component {
  componentDidMount() {
    const movieTitle = this.props.match.params.movieTitle;
    this.props.getMovie(movieTitle);
  }
  render() {
    const {
      loading,
      movie: { title, poster, genre, days, times },
      classes
    } = this.props;
    let movieMarkup = loading ? (
      true(<p>loading.....</p>)
    ) : (
      <Grid container>
        <Grid  item sm={10}>
          <Grid container>
            <Grid item sm={12} className={classes.poster}>
              <img src={poster} alt={title} className={classes.image} />
            </Grid>
            <Grid item sm={12} className={classes.content}>
              <Typography variant="h3"  align = "center">{title}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm = {2}>
           <Typography variant = "h5" al>
           Filter
           </Typography>
        </Grid>
      </Grid>
    );
    return <div>{movieMarkup}</div>;
  }
}
const mapStateToProps = state => ({
  movie: state.moviesData.movie,
  loading: state.moviesData.loading
});

export default connect(mapStateToProps, { getMovie })(
  withStyles(styles)(Movie)
);
