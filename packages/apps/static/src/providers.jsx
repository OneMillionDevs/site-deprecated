/* --- Global --- */
import { ThemeProvider } from 'styled-components'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'

/* --- Local --- */
import theme from './assets/theme'
import './assets/App.css'
import './assets/index.css'

/**
 * Special Gatsby Export
 * gatsby-browser.js references provider.jsx and expects element
 * instead of the children property.
 */
export default ({ element }) => {

  return(
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