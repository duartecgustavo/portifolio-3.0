import Footer from "components/molecules/footer/index";
import HelpBar from "components/molecules/help_bar/intex";
import Profile from "components/organisms/profile/index";
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
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
