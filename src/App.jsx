import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/rootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
