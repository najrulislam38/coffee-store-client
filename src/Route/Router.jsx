import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Users from "../pages/Users/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          await fetch(
            "https://coffee-store-server-7s7v49n2k-md-najrul-islams-projects.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-7s7v49n2k-md-najrul-islams-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-store-server-7s7v49n2k-md-najrul-islams-projects.vercel.app/users"
          ),
      },
    ],
  },
]);

export default Router;
