import styled from 'styled-components'
import Text from '../Text'

const Span = styled(Text)
`
// Add Styles
`

Span.defaultProps = {
  as: 'p',
  fontSize: '.9em',
  display: 'block',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: '1.5em'
}

export default Span