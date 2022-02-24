import React from 'react'
import { FormattedMessage } from 'react-intl'

import A from '/app/components/A'
import Container from '/app/components/Container'
import Wrapper from './Wrapper'
import messages from './messages'

function Footer() {
	return (
		<Container>
			<Wrapper>
				<section>
					<FormattedMessage
						{...messages.licenseMessage}
						values={{
							title: 'Project'
						}}
						/>
				</section>
				<section className="ml-auto">
					<FormattedMessage
						{...messages.authorMessage}
						values={{
							author: <A href="https://github.com/naviisml">Navi</A>
						}}
						/>
				</section>
			</Wrapper>
		</Container>
	)
}

export default Footer
