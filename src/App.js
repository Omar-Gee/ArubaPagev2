import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./components/home/home"
import NewsSection from "./components/newsSection/newsSection"
import MainNavigation from "./components/navigation/mainNavigation"
import SubNavigation from "./components/subNavigation/subNavigation"
import About from "./components/about/about"

import { getNewsArticles } from "./utils/getNewsArticles"
import { BackTop } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      loading: true,
      newsData: []
    }
  }
  async componentDidMount() {
    const newsData = await getNewsArticles()
    this.setState({
      newsData,
    })
  }

  setLoading = () => {
    this.setState({
      loading: false,
    })
  }

  render () {
    const {newsData, loading} = this.state
    setTimeout(() => {
      this.setLoading()
    }, 5000);
    return (
      <div>
        <Router>
          <MainNavigation />
          <SubNavigation newsData={newsData} />
          <Route exact path="/" component={() => <Home loading={loading} /> } />
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
                        loading={loading}
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
        <BackTop />
      </div>
    );

  }

}

export default App;
