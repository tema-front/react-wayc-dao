import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { Ecosystem } from "./Ecosystem"
import { Home } from "./Home"

export const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </HashRouter>
    )
}