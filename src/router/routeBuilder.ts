import { PathRouteProps } from "react-router-dom";
import { Routes } from "./routes";
import { Home, Movie } from "pages";


export interface RouteBuilderItem extends PathRouteProps {
	Element: React.FC;
}

export const RouteBuilder = [
	{
		path: Routes.home,
		Element: Home,
	},
	{
		path: Routes.movie,
		Element: Movie,
	},
];
