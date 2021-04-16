import React from "react"
import { decode } from "html-entities"
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import { FormLabel } from "@chakra-ui/form-control"

const FormField = ({ label }) => {
  return (
    <>
      <FormLabel>{decode(label)}</FormLabel>
      <RadioGroup>
        <Stack direction="row">
          <Radio value="1">Yes</Radio>
          <Radio value="0">No</Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}

export default FormField
