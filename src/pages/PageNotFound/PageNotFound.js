import React, {Fragment} from 'react'
import { multilanguage } from "redux-multilanguage";

const PageNotFound = ({ strings }) => {
  console.log('fdsfdfsd', strings);  
  return (
      <div>{strings["PageNotFound"]}</div>
  )
}

export default multilanguage(PageNotFound);