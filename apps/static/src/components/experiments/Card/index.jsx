// import styles from './styles';
import {Modal} from '@horizin/design-system-organisms';

const styles = {
  cover: {
    bg: 'blue',
    color: 'white',
    pt: 5,
    px: 3,
  },
  coverImage: {
    opacity: 0.6,
  },
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },
  content: {
    alignSelf: 'flex-end',
    mt: 'auto',
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

export const QuestCard = ({
  title,
  subtitle,
  summary,
  image,
  label,
  action,
  to,
  ...props
}) => {
  return (
    <Atom.Box sx={props.sx}>
      <Atom.Flex sx={styles.cover}>
        <Atom.BackgroundImage src="" sx={styles.coverImage} />
        <Atom.Absolute sx={{top: 0, right: 0, m: -3}}>
          <Atom.Image sx={styles.badge} src={image} />
        </Atom.Absolute>
        <Atom.Box sx={styles.content}>
          <Atom.Heading xxl>{title}</Atom.Heading>
          <Atom.Paragraph>{subtitle}</Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex column card sx={props.main}>
        <Atom.Paragraph sx={{fontSize: [1, 1]}}>{summary}</Atom.Paragraph>
        <Atom.Box sx={styles.buttonContainer}>
          <Molecule.Link to={`/${to}`}>
            <Atom.Button sx={styles.button}>{label}</Atom.Button>
          </Molecule.Link>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default QuestCard;
