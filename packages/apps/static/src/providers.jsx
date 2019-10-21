/* --- Global --- */
import { ThemeProvider } from 'styled-components'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'
import {
createHistory,
LocationProvider,
} from "@reach/router";
import createHashSource from 'hash-source'

/* --- Local --- */
import theme from './assets/theme'
import './assets/App.css'
import './assets/index.css'

/* --- Constants --- */
const Providers  = ({ element }) =>
<ThemeProvider theme={theme}>
  <PortalProvider>
      <TabProvider>
        <PortalTree />
          {element}
      </TabProvider>
  </PortalProvider>
</ThemeProvider>

export default ({ element }) => <Providers element={element}/>