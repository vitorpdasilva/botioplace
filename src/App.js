import React, { useState, useEffect } from "react";
import Amplify, { Auth, Hub } from 'aws-amplify';
import { Authenticator, AmplifyTheme } from 'aws-amplify-react';

import aws_exports from './aws-exports';
import "./App.css";


Amplify.configure(aws_exports);

const App = () => {
  const [user, setUser] = useState(null);
  console.log({ hub: Hub });
  useEffect(() => {
    const getUserData = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user || null);
    }
    getUserData();
  }, []);

  if (!user) return <Authenticator theme={theme} />
  return <div>App</div>;

}

const theme = {
  ...AmplifyTheme,
}

// export default WithAuthenticator(App, true, [], null, theme);
export default App;
