import { Site } from "templates"
import { FormJoinCoalition } from "core/actions"
import { FormBecomeGuide, FormBecomeGuideFull } from "forms"

export default props => (
  <Site>
    <A.Box>
      <A.Box fullWidth color="white" gradient="blueOcean" py={6} textCenter>
        <A.BackgroundImage
          opacity={0.3}
          ratio={0.3}
          src="https://images.ui8.net/uploads/preview_6_1569070974155.png"
        />
        <A.Heading giga heavy>
          The Mentor Program
        </A.Heading>
        <A.Heading lg>
          Where leaders find followers, and followers find leaders
        </A.Heading>
      </A.Box>
    </A.Box>

    <Atom.Container maxWidth={1080}>
      <Atom.Flex alignCenter card between mt={-50} p={4} mt={-50}>
        <Atom.Box>
          <Atom.Heading thin>Become a Mentor</Atom.Heading>
          <Atom.Paragraph sm heavy mb={0}>
            Teach Others. Start a meetup. Start a Open Source project.
          </Atom.Paragraph>
        </Atom.Box>
        <A.Link to="/mentor">
          <Atom.Button variant="green">Mentor Program</Atom.Button>
        </A.Link>
      </Atom.Flex>
    </Atom.Container>

    <A.Container py={5}>
      <A.Heading xxl heavy center>
        Current Mentors
      </A.Heading>
      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          General
        </A.Heading>
        <A.Heading as="h4">
          One Million Developers is an Open Collaboration but someone must tend
          the fields.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 my={3}>
        <Feature
          image="https://pbs.twimg.com/profile_images/1180616709629083648/sNLGeMk8_400x400.jpg"
          title="Kevin Owocki"
          tagline="Gitcoin Exraordinaire"
          content="NOT going to invest in your ICO. NOT looking for work ( Updated July 2019 ). I do NOT work with 3rd party recruiters offshore development shops, or agencies. Kindly fuck off."
        />
        <Feature
          image="https://avatars2.githubusercontent.com/u/84076?s=460&v=4"
          title="Jim Jagielski"
          tagline="Vision"
          content="He is best known as cofounder, member, and director of The Apache Software Foundation (ASF) and as a core developer on several ASF projects, including the Apache HTTP Server, Apache Portable Runtime, and Apache Tomcat."
        />
        <Feature
          image="https://media.licdn.com/dms/image/C4E03AQEdE6EMs0gaSQ/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=qfByokFF2uECSKcVVUkuBGJ49oDlCYyl1UUp-DZLOfw"
          title="Bryan Peters"
          tagline="Helping Connect Everything"
          content="My current mission is to find ways to leverage technology to facilitate more purpose driven, decentralized, people oriented ways of working."
        />
      </A.Flex>
      <A.Container align="center">
        <A.Link to="/contribute">
          <A.Button>Start Contributing</A.Button>
        </A.Link>
      </A.Container>

      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Open Finance
        </A.Heading>
        <A.Heading as="h4">
          One Million Developers is an Open Collaboration but someone must tend
          the fields.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 my={3}>
        <Feature
          image="https://pbs.twimg.com/profile_images/1180616709629083648/sNLGeMk8_400x400.jpg"
          title="Kevin Owocki"
          tagline="Gitcoin Exraordinaire"
          content="NOT going to invest in your ICO. NOT looking for work ( Updated July 2019 ). I do NOT work with 3rd party recruiters offshore development shops, or agencies. Kindly fuck off."
        />
        <Feature
          image="https://avatars2.githubusercontent.com/u/84076?s=460&v=4"
          title="Jim Jagielski"
          tagline="Vision"
          content="He is best known as cofounder, member, and director of The Apache Software Foundation (ASF) and as a core developer on several ASF projects, including the Apache HTTP Server, Apache Portable Runtime, and Apache Tomcat."
        />
        <Feature
          image="https://media.licdn.com/dms/image/C4E03AQEdE6EMs0gaSQ/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=qfByokFF2uECSKcVVUkuBGJ49oDlCYyl1UUp-DZLOfw"
          title="Bryan Peters"
          tagline="Helping Connect Everything"
          content="My current mission is to find ways to leverage technology to facilitate more purpose driven, decentralized, people oriented ways of working."
        />
      </A.Flex>
      <A.Container align="center">
        <A.Link to="/contribute">
          <A.Button>Start Contributing</A.Button>
        </A.Link>
      </A.Container>

      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Ethereum Scaling & Governance
        </A.Heading>
        <A.Heading as="h4">
          Making sure the lights stay on and the dogs are walked.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 mt={3}>
        <Feature
          image="https://ipfs.infura.io/ipfs/QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE"
          title="Kames Geraghty"
          tagline="Fullstack Javascript Developer"
          content="Buidling the 1MD application. Plus crafting developer education tools."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmVCd2aApKytAPNBu4JatvuWiWGX7eAHazpEHBM9DsAxmz"
          title="Billy Luedkete"
          tagline="Project Manager"
          content="Managing the project."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmULnbXfmTEhiaQTi8S7k3oRvk6pR1BVLqYytqN37bUvEJ"
          title="Joe Bernitt"
          tagline="Infrastructure and Smart Contract Engineer"
          content="Managing project infrastructure."
        />
      </A.Flex>
      <A.Container align="center" mt={3}>
        <A.Link to="/contribute">
          <A.Button>Become a Steward</A.Button>
        </A.Link>
      </A.Container>

      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Education
        </A.Heading>
        <A.Heading as="h4">
          Making sure the lights stay on and the dogs are walked.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 mt={3}>
        <Feature
          image="https://ipfs.infura.io/ipfs/QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE"
          title="Kames Geraghty"
          tagline="Fullstack Javascript Developer"
          content="Buidling the 1MD application. Plus crafting developer education tools."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmVCd2aApKytAPNBu4JatvuWiWGX7eAHazpEHBM9DsAxmz"
          title="Billy Luedkete"
          tagline="Project Manager"
          content="Managing the project."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmULnbXfmTEhiaQTi8S7k3oRvk6pR1BVLqYytqN37bUvEJ"
          title="Joe Bernitt"
          tagline="Infrastructure and Smart Contract Engineer"
          content="Managing project infrastructure."
        />
      </A.Flex>
      <A.Container align="center" mt={3}>
        <A.Link to="/contribute">
          <A.Button>Become a Steward</A.Button>
        </A.Link>
      </A.Container>

      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Developer Tools
        </A.Heading>
        <A.Heading as="h4">
          Making sure the lights stay on and the dogs are walked.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 mt={3}>
        <Feature
          image="https://ipfs.infura.io/ipfs/QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE"
          title="Kames Geraghty"
          tagline="Fullstack Javascript Developer"
          content="Buidling the 1MD application. Plus crafting developer education tools."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmVCd2aApKytAPNBu4JatvuWiWGX7eAHazpEHBM9DsAxmz"
          title="Billy Luedkete"
          tagline="Project Manager"
          content="Managing the project."
        />
        <Feature
          image="https://ipfs.infura.io/ipfs/QmULnbXfmTEhiaQTi8S7k3oRvk6pR1BVLqYytqN37bUvEJ"
          title="Joe Bernitt"
          tagline="Infrastructure and Smart Contract Engineer"
          content="Managing project infrastructure."
        />
      </A.Flex>
      <A.Container align="center" mt={3}>
        <A.Link to="/contribute">
          <A.Button>Become a Steward</A.Button>
        </A.Link>
      </A.Container>
    </A.Container>
  </Site>
)

const CardLarge = props => {
  return (
    <Atom.Flex card p={0} minHeight={300} my={4}>
      <Atom.Flex flex={2}>
        <A.Flex
          center
          column
          gradient="blueDark"
          flex={1}
          minHeight={150}
          py={3}
        >
          <A.BackgroundImage src={props.imageCover} opacity={0.2} />
          <Atom.Flex
            mb={3}
            circle
            column
            center
            card
            boxShadow={1}
            overflow="hidden"
            p={4}
          >
            <Atom.Span>
              <A.Image maxWidth={80} src={props.image} />
            </Atom.Span>
          </Atom.Flex>
        </A.Flex>
      </Atom.Flex>
      <Atom.Flex alignCenter flex={5}>
        <Atom.Box p={3}>
          <Atom.Heading xl heavy>
            {props.title}
          </Atom.Heading>
          <Atom.Heading md thin>
            {props.tagline}
          </Atom.Heading>
          <Atom.Paragraph sm>{props.summary}</Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  )
}

const GuideRegistration = props => {
  return (
    <Atom.Flex card center column>
      <Atom.Heading lg heavy>
        Ethereum Community Mentor
      </Atom.Heading>
      <Atom.Heading sm normal>
        Help Etheruem Reach it's Full Potential
      </Atom.Heading>
      <Atom.HorizontalRule dash center />
      <Atom.Flex flex={1} p={3} width="100%">
        <Atom.Flex flex={1}>
          <FormBecomeGuide />
        </Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box>
            <Atom.Image
              card
              p={1}
              src="https://imgur.com/9hqmKMZ.png"
              maxWidth={180}
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}

const Feature = props => {
  return (
    <A.Flex card center column textCenter p={2}>
      <Atom.Flex
        mb={3}
        mt={-40}
        circle
        card
        overflow="hidden"
        height={80}
        width={80}
      >
        <A.BackgroundImage
          src={
            props.image ||
            "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          }
        />
      </Atom.Flex>
      <A.Heading md heavy>
        {props.title}
      </A.Heading>
      <A.Heading sm thin>
        {props.tagline}
      </A.Heading>
      {/* <A.Heading md thin >{props.tagline}</A.Heading> */}
      {/* <A.HorizontalRule dash center my={3} /> */}
      <A.Paragraph sm px={3}>
        {props.content}
      </A.Paragraph>
    </A.Flex>
  )
}
