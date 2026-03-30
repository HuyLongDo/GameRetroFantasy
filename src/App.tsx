import { Routes, Route } from 'react-router-dom'
import MainMenu from './components/mainmenu/MainMenu'
import GamePage from './components/gamepage/GamePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-theme-main text-theme-main font-serif">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
