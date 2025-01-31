import React, { lazy, Suspense } from "react";

const Chat = lazy(() => import("../../chat-app/src/App.jsx"));
const Email = lazy(() => import("../../email-app/src/App.jsx"));

function App() {
  return (
    <div>
      <h1>Main Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Chat />
        <Email />
      </Suspense>
    </div>
  );
}

export default App;
