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
import WorksPartyPlanner from './pages/WorksPartyPlanner';
import WorksWhiskers from './pages/WorksWhiskers';
import WorksImprintCorp from './pages/WorksImprintCorp';
import AllWorks from "./pages/AllWorks";
import NotFound from './pages/NotFound';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="works" element={<AllWorks/>}/>
                <Route path="lighthearted" element={<WorksLighthearted/>}/>
                <Route path="overtower" element={<WorksOvertower/>}/>
                <Route path="webglmodel" element={<WorksWebGLModel/>}/>
                <Route path="cyberbuddy" element={<WorksCyberBuddy/>}/>
                <Route path="ts4fashion" element={<WorksTS4Fashion/>}/>
                <Route path="edumonster" element={<WorksEdumonster/>}/>
                <Route path="pakobox" element={<WorksPakobox/>}/>
                <Route path="partyplanner" element={<WorksPartyPlanner/>}/>
                <Route path="whiskers" element={<WorksWhiskers/>}/>
                <Route path="imprintcorp" element={<WorksImprintCorp/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
