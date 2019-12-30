import React, { Component } from 'react';
import {movies } from '../util/data';
import {Link} from 'react-router-dom'
import {Card, CardMedia, CardContent,CardActions, withStyles, Typography, Button, Link as MuiLink} from '@material-ui/core'



const styles = {
   img :{
       minWidth : 200,
       height: 300
   },
   card :{
       margin :10
   },
   title :{
       fontWeight :"bold"
   }
}
 class MoviePoster extends Component {
  
    render() {
        const {classes, movie } = this.props
        return (
            <Card className = {classes.card}>
                <CardMedia className = {classes.media}>
                    <img src = {movie.poster} alt = "movie" className = {classes.img} />
                </CardMedia>
                <CardContent className = {classes.content}>
                    <Typography variant = "body1" className = {classes.title}>
                        {movie.title}
                    </Typography> 
                    <Typography variant = "body2">
                        {movie.genre}
                    </Typography>
                </CardContent>
                <CardActions className = {classes.action}>
                    <MuiLink component = {Link} to =  {`/movie/${movie.title}`}>Book now</MuiLink>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(MoviePoster)
