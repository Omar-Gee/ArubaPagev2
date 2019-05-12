import React from 'react';
import NewsSection from "../newsSection/newsSection"

const Latest = ({ data }) => {
  return (
    <>
      {
        data.map(({newsSource, newsItems}, i) => {
          return (
            <NewsSection
              id={newsSource.redirect}
              key={i}
              title={newsSource.formattedName}
              newsItems={newsItems}
            />
          )
        })
      }
    </>
  );
};

export default Latest;