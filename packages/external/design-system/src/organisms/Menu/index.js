/* --- Global Dependencies --- */
import React, { useState } from "react";
import { Match } from '@reach/router'
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Flex, Heading, Link, Span, HorizontalRule } from "../../index";
/* --- Module --- */
import { activateMenu } from './helpers'
const LinkStyledChild = styled(Link)`
  color: inherit;
  display: block;
  font-size: 14px;
  margin-left: 8px;
  text-decoration: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon, vertical, ...props }) => {
const state = useState(false);
const isOpen = state[0]
const setOpen = state[1]

return (
  vertical
  ?<Flex column fullWidth width={1}>
    <Flex
      styled={props.styledItem}
      active={props.styledItemActive}
      alignCenter
      fullWidth>

      { icon && <Span {...props.styledIcon}>icon</Span>}

      <Flex alignCenter between width='100%'>
        <WrapperLink
          to={to}
          styled={props.styledWrapper}
          active={props.styledWrapperActive}
          getProps={activateMenu}
          >
          <Span {...props.styledLabel}>{label}</Span>
        </WrapperLink>
    
          {
            children && /* Menu Item Children Toggle */
            <Span pointer p={2} width={30} ml='auto' onClick={()=>setOpen(!isOpen)}>
              <Span xxs opacity={.3} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen? '▶' : '▶'}</Span>
            </Span>
          }
      </Flex>
    </Flex>

  { 
    isOpen && children &&
    children.map( c =>
    <ChildContainer column> 
        <WrapperLink
        styled={{
          p: 2,
          width: '100%'
        }}
        active={{
          bg: 'rgba(0,0,0, 0.035)',
        }} className='child' to={c.to}>
          <Flex alignCenter between px={2}>
            <Span sm>{c.label}</Span>
            <Span>{c.icon && c.icon}</Span>
          </Flex>
        </WrapperLink>
    </ChildContainer>)
  }
</Flex>
  
  
  : <Horizontal />
)}


MenuItem.defaultProps = {
  styledItem: {
    opacity: .75,
    '&:hover': {
      background: 'rgba(0,0,0, 0.035)',
      color: 'blue',
      opacity: 1,
    }
  },
  styledItemActive: {

  },
  styledWrapper: {
    color: '#6e6767',
    fontSize: '1em',
    fontWeight: 'normal',
    p: 10
  },
  styledWrapperActive: {
    bg: 'rgba(0,0,0, 0.035)',
    color: '#3384d3'
  }
}



const ChildContainer = styled(Flex)`
  padding: 4px;

  & .grandchild {
    opacity: 0.75;
  }

  & .grandchild:hover {
    opacity: 1;
  }

  &:hover {
    background: rgba(0,0,0, 0.035);
    opacity: 1;

    & .child {
      opacity: 1;
    }
  
  }

  & ul {
    margin: 0;
    margin-top: 10px;
    padding-left: 25px;
  }

  & li {
    opacity: 0.75;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 7px;

    &:hover {
      opacity: 1;
    }
  }
`






const WrapperLink = ({ to, children, active, styled }) => (
  <Match path={`${to}`}>
    {props => (
      props.match
      ? <Link fullWidth active to={to} {...styled} {...active}> {children}</Link>
      : <Link fullWidth to={to} {...styled}>{children}</Link>
    )}
  </Match>
)

const Horizontal = ({ styled, label, children, icon, to, ...props}) => { 
  const state = useState(props.isOpen);
  const isOpen = state[0]
  const setOpen = state[1]
 return(
  <Flex >
  <WrapperLink
    p={10}
    active={{
      bg: 'blue',
      color: 'white'
    }}
    getProps={({ isCurrent, isPartiallyCurrent }) => ({style:{

        background: isPartiallyCurrent ? props.activeBackground : "inherit",
        color: isPartiallyCurrent ? props.activeColor : "inherit"
      }})
    }
    to={to}>
    <Flex ac>
      {icon && <Span mr={10}>{icon}</Span>}
      <Span>{label}</Span>
    </Flex>
    </WrapperLink>
  { children &&
    <Span pointer width={30}  alignSelf='flex-end' ml='auto' onClick={()=>setOpen(!isOpen)}>
      <Span fontSize={[1]} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen? '↴' : '▶'}</Span>
    </Span>
  }
{ isOpen && children &&
  children.map( c =>
  <ChildContainer>
    <Flex alignCenter mb='8px'>
      {c.icon && c.icon}
      <LinkStyledChild className='child' to={c.to}>
        {c.label}
      </LinkStyledChild>
    </Flex>
      <Flex column>
        { c.children &&
          <Flex column ml='8px'>
            {c.children.map( i =>
              <Link to={i.to}>
                <Flex alignCenter className='grandchild' my='4px'>
                  {i.icon}
                  <Span fontSize={1} ml='8px'>{i.label}</Span>
                </Flex>
              </Link>
            )}
          </Flex>
        }
      </Flex>
  </ChildContainer>)
}
</Flex>
)
}


/* ------- Component ------- */
export default ({ items, label, vertical, fullWidth, ...props }) => 
<Flex column overflow='auto' fullWidth {...props}>
  {
    label &&
    <>
      <Heading fontSize={[2]} as='h5' noMargin>
        {label}
      </Heading>
      <HorizontalRule my={2} />
    </>
  }
  <Flex column>
    {
      Array.isArray(items) && items.length > 0 &&
      items.map( item =>
        <MenuItem
          vertical={vertical}
          {...item}
          {...props}
        />)
    }
  </Flex>
</Flex>
