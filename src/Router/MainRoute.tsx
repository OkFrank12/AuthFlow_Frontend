import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Homescreen from "../Pages/Screen/Homescreen";
import RegisterScreen from "../Pages/Auth/RegisterScreen";
import SignInScreen from "../Pages/Auth/SignInScreen";
import PrivateRoute from "./PrivateRoute";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
  {
    path: "register",
    element: <RegisterScreen />,
  },
  {
    path: "sign-in",
    element: <SignInScreen />,
  },
]);
