import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/',
        element: <Home />
      },
    ],
    errorElement: <Error />
  },
  {},
])
function App() {
  return <RouterProvider router={router} />;
}
export default App;
