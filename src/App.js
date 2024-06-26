import React from 'react'
import './App.css';
import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { RouterItem } from './util/RouterItem';
import { ErrorPage } from './pages';
const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: RouterItem,
    }
  ]);
  return <RouterProvider router={routes} />
}
export default App

