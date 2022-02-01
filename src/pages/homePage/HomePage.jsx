import Header from "../../client/Header";
import Footer from "../../client/Footer/Footer";
import Hero from "./Hero/Hero";
import Card from "./Cards/Cards";
import {useState} from "react";

const HomePage = () => {
    const [superheroNickname, setSuperheroNickname] = useState("")

    const handleSuperheroNameChanged = name => {
        setSuperheroNickname(name);
    };


    return (
        <div className="homePage">
            <Header/>
            <Hero onSuperheroNicknameChange={handleSuperheroNameChanged}/>
            <Card superheroNickname={superheroNickname}/>
            <Footer/>
        </div>
    );
};
export default HomePage;
