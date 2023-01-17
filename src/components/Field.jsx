import { Box, FormControl, Select, TextInput } from "@primer/react";
import React, { useState } from "react";
import { getFunc, __fakeTypes__ } from "../utils";

export default function Field({ nameKey, valueKey, onChange }) {
  return (
    <Box
      borderColor="border.default"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      py={3}
    >
      <TextInput
        placeholder="name field"
        name={"key"}
        value={nameKey}
        onChange={onChange}
        width={"100%"}
      />
      <FormControl>
        <FormControl.Label>Type generate Value</FormControl.Label>

        <Select name={"value"} onChange={onChange} value={valueKey}>
          {__fakeTypes__.map((type) => (
            <Select.Option value={type} key={type}>
              {type}
            </Select.Option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
