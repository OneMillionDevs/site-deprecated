/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from '@horizin/react-hooks-portal'

export default ({portal, children, ...props }) =>(
<PortalContext>
  {
    portal => (
      <span onClick={() => portal.openModal({ ...props })}>
      {children}
    </span>
    )
  }
</PortalContext>
)