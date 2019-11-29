import React from 'react';
import useForm from 'react-hook-form';

import {Slider} from '@components/fields';
import {Checkbox, Icon} from '@blueprintjs/core';
const Example = props => {
  const {handleSubmit, register, errors} = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex alignCenter>
        <Atom.Box sx={{width: 240, px: 4}}>
          <Slider />
        </Atom.Box>

        <Molecule.Field
          variant={['text']}
          name="city"
          placeholder="City"
          // label="Location"
          register={register}
          errors={errors}
          sx={{m: 2}}
        />
        <Molecule.Field
          variant={['text']}
          name="country"
          placeholder="Country"
          // label="Location"
          register={register}
          errors={errors}
          sx={{m: 2}}
        />
        <Molecule.Field
          variant={['text']}
          name="motivation"
          placeholder="Motivation"
          // label="Purpose"
          register={register}
          errors={errors}
          sx={{m: 2}}
        />
        <Atom.Span>
          <Atom.Button md>Submit</Atom.Button>
        </Atom.Span>
      </Atom.Flex>
    </form>
  );
};

export default Example;
