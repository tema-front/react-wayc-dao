import { useState } from 'react'
import makerFoundationGovernanceImg from '../imgs/ecosystem-maker-foundation-governance.png'
import makerFoundationMigrateImg from '../imgs/ecosystem-maker-foundation-migrate.png'
import { EcosystemCommunity } from './EcosystemCommunity'

export const EcosystemContent = () => {
    const [isEcosystemCommunity, setIsEcosystemCommunity] = useState(0);

    return (
        <main className="content ecosystem">
            <div className="ecosystem-title-wrp">
                <h1 className="ecosystem-title txt-bold">Maker Ecosystem</h1>
                <span className="ecosystem-subtitle txt-regular">Explore apps and services using Dai.</span>
            </div>
            <section className="maker-foundation-wrp">
                <h2 className="maker-foundation-title txt-medium">Made by the Maker Foundation</h2>
                <div className="maker-foundation">
                    <a href='#' className="maker-foundation-link">
                        <div className="maker-foundation-link-img">
                            <img src={makerFoundationGovernanceImg} alt="foundation" />
                        </div>
                        <div className="maker-foundation-link-title-wrp">
                            <h4 className="maker-foundation-link-title txt-medium">Governance</h4>
                            <span className="maker-foundation-link-subtitle txt-regular">Vote on changes to the Maker protocol.</span>
                        </div>
                    </a>
                    <a href='#' className="maker-foundation-link">
                        <div className="maker-foundation-link-img">
                            <img src={makerFoundationMigrateImg} alt="foundation" />
                        </div>
                        <div className="maker-foundation-link-title-wrp">
                            <h4 className="maker-foundation-link-title txt-medium">Migrate</h4>
                            <span className="maker-foundation-link-subtitle txt-regular">Move your Dai and CDPs into their new versions.</span>
                        </div>
                    </a>
                </div>
            </section>
            <section className='maker-community-wrp'>
                <h2 className="maker-community-title txt-medium">Made by the community</h2>
                <nav className='maker-community-navigation'>
                    <ul className='maker-community-list'>
                        <li className='maker-community-list-item txt-regular'>
                            <input defaultChecked type='radio' id='community-get-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(0)} htmlFor='community-get-dai'>Get Dai</label>
                        </li>
                        <li className='maker-community-list-item txt-regular'>
                            <input type='radio' id='community-use-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(1)} htmlFor='community-use-dai'>Use Dai</label>
                        </li>
                        <li className='maker-community-list-item txt-regular'>
                            <input type='radio' id='community-hold-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(2)} htmlFor='community-hold-dai'>Hold Dai</label>
                        </li>
                        <li className='maker-community-list-item txt-regular'>
                            <input type='radio' id='community-accept-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(3)} htmlFor='community-accept-dai'>Accept Dai</label>
                        </li>
                        <li className='maker-community-list-item txt-regular'>
                            <input type='radio' id='community-defi-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(4)} htmlFor='community-defi-dai'>DeFi</label>
                        </li>
                        <li className='maker-community-list-item txt-regular'>
                            <input type='radio' id='community-games-dai' name='maker-community-list' />
                            <label onClick={() => setIsEcosystemCommunity(5)} htmlFor='community-games-dai'>Games</label>
                        </li>
                    </ul>
                </nav>
                <EcosystemCommunity number={isEcosystemCommunity} />
                <a href='#' className='maker-community-link txt-medium'>See all ecosystem apps</a>
            </section>
            <section className='ecosystem-additional'>
                <h1 className='ecosystem-additional-title txt-bold'>Want to contribute to the Maker ecosystem?</h1>
                <span className='ecosystem-additional-subtitle txt-regular'> The go-to resource for developers to start building with Maker.</span>
                <a href='#' className='ecosystem-additional-link txt-medium'>Visit Developer Documentation</a>
            </section>
        </main>
    )
}