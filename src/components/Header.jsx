import globe from '../assets/globe.png';


export default function Header() {
    return (
        <header>
            <img src={globe} alt="globe icon" />
            <h1>My travel journal!</h1>
            <img src={globe} alt="globe icon" />

        </header>
    )
}