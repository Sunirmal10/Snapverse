
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        {/* <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
