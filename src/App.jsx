import { SplitPageLayout, Box } from "@primer/react";
import AppHeader from "./components/AppHeader.jsx";
import FormGenerateDataField from "./components/FormGenerateDataField.jsx";
import PreviewJsonData from "./components/PreviewJsonData.jsx";

function App() {
  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: 54,
          display: "grid",
          placeItems: "center",
          backgroundColor: "canvas.subtle",
          borderBottom: "1px solid",
          borderColor: "border.default",
          zIndex: 1,
        }}
      >
        <AppHeader />
      </Box>
      <SplitPageLayout>
        {/* <SplitPageLayout.Header
          sx={{
            "& > div": {
              padding: 0,
            },
          }}
        >
          <AppHeader />
        </SplitPageLayout.Header> */}
        <SplitPageLayout.Pane>
          <FormGenerateDataField />
        </SplitPageLayout.Pane>
        <SplitPageLayout.Content>
          <PreviewJsonData />
        </SplitPageLayout.Content>
      </SplitPageLayout>
    </Box>
  );
}

export default App;
