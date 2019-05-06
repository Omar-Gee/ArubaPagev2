import services from "../services/newsSources"
import axios from "axios"
import error  from "../images/error.jpg"

export const getNewsArticles = async () => {
  const formattedNewsArticles = []

  Object.keys(services).map(async (service) => {
    try {
      const newsItems =[]
      const response= await axios.get(services[service])
      response.data.map(async ({id, title, excerpt, _links}) => {
        let image = ''
        try {
          const response = await axios.get(_links[`wp:featuredmedia`][0].href)
          image = response.data.guid.rendered
        } catch (e) {
          image = error
        }
        newsItems.push({
          id,
          title: title.rendered,
          excerpt:excerpt.rendered,
          imageUrl: image
        })
      })

      formattedNewsArticles.push({
        newsSource: service,
        newsItems:
          newsItems
      })

    } catch (e) {
      console.error(e);
    }

  })

  return formattedNewsArticles

}