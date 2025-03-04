"use server";

import { HeaderImage } from "../../components/HeaderImage/HeaderImage";
import { Footer } from "../../components/Footer//Footer";
import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isRegisterPage?: boolean;
};

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export const DefaultLayout = ({
  children,
  isRegisterPage = false,
}: DefaultLayoutProps): React.JSX.Element => (
  <div>
    <main style={styles.container} id="main">
      <HeaderImage />
      {children}
      <Footer isRegisterPage={isRegisterPage} />
    </main>
  </div>
);
