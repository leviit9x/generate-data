import { Box, FormControl, Select, TextInput, Token } from "@primer/react";
import React from "react";
import { __fakeTypes__ } from "../utils";

export default function Field({ nameKey, valueKey, onChange, isError, token }) {
  return (
    <Box
      borderColor="border.default"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      py={3}
    >
      <FormControl>
        <FormControl.Label>
          Key object <Token text={token} />
        </FormControl.Label>
        <TextInput
          placeholder="key field"
          name={"key"}
          value={nameKey}
          onChange={onChange}
          width={"100%"}
          validationStatus={isError && "error"}
        />
      </FormControl>

      <FormControl
        sx={{
          mt: 2,
        }}
      >
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
