import React from "react";
import { GenerateDataCtx } from "../context";
import ReactJson from "react-json-view";

export default function PreviewJsonData() {
  return (
    <GenerateDataCtx.Consumer>
      {({ state }) => <ReactJson src={state.data} />}
    </GenerateDataCtx.Consumer>
  );
}
