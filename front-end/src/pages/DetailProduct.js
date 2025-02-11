import Header from "../Components/Header";

import logo from "../assets/image/Logo-boost.space.png";
import star from '../assets/icon/star-symbol-icon.svg';
import saveIcon from "../assets/icon/save-svgrepo-com.svg";
import awards from "../assets/image/kitty-awards.png";
import img1 from "../assets/image/5ada07ce-5838-44af-a0ea-51a12b689f1b.png";
import img2 from "../assets/image/3c27d8ab-1aa2-42a5-af24-5adcfb295709.png";
import img3 from "../assets/image/53cb4d93-ee40-4938-8028-2b8d856a6429.png";

import badge from "../assets/image/Image1.png";
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
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z" fill="#4b587c"/>
                                        <path d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z" fill="#4b587c"/>
                                    </svg>
                                    <span>boost.space</span>
                                </span> <br/>
                                <span className="load">
                                    <img src={appstore} alt="appstore"/>
                                    <span>App Store</span>
                                </span> <br/>
                                <span className="load">
                                    <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.87189 20.0803C7.2316 19.8749 7.35669 19.4168 7.1513 19.0571C6.94591 18.6974 6.48781 18.5723 6.12811 18.7777L6.87189 20.0803ZM5.5 20H4.75C4.75 20.2673 4.89227 20.5144 5.12345 20.6486C5.35463 20.7828 5.63976 20.7838 5.87189 20.6513L5.5 20ZM5.5 4L5.87189 3.3487C5.63976 3.21615 5.35463 3.21717 5.12345 3.35138C4.89227 3.48559 4.75 3.73269 4.75 4H5.5ZM6.12811 5.2223C6.48781 5.42769 6.94591 5.3026 7.1513 4.94289C7.35669 4.58319 7.2316 4.12509 6.87189 3.9197L6.12811 5.2223ZM5.90798 18.9686C5.65368 19.2955 5.71259 19.7667 6.03955 20.021C6.36652 20.2753 6.83772 20.2164 7.09202 19.8894L5.90798 18.9686ZM15.092 9.60345C15.3463 9.27648 15.2874 8.80528 14.9604 8.55098C14.6335 8.29668 14.1623 8.35559 13.908 8.68255L15.092 9.60345ZM6.12792 18.7778C5.76828 18.9833 5.64331 19.4414 5.8488 19.8011C6.0543 20.1607 6.51243 20.2857 6.87208 20.0802L6.12792 18.7778ZM14.8721 15.5092C15.2317 15.3037 15.3567 14.8456 15.1512 14.4859C14.9457 14.1263 14.4876 14.0013 14.1279 14.2068L14.8721 15.5092ZM14.8721 8.49181C14.5124 8.28631 14.0543 8.41127 13.8488 8.77091C13.6433 9.13055 13.7683 9.58869 14.1279 9.79419L14.8721 8.49181ZM19.5 12L19.8721 12.6512C20.1058 12.5177 20.25 12.2691 20.25 12C20.25 11.7309 20.1058 11.4823 19.8721 11.3488L19.5 12ZM14.1279 14.2058C13.7683 14.4113 13.6433 14.8694 13.8488 15.2291C14.0543 15.5887 14.5124 15.7137 14.8721 15.5082L14.1279 14.2058ZM14.1279 9.79416C14.4875 9.99969 14.9456 9.87477 15.1512 9.51514C15.3567 9.15551 15.2318 8.69736 14.8721 8.49184L14.1279 9.79416ZM6.87214 3.91984C6.51251 3.71431 6.05436 3.83923 5.84884 4.19886C5.64331 4.55849 5.76823 5.01664 6.12786 5.22216L6.87214 3.91984ZM7.09202 4.11055C6.83772 3.78359 6.36652 3.72468 6.03955 3.97898C5.71259 4.23328 5.65368 4.70448 5.90798 5.03145L7.09202 4.11055ZM13.908 15.3174C14.1623 15.6444 14.6335 15.7033 14.9604 15.449C15.2874 15.1947 15.3463 14.7235 15.092 14.3966L13.908 15.3174ZM6.12811 18.7777L5.12811 19.3487L5.87189 20.6513L6.87189 20.0803L6.12811 18.7777ZM6.25 20V4H4.75V20H6.25ZM5.12811 4.6513L6.12811 5.2223L6.87189 3.9197L5.87189 3.3487L5.12811 4.6513ZM7.09202 19.8894L15.092 9.60345L13.908 8.68255L5.90798 18.9686L7.09202 19.8894ZM6.87208 20.0802L14.8721 15.5092L14.1279 14.2068L6.12792 18.7778L6.87208 20.0802ZM14.1279 9.79419L19.1279 12.6512L19.8721 11.3488L14.8721 8.49181L14.1279 9.79419ZM19.1279 11.3488L14.1279 14.2058L14.8721 15.5082L19.8721 12.6512L19.1279 11.3488ZM14.8721 8.49184L6.87214 3.91984L6.12786 5.22216L14.1279 9.79416L14.8721 8.49184ZM5.90798 5.03145L13.908 15.3174L15.092 14.3966L7.09202 4.11055L5.90798 5.03145Z" fill="#4B587C"/>
                                    </svg>                                      
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