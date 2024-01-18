import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AccountTable } from './components/AccountTable/AccountTable'
import { ProfilesTable } from './components/ProfilesTable/ProfilesTable'
import { CampaignsTable } from './components/CampaingsTable/CampaignsTable'
import './App.css'

const App: React.FC = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='' element={<AccountTable />} />
        <Route path='/profiles' element={<ProfilesTable />} />
        <Route path='/campaigns' element={<CampaignsTable />} />
      </Routes>
    </div>
  )
}

export default App
