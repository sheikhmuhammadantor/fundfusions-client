import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function MainLayout() {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section className="container mx-auto">
                <Outlet />
            </section>
            <section className="bg-base-300 text-base-content">
                <Footer />
            </section>
        </>
    )
}

export default MainLayout
