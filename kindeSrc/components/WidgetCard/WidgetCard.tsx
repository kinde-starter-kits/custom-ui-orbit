"use server";

import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import React from "react";

type WidgetCardProps = {
  description: string;
  heading: string;
};

const styles: {
  widgetCard: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
  logoWrapper: React.CSSProperties;
} = {
  widgetCard: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    alignSelf: "stretch",
    color: "var(--Basic-White, #FFF)",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 650,
    lineHeight: "32px" /* 100% */,
    letterSpacing: "-0.64px",
    fontFamily: "SF Pro Expanded Semibold",
  },
  description: {
    marginBottom: "1.5rem",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
  },
  logo: {
    width: "115.5px",
  },
};

export const WidgetCard: React.FC<WidgetCardProps> = ({
  description,
  heading,
}) => {
  return (
    <article style={styles.widgetCard}>
      <header>
        <div style={styles.logoWrapper}>
          <img style={styles.logo} src={getLogoUrl()} />
        </div>
        <div>
          <h1 style={styles.heading}>{heading}</h1>
          <p style={styles.description}>{description}</p>
        </div>
      </header>
      {getKindeWidget()}
    </article>
  );
};
