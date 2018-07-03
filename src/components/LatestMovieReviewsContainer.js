import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    fetchResults = () => {
        fetch(URL).then(resp => resp.json()).then(result => console.log(result))
    }

    render() {
        return (
            <div>LatestMovieReviewsContainer</div>
        )
    }
}
export default LatestMovieReviewsContainer;
