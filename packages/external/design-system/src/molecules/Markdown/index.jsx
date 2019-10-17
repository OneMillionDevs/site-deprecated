import React from "react"
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx';
import { Heading, Span, Paragraph , Panel } from '../../index'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, space } from 'styled-system'
const Styled = styled(Markdown)`
${flexbox}
${grid}
${position}
${border}
${background}
${typography}
${color}
${shadow}
${space}
${layout}
`

const ComponentOverrides = {
  p: {
      component: Paragraph,
      props: {
          as: 'p',
          className: 'p',
          serif: true
      },
  },
  h1: {
      component: Heading,
      props: {
          as: 'h1'
      },
  },
  h2: {
      component: Heading,
      props: {
          as: 'h2'
      },
  },
}

const MarkdownFormat = ({children, styled, ...props }) => <Styled
    {...styled}
    options={{ overrides: ComponentOverrides}}
    children={children}
    />

export default MarkdownFormat