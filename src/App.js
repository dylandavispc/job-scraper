import React, { useState } from 'react';
import './App.css';

import GoogleSearch from './components/GoogleSearch';
import JobBoard from "./components/JobBoard";

export default function App() {
  return (
    <div className="App">
      <GoogleSearch />
      <JobBoard />
    </div>
  );
};
