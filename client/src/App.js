import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/normal/Home";
import Header from "./components/normal/Header";
import Footer from "./components/normal/Footer";
import GetStarted from "./components/normal/GetStarted";
import About from "./components/normal/About";
import About2 from "./components/advanced/About";
import Minimized from "./components/advanced/Minimized";
import Create from "./components/normal/Create";
import TodoList from "./components/normal/TodoList";
import MainTodo from "./components/normal/MainTodo";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path='/todos-list/:id' element={<MainTodo />} />

          <Route path="/todos-list" element={<TodoList />} />

          <Route path="/create" element={<Create />} />
 
          <Route
            path="/contact"
            element={
              <div>
                <Header />
                <Footer />
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div>
                <Header />
                <About2 />
                <About />
                <Footer />
              </div>
            }
          />

          <Route
            path="/get-started"
            element={
              <div>
                <Header />
                <Minimized />
                <GetStarted />
                <Footer />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
