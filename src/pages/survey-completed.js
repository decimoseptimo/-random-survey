import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/button"
import { VStack } from "@chakra-ui/layout"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Heading, Input } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing={5}>
      <p>Thanks for taking the time to complete the survey</p>
      <Heading as="h1" size="4xl" isTruncated>
        Have a nice day!
      </Heading>
    </VStack>
  </Layout>
)

export default IndexPage
