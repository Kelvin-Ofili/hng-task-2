import { MovieCard } from "components";
import React, { useState, useEffect } from "react";

const MainBody = () => {
	const [movies, setMovies] = useState([]);
	// `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
	// The endpoint for popular movies

	const api_key = process.env.REACT_APP_API_KEY;
	const searchMovies = async () => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
			);
			if (!response.ok) {
				throw new Error(`Error fetching movie list: ${response.status}`);
			}
			const data = await response.json();
			console.log(data);
			const results = data.results;
			setMovies(results);
			console.log(results.length);
		} catch (error) {
			console.error(error);
			return [];
		}
	};
	useEffect(() => {
		searchMovies();
	}, []);
	return (
		<div className="p-16">
			<h1 className="text-3xl font-semibold">Popular Movie</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11">
				{movies.slice(0, 10).map((movie, id) => {
					return <MovieCard {...movie} key={id} />;
				})}
			</div>
		</div>
	);
};

export { MainBody };
