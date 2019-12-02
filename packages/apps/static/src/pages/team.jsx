import { Site } from "templates"
import { FormJoinCoalition } from "core/actions"

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
          The One Million Developers Team
        </A.Heading>
        <A.Heading lg>
          See who's ushering in a new wave of Ethereum developers
        </A.Heading>
      </A.Box>
    </A.Box>

    <A.Container py={5}>
      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Project Contributors
        </A.Heading>
        <A.Heading as="h4">
          One Million Developers is an Open Collaboration but someone must tend
          the fields.
        </A.Heading>
        <Atom.HorizontalRule dash center />
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
        <Atom.HorizontalRule mt={5} />
      </A.Container>

      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Project Stewards
        </A.Heading>
        <A.Heading as="h4">
          Making sure the lights stay on and the dogs are walked.
        </A.Heading>
        <Atom.HorizontalRule dash center />
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
        {/* <A.Link to="/"> */}
        <A.Button>Become a Steward</A.Button>
        {/* </A.Link> */}
      </A.Container>
      <A.HorizontalRule mt={5} />
    </A.Container>

    <Atom.Box>
      <Atom.Container maxWidth={1080}>
        <Atom.Heading xxl heavy center mt={2}>
          Active Coalition Members
        </Atom.Heading>
        <A.HorizontalRule dash center />
        <CardLarge
          title="Gitcoin"
          createdBy="Kevi Owocki"
          imageCreatedBy="https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png"
          tagline="Developer Bounties &amp; Network"
          summary="Leverage our global, on-demand workforce. Find expert freelance developers to design, test, code, and build your project teams today. Save time via direct Github integration. Crowdfund for your open source startup or project to increase your budget and bring in more developers."
          image="https://s.gitcoin.co/static/v2/images/presskit/GitcoinLogoText.682e2321c67c.svg"
          imageCover="https://images.ui8.net/uploads/shot4_1541017375087.png"
        />
        <CardLarge
          title="Ethereum Foundation"
          createdBy="Vitalik Buterin"
          imageCreatedBy="https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png"
          tagline="Ethereum Stewards"
          summary="On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world. The Ethereum community is the largest and most active blockchain community in the world. It includes core protocol developers, cryptoeconomic researchers, cypherpunks, mining organizations, ETH holders, app developers, ordinary users, anarchists, fortune 500 companies, and, as of now, you."
          image="data:image/jpeg;base64,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"
          imageCover="https://images.ui8.net/uploads/shot5_1541017400746.png"
        />
        <CardLarge
          title="ConsenSys"
          createdBy="Joe Lubin"
          imageCreatedBy="https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png"
          tagline="Market Leading Blockchain Companiy"
          summary="From developer tools to enterprise solutions, ConsenSys is building Ethereum blockchain infrastructure and applications for new economic systems that are more open, efficient, and secure."
          image="https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png"
          imageCover="https://images.ui8.net/uploads/shot8_1541017407450.png"
        />
        <CardLarge
          title="3Box"
          createdBy="Michael Sena"
          imageCreatedBy="https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png"
          tagline="Decentralized Profiles &amp; Stroage"
          summary="3Box storage is simple, secure, and private by design. Apps that store data with users on 3Box are lighter, more trustworthy, and enjoy reduced data management liability. The suite of 3Box APIs enable delightful user experiences on web3. Build with social profiles, messaging, single sign on, data storage and sharing."
          image="data:image/jpeg;base64,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"
          imageCover="https://images.ui8.net/uploads/shot1_1541136258422.png"
        />
      </Atom.Container>
    </Atom.Box>
    <Atom.Container maxWidth={780} mt={5}>
      <Atom.Paragraph center>
        <strong>Interested in joining the coalition?</strong> Register below.
      </Atom.Paragraph>
    </Atom.Container>

    <Atom.Container my={2} maxWidth={780}>
      <FormJoinCoalition />
    </Atom.Container>
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
