import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      //General DarkMode
      //Purple
      purple: string;
      purple2: string;

      //Gray
      gray: string;

      //White
      default: string;
      white: string;

      //Black
      black: string;
      header: string;
      footer: string;

      // Background
      color_bg1: string;
      color_bg2: string;
    };
  }
}
