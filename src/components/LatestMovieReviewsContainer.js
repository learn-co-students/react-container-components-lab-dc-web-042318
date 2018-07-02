import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    console.log("in here");
    fetch(URL)
      .then((res) => res.json())
      .then((reviews) => this.setState({ reviews: reviews.results }));
  }

  render() {
    console.log("in render", this.state);
    return (
      <MovieReviews
        className="latest-movie-reviews"
        movies={this.state.reviews}
      />
    );
  }
}

export default LatestMovieReviewsContainer;
