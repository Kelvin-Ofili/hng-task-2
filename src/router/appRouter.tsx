import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteBuilder, Routes as RouteList } from ".";

/**
 * MAIN ROUTER COMPONENT
 *
 * ===============================================
 *
 * This component houses all routes and their respective layouts.
 * To add a route navigate to the route builder and add to the existing list.
 *
 *
 */

const MainRouter: React.FC = () => {
	return (
		<>
			<Routes>
				{RouteBuilder?.length > 0 &&
					RouteBuilder.map((item, idx) => {
						const { Element, path } = item;
						const PageComponent = <Element />;
						return <Route key={idx} path={path} element={PageComponent} />;
					})}
			</Routes>
		</>
	);
};

export { MainRouter };
