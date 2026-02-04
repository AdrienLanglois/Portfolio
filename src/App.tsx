import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './pages/mainLayout';
import ProjectsSection from './pages/projectsShowcase/projectSection';
import ContactPage from './pages/contact/contactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path='/contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
