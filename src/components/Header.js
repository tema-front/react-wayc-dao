import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isMobileMenu) body.style.overflow = 'hidden'
        else body.style.overflow = 'auto'

    }, [isMobileMenu])

    return (
        <header class="header-wrp">
            <div class="header">
                <div class="header-item logo-wrp">
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
                </div>
                <nav class="header-item navigation">
                    <ul class="navigation-list">
                        <li class="navigation-list-item txt-regular">
                            <Link to={"/ecosystem"} class="navigation-list-item-link">Ecosystem</Link>
                        </li>
                        <li class="navigation-list-item txt-regular">
                            <span class="navigation-list-item-txt" href="#">Developers</span>
                            <div className="navigation-list-item-menu">
                                <a href="#" className="navigation-list-item-menu-link">Documentation</a>
                                <a href="#" className="navigation-list-item-menu-link">Dai.js</a>
                                <a href="#" className="navigation-list-item-menu-link">Developer Guides</a>
                                <a href="#" className="navigation-list-item-menu-link">Bug Bounty</a>
                            </div>
                        </li>
                        <li class="navigation-list-item txt-regular">
                            <span class="navigation-list-item-txt" href="#">Learn</span>
                            <div className="navigation-list-item-menu">
                                <a href="#" className="navigation-list-item-menu-link">Whitepaper</a>
                                <a href="#" className="navigation-list-item-menu-link">FAQs</a>
                            </div>
                        </li>
                        <li class="navigation-list-item txt-regular">
                            <span class="navigation-list-item-txt" href="#">Foundation</span>
                            <div className="navigation-list-item-menu">
                                <a href="#" className="navigation-list-item-menu-link">Contact</a>
                                <a href="#" className="navigation-list-item-menu-link">Job Opportunities</a>
                            </div>
                        </li>
                        <li class="navigation-list-item txt-regular">
                            <span class="navigation-list-item-txt" href="#">Community</span>
                            <div className="navigation-list-item-menu">
                                <a href="#" className="navigation-list-item-menu-link">Blog</a>
                                <a href="#" className="navigation-list-item-menu-link">Chat</a>
                                <a href="#" className="navigation-list-item-menu-link">Forum</a>
                            </div>
                        </li>
                        <li class="navigation-list-item txt-regular">
                            <a href="#" class="navigation-list-item-link">Vote</a>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => { setIsMobileMenu(true) }} class="header-mobile-btn">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg>
                </button>
            </div>
            {isMobileMenu && <MobileMenu closeMobileMenu={() => setIsMobileMenu(false)} />}
        </header>
    )
}