import React, { useState, useEffect } from 'react';
import DataFetchingComponent from './DataFetchingComponents';
import Header from './Header';
import './mainBodyStyle.css';

function App() {
           
    return(
      <>
      <Header />
      <div className='main-container'>
      <DataFetchingComponent />
      </div>
      </>
    )
}

export default App
