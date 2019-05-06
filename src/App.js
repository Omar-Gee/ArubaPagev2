import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./components/home/home"
import NewsSection from "./components/newsSection/newsSection"
import MainNavigation from "./components/navigation/mainNavigation"
import SubNavigation from "./components/subNavigation/subNavigation"
import About from "./components/about/about"

import { getNewsArticles } from "./utils/getNewsArticles"
import serviceNameFormatter from "./utils/serviceNameFormatter"
import services from "./services/newsSources"

const App =  () => {
  const newsData = getNewsArticles()

  console.log(typeof(newsData));
  console.log(newsData);
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  return (
    <div>
      <Router>
        <MainNavigation />
        <SubNavigation  />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        {
          Object.keys(services).map(service => {
            const {formattedName, redirect} = serviceNameFormatter[service]
            {/* console.log(newsData); */}
            return (
              <Route
                key={redirect}
                path={'/'+redirect}
                component={() => <NewsSection title={formattedName}  />}
              />
            )
          })
        }
      </Router>
    </div>
  );
}

export default App;
