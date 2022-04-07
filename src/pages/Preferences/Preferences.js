import React from 'react';
import { multilanguage } from "redux-multilanguage";

import './Preferences.scss';

const Preferences = (props) => {

  // let { } = props;

  return (
    <div className='PreferencesPage'>
      Preferences
    </div>
  );
}

export default multilanguage(Preferences);