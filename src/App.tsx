import './App.css'
import { Container } from '@mui/material'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { FullPost, Home, Login, Registration } from './pages'
import { AddPost } from './pages/AddPost/AddPost'

function App() {

  return (
    <>
      <Header />
      <Container maxWidth="lg">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>

      </Container>
    </>
  )
}

export default App