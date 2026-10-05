import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./home"
import Blog from "./blog"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App