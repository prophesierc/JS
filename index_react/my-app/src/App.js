import React, {useEffect, useState} from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
import { lazy } from 'react'

const App = () => 
{
  return(
    <div>
      <SearchBar/>
    </div>
  )
}

export default App