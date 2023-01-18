import React from "react";
import { GenerateDataCtx } from "../context";

export default function PreviewJsonData() {
  return (
    <GenerateDataCtx.Consumer>
      {({ state }) => <div>{JSON.stringify(state, null, 2)}</div>}
    </GenerateDataCtx.Consumer>
  );
}
