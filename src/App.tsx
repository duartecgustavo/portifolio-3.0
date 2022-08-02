import Footer from "components/organisms/footer/index";
import HelpBar from "components/organisms/help_bar/index";
import Profile from "components/organisms/profile/index";
import Projects from "components/organisms/projects/index";
import { Fragment } from "react";
import { Background } from "styles/global";
import "styles/global.css";

function App() {
  return (
    <Fragment>
      <Background />
      <div className="container d-flex justify-content-center">
        <div className="col-10">
          <HelpBar />
          <Profile />
          <Projects />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
