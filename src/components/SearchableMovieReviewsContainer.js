// Code SearchableMovieReviewsContainer Here
import React from "react";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  trackSearchInput = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  search = e => {
    e.preventDefault();

    let URL =
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
      `api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Searchable Reviews</h1>
        <form onSubmit={this.search}>
          <input
            placeholder="Search for a film"
            value={this.state.searchTerm}
            onChange={this.trackSearchInput}
          />
          <button type="submit" onClick={this.searchTerm}>
            Search
          </button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
