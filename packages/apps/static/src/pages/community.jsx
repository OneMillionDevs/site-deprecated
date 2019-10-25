import { Site } from "templates"
import {
  FormBecomeGuide,
  FormBecomeGuideFull,
  FormBecomeCommunityManager,
} from "forms"

const GuideRegistration = props => {
  return (
    <Atom.Flex card center column flex={1}>
      <Atom.Heading lg heavy>
        Ethereum Community Mentor
      </Atom.Heading>
      <Atom.Heading sm normal>
        Help Etheruem Reach it's Full Potential
      </Atom.Heading>
      <Atom.HorizontalRule dash center />
      <Atom.Flex flex={2} p={3} width="100%">
        <Atom.Flex flex={1}>
          <FormBecomeGuide />
        </Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box card p={1} display="inline-block">
            <Atom.Image
              src="https://imgur.com/bXAJm7B.png"
              maxWidth={180}
              display="inline-block"
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}

export default props => (
  <Site>
    <Atom.Box gradient="gray" pb={4}>
      <A.Box>
        <A.Box fullWidth color="white" gradient="blueOcean" py={200} textCenter>
          <A.BackgroundImage
            opacity={0.3}
            ratio={0.5}
            src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
          <A.Heading giga heavy>
            Start a Community
          </A.Heading>
          <A.Heading lg thin>
            Get Support Starting a Community Online and in the Real World
          </A.Heading>
        </A.Box>
      </A.Box>

      <Atom.Container maxWidth={980}>
        <Atom.Flex alignCenter card between mt={-50} p={4} mt={-50}>
          <Atom.Box>
            <Atom.Heading thin>Community Manager Resource Kit</Atom.Heading>
            <Atom.Paragraph sm heavy mb={0}>
              Get your network involved.{" "}
              <strong>And get rewarded for doing it</strong>.
            </Atom.Paragraph>
          </Atom.Box>
          <Atom.Modal content={<GuideRegistration />}>
            <Atom.Button variant="green">Download Mentor Kit</Atom.Button>
          </Atom.Modal>
        </Atom.Flex>
      </Atom.Container>

      <Atom.Container maxWidth={1080} my={5}>
        <Atom.Flex>
          <Atom.Flex center column flex={1}>
            <Atom.Box p={4}>
              <Atom.Image
                card
                p={1}
                boxShadow={4}
                src="https://imgur.com/bXAJm7B.png"
                maxWidth={320}
              />
            </Atom.Box>
          </Atom.Flex>
          <Atom.Flex column card between p={4} my={4} flex={1}>
            <Atom.Box>
              <Atom.Heading md heavy>
                Have A Passion for Community Management?
              </Atom.Heading>
              <Atom.Paragraph>
                Connect the dots. Organize the people. And help shape the
                foundation for Ethereum to blossom.{" "}
                <strong>People are the heart of a project.</strong> It's
                essential we teach new developers best practices. Get users
                familiar with best practices
              </Atom.Paragraph>

              <Atom.Heading>
                Earn DEV token for Onboarding Developers
              </Atom.Heading>
              <Atom.Paragraph>
                That is where the Mentor program comes in. By curating a list of
                mentors, segregated by expertise, we hope to allow leaders to
                find followers, and followers to find leaders - and to encourage
                other parties to become leaders in the space.
              </Atom.Paragraph>
              <Atom.Modal content={<GuideRegistration />}>
                <Atom.Button variant="green">
                  Download Community Mentor Kit
                </Atom.Button>
              </Atom.Modal>
            </Atom.Box>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>

      <Atom.Box textCenter mt={5}>
        <Atom.Heading xxl heavy>
          Join the Community Manager Network
        </Atom.Heading>
        <Atom.Heading lg thin>
          Get connected with the people that connect the people.
        </Atom.Heading>
      </Atom.Box>
      <Atom.Container maxWidth={600} card my={5}>
        <FormBecomeCommunityManager />
      </Atom.Container>

      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Teach New Developers
              </A.Heading>
              <A.Heading lg thin>
                Tell Other Developers About Ethereum
              </A.Heading>
              <A.Paragraph>
                Pellentesque luctus tempus enim et convallis. Sed mattis justo
                vitae enim semper, tempor auctor ante convallis. Fusce maximus
                et risus id condimentum. Donec iaculis massa at nisl feugiat,
                sed ornare magna vehicula. Cras tincidunt mauris ipsum, ac
                aliquet nulla fermentum quis.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend />}>
                <A.Button sm>Where to Start</A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2}>
            <Atom.Image
              p={1}
              card
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container my={6}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Publish Content Regularily
              </A.Heading>
              <A.Paragraph>
                Help others stay up-to-date with what's happening in the
                ecosystem. Write about new projects, major releases happening
                with existing codebases, guides to try new tools, etc....
              </A.Paragraph>
              <a target="_blank" href="http://kauri.io/">
                <A.Button sm>Visit Kauri</A.Button>
              </a>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image
              p={1}
              card
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
            />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Maintain Open Source Project
              </A.Heading>
              <A.Heading lg thin>
                Publish Code for the Community
              </A.Heading>
              <A.Paragraph>
                Pellentesque luctus tempus enim et convallis. Sed mattis justo
                vitae enim semper, tempor auctor ante convallis. Fusce maximus
                et risus id condimentum. Donec iaculis massa at nisl feugiat,
                sed ornare magna vehicula. Cras tincidunt mauris ipsum, ac
                aliquet nulla fermentum quis.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend />}>
                <A.Button sm>Submit Project</A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2}>
            <Atom.Image
              p={1}
              card
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
    </Atom.Box>
  </Site>
)

const ReferAFriend = props => {
  return (
    <A.Box card>
      <Atom.Heading lg heavy>
        The Growing Etheruem Community
      </Atom.Heading>
      <Atom.Paragraph sm>
        Proin placerat, nibh vel porta fermentum, justo felis elementum odio,
        sed porttitor purus massa eu eros. Nam mollis lorem eget pretium
        interdum. Fusce consequat, lacus nec imperdiet posuere, ligula tortor
        vulputate felis, quis sodales arcu nibh vel nibh. Curabitur sit amet
        metus eleifend.
      </Atom.Paragraph>
    </A.Box>
  )
}
