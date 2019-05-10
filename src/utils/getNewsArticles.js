import services from "../services/newsSources"
import axios from "axios"
import error  from "../images/error.jpg"
import serviceNameFormatter from "../utils/serviceNameFormatter"
// import handleRssFeeds  from "./handleRssFeeds"
export const getNewsArticles =  () => {
  // let headers = {
  //   'Access-Control-Allow-Origin': '*'
  // }
  const formattedNewsArticles = []
  Object.keys(services).forEach(async(service) => {
      const newsItems =[]
      if (service === 'noticiaCla' || service === 'awe24') {
        axios.get(services[service]).then(newsServiceResponse => {
          if (newsServiceResponse.data.feed) {
            if (newsServiceResponse.data.feed.title === "NoticiaCla") {
              newsServiceResponse.data.items.forEach(item => {

                const id = item.guid.slice(item.guid.lastIndexOf("/") + 1)
                const title = item.title
                const excerpt = item.description
                const imageUrl = error
                newsItems.push({
                  id,
                  title,
                  excerpt,
                  imageUrl
                })
              })
            }
            else  {
              newsServiceResponse.data.items.forEach(item => {
                const id = item.guid.slice(item.guid.lastIndexOf("/") + 1)
                const title = item.title
                const excerpt = item.description
                const imageUrl = item.enclosure.link || error
                newsItems.push({
                  id,
                  title,
                  excerpt,
                  imageUrl
                })
              });
            }
          }
        })
      } else {
        axios.get(services[service]).then(newsServiceResponse => {
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

  }
  formattedNewsArticles.push({
    newsSource: serviceNameFormatter[service],
    newsItems:
      newsItems
  })
  })
  return formattedNewsArticles
}
