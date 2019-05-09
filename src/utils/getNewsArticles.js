import services from "../services/newsSources"
import axios from "axios"
import error  from "../images/error.jpg"
import serviceNameFormatter from "../utils/serviceNameFormatter"

export const getNewsArticles =  () => {
  const formattedNewsArticles = []
  Object.keys(services).forEach(service => {
      const newsItems =[]
      axios.get(services[service]).then(newsServiceResponse => {
        newsServiceResponse.data.forEach(({id, title, excerpt, _links}) => {
          axios.get(_links[`wp:featuredmedia`][0].href).then(imageResponse => {
            newsItems.push({
              id,
              title: title.rendered,
              excerpt: excerpt.rendered,
              imageUrl: imageResponse.data.guid.rendered
            })
        }).catch(e => {
          console.error(`Error getting ${service} image: ${e}`);
          newsItems.push({
            id,
            title: title.rendered,
            excerpt:excerpt.rendered,
            imageUrl: error
          })
        })
      })
    }).catch(e => {
      console.error(`Error getting ${service} data: ${e}`);
    })
    formattedNewsArticles.push({
      newsSource: serviceNameFormatter[service],
      newsItems:
        newsItems
    })
  })
  return formattedNewsArticles
}
