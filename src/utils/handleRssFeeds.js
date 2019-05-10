import axios from "axios"
import error  from "../images/error.jpg"
import serviceNameFormatter from "./serviceNameFormatter";


export default async function(service) {
  const newsItems = []
  const serviceResponse = await axios.get(service)
  if (serviceResponse.data.feed.title === "NoticiaCla") {
    serviceResponse.data.items.map(item => {
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

  } else if (serviceResponse.data.feed.title === "Awe24 - RSS Feed") {
    // const  newsItems = {
  //   id: serviceResponse.data.items
  //   title:
  //   excerpt:
  //   imageUrl:
  // }
  }
  return newsItems
}