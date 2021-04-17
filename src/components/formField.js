import React from "react"
import { decode } from "html-entities"
import { Radio, RadioGroup } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { VStack } from "@chakra-ui/layout"

const FormField = ({ id, label, register, errors }) => {
  const formRef = `${id}`

  return (
    <VStack spacing={5}>
      <FormControl id={formRef} spacing={5}>
        <FormLabel textAlign="center">{decode(label)}</FormLabel>
        <RadioGroup align="center">
          <Radio value="yes" {...register(formRef, { required: true })}>
            Yes
          </Radio>
          <Radio value="no" {...register(formRef, { required: true })}>
            No
          </Radio>
        </RadioGroup>
        {errors[formRef] && (
          <div style={{ color: "red", textAlign: "center" }}>
            This field is required
          </div>
        )}
      </FormControl>
    </VStack>
  )
}

export default FormField
