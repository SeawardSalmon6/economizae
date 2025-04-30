import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Register } from "../pages/Login/Register";

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="sobre" element={<About />} />
    <Route path="contato" element={<Contact />} />
    <Route path="cadastre-se" element={<Register />} />
  </Route>
);

export const router = createBrowserRouter(routes);
