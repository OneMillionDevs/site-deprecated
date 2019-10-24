/* --- Global --- */
import { ThemeProvider } from 'styled-components'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'

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
                {element}
            </TabProvider>
        </PortalProvider>
      </ThemeProvider>
    )
  }
}

export default ({ element }) => <Providers element={element}/>