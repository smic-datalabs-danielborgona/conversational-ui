import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Appbar'
import ChatUI from './pages/Chatbox'
import Documentation from './pages/Documentation'
import UserPolicy from './pages/UserPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="/home" element={<ChatUI />} />
          <Route path="/userpolicy" element={<UserPolicy />} />
          <Route path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
