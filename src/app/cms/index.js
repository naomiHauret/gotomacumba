export default {
  apiEndpoint: process.env.PRISMIC_API_ENDPOINT,
  accessToken: process.env.PRISMIC_TOKEN,

  linkResolver(doc) {
    if (doc.type === "page") return `/page/${doc.uid}`
    return "/"
  },
}
