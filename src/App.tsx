import React from "react";

import Routes from "./routes";
import GlobalStyle from "./Styles/global";

const App: React.FC = () => {
  return (
    <>
      {/* <PersistGate loading={null} persistor={persistor}>
				</PersistGate> */}
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
