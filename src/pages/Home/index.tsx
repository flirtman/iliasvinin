import React from "react";
import Header from "../../components/Header";
import SectionsAboutMe from "./Sections/AboutMe";
import SectionsServices from "./Sections/Services";
import SectionsWorks from "./Sections/Works";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <SectionsAboutMe/>
            <SectionsServices/>
            <SectionsWorks/>
            {/*<SectionsBlog/>*/}
            <Footer/>
        </>
    )
};

export default HomePage;
