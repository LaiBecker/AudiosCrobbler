const resolveRoutes = (route) => {

    if (route.length <= 100) {
        let validRoute = route === '/' ? route : '/:name-:artist.name';
        return validRoute;

    }

    return `/${route}`;
};

export default resolveRoutes;