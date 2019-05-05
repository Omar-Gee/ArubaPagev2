import React from 'react';
import { Link } from "react-router-dom"
import newsData from "./subNavigation.data"

const subNavigation = () => {
  return (
    <div>
      {newsData.map(item => <Link key={item} to={item}>{item}</Link>)}
    </div>
  );
};

export default subNavigation;