import React from 'react';
import STRINGS from '../configs/strings.js';
import {getCurrentLocale} from '../lib/helpers';
import LocaleConfigs from '../configs/locales.js';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

export default (props) => {
	const currentLocale = 
		getCurrentLocale(window.location, DEFAULT_LOCALE, AVAILABLE_LOCALES);
	return (<h1>{STRINGS.HOME.TITLE[currentLocale]}</h1>);
}