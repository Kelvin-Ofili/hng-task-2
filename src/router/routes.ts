/**
 * ROUTES
 *
 * ===============================================
 *
 * This object depicts the component url structure.
 * It contains a key-value pair of components and their respective URLs
 *
 */

export const Routes = {
	home: "/",
	movie: "/movie/:id",
	movieId: (id: any) => `/movie/${id}`,
};
