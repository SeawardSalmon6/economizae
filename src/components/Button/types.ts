import { HTMLProps } from "react";

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "submit" | "reset";
};
