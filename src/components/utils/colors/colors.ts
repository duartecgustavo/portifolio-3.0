export const darkMode = {
  //Page Habilities
  //Blues
  h_blue1: "#3E13EB",
  h_blue2: "#407BFF",
  h_blue3: "#0C4BF2",
  h_blue4: "#00618A",
  //Green
  h_green: "#00FA75",
  //Red
  h_red: "#A02724",
  //Yellow
  h_yellow: "#B29D00",
  //Pink
  h_pink: "#BA68C8",

  //General DarkMode
  //Purple
  dm_purple: "#7D50F9",
  dm_purple2: "#9772FE",
  //Gray
  dm_gray: "#C7C7C7",
  //White
  dm_default: "#EBEBEB",
  dm_white: "#fff",
  //Black
  dm_black: "#303033",
  dm_footer: "#303033",

  // Background
  color_bg1: "#100c22",
  color_bg2: "#000000",
};
export const whiteMode = {
  //Page Habilities
  //Blues
  h_blue1: "#3E13EB",
  h_blue2: "#407BFF",
  h_blue3: "#0C4BF2",
  h_blue4: "#00618A",
  //Green
  h_green: "#00FA75",
  //Red
  h_red: "#A02724",
  //Yellow
  h_yellow: "#B29D00",
  //Pink
  h_pink: "#BA68C8",

  //General DarkMode
  //Purple
  dm_purple: "#5629D1",
  dm_purple2: "#5629D1",
  //Gray
  dm_gray: "# 303033",
  //White
  dm_default: "#303033",
  dm_white: "red",
  //Black
  dm_black: "#303033",
  dm_footer: "rgba(48, 48, 51, 0.2)",

  // Background
  color_bg1: "#f1e5ff",
  color_bg2: "#ffffff",
};

export const Pallete = () => {
  let theme;
  if (true) {
    theme = darkMode;
  } else {
    theme = whiteMode;
  }
  return { ...theme };
};
