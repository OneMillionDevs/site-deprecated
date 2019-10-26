/* --- Global --- */
import { ThemeProvider } from 'styled-components'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'
import { Helmet } from "react-helmet"
/* --- Local --- */
import theme from './assets/theme'
import './assets/App.css'
import './assets/index.css'


/* --- Constants --- */
class Providers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  
  // Mounted
  componentDidMount()
  {
    this.setState({isLoading: false})
  }



  render(){
    const { isLoading } = this.state
    const { element } = this.props
    return(
      isLoading ? null :
      <ThemeProvider theme={theme}>
        <PortalProvider>
            <TabProvider>
              <PortalTree />
              <Helmet>
                  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"></link>
                </Helmet>
                {element}
            </TabProvider>
        </PortalProvider>
      </ThemeProvider>
    )
  }
}

export default ({ element }) => <Providers element={element}/>