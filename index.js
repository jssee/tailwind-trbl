import plugin from "tailwindcss/plugin";

export default plugin(({ addUtilities }) =>
  addUtilities({
    ".row-t-l": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-start",
      justifyContent: "flex-start",
    },
    ".row-t": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-start",
      justifyContent: "center",
    },
    ".row-t-r": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-start",
      justifyContent: "flex-end",
    },
    ".row-l": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    ".row": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    ".row-r": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    ".row-b-l": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-end",
      justifyContent: "flex-start",
    },
    ".row-b": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-end",
      justifyContent: "center",
    },
    ".row-b-r": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-end",
      justifyContent: "flex-end",
    },
    ".col-t-l": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    ".col-t": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    ".col-t-r": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    ".col-l": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    ".col": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ".col-r": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    ".col-b-l": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
    ".col-b": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    ".col-b-r": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
  }),
);
