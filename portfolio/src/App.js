import React, { Suspense, useState, useEffect } from "react";
import ErrorBoundary from "./errorBoundary";
import "./App.css";
import ContextProvider from './contextProvider'

const Page1 = React.lazy(() => import("./page"));

function App() {

  return (
    <ErrorBoundary>
    <div className="App">
    <ContextProvider>
           <Suspense fallback={<div>Loading...</div>}>
    {/* <h1>Hiiiiiiiiiii</h1> */}
             <Page1/>
           </Suspense> 
    </ContextProvider>
    </div>
     </ErrorBoundary>
  );
}

export default App;
