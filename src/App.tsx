import { Routes, Route } from 'react-router-dom'
import MainMenu from './components/mainmenu/MainMenu'
import GamePage from './components/gamepage/GamePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/game/:id" element={<GamePage />} />
    </Routes>
  )
}

export default App
