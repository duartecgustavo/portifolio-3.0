import Ability from "components/organisms/ability/index";
import BackToTop from "components/organisms/back_to_top/index";
import Contact from "components/organisms/contact/index";
import Footer from "components/organisms/footer/index";
import Profile from "components/organisms/profile/index";
import Projects from "components/organisms/projects/index";
import ToolBar from "components/organisms/tool_bar/index";
import About from "components/organisms/about/index";
import { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Background } from "styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/persistedState";
import { useDrawer } from "./hooks/store/useDrawer";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);
  const changeTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const { open, setOpen } = useDrawer();

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles width={open ? "0px" : ""} />
        <Background />
        <div className="container d-flex justify-content-center">
          <div className="col-10">
            <div id="link-top"></div>
            <ToolBar changeTheme={changeTheme} theme={theme} />
            <Profile />
            <Projects />
            <Ability />
            <Contact />
            <BackToTop />
          </div>
        </div>
        <About />
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
