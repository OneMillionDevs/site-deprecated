/* --- Global Dependencies --- */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import {
  Button, Link,
  BackgroundImage, BackgroundGradient, Box, Flex, Image,
  Heading, Span, Paragraph
} from '../../index'

/* ------- Component ------- */

const CardHeader = props => { 
 return(
  <Flex column
    flex={1}
    p={15}
    minHeight={
      props.isExpanded ? 150 : 30
    }
  >
    <BackgroundGradient gradient='blue'/>
    {
      props.imageCover &&
      <BackgroundImage src={props.imageCover} opacity={0.2} ratio={0.3} {...props.styledCover} />
    }
    <Flex alignCenter between>
      <Box>
        <Span xs color='white' highlight='blue' alignSelf='flex-start'>{props.timestamp}</Span>
      </Box>
      {
        props.tag &&
        <Span xxs tag='white' alignSelf='flex-end'>Tag</Span>
      }
    </Flex>
  </Flex>
)}

const Card = ({ id, title, tagline, image, ...props }) => {
  const [ isHeader, setHeader ] = useState(props.isHeader)
  const [ isExpanded, setExpanded ] = useState(false)

  useEffect( () => { 
    if(props.imageCover) setHeader(true)
  }, [props.imageCover])

  return (
    <Box {...props.styled}>
      <Flex column height='100%' >
        {
          isHeader &&
          <CardHeader {...props} isHeader={isHeader} setHeader={setHeader} />
        }

        <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
        {image &&
          <Box inlineBlock circle
            boxShadow='sunset'
            p={3} gradient='white' maxWidth={180} mx='auto'
            mt={
              isExpanded ? -120 : -40
            }
            >
            <Image src={image}
              {...props.styledImage}
            />
          </Box>
          }
          <Heading lg mt={0} fontWeight={300}>
            {title}
          </Heading>
          <Paragraph fontSize={[1]} mb={[25]}>
            {tagline}
          </Paragraph>
          {
            props.content &&
            props.content
          }
        </Box>
      </Flex>
    </Box>
  )
}


Card.defaultProps = {
  to: '/',
  label: 'Learn More',
  styled: {
    p: 3,
    width: '100%'
  },
  styledHeader: {
    variant: 'green'
  },
  styledFooter: {
    variant: 'green'
  },
  styledButton: {
    variant: 'green'
  },
  styledContent: {},
  styledImage: {
    maxWidth: 100
  },
  isHeader: false,
  isFooter: false,
}
// Card.defaultProps = {
//   title: 'Interesting Title',
//   tagline: 'A Tagline to To Intrigue',
//   timestamp: 'Feb 27, 2019',
//   to: '/',
//   label: 'Learn More',
//   image: 'https://image.flaticon.com/icons/svg/2000/2000651.svg',
//   imageCover: 'https://cdn.dribbble.com/users/548267/screenshots/7009894/media/7c195a7fbbdb8faee533f8324219d399.jpg',
//   styledButton: {
//     variant: 'green'
//   }
// }

Card.propTypes = {
  styled: PropTypes.object,
  styledButton: PropTypes.object,
}

export default Card