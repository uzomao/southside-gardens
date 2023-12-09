import React, { useState } from "react";

// Components
import Layout from "./components/layout";

// Screens
import Start from "./screens/start";
import Garden from "./screens/garden"
import Intro from "./screens/intro";

const App = () => {

  const start = 'start'
  const intro = 'intro'
  const garden = 'garden'

  const screenNames = {
    start,
    intro,
    garden,
  }

  const [currentScreenName, setCurrentScreenName] = useState(screenNames.intro)
  const [ visitorDetails, setVisitorDetails ] = useState([])

  const currentVisitor = {
    name: visitorDetails[0],
    garden: visitorDetails[1]
  }

  const screenComponents = {
    start: <Start setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} />,
    intro: <Intro setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} setVisitorDetails={setVisitorDetails} />,
    garden: <Garden setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} currentVisitor={currentVisitor} />
  }

  return (
    <Layout showSky={currentScreenName !== garden}>
      <div style={currentScreenName === start ? { position: 'absolute', width: '100%'} : {}}>
        { screenComponents[currentScreenName] }
      </div>
    </Layout>
  )
}

export default App
