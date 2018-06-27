// Code SearchableMovieReviewsContainer Here

import React, { Component } from "react";
import MovieReviews from "./MovieReviews.js";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(revObj => this.setState({ reviews: revObj.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>SearchableMovieReviewsContainer</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
