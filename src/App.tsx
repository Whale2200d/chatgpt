import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChatGpt from './pages/ChatGpt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatGpt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
