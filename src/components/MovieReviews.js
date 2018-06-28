// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
	return (
		<div className="review-list">
			<ul>
				{props.reviews.map(movie => (
					<li className="review" key={movie.display_title}>
						{movie.display_title}
					</li>
				))}
			</ul>
		</div>
	);
};

MovieReviews.defaultProps = { reviews: [] };

export default MovieReviews;
