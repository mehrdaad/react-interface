import React, { Component } from 'react'
import Show from 'react-show'
import styled from 'styled-components'
import {
	space,
	color,
	border,
	borderRadius,
	borderColor,
	fontSize,
	textAlign,
} from 'styled-system'

const Wrapper = styled.div`
	position: relative;
`

const Label = styled.div`
	cursor: pointer;

	${space}
	${color}
	${border}
	${borderRadius}
	${borderColor}
	${fontSize}
	${textAlign}
`

class Accordion extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selectedIdx: props.selectedIdx || 0,
		}
	}

	render () {
		return (
			<Wrapper>
				{this.props.children.map((section, idx) => {
					return (
						<div key={idx}>
							<Label
								{...this.props}
								onClick={() => this.setState({ selectedIdx: idx })}
							>
								{section.props.label}
							</Label>

							<Show
								show={idx === this.state.selectedIdx}
								duration={200}
							>
								{section}
							</Show>
						</div>
					)
				})}
			</Wrapper>
		)
	}
}

Accordion.defaultProps = {
	bg: 'accordionLabelBackground',
	color: 'accordionLabelColor',
	m: '5px 0',
	p: 2,
}

export default Accordion
