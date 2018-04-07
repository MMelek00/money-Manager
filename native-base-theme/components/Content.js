import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: "#1F2131",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "NativeBase.Segment": {
      borderWidth: 1,
      backgroundColor: "transparent"
    }
  };

  return contentTheme;
};
