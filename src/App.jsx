import { SplitPageLayout, Text } from "@primer/react";
import AppHeader from "./components/AppHeader.jsx";
import FormGenerateDataField from "./components/FormGenerateDataField.jsx";

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
        <Text>Preview data</Text>
      </SplitPageLayout.Content>
    </SplitPageLayout>
  );
}

export default App;
