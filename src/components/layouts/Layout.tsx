// components/Layout.tsx
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LayoutProps } from "../../types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <Analytics />
    </div>
  );
};

export default Layout;
