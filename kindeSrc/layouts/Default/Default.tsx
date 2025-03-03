"use server";

import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <div className="layout-default">
    <main id="main">{children}</main>
  </div>
);
