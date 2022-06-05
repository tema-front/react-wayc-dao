import { Link } from "react-router-dom"

export const MobileMenu = ({ closeMobileMenu }) => {
    return (
        <div className="mobileMenu">
            <div className="mobileMenu-logo-wrp">
                <Link to={"/home"} class="header-item logo-link">
                    <svg width="38" height="20" viewBox="0 0 38 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.89486 4.10903V19.0599H0V1.69174C0 0.298924 1.59119 -0.495032 2.70406 0.342453L16.4546 10.6903C16.8786 11.0094 17.1279 11.5091 17.1279 12.0396V19.0599H14.2331V12.6415L2.89486 4.10903Z"
                            fill="#333333"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M34.5319 4.10903V19.0599H37.4268V1.69174C37.4268 0.298924 35.8356 -0.495032 34.7227 0.342453L20.9721 10.6903C20.5482 11.0094 20.2988 11.5091 20.2988 12.0396V19.0599H23.1937V12.6415L34.5319 4.10903Z"
                            fill="#333333"></path>
                    </svg>
                </Link>
                <button onClick={closeMobileMenu} className="mobileMenu-cross">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
                </button>
            </div>
            <nav className="mobileMenu-navigation">
                <ul className="mobileMenu-navigation-list">
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <Link to={"/ecosystem"} class="navigation-list-item-link mobile">Ecosystem</Link>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-developers" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-developers" class="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Developers</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Documentation</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Dai.js</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Developer Guides</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Bug Bounty</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-learn" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-learn" class="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Learn</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Whitepaper</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">FAQs</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-foundation" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-foundation" class="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Foundation</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Contact</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Job Opportunities</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-community" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-community" class="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Community</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Blog</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Chat</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Forum</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <Link to={"/"} class="navigation-list-item-link mobile">Vote</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}