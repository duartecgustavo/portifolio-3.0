import Footer from "components/organisms/footer/index";
import ToolBar from "components/organisms/tool_bar/index";
import Profile from "components/organisms/profile/index";
import Projects from "components/organisms/projects/index";
import { Fragment } from "react";
import { Background } from "styles/global";

function App() {
  return (
    <Fragment>
      <Background />
      <div className="container d-flex justify-content-center">
        <div className="col-10">
          <ToolBar />
          <Profile />
          <Projects />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
