import React from "react";
import Dashboard from "./components/Dashboard";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <PostProvider>
      <Dashboard />
    </PostProvider>
  );
}

export default App;
