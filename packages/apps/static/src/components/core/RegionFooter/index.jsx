
/**
 * @name RegionTop
 * @description Default Top Branding region component.
 * @version 1.0.0
 */

/* --- Global --- */
import { SiteMetadata } from 'query'

const Branding = props => { 
const site = props.data.site.siteMetadata

 return(
  <A.Flex alignCenter between {...props.styled} {...props}  >
    {/* Left */}
    <A.Flex alignCenter>
      <A.Flex column flex={1}>
        <A.Link to='/'>
          <A.Heading {...props.styledTitle}>{site.title}</A.Heading>
        </A.Link>
        <A.Paragraph xxs>
          We hope to expand the Ethereum developer family - and to bring that family closer together.
        </A.Paragraph>
      </A.Flex>

      {/* Menu */}
      <A.Flex flex={5} pl={6}>

        <A.Box >
          <A.Heading sm heavy>Infomration</A.Heading>
          <A.HorizontalRule dash left />
          <A.Flex {...props.styledMenu}>
            <A.Link to='/contribute'>
              <A.Span xs mx={1}>Contribute</A.Span>
            </A.Link>
            <A.Link to='/articles'>
              <A.Span xs>Articles</A.Span>
            </A.Link>
            <A.Link to='/resources'>
              <A.Span xs>Resources</A.Span>
            </A.Link>
            <A.Link to='/tools'>
              <A.Span xs>Tools</A.Span>
            </A.Link>
          </A.Flex>
        </A.Box>
        
        <A.Box ml={5} >
          <A.Heading sm heavy>News</A.Heading>
          <A.HorizontalRule dash left />
          <A.Flex {...props.styledMenu}>
            <A.Link to='/news'>
              <A.Span xs>News</A.Span>
            </A.Link>
            <A.Link to='/coverage'>
              <A.Span xs>Coverage</A.Span>
            </A.Link>
            <A.Link to='/updates'>
              <A.Span xs>Updates</A.Span>
            </A.Link>
          </A.Flex>
        </A.Box>

        <A.Box ml={5} >
          <A.Heading sm heavy>Overview</A.Heading>
          <A.HorizontalRule dash left />
          <A.Flex {...props.styledMenu}>
            <A.Link to='/about'>
              <A.Span xs>About</A.Span>
            </A.Link>
            <A.Link to='/stewards'>
              <A.Span xs>Stewards</A.Span>
            </A.Link>
            <A.Link to='/coalition'>
              <A.Span xs>Coalition</A.Span>
            </A.Link>
          </A.Flex>
        </A.Box>

      </A.Flex>

      <Atom.Flex>
        <A.Link to='/analytics'>
          <Atom.Span xs tag='blue'>Live Analytics</Atom.Span>
        </A.Link>
      </Atom.Flex>
      </A.Flex>

    {/* Right */}
  </A.Flex>
)}

Branding.defaultProps = {
  styled: {
    px: 5
  },
  styledTitle: {
    fontSize: 4,
    fontWeight: 700,
    mb: 0
  },
  styledMenu: {
    column: true,
  },
}

Branding.propTypes = {
  styled: PropTypes.object,
  styledTitle: PropTypes.object,
  styledMenu: PropTypes.object
}



export default (props) => <SiteMetadata><Branding {...props} /></SiteMetadata>