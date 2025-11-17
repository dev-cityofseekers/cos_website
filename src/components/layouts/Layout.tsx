// components/Layout.tsx
import React from "react";
import { LayoutProps } from "../../types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
