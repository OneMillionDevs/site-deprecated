import { Site } from "templates"
import { FormUpdates } from 'core'

export default props =>
<Site>
  <A.Flex gradient='bluePurple' flex={1} >

    <A.BackgroundImage 
      backgroundSize='110%' opacity={.46} ratio={.35}
      src='https://wallpaperaccess.com/full/1267681.jpg' />


    <A.Flex center column flex={3} py={50} minHeight='100vh' order={2}>
        <A.Box card boxShadow={7} maxWidth={620} textCenter p={4}>
          <A.Heading xl heavy>Ecosystem Analytics</A.Heading>
          <A.HorizontalRule dash center my={3} />
          <A.Button xs variant='white'>Coming Soon</A.Button>
        </A.Box>
  </A.Flex>
  </A.Flex>

  </Site>