"use server";

import {
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
} = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
  },

  loginForm: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    color: "var(--Basic-White, #FFF)",
    fontFamily: "SF Pro Display",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 650,
    lineHeight: "32px" /* 100% */,
    letterSpacing: "-0.64px",
  },
  description: {
    marginBottom: "1.5rem",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <main style={styles.loginForm}>
          <img src={getLogoUrl()} />
          <div>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
        </main>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
