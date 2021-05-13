import React from "react";

const KeypressContext = React.createContext({
  activeKey: -1,
  setActiveKey: () => {}
});

export default KeypressContext;