import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Features from "./pages/Features";
import Business from "./pages/Business";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";


export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Header/>
            <main className="container mx-auto py-8">
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/business" element={<Business />} />
                        <Route path="/roadmap" element={<Roadmap />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </main>
        </BrowserRouter>

    )
}