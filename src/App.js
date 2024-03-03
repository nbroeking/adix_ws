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
          <Contributor
            fullName="Rebecca Adix"
            title="Senior Consultant"
            avatar="./headshot.jpg"
          >
            <Flex>
              <NavLink href='mailto:rebecca@adixworkforcesolutions.com'>Contact Me - Email</NavLink>
            </Flex>
          </Contributor>
          <ScrollDownIndicator/>
        </Hero>
      <Section
        bg='#EFEFEF'
        heading="Executive Experience">
        <div style={{minHeight: "30vh"}}>
          <div style={{paddingLeft:"10vw", paddingRight:"10vw"}}>
            Becky previously served as an Executive Vice President of Human Resources for the largest integrated healthcare system in the United States. Her extensive background includes occupying executive and leadership positions at various levels, ranging from hospitals and lines of business to regional and corporate settings.
          </div>
          <br/>
          <br/>
          <div style={{paddingLeft:"10vw", paddingRight:"10vw"}}>
            With over 23 years of executive healthcare leadership experience, Becky possesses an extensive knowledge of all facets of human resources and healthcare operations. Becky is committed to providing action-based, practical solutions allowing organizations to be more effective while providing innovative strategies to meet evolving workforce needs.
          </div>
        </div>

      </Section>
      <br/>
      <br/>
      <Section
        bg='white'
        heading="Services Offered">
          <div style={{minHeight: "30vh"}}>
          <Flex flexWrap="wrap" justifyContent="center" h="100%">
            <Feature icon="📋" description="By leveraging data-driven decision-making processes and insights gathered from comprehensive assessments,create a robust and flexible framework to optimize the delivery of HR services for maximum effectiveness and quality">
              Assess
            </Feature>
            <Feature icon="🧩" description="Design and creation of an HR Strategic Roadmap allowing organizations to achieve greater value on their talent investment through an aligned, executable and integrated enterprise strategy">
              Align
            </Feature>
            <Feature icon="⛔️" description="Develop a clear and adaptable framework to effectively manage and mitigate labor risks, improve communications and reduce conflicts between leadership and staff">
              Avoid
            </Feature>
            <Feature icon="📩" description="Implement a tiered accountability framework extending from executive leadership to front-line supervisors, promote the adoption of practices to significantly increase pipeline for key roles, boost employee engagement and support retention">
              Accelerate
            </Feature>
          </Flex>
          </div>
      </Section>
      <Flex alignItems="center" p={3} bg={'#EFEFEF'}>
        <Small color="grey" ml="auto" mr="auto">© Adix Workforce Solutions, 2024</Small>
      </Flex>
    </Provider>
  );
}

export default App;
