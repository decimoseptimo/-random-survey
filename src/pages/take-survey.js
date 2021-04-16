import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/button"
import { VStack } from "@chakra-ui/layout"
import { FormControl } from "@chakra-ui/form-control"
import { Box, Alert, AlertIcon } from "@chakra-ui/react"

import _data from "../data"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FormField from "../components/formField"

const IndexPage = () => {
  const [data, setData] = useState()
  const getData = data => {
    // The API response_code, from docs "Code 0: Success Returned results successfully."
    if (data.response_code === 0) return setData(data)
    console.error(`Type error: API response code ${data.response_code}`)
  }
  const results = data?.results ?? []

  useEffect(() => {
    _data(getData)
  }, [])

  const formFields = results.length ? (
    results.map((i, ix) => <FormField key={ix} label={i.question} />)
  ) : (
    <Alert status="warning">
      <AlertIcon />
      There was a error loading the survey, please try again
    </Alert>
  )

  return (
    <Layout>
      <SEO title="Home" />
      <VStack spacing={5}>
        <p>Please answer the following questions, then submit.</p>
        <FormControl id="first-name" isRequired>
          {formFields}
        </FormControl>
        <Box>
          <Button type="submit" colorScheme="teal" size="lg" width="20rem">
            <Link to="/take-survey">Submit</Link>
          </Button>
        </Box>
      </VStack>
    </Layout>
  )
}

export default IndexPage
