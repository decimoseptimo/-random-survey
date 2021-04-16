import React from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import { Alert, AlertIcon, Button } from "@chakra-ui/react"

import FormField from "../components/formField"

const SurveyForm = ({ results }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    console.log(data)
    navigate("/survey-completed")
  }

  const formFields = results.length ? (
    results.map((i, ix) => (
      <FormField
        key={ix}
        id={ix}
        label={i.question}
        register={register}
        errors={errors}
      />
    ))
  ) : (
    <Alert status="warning">
      <AlertIcon />
      There was a error loading the survey, please try again
    </Alert>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
      {formFields}
      <div style={{ textAlign: "center" }}>
        <Button type="submit" colorScheme="teal" size="lg" width="20rem">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default SurveyForm
