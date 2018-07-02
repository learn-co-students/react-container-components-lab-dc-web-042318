import React from "react";
import MovieReviews from "./MovieReviews";
const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
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
    return (
      <MovieReviews
        className="searchable-movie-reviews"
        movies={this.state.reviews}
      />
    );
  }
}

export default SearchableMovieReviewsContainer;
