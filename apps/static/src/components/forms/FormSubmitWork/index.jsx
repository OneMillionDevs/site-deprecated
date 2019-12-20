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
        variant={['text']}
        name="name"
        placeholder="Name"
        register={register}
        errors={errors}
        sx={styles.field}
      />

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
        name="company"
        placeholder="Company"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Molecule.Field
        variant={['text']}
        name="role"
        placeholder="Role"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Heading lg>Project Details</Atom.Heading>

      <Molecule.Field
        variant={['text']}
        as="textarea"
        name="description"
        placeholder="Project Description"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Atom.Heading lg>Cateogories</Atom.Heading>

      {WorkTypeCategories.map(i => (
        <Molecule.Field
          as="input"
          type="checkbox"
          name={`category-${i.value}`}
          value={i.value}
          label={i.label}
          register={register}
          errors={errors}
          sx={styles.field}
        />
      ))}

      <Atom.Button md sx={styles.button}>
        {props.label}
      </Atom.Button>
    </form>
  );
};

const WorkTypeCategories = [
  {
    value: 'identity',
    label: 'Identity',
  },
  {
    value: 'finance',
    label: 'Finance',
  },
  {
    value: 'social-impact',
    label: 'Social Impact',
  },
  {
    value: 'governance',
    label: 'Governance',
  },
  {
    value: 'scalability',
    label: 'Scalability',
  },
];

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
  label: 'Submit',
};

export default FormRegistration;
