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
        placeholder="Company Name"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Molecule.Field
        variant={['text']}
        name="site"
        placeholder="Website"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Heading lg>Contact Information</Atom.Heading>
      <Molecule.Field
        variant={['text']}
        name="email-individual"
        placeholder="Email (Individual"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        variant={['text']}
        name="name-individual"
        placeholder="Name (Individual"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Heading lg>Details</Atom.Heading>
      <Molecule.Field
        variant={['text']}
        as="textarea"
        name="interest"
        placeholder="Involvement Interest"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Atom.Heading lg> Interests</Atom.Heading>

      {ContributionInterests.map(i => (
        <Molecule.Field
          as="input"
          type="checkbox"
          name={`interest-${i.value}`}
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

const ContributionInterests = [
  {
    value: 'marketing',
    label: 'Marketing',
  },
  {
    value: 'design',
    label: 'Design',
  },
  {
    value: 'analytics',
    label: 'Analytics',
  },
  {
    value: 'software-development',
    label: 'Software Development',
  },
  {
    value: 'content-creation',
    label: 'Content Creation',
  },
  {
    value: 'project-management',
    label: 'Project Management',
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
