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

  const [currentScreenName, setCurrentScreenName] = useState(screenNames.start)
  const [ visitorDetails, setVisitorDetails ] = useState([])

  const screenComponents = {
    start: <Start setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} />,
    intro: <Intro setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} setVisitorDetails={setVisitorDetails} />,
    garden: <Garden setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} />
  }

  console.log(visitorDetails)

  return (
    <Layout>
      <div style={currentScreenName === start ? { position: 'absolute', width: '100%'} : {}}>
        { screenComponents[currentScreenName] }
      </div>
    </Layout>
  )
}

export default App
