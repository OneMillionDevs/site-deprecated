/**
 * @name RegionTop
 * @description Default Top Branding region component.
 * @version 1.0.0
 */

/* --- Global --- */
import { SiteMetadata } from "query"
import { FormUpdates } from "core"
const Branding = props => {
  const site = props.data.site.siteMetadata

  return (
    <A.Flex alignCenter between {...props}>
      {/* Left */}
      <A.Flex alignCenter>
        <A.Link to="/">
          <A.Heading {...props.styledTitle}>{site.title}</A.Heading>
        </A.Link>

        {/* Menu */}
        <A.Flex {...props.styledMenu}>
          <A.Link to="/mission">
            <A.Span xs tag="green" mx={1}>
              Our Mission
            </A.Span>
          </A.Link>
          <Atom.Link to="/started">
            <A.Span tag="blue" xs mx={1}>
              Get Started
            </A.Span>
          </Atom.Link>
          <Atom.Link to="/contribute">
            <A.Span xs tag="white" mx={1}>
              Contribute
            </A.Span>
          </Atom.Link>
          <Atom.Link to="/team">
            <A.Span xxs tag="white" mx={1}>
              Team
            </A.Span>
          </Atom.Link>
          <Atom.Link to="/mentors">
            <A.Span xxs tag="white" mx={1}>
              Mentors
            </A.Span>
          </Atom.Link>
          <Atom.Link to="/news">
            <A.Span xxs tag="white" mx={1}>
              Media
            </A.Span>
          </Atom.Link>
          <Atom.Link to="/events">
            <A.Span xxs tag="white" mx={1}>
              Events
            </A.Span>
          </Atom.Link>
        </A.Flex>
      </A.Flex>

      {/* <A.Link to='/learn'>
      <Atom.Span xs tag='green' mr={3}>Learning Center</Atom.Span>
    </A.Link> */}

      {/* Right */}
      <Atom.Flex>
        <A.Link to="/platforms">
          <Atom.Span xs mx={2}>
            Platforms
          </Atom.Span>
        </A.Link>
        <A.Link to="/resources">
          <Atom.Span xs mx={2}>
            Resources
          </Atom.Span>
        </A.Link>
        <A.Modal content={<FormUpdates />}>
          <A.Span pointer tag="white" xxs>
            Subscribe
          </A.Span>
        </A.Modal>
        <A.Link to="/analytics">
          <Atom.Span xs tag="red" mx={3}>
            DEV Dashboard
          </Atom.Span>
        </A.Link>
      </Atom.Flex>
    </A.Flex>
  )
}

Branding.defaultProps = {
  styled: {},
  styledTitle: {
    fontSize: 2,
    fontWeight: 700,
    mb: 0,
  },
  styledMenu: {
    ml: 4,
  },
}

Branding.propTypes = {
  styled: PropTypes.object,
  styledTitle: PropTypes.object,
  styledMenu: PropTypes.object,
}

export default props => (
  <SiteMetadata>
    <Branding {...props} />
  </SiteMetadata>
)
