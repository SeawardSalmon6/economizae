import { HTMLProps, ReactNode } from "react";

export type InputProps = Omit<HTMLProps<HTMLInputElement>, "label"> & {
  id: string;
  suffix?: ReactNode;
  label?: ReactNode;
};
