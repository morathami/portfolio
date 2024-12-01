import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import WorksLighthearted from './pages/WorksLighthearted';
import WorksOvertower from './pages/WorksOvertower';
import WorksWebGLModel from './pages/WorksWebGLModel';
import WorksCyberBuddy from './pages/WorksCyberBuddy';
import WorksTS4Fashion from './pages/WorksTS4Fashion';
import WorksEdumonster from './pages/WorksEdumonster';
import WorksPakobox from './pages/WorksPakobox';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lighthearted" element={<WorksLighthearted />} />
          <Route path="overtower" element={<WorksOvertower />} />
          <Route path="webglmodel" element={<WorksWebGLModel />} />
          <Route path="cyberbuddy" element={<WorksCyberBuddy />} />
          <Route path="ts4fashion" element={<WorksTS4Fashion />} />
          <Route path="edumonster" element={<WorksEdumonster />} />
          <Route path="pakobox" element={<WorksPakobox />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
