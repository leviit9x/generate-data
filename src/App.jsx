import { SplitPageLayout } from "@primer/react";
import AppHeader from "./components/AppHeader.jsx";
import FormGenerateDataField from "./components/FormGenerateDataField.jsx";
import PreviewJsonData from "./components/PreviewJsonData.jsx";

function App() {
  return (
    <SplitPageLayout>
      <SplitPageLayout.Header
        sx={{
          "& > div": {
            padding: 0,
          },
        }}
      >
        <AppHeader />
      </SplitPageLayout.Header>
      <SplitPageLayout.Pane>
        <FormGenerateDataField />
      </SplitPageLayout.Pane>
      <SplitPageLayout.Content>
        <PreviewJsonData />
      </SplitPageLayout.Content>
    </SplitPageLayout>
  );
}

export default App;
