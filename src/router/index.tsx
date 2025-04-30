import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    {/* <Route path="contact" element={<Contact />} /> */}
    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>
);

export const router = createBrowserRouter(routes);
