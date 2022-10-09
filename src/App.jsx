// import reactLogo from './assets/react.svg'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Login";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

const queryClient = new QueryClient();

function App() {
  const [User, setUser] = useState(null);

  const onUserChange = (user) => {
    setUser(user);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ User, onUserChange }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<>404</>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
