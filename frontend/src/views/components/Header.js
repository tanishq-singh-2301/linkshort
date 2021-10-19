import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <>
            <header id="header">
                <nav>
                    <div className="container">
                        <div className="text-center">
                            <i className="nav-brand text-dark">LinkShort</i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;