import React from "react";

// Components
import Layout from "./components/layout";

// Screens
import Start from "./screens/start";

export default () => (
  <Layout>
    <div style={{ position: 'absolute', width: '100%'}}>
      <Start />
    </div>
  </Layout>
);
