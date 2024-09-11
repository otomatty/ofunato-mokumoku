export const theme = {
  colors: {
    primary: {
      main: "var(--color-primary-main)",
      light: "var(--color-primary-light)",
      dark: "var(--color-primary-dark)",
      contrastText: "var(--color-primary-contrast-text)",
    },
    secondary: {
      main: "var(--color-secondary-main)",
      light: "var(--color-secondary-light)",
      dark: "var(--color-secondary-dark)",
      contrastText: "var(--color-secondary-contrast-text)",
    },
    background: {
      default: "var(--color-background-default)",
      paper: "var(--color-background-paper)",
    },
    text: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
    },
  },
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
  },
  borderRadius: {
    sm: "var(--border-radius-sm)",
    md: "var(--border-radius-md)",
    lg: "var(--border-radius-lg)",
  },
};

export type Theme = typeof theme;
