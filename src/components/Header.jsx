import './style/Header.scss';

const code = '<';
const code2 = '/>';

export default function Header() {
    return (
        <header>
            <div className="top-navbar wrapper">
                <div className="header-logo"><a href="#"><span className='logo-decor'> {code} </span><span>Jonas<b>Petrikas</b></span><span className='logo-decor'> {code2} </span></a></div>
                <div className="nav-menu">
                    <a href="#" className='menu-item'>About me</a>
                    <a href="#" className='menu-item'>Portfolio</a>
                </div>
                <div className="cta">
                    <a href="#">Lets talk!</a>
                </div>
            </div>


        </header>

    )

}