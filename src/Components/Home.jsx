import PrimarySearchAppBar from "./Navbar";
import ActionAreaCard from './Offers';
import NearMeCarousel from './Nearme';
import { Footer } from './Footer';
import { Links } from './Links';
import Featured from './Featured';

export const Home = () => {
    return (
        <div>
            <PrimarySearchAppBar/>
            <ActionAreaCard />
            <NearMeCarousel />
            <Featured />
            <Links />
            <Footer />
        </div>
    )
}