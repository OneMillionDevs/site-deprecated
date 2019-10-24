
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
          <A.Span xs tag='green' mx={1}>Our Mission</A.Span>
        </A.Link>
        <Atom.Link to='/beginner'>
          <A.Span tag='blue' xs mx={1}>Beginner</A.Span>
        </Atom.Link>
        <Atom.Link to='/contribute'>
          <A.Span xs tag='red' mx={1}>Advanced</A.Span>
        </Atom.Link>
        

      </A.Flex>
    </A.Flex>


    {/* <A.Link to='/learn'>
      <Atom.Span xs tag='green' mr={3}>Learning Center</Atom.Span>
    </A.Link> */}

    {/* Right */}
    <Atom.Flex>
      <A.Modal content={<FormUpdates />} >
        <A.Span pointer tag='white' xxs>Email Updates</A.Span>
      </A.Modal>
      <A.Link to='/started'>
        <Atom.Span xs tag='red' mx={3}>Get Started</Atom.Span>
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