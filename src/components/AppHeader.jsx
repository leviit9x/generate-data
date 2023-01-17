import { Avatar, Header, Label } from "@primer/react";
import React from "react";

export default function AppHeader() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="/" fontSize={2}>
          <span>Generate Data</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
        <Label variant="success">NEW</Label>
      </Header.Item>
      <Header.Item mr={0}>
        <Avatar
          src="https://github.com/octocat.png"
          size={20}
          square
          alt="@octocat"
        />
      </Header.Item>
    </Header>
  );
}
