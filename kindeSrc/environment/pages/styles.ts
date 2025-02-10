// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
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

export const generateCSSVariables = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
    --kinde-control-label-color: #fff;
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }

`;
