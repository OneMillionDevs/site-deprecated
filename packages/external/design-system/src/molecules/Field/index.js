/* --- Global Dependencies --- */
import React from 'react'
import { Box } from '../../index'
import Input from '../../atoms/Input';
import Error from './message';
import { Span } from '../../../dist/atoms';

const internalLabel = [
  'radio',
  'checkbox'
]
/* --- Component --- */
const Field = ({
  inputAs, label, error, errors, register, validation, children, ...props 
}) =>
!register ? null :
<>
  <Box {...props.styled}>
    {
      !props.component
      ? <>
        {
          !internalLabel.includes(props.type) && label &&
          <Span xs as='label' my='5px' >{label}</Span>
        }
        <Input 
            ref={register({...validation})}
            label={label}
            variant={props.type}
            type={props.type}
            as={inputAs}
            {...props.styledInput}
            {...props}
          />
          {
            internalLabel.includes(props.type) && label &&
            <Span xs as='label' my='5px' >{label}</Span>
          }
        </>
      : props.component
    }
    {
      errors[props.name] && errors[props.name].message && 
        <Error floating name={props.name} error={error} className="input-error">
          {errors[props.name].message}
        </Error>
    }
  </Box>
</>

Field.defaultProps ={
  styled: {
    flex: 1
  }
}

export default Field