import React, { lazy, Suspense } from "react";
import Chat from "../../chat-app/src/App";
import Email from "../../email-app/src/App";


function App() {
  return (
    <div>
      <h1>Micro-Frontend Host App</h1>
      <Suspense fallback={<div>Loading Chat...</div>}>
        <Chat />
      </Suspense>
      <Suspense fallback={<div>Loading Email...</div>}>
        <Email />
      </Suspense>
    </div>
  );
}

export default App;
