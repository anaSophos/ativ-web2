import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//páginas
import Home from '../paginas/Home.jsx'
import GetImagem from '../paginas/GetImagem.jsx'
import ImageAlbum from '../paginas/ImageAlbum/ImageAlbum.jsx';

export const router = createBrowserRouter([
    {
        path: "/albums/",
        element: <Home />,
    },
    {
        path: "/albums/:id",
        element: <ImageAlbum />,
    },
    {
        path: "/getImagem",
        element: <GetImagem />,
    }
]);
