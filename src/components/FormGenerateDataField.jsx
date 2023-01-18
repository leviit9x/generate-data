import { Box, Button } from "@primer/react";
import { clone, uniqueId } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useGenerateData } from "../context";
import Field from "./Field";

export default function FormGenerateDataField() {
  const [formData, setFormData] = useState({});
  const { state, dispatch } = useGenerateData();
  const handleChange = useCallback(({ target }, id) => {
    setFormData((prev) => {
      const newFormData = clone(prev);

      newFormData[id] = {
        id,
        ...newFormData[id],
        [target.name]: target.value,
      };
      dispatch({ type: "addData", payload: newFormData });

      return newFormData;
    });
  }, []);

  const handleCreateEmptyField = () => {
    const newId = uniqueId("field_");
    const newItem = {
      id: newId,
      key: "",
      value: "",
    };
    setFormData((prev) => {
      const newFormData = clone(prev);
      newFormData[newId] = newItem;
      dispatch({ type: "addData", payload: newFormData });
      return newFormData;
    });
  };

  const mappedFields = useMemo(() => {
    return Object.keys(formData).map((k) => formData[k]);
  }, [formData]);

  const getError = useCallback(
    (str) => {
      return (
        mappedFields.filter((elm) => elm.key.trim() === str.trim()).length >= 2
      );
    },
    [mappedFields]
  );

  const isCanSubmit = useMemo(
    () =>
      !!mappedFields.length && !mappedFields.some((elm) => getError(elm.key)),
    [mappedFields]
  );

  return (
    <Box>
      {mappedFields.map((f) => (
        <Field
          key={f.id}
          token={f.id}
          nameKey={f.key}
          valueKey={f.value}
          onChange={(evt) => handleChange(evt, f.id)}
          isError={getError(f.key)}
        />
      ))}
      <Button
        onClick={handleCreateEmptyField}
        sx={{
          mt: 3,
        }}
      >
        Thêm
      </Button>
    </Box>
  );
}
