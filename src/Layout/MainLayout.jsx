import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function MainLayout() {
    return (
        <>
            <section className="mt-2">
                <Navbar />
            </section>
            <section className="container mx-auto px-5 mt-8">
                <Outlet />
            </section>
            <section className="bg-base-200 text-base-content">
                <Footer />
            </section>
        </>
    )
}

export default MainLayout
