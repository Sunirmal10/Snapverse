
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>} />
        {/* <Route path="/video/:id" element={<VideoDetail/>} />
        <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
