import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <h1 class="min-h-[50vh] text-3xl font-bold underline">Hello world!</h1>
            <Footer />
        </>
    );
}

export default Home;
