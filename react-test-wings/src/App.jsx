// import reactLogo from './assets/react.svg'
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import Posts from './pages/Posts'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()



function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home form={'login'} />} />
      <Route path="/register" element={<Home form={'register'} />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="*" element={<>404</>} />
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
