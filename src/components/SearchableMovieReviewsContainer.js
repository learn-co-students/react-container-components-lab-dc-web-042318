import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCHURL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: [],
    };
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value }, this.fetchReviews);
  };

  fetchReviews = () => {
    fetch(`${SEARCHURL}${this.state.searchTerm}`)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
        <h2>Search Results</h2>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
