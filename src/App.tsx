import { RouterProvider } from "react-router";
import { router } from "~/router";
import "./App.css";

export function App() {
  return <RouterProvider router={router} />;
}
