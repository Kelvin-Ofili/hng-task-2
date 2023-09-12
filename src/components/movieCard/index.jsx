import React from "react";
import { Routes } from "router";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, release_date, poster_path, id }) => {
	const navigate = useNavigate();
	return (
		<div
			className="rounded-lg p-4 mb-4 mx-auto"
			data-testid="movie-card"
			onClick={() => navigate(Routes.movieId(id) )}
		>
			
			<img
				src={`https://image.tmdb.org/t/p/w300${poster_path}`}
				alt={title}
				className="mb-2"
				data-testid="movie-poster"
			/>
			<h2 className="text-lg font-semibold" data-testid="movie-title">
				{title}
			</h2>
			<p className="text-sm text-gray-500" data-testid="movie-release-date">
				Release Date: {release_date}
			</p>
		</div>
	);
};

export { MovieCard };
