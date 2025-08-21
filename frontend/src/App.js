import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import ConstitutionalRights from "./pages/ConstitutionalRights";
import CriminalLaws from "./pages/CriminalLaws";
import SearchLaws from "./pages/SearchLaws";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/constitutional-rights" element={<ConstitutionalRights />} />
            <Route path="/criminal-laws" element={<CriminalLaws />} />
            <Route path="/search" element={<SearchLaws />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;