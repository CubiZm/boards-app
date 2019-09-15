import React from "react";

import "./Content.scss";

const Content = (props: any) => {
  return (
    <main className="main">
      {props.children}
    </main>
  );
};

export default Content;
