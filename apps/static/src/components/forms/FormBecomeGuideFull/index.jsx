import {useState} from 'react';

export default () => {
  const [isSubmit, setIsSubmit] = useState();
  const onSubmit = values => {
    var url =
      'https://dv3rxjpbdf.execute-api.us-east-1.amazonaws.com/prod/emailUpdates';
    window
      .fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          organization: values.organization,
          listType: 'coalition',
        }),
      })
      .then(res => {
        if (res.json)
          res.json().then(msg => {
            setIsSubmit(true);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Molecule.Form callback={onSubmit}>
      <Atom.Field
        disabled={isSubmit}
        name="name"
        label="Name"
        placeholder="Name"
      />
      <Atom.Field
        disabled={isSubmit}
        name="email"
        label="Email"
        placeholder="Email"
      />
      <Atom.Field
        disabled={isSubmit}
        name="github"
        label="Github"
        placeholder="Github"
      />
      <Atom.Field
        disabled={isSubmit}
        inputAs="textarea"
        name="interests"
        label="Interests"
        placeholder="What are you interests in the Ethereum ecosystem?"
        styledInput={{
          minHeight: 100,
        }}
      />
      <Atom.Button
        type="submit"
        lg
        disabled={isSubmit}
        fullWidth
        width={1}
        variant="green">
        {isSubmit
          ? 'Submission Complete (Please Check Inbox)'
          : 'Become A Guide'}
      </Atom.Button>
    </Molecule.Form>
  );
};
