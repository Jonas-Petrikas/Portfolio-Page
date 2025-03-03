import './style/Header.scss';

export default function Header() {
    return (
        <header>
            <div className="top-navbar">
                <div className="logo"><span>JonasPetrikas</span></div>
                <div className="nav-menu">
                    <a href="#">About me</a>
                    <a href="#">Portfolio</a>
                </div>
                <div className="cta">
                    <a href="#">Lets talk!</a>
                </div>
            </div>


        </header>

    )

}