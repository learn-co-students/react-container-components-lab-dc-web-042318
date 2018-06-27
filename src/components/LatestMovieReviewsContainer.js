import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

class LatestMovieController extends React.Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };
  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default LatestMovieController;
