import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";
import { multilanguage, loadLanguages } from "redux-multilanguage";
function App(props) {

  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: { //from merchant supported languages
          en: require("./translations/english.json"),
        }
      })
    );
  })

  return (
    <div className="App">
      <Suspense fallback={<h1></h1>}>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              return <Route
                key={index}
                exact={route.exact}
                path={route.path}
                element={route.component}
              />
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default connect()(multilanguage(App));
