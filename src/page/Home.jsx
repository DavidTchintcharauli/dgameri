import Header from "../components/Header"
import HeaderTop from '../components/HeaderTop'
import FurnitureCard from "../components/FurnitureCard";
import furnitureData from "../components/FurnitureData";
import Footer from "../components/Footer";

import '../styles/style.css'

export default function Home() {

    return (
        <div>
            <HeaderTop/>
            <Header />
            <div >
                {furnitureData.map((item) =>(
                    <FurnitureCard key={item.id} id={item.id} />
                ))}
            </div>
            home page
            <Footer />
        </div>
    )
}