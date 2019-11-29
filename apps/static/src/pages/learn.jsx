import { Site } from "templates"

export default props => (
  <Site>
    <A.Box>
      <A.Box fullWidth color="white" gradient="blueOcean" py={6} textCenter>
        <A.BackgroundImage
          opacity={0.3}
          ratio={0.5}
          src="https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg"
        />
        <A.Heading giga heavy>
          Learning Center
        </A.Heading>
        <A.Heading lg>
          Get Connected with the Ethereum Ecosystem
        </A.Heading>
      </A.Box>
    </A.Box>

    <Atom.Box>
      <Atom.Container my={4}>
        <CardLarge 
          title='Gitcoin Quests'
          createdBy='Gitcoin'
          imageCreatedBy='https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png'
          tagline='Battle Your Way to the Top'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://s.gitcoin.co/static/v2/images/presskit/GitcoinLogoText.682e2321c67c.svg'
          imageCover='https://i.imgur.com/cHtxC04.png'
        />
        <CardLarge 
          title='Rapid Adventures'
          createdBy='Rapid'
          imageCreatedBy='https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png'
          tagline='Interact with the Ethereum Blockchain and Earn Rewards'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://bitcoinwiki.co/wp-content/uploads/consensys-logo-v-300x185.jpg'
          imageCover='https://fs.bitcoinmagazine.com/img/images/ethercapital.original.jpg'
        />
        <CardLarge 
          title='3Box Developer Profiles'
          createdBy='3Box'
          imageCreatedBy='https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png'
          tagline='Interact with the Ethereum Blockchain and Earn Rewards'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://pbs.twimg.com/profile_images/1125210143484985344/6Kae1Al3_400x400.png'
          imageCover='https://i.pinimg.com/originals/6c/bd/f6/6cbdf6f5bd7ea26215b6c7721dddeed5.png'
        />
      </Atom.Container>
    </Atom.Box>
  </Site>
)


const CardLarge = props => { 
 return(
  <Atom.Flex card p={0} minHeight={300} my={4}>
   <Atom.Flex flex={2}>
      <A.Flex center column gradient='blueDark' flex={1} minHeight={150} py={3}>
       <A.BackgroundImage src={props.imageCover} opacity={.2} />
       <Atom.Flex
            mb={3}
            circle
            column center
            card
            boxShadow={1}
            overflow='hidden'
            p={4}
            >
          <Atom.Span><A.Image
            maxWidth={80}
            src={props.image}
          /></Atom.Span>
          </Atom.Flex>
     </A.Flex>
    </Atom.Flex>
    <Atom.Flex alignCenter flex={5}>
      <Atom.Box p={3}>
        <Atom.Heading xl heavy>{props.title}</Atom.Heading>
        <Atom.Heading md thin>{props.tagline}</Atom.Heading>
        <Atom.Paragraph sm>
          {props.summary}
        </Atom.Paragraph>
      </Atom.Box>
    </Atom.Flex>
  </Atom.Flex>
)}
