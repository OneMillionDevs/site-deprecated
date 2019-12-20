import React from 'react';
import useForm from 'react-hook-form';
import {withAmplify} from 'amplify-system';

/* --- Component --- */
const FormRegistration = props => {
  const {handleSubmit, register, errors} = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Field
        variant={['text']}
        name="email"
        placeholder="Email"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        variant={['text']}
        name="name"
        placeholder="Name"
        // label="Location"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Atom.Button md sx={styles.button}>
        {props.label}
      </Atom.Button>
    </form>
  );
};

const styles = {
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: 0,
    my: 1,
    width: '100%',
  },
  button: {
    mt: 3,
    width: '100%',
  },
};

FormRegistration.defaultProps = {
  label: 'Get Monthly Updates',
};

export default props => <FormRegistration />;
