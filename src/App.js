import './App.css';
import { Provider, Heading, NavLink, Small, Absolute} from 'rebass'
import {
  Section, Hero, ScrollDownIndicator, Flex, Feature, Contributor
} from 'react-landing-page'

function App() {

  return (
    <Provider>
      <Absolute pb={5}>
        <Absolute zIndex={1} left={0} right={0} top={0}>
          <Flex is="header" p={3}>
            <NavLink href="/" fontSize={3}>Adix Workforce Solutions</NavLink>
          </Flex>
        </Absolute>
      </Absolute>
        <Hero
          color="black"
          bg="white"
          backgroundImage="https://source.unsplash.com/low-angle-photography-of-building-VviFtDJakYk"
          style={{height: "100px"}}
        >
          <Heading>Adix Workforce Solutions</Heading>
          <br/>
          <br/>
          <div classes={{height: "50px"}}></div>
          <Contributor
            fullName="Rebecca Adix"
            title="Senior Consultant"
            avatar="./headshot.jpg"
          >
            <Flex>
              <NavLink href='mailto:rebecca@adixworkforcesolutions.com'>Email</NavLink>
            </Flex>
          </Contributor>
          <ScrollDownIndicator/>
        </Hero>
      <Section
        bg='#EFEFEF'
        heading="Executive Experience">
        Becky previously served as an Executive Vice President of Human Resources for the largest integrated healthcare system in the United States. Her extensive background includes occupying executive and leadership positions at various levels, ranging from hospitals and lines of business to regional and corporate settings.
        <br/>
        <br/>
        With over 23 years of executive healthcare leadership experience, Becky possesses an extensive knowledge of all facets of human resources and healthcare operations. Becky is committed to providing action-based, practical solutions allowing organizations to be more effective while providing innovative strategies to meet evolving workforce needs.
      </Section>
      <br/>
      <br/>
      <Heading textAlign="center">Services Offered</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Feature icon="" description="I do a great job at accessing">
          Access
        </Feature>
        <Feature icon="🔥" description="What your app can do">
          Features
        </Feature>
        <Feature icon="📩" description="How to keep in touch">
          Sign Up
        </Feature>
      </Flex>
      <Flex is="footer" alignItems="center" p={3}>
        <Small color="grey" ml="auto">© Adix Workforce Solutions, 2024</Small>
      </Flex>
    </Provider>
  );
}

export default App;
