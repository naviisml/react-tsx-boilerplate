/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import HomePage from '/app/containers/HomePage'
import TestPage from '/app/containers/TestPage'
import Header from '/app/components/Header'
import Footer from '/app/components/Footer'

import GlobalStyle from '/app/global-styles'

const AppWrapper = styled.div``

export default function App() {
	return (
		<AppWrapper>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
      			<Route path="test" element={<TestPage />} />
			</Routes>
			<Footer />

			<GlobalStyle />
		</AppWrapper>
	)
}
