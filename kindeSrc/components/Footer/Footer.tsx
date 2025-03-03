"use server";

import { getKindeRegisterUrl, getKindeSignInUrl } from "@kinde/infrastructure";
import React from "react";

type FooterProps = {
  isRegisterPage?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isRegisterPage = false }) => {
  return (
    <div className="footer">
      <div>
        {isRegisterPage ? (
          <>
            Already have an account? <a href={getKindeSignInUrl()}>Sign in</a>
          </>
        ) : (
          <>
            No account? <a href={getKindeRegisterUrl()}>Create one</a>
          </>
        )}
      </div>
      <div className="terms">
        <a href="https://www.kinde.com">Terms of use</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};
