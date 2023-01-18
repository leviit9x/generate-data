import React from "react";
import { GenerateDataCtx } from "../context";
import ReactJson from "react-json-view";
import { Box } from "@primer/react";

export default function PreviewJsonData() {
  return (
    <GenerateDataCtx.Consumer>
      {({ state }) => (
        <Box
          sx={{
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <ReactJson src={state.data} />
        </Box>
      )}
    </GenerateDataCtx.Consumer>
  );
}
