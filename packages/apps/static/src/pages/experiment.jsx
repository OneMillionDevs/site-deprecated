import { Site } from "templates"
import { FormBecomeGuide, FormBecomeGuideFull } from 'forms'

const GuideRegistration = props => { 
 return(
  <Atom.Flex card center column>
    <Atom.Heading lg heavy>2020 DEV Token</Atom.Heading>
    <Atom.Heading sm normal>An Ethereum Community Experiment</Atom.Heading>
    <Atom.HorizontalRule dash center />
    <Atom.Flex flex={1} p={3} width='100%'>
      <Atom.Flex flex={1}>
        <FormBecomeGuide/>
      </Atom.Flex>
      <Atom.Flex center column flex={1}>
        <Atom.Box>
          <Atom.Image card p={1} src='https://imgur.com/9hqmKMZ.png' maxWidth={180}/>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Flex>
)}


export default props => (
  <Site>
    <Atom.Box gradient='gray' pb={4}>
      <A.Box >
        <A.Box fullWidth color="white" gradient="blueOcean" py={150} textCenter>
          <A.BackgroundImage
            opacity={0.3}
            ratio={0.5}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
          />
          <Atom.Flex center column>
            <Atom.Box card circle boxShadow='blueBottom' my={4} p={3} maxWidth={100}>
              <Atom.Image src='https://image.flaticon.com/icons/svg/1349/1349715.svg' />
            </Atom.Box>
            <A.Heading giga heavy>
              2020 DEV Token
            </A.Heading>
            <A.Heading lg thin>
              An Ethereum Community Experiment
            </A.Heading>
          </Atom.Flex>
        </A.Box>
      </A.Box>
  
      
    <Atom.Box textCenter mt={5}>
        <Atom.Heading giga heavy>A Global Social Experiment</Atom.Heading>
        <Atom.Heading xl thin>Help bootstrap the world's largest decentralized community.</Atom.Heading>
     </Atom.Box>
      <Atom.Container maxWidth={980} card my={5}>
        <Atom.Flex alignCenter>
          <Atom.Flex flex={1} p={4}>
            <Atom.Box>
              <Atom.Image card p={1} boxShadow={4} src='https://imgur.com/m3lCrF0.png' maxWidth={320}/>
            </Atom.Box>
          </Atom.Flex>
          <Atom.Flex flex={2}>
            <FormBecomeGuideFull/>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
  
  
       
      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                A Community Owned Experiment
              </A.Heading>
              <A.Heading lg thin>Building Blocks to Construct Networks</A.Heading>
              <A.Paragraph>
              Pellentesque luctus tempus enim et convallis. Sed mattis justo vitae enim semper, tempor auctor ante convallis. Fusce maximus et risus id condimentum. Donec iaculis massa at nisl feugiat, sed ornare magna vehicula. Cras tincidunt mauris ipsum, ac aliquet nulla fermentum quis.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend/>} >
                <A.Button sm>Where to Start</A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src='https://images.ui8.net/uploads/preview_4_1569899701255.png'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
      
      <Atom.Container my={6}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Experiment with Token Mechanics
              </A.Heading>
              <A.Heading md thin><strong>Tokens are new and exciting.</strong> Building community and fun peer-to-peer games is a great way to experiment with new ideas and technology .</A.Heading>
              <A.Paragraph>
                Pellentesque luctus tempus enim et convallis. Sed mattis justo vitae enim semper, tempor auctor ante convallis. Fusce maximus et risus id condimentum. Donec iaculis massa at nisl feugiat, sed ornare magna vehicula. Cras tincidunt mauris ipsum, ac aliquet nulla fermentum quis.
              </A.Paragraph>
              <a target="_blank" href='http://kauri.io/'>
                <A.Button sm>Visit Kauri</A.Button>
              </a>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image p={1} card src='https://images.ui8.net/uploads/preview_8_1569899681265.png'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>


      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Build Social Profiles
              </A.Heading>
              <A.Heading lg thin>Facilitate the growth of decentralized identity and flourishing online networks.</A.Heading>
              <A.Paragraph>
                Pellentesque luctus tempus enim et convallis. Sed mattis justo vitae enim semper, tempor auctor ante convallis. Fusce maximus et risus id condimentum. Donec iaculis massa at nisl feugiat, sed ornare magna vehicula. Cras tincidunt mauris ipsum, ac aliquet nulla fermentum quis.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend/>} >
                <A.Button sm>Submit Project</A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src='https://images.ui8.net/uploads/preview_3_1569899704370.png'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
      

  
    </Atom.Box>

  </Site>
)


const ReferAFriend = props => { 
 return(
  <A.Box card>
    <Atom.Heading lg heavy>The Growing Etheruem Community</Atom.Heading>
    <Atom.Paragraph sm>
      Proin placerat, nibh vel porta fermentum, justo felis elementum odio, sed porttitor purus massa eu eros. Nam mollis lorem eget pretium interdum. Fusce consequat, lacus nec imperdiet posuere, ligula tortor vulputate felis, quis sodales arcu nibh vel nibh. Curabitur sit amet metus eleifend.
    </Atom.Paragraph>
  </A.Box>
)}
