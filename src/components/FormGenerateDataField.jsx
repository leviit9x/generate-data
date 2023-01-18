import { Box, Button } from "@primer/react";
import { clone, uniqueId } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useGenerateData } from "../context";
import { getFunc } from "../utils";
import Field from "./Field";

// useEffect(() => {
//   const slide = document.querySelector(`.slide${activeSlide?.no}`);
//   slide?.scrollIntoView({ behavior: 'smooth', block: 'center' });
// }, [activeSlide]);

export default function FormGenerateDataField() {
  const [formData, setFormData] = useState({});
  const { state, dispatch } = useGenerateData();
  const handleChange = useCallback(({ target }, id) => {
    setFormData((prev) => {
      const newFormData = clone(prev);
      const newItem = {
        id,
        ...newFormData[id],
        [target.name]: target.value,
      };
      if (target.name === "value_key") {
        newItem.value = getFunc(target.value);
      }
      newFormData[id] = newItem;

      dispatch({ type: "addData", payload: newFormData });

      return newFormData;
    });
  }, []);

  const handleCreateEmptyField = () => {
    const newId = uniqueId("field_");
    const newItem = {
      id: newId,
      key: newId,
      value: getFunc("faker.address.buildingNumber"),
      value_key: "faker.address.buildingNumber",
    };
    setFormData((prev) => {
      const newFormData = clone(prev);
      newFormData[newId] = newItem;
      dispatch({ type: "addData", payload: newFormData });
      return newFormData;
    });
  };

  const handleExportData = () => {
    const link = document.createElement("a");
    link.download = "data.json";
    const blob = new Blob([JSON.stringify(state.data, null, 2)], {
      type: "text/plain",
    });
    link.href = window.URL.createObjectURL(blob);
    link.click();
    link.remove();
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
          valueKey={f.value_key}
          onChange={(evt) => handleChange(evt, f.id)}
          isError={getError(f.key)}
        />
      ))}
      <Box
        sx={{
          flex: 1,
          flexDirection: "row",
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleCreateEmptyField}
          disabled={!!mappedFields.length && !isCanSubmit}
        >
          Thêm
        </Button>
        <Button
          disabled={!mappedFields.length || !isCanSubmit}
          onClick={handleExportData}
        >
          Export
        </Button>
      </Box>
    </Box>
  );
}
