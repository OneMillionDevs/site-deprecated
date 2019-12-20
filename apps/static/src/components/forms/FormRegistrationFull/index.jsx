import React from 'react';
import useForm from 'react-hook-form';

/* --- Component --- */
const FormRegistration = props => {
  const {handleSubmit, register, errors} = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Field
        name="email"
        placeholder="Email"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="name"
        placeholder="Name"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="phone"
        placeholder="Phone"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        as="textarea"
        name="interest"
        placeholder="Interest"
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

export default FormRegistration;
