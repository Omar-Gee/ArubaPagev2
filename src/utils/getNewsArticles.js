import services from "../services/newsSources"
import axios from "axios"
import error  from "../images/error.jpg"
import serviceNameFormatter from "../utils/serviceNameFormatter"

export const getNewsArticles =  () => {
  const formattedNewsArticles = []

  Object.keys(services).map(service => {
      const newsItems =[]
      let image = ''
      axios.get(services[service]).then(response => {
        response.data.map(({id, title, excerpt, _links}) => {
          axios.get(_links[`wp:featuredmedia`][0].href).then(response => {
            image = response.data.guid.rendered
            newsItems.push({
              id,
              title: title.rendered,
              excerpt:excerpt.rendered,
              imageUrl: image
            })
        }).catch(e => {
          console.log(`Error getting ${service} image: ${e}`);
          image = error
          newsItems.push({
            id,
            title: title.rendered,
            excerpt:excerpt.rendered,
            imageUrl: image
          })
        })
      })
    }).catch(e => {
      console.log(`Error getting ${service} data: ${e}`);
    })
    formattedNewsArticles.push({
      newsSource: serviceNameFormatter[service],
      newsItems:
        newsItems
    })
  })
  return formattedNewsArticles
}
