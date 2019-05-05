import React from "react"
import { storiesOf } from "@storybook/react"
import NewsSection from "./newsSection"

storiesOf("News section", NewsSection)
  .add("Default", () => <NewsSection />)