import React, { useContext } from 'react'
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Error from '../../pages/Error';
import PostIdPage from '../../pages/PostIdPage';
import { privateRoutes, publicRoutes, routes } from '../../router/router';
import { AuthContext } from '../../context/context';
import Loader from './Loader/Loader';

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route                     
                        path={route.path}
                        exact={route.exact}
                        element={<route.element />}
                        key={route.path} 
                    />)}
                
                <Route path="/*" element={<Navigate to="/posts" replace />} />)
            </Routes>
            : 
            <Routes>
                {publicRoutes.map(route => 
                    <Route                     
                        path={route.path}
                        exact={route.exact}
                        element={<route.element />} 
                        key={route.path}
                    />)}
                <Route path="/*" element={<Navigate to="/login" replace />} />)
            </Routes>
    )
}

export default AppRouter