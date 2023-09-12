import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
	title: string;
	release_date: string;
	runtime: number;
	overview: string;
    backdrop_path: string;
    poster_path: string;
	genres: any;
	name: string;
}
const MovieUI: React.FC = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState<Movie | null>(null);
    const api_key = process.env.REACT_APP_API_KEY

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
				);
				if (!response.ok) {
					throw new Error(`Error fetching movie details: ${response.status}`);
				}
				const data: Movie = await response.json(); // Use the Movie type
				setMovie(data);
			} catch (error) {
                console.error(error);
                alert(error)
			}
		};

		fetchMovieDetails();
	}, [id]);

	return (
		<div className="p-6">
			{movie ? (
				<div className="flex flex-col">
					<img
						src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
						alt={movie.title}
						className="rounded-lg w-full"
					/>
					<div className="flex flex-col md:flex-row my-10 items-center">
						<div className="flex flex-row">
							<h1
								className="text-lg mb-4 font-semibold md:text-2xl"
								data-testid="movie-title"
							>
								{movie.title}
							</h1>
							<p
								className="font-semibold text-lg mx-6 md:text-2xl"
								data-testid="movie-release-date"
							>
								{movie.release_date}
							</p>
						</div>
						{movie.genres.map((genre: { name: any }) => (
							<div className=" text-sm rounded-2xl border-red-100 border-2 flex flex-row items-center py-0 px-2 mx-2">
								<p className="text-red-500">{genre.name}</p>
							</div>
						))}
					</div>
					<p className="text-gray-500 mb-2" data-testid="movie-runtime">
						Runtime: {movie.runtime} minutes
					</p>
					<p className="mb-4" data-testid="movie-overview">
						{movie.overview}
					</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export { MovieUI };
