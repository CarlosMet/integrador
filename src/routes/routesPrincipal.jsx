import Home from "../pages/Home";
import Login from "../pages/Login";
import Registros from "../pages/Registros";
import { Router } from "react-router-dom";

export let router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registros",
    element: <Registros />,
  },
];
