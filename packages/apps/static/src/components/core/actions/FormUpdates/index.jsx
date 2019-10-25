import { useState } from "react"

export default props => {
  const [isSubmit, setIsSubmit] = useState()

  const onSubmit = values => {
    var url =
      "https://dv3rxjpbdf.execute-api.us-east-1.amazonaws.com/prod/emailUpdates"
    window
      .fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organization: values.organization,
          listType: "coalition",
        }),
      })
      .then(res => {
        if (res.json)
          res.json().then(msg => {
            setIsSubmit(true)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <A.Box card textCenter boxShadow={1} p={4} {...props.styled}>
      <A.Heading xxl thin>
        One Million Developers Newsletter
      </A.Heading>
      <MonthlyAnalytics />
      <A.Container maxWidth={425}>
        <A.Form callback={onSubmit}>
          <A.Field disabled={isSubmit} name="email" placeholder="Email" />
          <A.Button
            type="submit"
            disabled={isSubmit}
            lg
            fullWidth
            width={1}
            variant="green"
          >
            {isSubmit ? "Please Check Your Email To Verify" : "Register"}
          </A.Button>
        </A.Form>
      </A.Container>
    </A.Box>
  )
}

const MonthlyAnalytics = props => {
  return (
    <Atom.Container maxWidth={1080} my={1}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://imgur.com/IE9oe2y.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading md heavy>
              One Million Devs Updates
            </Atom.Heading>
            <Atom.Paragraph>
              Want to know when new platforms, resources, and tools are
              released? We'll keep you up to date on the latest products being
              used to help grow the ecosystem.
            </Atom.Paragraph>

            <Atom.Heading md heavy>
              Monthly Analytics Reports
            </Atom.Heading>
            <Atom.Paragraph>
              The Ethereum ecosystem is continually growing. We would like to
              quantify that for you. Subscribe to receive monthly reports
              analyzing the health of the Ethereum ecosystem.
            </Atom.Paragraph>

            <Atom.Heading md heavy>
              A Curated Experience
            </Atom.Heading>
            <Atom.Paragraph>
              Don't have time to separate the signal from the noise? Let us
              distill the ecosystem's activities into an easily-digestible form.
            </Atom.Paragraph>
            <Atom.Paragraph xs mt={3} mb={0}>
              <strong>Are you a journalist or reporter?</strong> Want detailed
              quarterly data?
            </Atom.Paragraph>
            <Atom.Span xxs tag="white">
              Register for Quarterly Report
            </Atom.Span>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
