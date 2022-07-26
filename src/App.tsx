import React, { Fragment } from "react";
import { Content } from "styles/global";
import "styles/global.css";

function App() {
  return (
    <Fragment>
      <Content />
      <div className="container">
        <button type="button" className="btn btn-primary">
          TESTESTES
        </button>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis itaque
          ab magnam, officia repellat doloremque quos perspiciatis porro
          tempora, aliquam quibusdam magni rerum quam nihil quae tempore
        </p>
      </div>
    </Fragment>
  );
}

export default App;
