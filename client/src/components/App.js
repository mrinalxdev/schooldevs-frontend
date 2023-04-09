import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Main'
import QuizComponent from './QuizComponent'
import Result from  './Result'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <QuizComponent></QuizComponent>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
