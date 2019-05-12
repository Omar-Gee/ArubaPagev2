import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from "styled-components"
import Home from "./components/home/home"
import NewsSection from "./components/newsSection/newsSection"
import MainNavigation from "./components/navigation/mainNavigation"
import SubNavigation from "./components/subNavigation/subNavigation"
import About from "./components/about/about"
import Latest from  "./components/latest/latest"
import Radio from "./components/radio/radio"
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
    this.state.loading ?
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 5000) : console.log("loaded");

  }

  render () {
    const {newsData, loading} = this.state
    this.setLoading()
    return (
      <div>
        <Router>
          <MainNavigation />
          <SubNavigation newsData={newsData} />
          <Route exact path="/" component={() => <Home loading={loading} /> } />
          <Route path="/about" component={About} />
          <Route path="/latest" component={() => <Latest data={newsData} />} />
          <Route path="/radio" component={Radio} />
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
        <StyledBackTop />
        <Radio />
      </div>
    );
  }
}

const StyledBackTop = styled(BackTop)`
  margin: 32px 0 !important;
`
export default App;
