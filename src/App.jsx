import { useState } from 'react'
import SearchSection from './components/SearchSection'
import Notes from './components/Notes'

function App() {

  return (
    <>
      <div className='outer-layout-div'>
      <SearchSection />
      <Notes />
      </div>
    </>
  )
}

export default App
