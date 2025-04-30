import { HTMLProps, PropsWithChildren } from "react";
import { HeaderProps } from "../Header/types";
import { FooterProps } from "../Footer/types";

export type LayoutProps = PropsWithChildren<
  {
    headerProps?: HeaderProps;
    footerProps?: FooterProps;
  } & HTMLProps<HTMLElement>
>;
