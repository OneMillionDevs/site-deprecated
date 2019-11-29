const styles = {
  container: {
    flexDirection: ['column', 'column', 'row'],
    width: '100%',
    m: 0,
  },
  aside: {
    flex: 4,
  },
  main: {
    flex: 8,
    flexDirection: ['column', 'column', 'row'],
    m: 0,
    ml: 3,
  },
  coverImage: {
    opacity: 0.6,
  },
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },

  content: {
    p: 4,
    flex: 5,
  },
  action: {
    flex: 3,
  },
  badge: {
    borderRadius: 99999,
    boxShadow: 1,
    maxWidth: 70,
    width: '100%',
  },
  button: {
    width: '100%',
    mt: 3,
  },
};

export const CardLarge = ({
  title,
  subtitle,
  summary,
  image,
  label,
  action,
  ...props
}) => {
  return (
    <Atom.Flex sx={{...props.sx, ...styles.container}}>
      <Atom.Flex center column sx={styles.aside}>
        <Atom.Image sx={styles.img} src={image} />
      </Atom.Flex>

      <Atom.Flex card sx={styles.main}>
        <Atom.Box sx={styles.content}>
          <Atom.Heading xxl>{title}</Atom.Heading>
          <Atom.Paragraph>{subtitle}</Atom.Paragraph>
          <Atom.Paragraph>{summary}</Atom.Paragraph>
        </Atom.Box>
        <Atom.Flex center column sx={styles.action}>
          <Atom.Button m0 white>
            Go
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default CardLarge;
