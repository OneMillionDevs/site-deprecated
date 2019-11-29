const DeveloperOpportunityItem = props => {
  return (
    <Atom.Flex center column sx={styles.opportunityItem}>
      <Atom.Span sx={styles.imageContainer}>
        <Atom.Image src={props.image} />
      </Atom.Span>
      <Atom.Heading xl md>
        {props.title}
      </Atom.Heading>
      <Atom.Span>{props.subtitle}</Atom.Span>
      <Molecule.Link to={props.to}>
        <Atom.Span tag>Start</Atom.Span>
      </Molecule.Link>
    </Atom.Flex>
  );
};

const styles = {
  opportunityList: {
    flexDirection: ['column', 'column', 'row'],
    my: 4,
  },
  opportunityItem: {
    m: 4,
    my: [3, 3, 1],
  },
  imageContainer: {
    bg: 'white',
    borderRadius: 9999,
    boxShadow: 0,
    maxWidth: 140,
    mb: 3,
    p: 1,
  },
};

export default DeveloperOpportunityItem;
