import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/button"
import { VStack } from "@chakra-ui/layout"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Box, Input } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing={5}>
      <p>Please answer the following questions, then submit.</p>
      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <Box>
        <Button type="submit" colorScheme="teal" size="lg" width="20rem">
          <Link to="/take-survey">Submit</Link>
        </Button>
      </Box>
    </VStack>
  </Layout>
)

export default IndexPage
