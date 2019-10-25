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

      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <A.Span sm tag="blue" mb={3}>
          Mission
        </A.Span>
        <A.Box card boxShadow={7} maxWidth={620} textCenter p={4}>
          <A.Heading xl heavy>
            Ethereum Community Growth
          </A.Heading>
          <A.Heading md>1 Million Active Developers</A.Heading>
          {/* <A.HorizontalRule dash center /> */}
          <A.Flex center my={4}>
            <A.Span xs tag="green" mx={3}>
              Inspiration
            </A.Span>
            <A.Span xs tag="blue" mx={3}>
              Enablement
            </A.Span>
            <A.Span xs tag="primary" mx={3}>
              Contribution
            </A.Span>
          </A.Flex>
          <A.HorizontalRule dash center my={3} />
          <A.Paragraph sm>
            In a space where all developments contribute to the collective
            whole, and every new participant brings us one step closer to a more
            fair and truthful world, the value of community cannot be
            understated. Our mission is to grow and foster the Ethereum
            community.
          </A.Paragraph>
          <A.Paragraph sm>
            <u>We</u> are Ethereum.
          </A.Paragraph>
        </A.Box>
      </A.Flex>
    </A.Flex>

    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={370}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xxl heavy>
            Why 1 Million Developers?
          </A.Heading>
          <A.Heading md>
            Why we care about growing the Ethereum developer community
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            We are Ethereum - the community. As a platform, Ethereum would not
            exist in its current form if it were not for its dominant community.
            This community is magnitudes larger than the next biggest blockchain
            competitor - comprised of the thousands of buidlers, developers,
            visionaries, entrepreneurs, philosophers, economists,
            mathematicians, and leaders (and anyone we left out!) who have
            gotten us to where we are today.
            <br />
            <br />
            Every new member of our community is another unique perspective,
            another source of potential talent and tools and ideas, another
            teammate, and another friend. Our goal is to grow and foster this
            community. To attract the best and the brightest. And to make sure
            they stick around - because in this open, composable, cooperative
            ecosystem, every individual truly matters.
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Container my={4}>
      <A.Heading xl heavy center>
        What Is The '1 Million Developers' Initiative?
      </A.Heading>
      <A.Heading md center>
        What we hope to do | What we aim to achieve to achieve
      </A.Heading>
      <A.Flex alignCenter flex={1}>
        <A.Flex column flex={1}>
          <A.Heading xl heavy>
            Developer Inspiration
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Given the overwhelmingly untapped potential of Ethereum, the
            resources available to make building fun and easy, and the
            incredible and dominant (and incredibly dominant) community,
            participating in the Ethereum ecosystem should be a logical choice
            for those looking for challenge, profit, and the opportunity to
            change the world. However, not everyone has had their “ah-ha”
            Ethereum moment - the moment when they realize what’s to come, and
            truly dive head-first into Web3. This initiative hopes to provide
            those “ah-ha” moments to developers who are new to the ecosystem, to
            inspire them to hop on board the train (chugga chugga).
          </A.Paragraph>
          <A.Link to="/contribute">
            <A.Button>Make An Impact</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex column flex={1} order={1} p={5}>
          <A.Heading xl heavy>
            Developer Enablement
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Once a developer has been inspired to contribute, it is sometimes
            too daunting, scary, and/or overwhelming for them to begin building.
            Let’s face it - a young space full of new tools, terminology, and
            possibilities can be intimidating! Luckily, the size and fervor of
            the Ethereum community has resulted in the emergence of an
            inordinate amount of developer tools and resources. However, it is
            hard to separate the signal from the noise. This initiative hopes to
            do just that - and make getting started fun and easy, by providing a
            clear path for new Ethereum developers to go from “inspired” to
            “contributing” by connecting them to the tools, resources, and
            platforms they need.
          </A.Paragraph>
          <A.Link to="/contribute">
            <A.Button>Make An Impact</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex column flex={1} order={1} p={5}>
          <A.Heading xl heavy>
            Developer Contribution
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Reaching 1,000,000 Ethereum developers will be no easy task, but it
            will be a victory shared by all. The open, transparent,
            decentralized, composable nature of Ethereum has made the Ethereum
            community feel more like a family of cooperators rather than
            competitors. However, at times, things can be hectic, disorganized,
            and overwhelming, resulting in an uncoordinated approach to ushering
            in the future of the internet. The One Million Developers initiative
            seeks to foster the coordination of developer contributions, to
            ensure energy is effectively channeled towards the community’s
            primary goals - one of those goals being the pursuit of 1,000,000
            Ethereum developers.
          </A.Paragraph>
          <A.Link to="/contribute">
            <A.Button>Make An Impact</A.Button>
          </A.Link>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={370}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xxl heavy>
            How Will We Do It?
          </A.Heading>
          <A.Heading md>How we plan to carry out our mission</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            One Million Developers, as a site, aims to act as a hub for
            resources that explicitly facilitate the growth of the Ethereum
            ecosystem. Although it can be argued that every single thing built
            on Ethereum contributes to Ethereum’s growth, some tools, platforms,
            and resources do this better than others. As such, the One Million
            Developers Hub seeks to filter, feature, and even foster the
            development of these tools, platforms, and resources, with the
            ultimate goal of presenting them to developers in an
            easily-digestible manner. <br /> <br />
            Because the growth of the Ethereum ecosystem should be a communal
            effort, and because 1,000,000 Ethereum developers will be a
            difficult number to achieve, the One Million Developers initiative
            is open to contributions from all. Whether you want to draft
            educational content, build a new platform, develop a developer tool,
            help steward the One Million Developers effort, or even just refer a
            friend, there is something for everyone. This initiative is entirely
            in your hands.
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Container>
      <A.Flex column flex={1} order={1} p={5}>
        <A.Heading xl heavy center>
          What Now?
        </A.Heading>
        <A.HorizontalRule dash my={3} />
        <A.Paragraph sm center>
          Reaching 1,000,000 Ethereum developers will be no easy task, but it
          will be a victory shared by all. The open, transparent, decentralized,
          composable nature of Ethereum has made the Ethereum community feel
          more like a family of cooperators rather than competitors. However, at
          times, things can be hectic, disorganized, and overwhelming, resulting
          in an uncoordinated approach to ushering in the future of the
          internet. The One Million Developers initiative seeks to foster the
          coordination of developer contributions, to ensure energy is
          effectively channeled towards the community’s primary goals - one of
          those goals being the pursuit of 1,000,000 Ethereum developers.
        </A.Paragraph>
        <A.Link to="/started">
          <A.Button>Learn</A.Button>
        </A.Link>
        <A.Link to="/contribute">
          <A.Button>Contribute</A.Button>
        </A.Link>
        <A.Link to="/news">
          <A.Button>Attend an Event</A.Button>
        </A.Link>
      </A.Flex>
    </Atom.Container>

    <A.Flex gradient="gray" flex={1}>
      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <FormUpdates />
      </A.Flex>
    </A.Flex>
  </Site>
)

const Feature = props => {
  return (
    <A.Box card textCenter p={2}>
      <A.Image
        mt={-40}
        circle
        maxWidth={80}
        src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
      />
      <A.Heading md heavy>
        {props.title}
      </A.Heading>
      {/* <A.Heading md thin >{props.tagline}</A.Heading> */}
      {/* <A.HorizontalRule dash center my={3} /> */}
      <A.Paragraph sm px={3}>
        {props.content}
      </A.Paragraph>
    </A.Box>
  )
}

const VitalikQote = props => {
  return (
    <A.Flex gradient="bluePurple" flex={1} p={200}>
      <A.BackgroundImage
        opacity={0.46}
        ratio={0.35}
        src="https://i.redd.it/408ryru2vzty.jpg"
      />

      <Atom.Container maxWidth={600}>
        <Atom.Flex alignCenter column card between={5}>
          <Atom.Box>
            <Atom.Box my={4}>
              <Atom.Heading xxl heavy>
                Grow the Community
              </Atom.Heading>
              <Atom.Heading md>
                Make a difference in the future of decentralized
              </Atom.Heading>
              <Atom.Box my={4}>
                <Atom.Paragraph>
                  <em>
                    The killerness of the ecosystem is not the nodes, it's the
                    links - it's the fact that, every single application that
                    gets built is not just an application in its own right, it's
                    also a component that every future thing in the Ethereum
                    ecosystem can benefit from..
                  </em>
                </Atom.Paragraph>
                <cite>Vitalik Buterin - Etheruem Founder</cite>
              </Atom.Box>
              <Atom.Heading lg heavy>
                Attend EthGlobal Events
              </Atom.Heading>
              <Atom.Paragraph>
                Hackathons teach new skills, strengthen developer communities,
                and push the limits of new technologies. At ETHGlobal, we're
                leveraging our years of experience to foster a world-class
                ecosystem of Ethereum developers and entrepreneurs.
              </Atom.Paragraph>
              <a target="_blank" href="https://ethglobal.co/">
                <Atom.Button>Learn More</Atom.Button>
              </a>
            </Atom.Box>
          </Atom.Box>
          <Atom.Absolute top={0} bottom={0} right={0} m={-5}>
            <Atom.Image
              circle
              card
              p={1}
              maxWidth={200}
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F41563522%2F960x0.jpg%3Ffit%3Dscale"
            />
          </Atom.Absolute>
        </Atom.Flex>
      </Atom.Container>
    </A.Flex>
  )
}
const GetInvolved = props => {
  return (
    <A.Flex gradient="bluePurple" flex={1} p={200}>
      <A.BackgroundImage
        opacity={0.46}
        ratio={0.35}
        src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      />

      <Atom.Container maxWidth={600}>
        <Atom.Flex alignCenter column card between={5}>
          <Atom.Box>
            <Atom.Box my={4}>
              <Atom.Heading xxl heavy>
                Be the Change
              </Atom.Heading>
              <Atom.Heading md>
                Make a difference in the future of decentralized
              </Atom.Heading>
              <Atom.Box my={4}>
                <Atom.Paragraph>
                  <em>
                    The killer characteristic of the Ethereum ecosystem is
                    composability - the fact that you can glue or compose a
                    bunch of different protocols or products together into a
                    more complex product, or that they can easily build upon one
                    another, permissionlessly, is a breakthrough. It was
                    described that the internet was architected in a way that if
                    it saw censorship, it would route around that censorship and
                    treat it as damage to the system. The decentralized world
                    wide web will see silos as damage, and route around those..
                  </em>
                </Atom.Paragraph>
                <cite>Joe Lubin - Etheruem Founder</cite>
              </Atom.Box>
              <Atom.Heading lg heavy>
                Become A Guide
              </Atom.Heading>
              <Atom.Paragraph>
                Donec auctor vehicula turpis. In nulla elit, interdum vel dui
                at, venenatis fermentum mi. Aenean pretium nulla ac faucibus
                facilisis. Fusce sit amet felis in turpis pretium congue. Etiam
                non volutpat nibh, dictum facilisis nulla. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Mauris venenatis nisi nibh, accumsan tempor nibh cursus id.
              </Atom.Paragraph>
              <Atom.Heading lg heavy>
                Start a Community
              </Atom.Heading>
              <Atom.Paragraph>
                Donec auctor vehicula turpis. In nulla elit, interdum vel dui
                at, venenatis fermentum mi. Aenean pretium nulla ac faucibus
                facilisis. Fusce sit amet felis in turpis pretium congue. Etiam
                non volutpat nibh, dictum facilisis nulla. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Mauris venenatis nisi nibh, accumsan tempor nibh cursus id.
              </Atom.Paragraph>
            </Atom.Box>
          </Atom.Box>
          <Atom.Absolute top={0} bottom={0} right={0} m={-5}>
            <Atom.Image
              circle
              card
              p={1}
              maxWidth={200}
              src="https://media.xconomy.com/wordpress/wp-content/images/2017/10/06153519/Joe-Lubin.jpg"
            />
          </Atom.Absolute>
        </Atom.Flex>
      </Atom.Container>
    </A.Flex>
  )
}
