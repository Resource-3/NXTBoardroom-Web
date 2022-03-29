import React from 'react';
import { multilanguage } from "redux-multilanguage";

import './Preferences.scss';

const Preferences = (props) => {
	
  let { strings } = props;

	return (
		<div className='PreferencesPage'>
      Preferences
    </div>
	);
}

export default multilanguage(Preferences);