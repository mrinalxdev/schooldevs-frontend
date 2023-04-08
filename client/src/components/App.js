import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element : <div>"Hello Public Route"</div>
  },
  {
    path : '/quiz',
    element : <div>"Hello quiz Route"</div>
  },
  {
    path : '/result',
    element : <div>"Hello Result Route"</div>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
