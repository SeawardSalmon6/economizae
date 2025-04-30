import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./types";

export function Layout({
  headerProps,
  children,
  footerProps,
  ...props
}: LayoutProps) {
  return (
    <>
      <Header {...headerProps} />
      <main {...props}>{children}</main>
      <Footer {...footerProps} />
    </>
  );
}
