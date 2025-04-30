import { HTMLProps, ReactNode } from "react";

export type InputProps = Omit<HTMLProps<HTMLInputElement>, "label"> & {
  suffix?: ReactNode;
  label?: ReactNode;
};
