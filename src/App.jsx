import React, { useState } from "react";

// Components
import Layout from "./components/layout";

// Screens
import Start from "./screens/start";
import Garden from "./screens/garden"

const App = () => {

  const start = 'start'
  const garden = 'garden'

  const screenNames = {
    start,
    garden,
  }

  const [currentScreenName, setCurrentScreenName] = useState(screenNames.start)

  const screenComponents = {
    start: <Start setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} />,
    garden: <Garden setCurrentScreenName={setCurrentScreenName} screenNames={screenNames} />
  }

  return (
    <Layout>
      <div style={currentScreenName === start ? { position: 'absolute', width: '100%'} : {}}>
        { screenComponents[currentScreenName] }
      </div>
    </Layout>
  )
}

export default App
