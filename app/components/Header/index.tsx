import React from 'react'
import { FormattedMessage } from 'react-intl'

import Container from '/app/components/Container'

function Footer() {
	return (
		<nav className="nav-top py-1">
			<div className="container d-flex flex-row">
				<ul className="nav-list">
					<li className="nav-item">
						<a className="nav-link" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Example
						</a>
					</li>
				</ul>

				<ul className="nav-list ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Sign Up
						</a>
					</li>
					<li className="nav-button">
						<button className="btn btn-primary">Login</button>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Footer
