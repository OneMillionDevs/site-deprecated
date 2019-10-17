import { Site } from "templates"
import { FormUpdates } from 'core'

export default props =>
<Site>
  <A.Flex gradient='bluePurple' flex={1} >

    <A.BackgroundImage backgroundSize='110%' opacity={.46} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />


    <A.Flex center column flex={3} py={50} minHeight='600px' order={2}>
        <A.Span sm tag='blue' boxShadow='sunset' mb={3}>Mission</A.Span>
        <A.Box card boxShadow={7} maxWidth={620} textCenter p={4}>
          <A.Heading xl heavy>Connecting Ethereum Developers</A.Heading>
          <A.Heading md >Reach 1 Million Active Developers</A.Heading>
          {/* <A.HorizontalRule dash center /> */}
          <A.Flex center my={4}>
            <A.Span xs tag='green' mx={3}>Developer Profiles</A.Span>
            <A.Span xs tag='blue' mx={3}>Learning Network</A.Span>
            <A.Span xs tag='primary' mx={3}>Rewards & Incentives</A.Span>
          </A.Flex>
          <A.HorizontalRule dash center my={3} />
          <A.Paragraph sm>
          Morbi vehicula ante lorem, vitae elementum urna ullamcorper at. Pellentesque vitae finibus lacus, nec convallis felis. Donec dapibus tristique aliquam. Praesent viverra velit ex, vitae pulvinar lectus ornare id.
          </A.Paragraph>
        </A.Box>
  </A.Flex>
  </A.Flex>

  <A.Container>
   <A.Box textCenter py={5}>
      <A.Heading xl heavy>What We Are Building</A.Heading>
      <A.Heading as='h5' sm >We are on a mission to build the tools and network required to faciliate the growth towards 1 Million Developers.</A.Heading>
   </A.Box>
    <A.Flex gutter3 my={3}>
      <Feature
        title='Developer Profiles'
        tagline='A Universal Etheruem Developer Profile'
        content='A decentralized identity powered by public/private key-pairs.'
      />
      <Feature
        title='Learning Network'
        tagline='Community of Resources and Opportunities'
        content='A decentralized identity powered by public/private key-pairs.'
      />
      <Feature
        title='Hiring Board'
        tagline='Get Hired By Top Companies'
        content='A decentralized identity powered by public/private key-pairs.'
      />
    </A.Flex>


    <A.Flex alignCenter flex={1} mt={5}>
      <A.Flex center column flex={1}>
        <A.Image
        circle
        maxWidth={270}
        src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
      />
      </A.Flex>
      <A.Flex column flex={1}>
        <A.Heading xl heavy>Stewarding Growth</A.Heading>
          <A.Heading md >Helping the Ethereum Community Grow and Connect</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Morbi vehicula ante lorem, vitae elementum urna ullamcorper at. Pellentesque vitae finibus lacus, nec convallis felis. Donec dapibus tristique aliquam. Praesent viverra velit ex, vitae pulvinar lectus ornare id. Donec vestibulum nulla vel magna sodales varius.
          </A.Paragraph>
          <A.Paragraph sm>
            Aenean id nulla iaculis est dignissim molestie ac blandit mauris. Fusce non diam rutrum, accumsan quam ac, tincidunt dui. Sed sodales ultricies libero, nec vehicula tellus rutrum eget. Nulla dolor lectus, euismod nec mi a, commodo sagittis lacus. Praesent lobortis lectus neque. Vestibulum porttitor nulla sit amet arcu lacinia euismod. Praesent aliquet orci neque, rutrum condimentum eros vehicula eu. Proin dignissim vulputate sagittis.
          </A.Paragraph>
      </A.Flex>
    </A.Flex>


    <A.Flex alignCenter flex={1} mt={5}>
      <A.Flex center column flex={1} order={2}>
        <A.Image
        circle
        maxWidth={270}
        src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
      />
      </A.Flex>
      <A.Flex column flex={1}>
        <A.Heading xl heavy>How You Can Help</A.Heading>
          <A.Heading md >Pick the action best suited for your current involvement.</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Morbi vehicula ante lorem, vitae elementum urna ullamcorper at. Pellentesque vitae finibus lacus, nec convallis felis. Donec dapibus tristique aliquam. Praesent viverra velit ex, vitae pulvinar lectus ornare id. Donec vestibulum nulla vel magna sodales varius.
          </A.Paragraph>
          <A.Paragraph sm>
            Aenean id nulla iaculis est dignissim molestie ac blandit mauris. Fusce non diam rutrum, accumsan quam ac, tincidunt dui. Sed sodales ultricies libero, nec vehicula tellus rutrum eget. Nulla dolor lectus, euismod nec mi a, commodo sagittis lacus. Praesent lobortis lectus neque. Vestibulum porttitor nulla sit amet arcu lacinia euismod. Praesent aliquet orci neque, rutrum condimentum eros vehicula eu. Proin dignissim vulputate sagittis.
          </A.Paragraph>
      </A.Flex>
    </A.Flex>



    <A.Flex alignCenter flex={1} mt={5}>
      <A.Flex center column flex={1}>
        <A.Image
        circle
        maxWidth={270}
        src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
      />
      </A.Flex>
      <A.Flex column flex={1}>
        <A.Heading xl heavy>Open Source Project</A.Heading>
          <A.Heading md >Contribute to One Million Devs with Code and Content</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Morbi vehicula ante lorem, vitae elementum urna ullamcorper at. Pellentesque vitae finibus lacus, nec convallis felis. Donec dapibus tristique aliquam. Praesent viverra velit ex, vitae pulvinar lectus ornare id. Donec vestibulum nulla vel magna sodales varius.
          </A.Paragraph>
          <A.Paragraph sm>
            Aenean id nulla iaculis est dignissim molestie ac blandit mauris. Fusce non diam rutrum, accumsan quam ac, tincidunt dui. Sed sodales ultricies libero, nec vehicula tellus rutrum eget. Nulla dolor lectus, euismod nec mi a, commodo sagittis lacus. Praesent lobortis lectus neque. Vestibulum porttitor nulla sit amet arcu lacinia euismod. Praesent aliquet orci neque, rutrum condimentum eros vehicula eu. Proin dignissim vulputate sagittis.
          </A.Paragraph>
      </A.Flex>
    </A.Flex>


  </A.Container>
  <A.Flex gradient='blueDark' flex={1} >
      <A.Flex center column flex={3} py={50} minHeight='600px' order={2}>
        <FormUpdates/>
      </A.Flex>
  </A.Flex>
</Site>


const Feature = props => { 
 return(
  <A.Box card textCenter p={2}>
    <A.Image
      mt={-40}
      circle
      maxWidth={80}
      src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
    />
    <A.Heading md heavy>{props.title}</A.Heading>
    {/* <A.Heading md thin >{props.tagline}</A.Heading> */}
    {/* <A.HorizontalRule dash center my={3} /> */}
    <A.Paragraph sm px={3}>
      {props.content}
    </A.Paragraph>
  </A.Box>
)}
