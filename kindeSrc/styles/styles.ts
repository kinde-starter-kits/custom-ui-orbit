// CSS Variables configuration
const kindeSettings = {
  baseFontFamily:
    "SF Pro, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "99px",
  buttonPrimaryBackgroundColor: "#C1AFEF",
  buttonPrimaryColor: "#000",
  buttonBorderRadius: "99px",
  buttonSecondaryBackgroundColor: "#2B2B2B",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#2B2B2B",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "99px",
} as const;

export const getStyles = (): string => `
  @font-face {
    font-family: SF Pro;
    src: url(https://asset.kindedemo.com/orbit/SF-Pro.woff2) format(woff2);
    font-display: fallback;
  }

  @font-face {
    font-family: SF Pro Expanded Semibold;
    src: url(https://asset.kindedemo.com/orbit/SF-Pro-Expanded.woff2) format(woff2);
    font-weight: 600;
    font-display: fallback;
  }

  :root {
    --kinde-base-font-family: ${kindeSettings.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeSettings.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeSettings.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeSettings.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeSettings.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeSettings.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeSettings.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeSettings.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeSettings.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeSettings.buttonSecondaryBorderRadius};
    --kinde-control-label-color: #fff;
    --kinde-control-label-font-weight: 700;
    --kinde-button-font-weight: 700;
    --kinde-control-select-text-border-color: #636363;
    --kinde-choice-separator-color: #ABABAB;
  }

  [data-kinde-layout-auth-buttons] {
    display: flex;
  }

  [data-kinde-layout-auth-buttons-item] {
    width: 100%;
  }

  [data-kinde-layout-auth-buttons] [data-kinde-button-text] {
    block-size: 1px;
    clip-path: inset(50%);
    inline-size: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }


  .kinde-branding a {
    color: #fff;
  }

  [data-kinde-fallback-action] {
    block-size: 1px;
    clip-path: inset(50%);
    inline-size: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }

  .footer {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .terms {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .footer a {
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  .image-header {
    height: 150px;
    background: url(https://asset.kindedemo.com/orbit/aac433a14500955ae1c8641e71da2076.jpeg) no-repeat center center;
    background-size: cover;
  }

  @media (min-width: 768px) { 
    .image-header {
      height: 200px;
      margin-bottom: 1.5rem;
    }

    .footer {
      flex-direction: row;
      justify-content: space-between;
    }
  
  }
`;
