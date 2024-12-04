import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function MainLayout() {
    return (
        <>
            <section className="mt-2">
                <Navbar />
            </section>
            <section className="container mx-auto px-5 my-12">
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default MainLayout
