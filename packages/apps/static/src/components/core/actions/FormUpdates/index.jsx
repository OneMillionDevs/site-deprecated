export default props => {
  return (
    <A.Box card textCenter boxShadow={1} p={4} {...props.styled}>
      <A.Heading lg heavy>
        Subscribe to One Million Developers (1MD)
      </A.Heading>
      <A.Paragraph>
        Want to receive updates on new features, products, and developments?
      </A.Paragraph>
      <A.Paragraph>
        Want to track the ecosystem's progress against our goal of 1 million
        Ethereum developers?
      </A.Paragraph>
      <A.Paragraph>
        Subscribe to receive updates and our monthly newsletter!
      </A.Paragraph>
      <A.Form>
        <A.Field
          name="email"
          // label='Email'
          placeholder="Email"
        />
        <A.Button type="submit" lg fullWidth width={1} variant="green">
          Register
        </A.Button>
      </A.Form>
    </A.Box>
  )
}
