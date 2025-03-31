import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import CoursesPage from './components/coursespage'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App
