export default props => {

  return (    
    <A.Box card textCenter boxShadow={3} p={4} {...props.styled}>
      <A.Heading lg heavy>Monthly Progress Updates</A.Heading>
      <A.Paragraph>
        Want to stay updated on the progress<br/>of 1 Million Etheruem developers?
      </A.Paragraph>
      <A.Form>
        <A.Field
          name='email'
          // label='Email'
          placeholder='Email'
        />
        <A.Button type='submit' lg fullWidth width={1} variant='green'>Register</A.Button>
      </A.Form>

    </A.Box>
  )
}