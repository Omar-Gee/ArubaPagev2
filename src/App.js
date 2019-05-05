import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from "./components/home/home"
import NewsSection from "./components/newsSection/newsSection"
import MainNavigation from "./components/navigation/mainNavigation"
import SubNavigation from "./components/subNavigation/subNavigation"
import About from "./components/about/about"

import { getNewsArticles } from "./utils/getNewsArticles"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    }
  }
  async componentDidMount() {
    const news = await getNewsArticles()
    this.setState({
      news
    })
  }
  // const [newsArticles, setNewsArticles] = React.useState([])



  render() {
    console.log(this.state.news);
    return (
      <div>
        <Router>
          <MainNavigation />
          <SubNavigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/bondia" component={() => <NewsSection title="Bon Dia" />} />

        </Router>

      </div>

    );
  }

}

export default App;
