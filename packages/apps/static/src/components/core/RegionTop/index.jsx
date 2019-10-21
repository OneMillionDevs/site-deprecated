
/**
 * @name RegionTop
 * @description Default Top Branding region component.
 * @version 1.0.0
 */

/* --- Global --- */
import { SiteMetadata } from 'query'
import { FormUpdates } from 'core'
const Branding = props => { 
const site = props.data.site.siteMetadata

 return(
  <A.Flex alignCenter between {...props}>
    {/* Left */}
    <A.Flex alignCenter>
      <A.Link to='/'>
        <A.Heading {...props.styledTitle}>{site.title}</A.Heading>
      </A.Link>

      {/* Menu */}
      <A.Flex {...props.styledMenu}>
        <A.Link to='/mission'>
          <A.Span xs mx={1}>Mission</A.Span>
        </A.Link>
        <A.Link to='/contribute'>
          <A.Span xs mx={1}>Contribute</A.Span>
        </A.Link>
        <A.Modal content={<FormUpdates />} >
          <A.Span pointer tag='white' xxs mx={1}>Email Updates</A.Span>
        </A.Modal>

      </A.Flex>
    </A.Flex>

    {/* Right */}
    <Atom.Flex>
      <A.Link to='/started'>
        <Atom.Span xs tag='red' mr={3}>Get Started</Atom.Span>
      </A.Link>
      <A.Link to='/analytics'>
        <Atom.Span xs tag='blue'>Live Analytics</Atom.Span>
      </A.Link>
    </Atom.Flex>
  </A.Flex>
)}

Branding.defaultProps = {
  styled: {},
  styledTitle: {
    fontSize: 2,
    fontWeight: 700,
    mb: 0
  },
  styledMenu: {
    ml: 4
  },
}

Branding.propTypes = {
  styled: PropTypes.object,
  styledTitle: PropTypes.object,
  styledMenu: PropTypes.object
}



export default (props) => <SiteMetadata><Branding {...props} /></SiteMetadata>