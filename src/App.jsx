import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimerPage from './pages/TimerPage'
import BreakPage from './pages/BreakPage'
import FoodManagementPage from './pages/FoodManagementPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-amber-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/break" element={<BreakPage />} />
          <Route path="/manage" element={<FoodManagementPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App