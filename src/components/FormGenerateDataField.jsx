import { Box, Button } from "@primer/react";
import { clone, uniqueId } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import Field from "./Field";

export default function FormGenerateDataField() {
  const [formData, setFormData] = useState({});

  const handleChange = useCallback(({ target }, id) => {
    setFormData((prev) => {
      const newFormData = clone(prev);

      newFormData[id] = {
        id,
        ...newFormData[id],
        [target.name]: target.value,
      };

      return newFormData;
    });
  }, []);

  const mappedFields = useMemo(() => {
    return Object.keys(formData).map((k) => formData[k]);
  }, [formData]);

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
      return newFormData;
    });
  };

  return (
    <Box>
      {mappedFields.map((f) => (
        <Field
          key={f.id}
          nameKey={f.fieldName}
          valueKey={f.value}
          onChange={(evt) => handleChange(evt, f.id)}
        />
      ))}
      <Button onClick={handleCreateEmptyField}>Thêm</Button>
    </Box>
  );
}
