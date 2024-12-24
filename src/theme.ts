import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: "none" as unknown as any,
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
