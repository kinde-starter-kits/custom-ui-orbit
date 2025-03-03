"use server";

import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
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
}: DefaultLayoutProps): React.JSX.Element => (
  <div style={styles.container}>
    <main id="main">{children}</main>
  </div>
);
