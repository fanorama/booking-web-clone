
const protectedRoutes = ({children}: {children: JSX.Element}) => {
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? 
};

export default protectedRoutes;
