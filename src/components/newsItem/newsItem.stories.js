import React from "react"
import { storiesOf } from "@storybook/react"
import NewsItem from "./newsItem"

storiesOf("NewsItem", NewsItem)
  .add("Default", () => <NewsItem />)