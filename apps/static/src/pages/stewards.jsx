import { Site } from "templates"
import { FormUpdates } from "core"

import {
  Heading,
  Flex,
  Box,
  Absolute,
  Span,
  BackgroundImage,
  Loading,
  Image,
  Paragraph,
  Container,
} from "@horizin/design-system"

export default props => (
  <Site>
    <A.Flex gradient="bluePurple" flex={1}>
      <A.BackgroundImage
        backgroundSize="110%"
        opacity={0.46}
        ratio={0.35}
        src="https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg"
      />

    </A.Flex>

    <A.Container py={5}>


      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Project Contributors
        </A.Heading>
        <A.Heading as="h4">
          One Million Developers is an Open Collaboration but someone must tend the fields.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 my={3}>
        <Feature
          image='https://pbs.twimg.com/profile_images/1180616709629083648/sNLGeMk8_400x400.jpg'
          title="Kevin Owocki"
          tagline="Gitcoin Exraordinaire"
          content="NOT going to invest in your ICO. NOT looking for work ( Updated July 2019 ). I do NOT work with 3rd party recruiters offshore development shops, or agencies. Kindly fuck off."
        />
        <Feature
          image='https://avatars2.githubusercontent.com/u/84076?s=460&v=4'
          title="Jim Jagielski"
          tagline="Vision"
          content="He is best known as cofounder, member, and director of The Apache Software Foundation (ASF) and as a core developer on several ASF projects, including the Apache HTTP Server, Apache Portable Runtime, and Apache Tomcat."
        />
        <Feature
          image='https://media.licdn.com/dms/image/C4E03AQEdE6EMs0gaSQ/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=qfByokFF2uECSKcVVUkuBGJ49oDlCYyl1UUp-DZLOfw'
          title="Bryan Peters"
          tagline="Helping Connect Everything"
          content="My current mission is to find ways to leverage technology to facilitate more purpose driven, decentralized, people oriented ways of working."
        />

      </A.Flex>


      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          Project Stewards
        </A.Heading>
        <A.Heading as="h4">
          Making sure the lights stay on and the dogs are walked.
        </A.Heading>
      </A.Box>

      <A.Flex gutter3 my={3}>
        <Feature
          image='https://ipfs.infura.io/ipfs/QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE'
          title="Kames Geraghty"
          tagline="Fullstack Javascript Developer"
          content="Buidling the 1MD application. Plus crafting developer education tools."
        />
        <Feature
          image='https://ipfs.infura.io/ipfs/QmVCd2aApKytAPNBu4JatvuWiWGX7eAHazpEHBM9DsAxmz'
          title="Billy Luedkete"
          tagline="Project Manager"
          content="Managing the project."
        />
        <Feature
          image='https://ipfs.infura.io/ipfs/QmULnbXfmTEhiaQTi8S7k3oRvk6pR1BVLqYytqN37bUvEJ'
          title="Joe Bernitt"
          tagline="Infrastructure and Smart Contract Engineer"
          content="Managing project infrastructure."
        />
      </A.Flex>

    </A.Container>
    <A.Flex gradient="gray" flex={1}>
      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <FormUpdates />
      </A.Flex>
    </A.Flex>
  </Site>
)

const Feature = props => {
  return (
    <A.Flex card center column textCenter p={2}>
      <Atom.Flex
        mb={3}
        mt={-40}
        circle
        card
        overflow='hidden'
        height={80}
        width={80}
      >
        <A.BackgroundImage
          src={props.image || "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"}
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
