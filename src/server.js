import { createServer } from "miragejs"

/**
 * Raises a fake server that intercepts fetch requests to test our API endpoints
 */
// watch out odd error, see: https://github.com/miragejs/miragejs/issues/651
export const Server = () => {
  createServer({
    routes() {
      this.namespace = "api"

      // handles GET requests to /api/users
      this.get("/users", () => ({
        users: [
          { id: "1", name: "Luke" },
          { id: "2", name: "Leia" },
          { id: "3", name: "Anakin" },
        ],
      }))
      // Responding to a POST request to /api/surveys
      this.post("/surveys", (schema, request) => {
        let parsedRequest = JSON.parse(request.requestBody)

        return { surveyResults: parsedRequest }
      })

      // resets the namespace to the root
      this.namespace = "" // or this.namespace = "/"
      this.passthrough() // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
      this.passthrough("https://opentdb.com/**")
    },
  })
}
