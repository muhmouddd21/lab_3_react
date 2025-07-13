import './App.css'
import AboutMe from './components/AboutMe';
import MainSection from './components/MainSection';
import {Routes,Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails';
function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/movies/:id" element={<MovieDetails/>} />
    </Routes>
      
    </>
  )
}

export default App
