import type { ReactNode } from "react";
import SolutionNavbar from "./SolutionNavbar";
import SolutionFooter from "./SolutionFooter";

type Props = {
  path: string;
  children: ReactNode;
};

export default function BasicLayout({ path, children }: Props) {
  return (
    <>
      <SolutionNavbar path={path} />
      <main className="main-container">{children}</main>
      <SolutionFooter />
    </>
  );
}
