import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function MainLayout() {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section className="text-center my-12 text-2xl">
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default MainLayout
