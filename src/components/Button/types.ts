import { HTMLProps } from "react";

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "secondary";
  to?: string;
  externalTo?: string;
};
