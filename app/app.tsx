import React from 'react'
import ReactDOM from 'react-dom'

import { IntlProvider } from 'react-intl'

import App from './containers/App/App'

import './utils'

const MOUNT_NODE = document.getElementById('app')

const render = messages => {
	ReactDOM.render(
		<IntlProvider locale="en">
			<App />
		</IntlProvider>,
		MOUNT_NODE,
	);
}

render({})