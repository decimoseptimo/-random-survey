import React, { useState, useEffect } from "react"
import { VStack } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/react"

import _data from "../data"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SurveyForm from "../components/SurveyForm"

const IndexPage = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const onSuccess = data => {
    setIsLoading(false)
    // The API response_code, from docs "Code 0: Success Returned results successfully."
    if (data.response_code === 0) return setData(data)
    console.error(`Type error: API response code ${data.response_code}`)
  }
  const onFailure = e => {
    setIsLoading(false)
    console.error(e)
  }

  const results = data?.results ?? []

  useEffect(() => {
    _data(onSuccess, onFailure)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <VStack>
        <h1>Please answer the following questions, then submit.</h1>
        {isLoading ? (
          <p>
            Please hold on <Spinner color="teal" as="span" /> loading survey
          </p>
        ) : (
          <SurveyForm results={results} />
        )}
      </VStack>
    </Layout>
  )
}

export default IndexPage
