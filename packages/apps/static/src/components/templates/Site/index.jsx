/* --- Local --- */
import { RegionTop, RegionFooter } from 'core'

/* --- Components --- */
const Layout = ({ children }) => 
<>
  <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
    <main>{children}</main>
  <RegionFooter  bg='#1e1e2d' color='white' borderTop='3px solid #dc448d' py={5}/>
</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
