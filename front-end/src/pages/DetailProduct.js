import Header from "../Components/Header";

import logo from "../assets/image/Logo-boost.space.png";
import star from '../assets/icon/star-symbol-icon.svg';
import saveIcon from "../assets/icon/save-svgrepo-com.svg";
import awards from "../assets/image/kitty-awards.png";
import img1 from "../assets/image/5ada07ce-5838-44af-a0ea-51a12b689f1b.png";
import img2 from "../assets/image/3c27d8ab-1aa2-42a5-af24-5adcfb295709.png";
import img3 from "../assets/image/53cb4d93-ee40-4938-8028-2b8d856a6429.png";

import badge from "../assets/image/Image1.png";
import linkIcon from "../assets/icon/link-svgrepo-com.svg";
import playstore from"../assets/icon/play-store-svgrepo-com.svg";
import linkedin from "../assets/icon/linkedin-square-logo-svgrepo-com.svg";
import appstore from "../assets/icon/app-store-svgrepo-com.svg";

export default function DetailProduct(){
    return (

        <>
            <div >
                <Header />
            </div>
            <div className="contain">
                <div className="productInfo">
                    <div className="productInfo-left">
                        <div className="logo">
                            <img src={logo} alt="logo" style={{width: "64px"}}/>
                        </div>
                        <div className="info">
                            <span style={{fontSize: "32px", fontWeight: "600"}}>Boost.space</span> <br />
                            <span style={{fontSize: "18px"}}>All-in-one Data Management Platform with build-in AI Engine</span>
                            <div className="trafic">
                                <span>
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                </span>
                                <span>77 reviews</span>
                                <span>2.8k followers</span>
                            </div>
                        </div>
                    </div>
                    <div className="productInfo-right">
                        <button className="save"><img src={saveIcon} alt="saveIcon" style={{width: "20px"}}/>Save</button>
                        <button>Follow</button>
                        <a href="http://">Visit WebSite</a>
                    </div>
                </div>

                <div className="mini-navbar">
                    <nav>
                        <ul>
                            <li>Overview</li>
                            <li>Launches</li>
                            <li>Shoutouts</li>
                            <li>Team</li>
                            <li>Awards</li>
                            <li>More</li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <div className="container-left">
                        <div className="bloc1">
                            <p>Do you use Boost.space?</p>
                            <div className="btnQst">
                                <button>i use this</button>
                                <button>i use something else</button>
                            </div>
                        </div>
                        <div className="block2">
                            <img src={awards} alt="kitty awards" style={{width: "125px"}} />
                            <div className="mention">
                                <p>Runner Up Data & Data Security Product of Year</p>
                                <a href="/">More recipients </a>
                            </div>
                        </div>
                        <div className="descriptText">
                            <h3>What is boost.space?</h3>
                            <p>
                                Prepare your business for AI with Boost.space. Centralize fragmented data and enable seamless two-way synchronization across 2,000+ tools. 
                                Automate repetitive tasks and leverage AI-powered enrichment to simplify operations and unlock growth.
                                With Boost.space, your business becomes more efficient, scalable, and ready to adapt to the future. Whether optimizing workflows or scaling operations, our platform enables smarter, faster, and better business outcomes.
                            </p>
                            <span><a href="/">Database and backend frameworks</a></span>
                            <div className="image">
                                <img src={img1} alt="img1" />
                                <img src={img2} alt="img2" />
                                <img src={img3} alt="img3" />
                            </div>
                        </div>
                    </div>

                    <div className="container-right">
                        <div className="parent">
                            <div className="child1">
                                <h5>Product status</h5>
                                <span>Claimed</span>
                            </div>
                            <div className="child2">
                                <h5>Badges</h5>
                                <img src={badge}  alt="badge"/>
                            </div>
                            <div className="child3">
                                <h5>Links</h5>
                                <span className="load">
                                    <img src={linkIcon} alt="linkIcon" />
                                    <span>boost.space</span>
                                </span> <br/>
                                <span className="load">
                                    <img src={appstore} alt="appstore"/>
                                    <span>App Store</span>
                                </span> <br/>
                                <span className="load">
                                    <img src={playstore} alt="playstore" />                                     
                                    <span>Play Store</span>
                                </span>
                            </div>
                            <div className="child4">
                                <h5>Social</h5>
                                <span className="social">
                                    <svg fill="#4b587c" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
                                    <svg fill="#4b587c" width="20px" height="20px" viewBox="0 0 512 512" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M480,257.35c0-123.7-100.3-224-224-224s-224,100.3-224,224c0,111.8,81.9,204.47,189,221.29V322.12H164.11V257.35H221V208c0-56.13,33.45-87.16,84.61-87.16,24.51,0,50.15,4.38,50.15,4.38v55.13H327.5c-27.81,0-36.51,17.26-36.51,35v42h62.12l-9.92,64.77H291V478.66C398.1,461.85,480,369.18,480,257.35Z" fill-rule="evenodd"/></svg>
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-instagram" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z" fill="#4b587c"/></svg>
                                    <img src={linkedin} alt="logo" />
                                </span>
                            </div>
                            <div className="child5">
                                <h5>Pricing</h5>
                                <p>Paid</p>
                            </div>
                            <div className="child6">
                                <h5>Makers</h5>
                                <div className="tof">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="/">All makers</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}