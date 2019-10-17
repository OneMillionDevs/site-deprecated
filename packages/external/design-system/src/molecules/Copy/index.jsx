import React, { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
const Component = props => { 
const [ data, setData ] = useState(props.data)
const [ message, setMessage ] = useState()
const [ copied, setCopied ] = useState()
const toggleCopy = () =>{
  setCopied(!copied)
}
useEffect( () => { 
  if(props.data) {
    setData(props.data)
  }
}, [props.data])

useEffect( () => { 
  if(copied) {
    setMessage(true)
  }
}, [copied])


 return(
  <CopyToClipboard text={data} onCopy={toggleCopy}>
    <span>Copy </span>
  </CopyToClipboard>
)}

export default Component