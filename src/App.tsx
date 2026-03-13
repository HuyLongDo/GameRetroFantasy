import { Routes, Route } from 'react-router-dom'
import MainMenu from './components/mainmenu/MainMenu'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
    </Routes>
  )
}

export default App
