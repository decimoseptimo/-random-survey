import React from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import { Alert, AlertIcon, Button } from "@chakra-ui/react"

import FormField from "../components/formField"
import { postData } from "../data"

const SurveyForm = ({ results }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    // reconciliate questions & answers
    const surveyResults = results.map((i, ix) => ({
      order: ix,
      question: i.question,
      answer: data[ix],
    }))
    // console.log(surveyResults)
    postData(surveyResults, onSuccess, onFailure)
  }
  const onSuccess = data => {
    console.log(data)
    navigate("/survey-success")
  }
  const onFailure = e => {
    console.error(e)
    navigate("/survey-failure")
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
