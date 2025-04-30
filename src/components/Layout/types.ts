import { HTMLProps, PropsWithChildren } from "react";
import { HeaderProps } from "~components/Header/types";
import { FooterProps } from "~components/Footer/types";

export type LayoutProps = PropsWithChildren<
  {
    headerProps?: HeaderProps;
    footerProps?: FooterProps;
  } & HTMLProps<HTMLElement>
>;
