import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews.js";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentWillMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(revObj => this.setState({ reviews: revObj.results }));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
