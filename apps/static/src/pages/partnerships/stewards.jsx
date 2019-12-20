/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
      bg: 'blue',
      color: 'white',
      // minHeight: '50vh',
      py: 5,
    },
    left: {
      flex: 5,
      p: 4,
      py: 5,
    },
    right: {
      boxShadow: 'insetLeftHeavy',
      gradient: 'blue',
      borderRadius: '0 0 0 40px',
      py: 50,
      flex: 3,
      p: 4,
      zIndex: 1000,
    },
  },
};

const Showcase = props => {
  return (
    <Atom.Flex flex={1} sx={styles.showcase.container}>
      <Atom.BackgroundImage
        opacity={0.86}
        ratio={0.35}
        sx={{
          zIndex: 0,
          opacity: 0.4,
          overflow: 'hidden',
        }}
        src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      />
      <Atom.Flex center column sx={{flex: 1}}>
        <Atom.Heading giga heavy sx={{mt: 0}}>
          <Atom.Span heavy>Stewards</Atom.Span>{' '}
        </Atom.Heading>
      </Atom.Flex>
    </Atom.Flex>
  );
};
