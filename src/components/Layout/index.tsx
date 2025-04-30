import { Footer } from "~components/Footer";
import { Header } from "~components/Header";
import { LayoutProps } from "~components/Layout/types";

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
