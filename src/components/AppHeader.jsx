import { Avatar, Header, Label } from "@primer/react";
import React from "react";

export default function AppHeader() {
  return (
    <Header id="header" sx={{ width: "100%" }}>
      <Header.Item>
        <Header.Link href="/" fontSize={2}>
          <span>Generate Data</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
        <Label variant="success">NEW</Label>
      </Header.Item>
      <Header.Link
        href="https://github.com/leviit9x/generate-data"
        mr={0}
        target={"_blank"}
      >
        <Avatar
          src="https://github.com/octocat.png"
          size={20}
          square
          alt="@octocat"
        />
      </Header.Link>
    </Header>
  );
}
