/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import Field from '../Field';
import { Box, Flex, Span, Button } from '../..';

/* --- Component --- */
const FieldArray = ({  ...props }) => {
  const [ fields, setFields ] = useState([])

  const addField = () => {
    setFields([
      ...fields,
      {
        ...props,
        name: `${props.name}-${fields.length + 1}`,
      }
    ])
  }
  const deleteField = (index) => {
    const fieldRemoved = fields.filter( (f, i) => i !== index )
    console.log(fieldRemoved)
    setFields(fieldRemoved)
  }

  console.log(fields, 'fieldsfields')


  return (
    <>
      <Box>
        <Flex flex={1} justifyEnd>
          <Span xs tag='blue' onClick={addField} >Add Field</Span>
        </Flex>
        {
          fields.map((field, index) => 
            <Flex alignCenter>
              <Field 
                {...field}
              />
              <Span ml={3}><Span xs tag='blue' onClick={()=>deleteField(index)}>Delete</Span></Span>
            </Flex>
          )
        }
        
      </Box>
    </>
  )
}

FieldArray.defaultProps ={
  styled: {
    flex: 1
  }
}

export default FieldArray