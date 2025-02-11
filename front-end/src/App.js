import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailProduct from "./pages/DetailProduct";
import Launches from "./pages/Launches";
import NewProduct from "./pages/NewsProduct";
import RootLayout from "./pages/Root";
import Authentification from "./pages/Authentification";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Launches /> },
      { path: '/detailProduct', element: <DetailProduct /> },
      { path: '/newProduct', element: <NewProduct/> },
      {path: '/connect', element: <Authentification/>}
    ],
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
