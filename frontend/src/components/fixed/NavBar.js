import "./NavBar.css";


const NavBar = () => {
    return (
        //FIXME: hamburger doesn't show submenu
        <nav className="navbar collapseOnSelect navbar-dark navbar-expand-lg fixed-top py-lg-0">
            <a className="navbar-brand" href="/">
                <img src="img/logoInverse.png" width="50" heigth="50" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
            </div>

            <div className="collapse navbar-collapse" id="navbarResponsive">

                <a className="admin" href="/admin">Admin</a>

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="/portfolio">
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/portfolio" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Portfolio
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/thema">Thema</a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="dropdown-item" href="/landschap">Landschap</a></li>
                                    <li><a className="dropdown-item" href="/stad">Stad</a></li>
                                    <li><a className="dropdown-item" href="/buiten">Buiten</a></li>
                                    <li><a className="dropdown-item" href="/reizen">Reizen</a></li>
                                    <li><a className="dropdown-item" href="/water">Water</a></li>
                                    <li><a className="dropdown-item" href="/industrie">Industrie</a></li>
                                    <li><a className="dropdown-item" href="/mensen">Mensen</a></li>
                                    <li><a className="dropdown-item" href="/scenes">Scenes</a></li>
                                    <li><a className="dropdown-item" href="/abstract">Abstract</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="/kleur">Kleur</a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="dropdown-item" href="/blauw">Blauw</a></li>
                                    <li><a className="dropdown-item" href="/geel">Geel</a></li>
                                    <li><a className="dropdown-item" href="/groen">Groen</a></li>
                                    <li><a className="dropdown-item" href="/rood">Rood</a></li>
                                    <li><a className="dropdown-item" href="/kleurrijk">Kleurrijk</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="/specials">Specials</a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="dropdown-item" href="/camerakwast">Camera & Kwast</a></li>
                                    <li><a className="dropdown-item" href="/boxbeeld">Boxbeeld</a></li>
                                    <li><a className="dropdown-item" href="/geensceneerd">Geënsceneerd</a></li>

                                </ul>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="/onzeapps">Onze Apps</a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="dropdown-item" href="/mijnfavorieten">Mijn Favorieten</a></li>
                                    <li><a className="dropdown-item" href="/preview">Preview</a></li>
                                    <li><a className="dropdown-item" href="/lijstenmaker">Lijstenmaker</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="/blog"><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/blog" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/laatste">Laatse post</a>
                            <a className="dropdown-item" href="/datum1">Voorgaande posts</a>
                        </div>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="/overEls"><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/overEls" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Over Els
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/standpunt">Fotografie Standpunt</a>
                            <a className="dropdown-item" href="/nieuws">Nieuws</a>
                            <a className="dropdown-item" href="/contact">Contact</a>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-2">
                    <div className="form-group input-group-append">
                        <input className="form-control my-lg-2 mr-sm-2" type="search" placeholder="Zoek op onderwerp"
                               aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Zoek</button>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;
