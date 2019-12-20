/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Component --- */
export default props => {
  return (
    <Atom.Flex alignCenter between sx={{variant: 'regions.footer'}}>
      {/* Left */}
      <Atom.Flex sx={{color: 'white'}}>
        <Atom.Box sx={{maxWidth: 120, mr: 5}}>
          <Link to="/">
            <Atom.Heading lg heavy mb={0}>
              {GLOBAL.siteName}
            </Atom.Heading>
            <Atom.Paragraph xs sx={{fontSize: 0}}>
              Quisque sollicitudin id turpis sed elementum. Integer congue nunc
              id diam finibus.
            </Atom.Paragraph>
          </Link>
        </Atom.Box>
        <Atom.Flex>
          <MenuPrimary />
          <MenuSecondary />
          <MenuTertiary />
        </Atom.Flex>
      </Atom.Flex>

      {/* Right */}

      <Atom.Flex alignCenter>
        <a href="https://github.com/rapid-eth">
          <Atom.Span sx={{fontSize: 1}}>Built by Rapid</Atom.Span>
        </a>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const styles = {
  footer: {
    menuItem: {
      fontSize: 0,
      mb: 2,
    },
  },
};

const MenuPrimary = props => {
  return (
    <Atom.Flex column m2>
      <Atom.Heading md normal m0>
        Mission
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/about">Mission</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/about">Partnerships</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/about">Team</Molecule.Link>
      </Atom.Span>
    </Atom.Flex>
  );
};

const MenuSecondary = props => {
  return (
    <Atom.Flex column m2 sx={{ml: 5}}>
      <Atom.Heading md normal m0>
        About
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/about">About</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/team">Team</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/news">News</Molecule.Link>
      </Atom.Span>
    </Atom.Flex>
  );
};

const MenuTertiary = props => {
  return (
    <Atom.Flex column m2 sx={{ml: 5}}>
      <Atom.Heading md normal m0>
        Platforms
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/education">Education</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/applications">Application</Molecule.Link>
      </Atom.Span>
      <Atom.Span xs sx={styles.footer.menuItem}>
        <Molecule.Link to="/resources">Resources</Molecule.Link>
      </Atom.Span>
    </Atom.Flex>
  );
};
