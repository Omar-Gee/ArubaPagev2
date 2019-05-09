import services from "../services/newsSources"
import axios from "axios"
import error  from "../images/error.jpg"
import serviceNameFormatter from "../utils/serviceNameFormatter"

export const getNewsArticles =  () => {
  let headers = {
    'Access-Control-Allow-Origin': '*'
  }
  const formattedNewsArticles = []
  Object.keys(services).forEach(service => {
    console.log(service);
      const newsItems =[]
      axios.get(services[service], headers).then(newsServiceResponse => {
        newsServiceResponse.data.forEach(({id, title, excerpt, _links}) => {
          if (!_links[`wp:featuredmedia`]){
            newsItems.push({
              id,
              title: title.rendered,
              excerpt: excerpt.rendered,
              imageUrl: error
            })
          } else {
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
          }

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
