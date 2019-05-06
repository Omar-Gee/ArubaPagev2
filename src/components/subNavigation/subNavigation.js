import React from 'react';
import { Link } from "react-router-dom"
import services from "../../services/newsSources"
import serviceNameFormatter from "../../utils/serviceNameFormatter"

const subNavigation = (props) => {
  return (
    <div>
      {
        Object.keys(services).map(service => {
          // console.log(serviceNameFormatter[service]);
          const { formattedName, redirect } = serviceNameFormatter[service]
          return (
            <Link key={redirect} to={redirect}>{formattedName}</Link>
          )
        })
      }
    </div>
  );
};

export default subNavigation;