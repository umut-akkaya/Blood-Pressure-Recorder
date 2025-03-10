import Header from "./component/layout/Header.tsx";
import Footer from "./component/layout/Footer.tsx";
import {Route, Routes, Link} from "react-router";
import Content from "./pages/Content.tsx";
import Home from "./pages/Home.tsx";
import ShowTension from "./pages/ShowTension.tsx";

function App() {

    return (
        <>
            <Header>
                <Link to="/"><h1>Save Tension</h1></Link>
            </Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/content" element={<Content/>}/>
                    <Route path="/showing-tension" element={<ShowTension />} />
                </Routes>
            <Footer/>
        </>
    )
}

export default App
