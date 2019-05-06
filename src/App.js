import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./components/home/home"
import NewsSection from "./components/newsSection/newsSection"
import MainNavigation from "./components/navigation/mainNavigation"
import SubNavigation from "./components/subNavigation/subNavigation"
import About from "./components/about/about"

import { getNewsArticles } from "./utils/getNewsArticles"

const App =  () => {
  const newsData = getNewsArticles()
  return (
    <div>
      <Router>
        <MainNavigation />
        <SubNavigation  />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {
          newsData.map(newsSource => {
            return (
              <Route
                key={newsSource.newsSource.redirect}
                path={'/' + newsSource.newsSource.redirect}
                component={
                  () => (
                    <NewsSection
                      title={newsSource.newsSource.formattedName}
                      newsItems={newsSource.newsItems}
                    />
                  )
                }
              />
            )
          })
        }
      </Router>
    </div>
  );
}

export default App;
