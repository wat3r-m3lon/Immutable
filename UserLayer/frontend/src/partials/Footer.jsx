import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <Link to="/" className="inline-block" aria-label="Cruip">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         width="96pt" height="37.6pt" viewBox="0 0 240.000000 94.000000"
                                         preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,94.000000) scale(0.00600000,-0.00600000)"
                                           fill="#000000" stroke="none">
                                            <path d="M3261 10822 c-1381 -2189 -2511 -3982 -2511 -3986 0 -3 965 -6 2144
                                            -6 l2144 0 1440 2285 1441 2285 -1055 1672 c-581 920 -1064 1686 -1073 1701
                                            l-18 29 -2512 -3980z"/>
                                            <path d="M7770 10263 c-1185 -1878 -2157 -3419 -2158 -3424 -2 -5 833 -8 2004
                                            -7 l2008 3 1153 1837 1153 1837 -996 1578 c-547 868 -999 1581 -1002 1585 -4
                                            3 -977 -1531 -2162 -3409z"/>
                                            <path d="M11927 9607 c-961 -1523 -1746 -2772 -1744 -2774 2 -1 1577 -2 3501
                                            -1 l3497 3 -1741 2760 c-958 1518 -1747 2765 -1753 2771 -9 9 -441 -668 -1760
                                            -2759z"/>
                                            <path d="M17700 7090 l0 -1020 -275 0 -275 0 0 -595 0 -595 275 0 275 0 0
                                            -2175 0 -2175 640 0 640 0 0 2175 0 2175 500 0 500 0 0 595 0 595 -497 2 -498
                                            3 -3 1018 -2 1017 -640 0 -640 0 0 -1020z"/>
                                            <path d="M3355 6223 c-356 -19 -739 -108 -1065 -248 -465 -199 -940 -591
                                            -1254 -1034 -333 -470 -506 -1040 -506 -1666 0 -815 288 -1513 852 -2061 577
                                            -562 1295 -843 2159 -844 487 0 958 112 1442 342 l127 61 0 846 0 846 -47 -55
                                            c-459 -529 -707 -721 -1069 -828 -155 -46 -294 -65 -494 -65 -244 -1 -406 25
                                            -600 95 -467 169 -836 579 -984 1092 -65 222 -93 574 -67 815 45 416 197 755
                                            464 1036 287 303 576 450 994 505 119 16 418 8 533 -15 253 -49 458 -142 670
                                            -306 122 -93 342 -309 482 -471 60 -71 112 -128 114 -128 2 0 4 382 4 848 l0
                                            849 -127 61 c-522 249 -1053 355 -1628 325z"/>
                                            <path d="M8145 6224 c-768 -50 -1424 -351 -1952 -897 -517 -534 -779 -1155
                                            -800 -1897 -19 -660 138 -1254 462 -1745 115 -174 226 -308 399 -480 565 -563
                                            1240 -835 2071 -835 858 0 1585 295 2158 875 585 591 861 1343 816 2223 -21
                                            419 -112 778 -284 1127 -130 265 -265 462 -459 674 -488 531 -1101 847 -1816
                                            936 -123 15 -478 26 -595 19z m462 -1169 c382 -54 641 -181 899 -439 144 -145
                                            224 -256 304 -421 262 -545 248 -1362 -32 -1875 -183 -336 -486 -595 -828
                                            -712 -197 -67 -358 -91 -600 -91 -269 0 -456 32 -662 113 -457 180 -782 562
                                            -918 1076 -60 227 -86 598 -61 845 46 443 198 775 486 1065 219 220 440 343
                                            742 414 173 40 484 52 670 25z"/>
                                            <path d="M14605 6220 c-463 -37 -899 -236 -1274 -585 l-76 -70 -3 253 -2 252
                                            -645 0 -645 0 0 -2770 0 -2770 645 0 644 0 4 1553 c4 1650 2 1608 52 1937 60
                                            398 187 675 385 838 86 70 242 146 364 177 147 37 343 51 510 37 377 -34 593
                                            -160 725 -425 59 -119 91 -225 120 -398 43 -264 44 -277 48 -2031 l4 -1688
                                            640 0 639 0 0 1798 c0 1085 -4 1852 -10 1937 -38 531 -147 914 -347 1214 -75
                                            111 -279 316 -403 404 -175 123 -438 236 -665 286 -208 46 -507 67 -710 51z"/>
                                            <path d="M22678 6220 c-748 -59 -1384 -356 -1898 -886 -235 -243 -402 -476
                                            -535 -749 -200 -411 -287 -846 -272 -1355 9 -273 35 -474 93 -704 139 -552
                                            440 -1039 893 -1443 532 -475 1182 -713 1946 -713 639 0 1199 161 1685 485
                                            678 452 1121 1124 1249 1892 61 366 58 797 -9 1148 -83 438 -282 871 -554
                                            1210 -506 629 -1169 1002 -1956 1100 -151 19 -494 27 -642 15z m509 -1165
                                            c380 -54 642 -182 898 -439 144 -145 224 -255 304 -421 220 -451 250 -1117 74
                                            -1635 -149 -441 -510 -808 -933 -952 -200 -67 -365 -92 -615 -91 -418 1 -729
                                            101 -1020 328 -406 316 -615 814 -615 1467 0 435 99 786 308 1088 93 135 289
                                            328 420 414 196 129 401 205 649 241 123 18 406 18 530 0z"/>
                                            <path d="M34620 6220 c-263 -21 -483 -99 -692 -247 -115 -81 -192 -146 -335
                                            -287 l-113 -110 0 247 0 247 -640 0 -640 0 0 -2770 0 -2770 640 0 639 0 4
                                            1598 c4 1729 2 1659 58 1937 60 292 191 557 345 694 147 131 309 199 533 221
                                            251 26 487 -38 744 -203 43 -27 79 -48 81 -46 2 2 135 266 295 586 l291 582
                                            -107 57 c-291 156 -545 239 -813 263 -125 12 -147 12 -290 1z"/>
                                            <path d="M26540 4433 c0 -1901 5 -2059 71 -2400 85 -442 337 -846 717 -1150
                                            347 -277 735 -433 1232 -495 140 -17 572 -17 715 1 590 72 1058 296 1430 683
                                            315 327 471 679 540 1213 32 254 35 411 35 2093 l0 1692 -640 0 -640 0 0
                                            -1662 c0 -1660 -2 -1770 -35 -1965 -35 -201 -120 -426 -209 -548 -164 -227
                                            -395 -347 -722 -376 -323 -29 -617 47 -811 210 -240 201 -364 514 -393 991 -6
                                            98 -10 810 -10 1758 l0 1592 -640 0 -640 0 0 -1637z"/>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <div className="text-gray-400">Pioneering the Future of Qualifications with Blockchain Technology. Explore the groundbreaking NFT2.0 - Immutable and Non-transferable Qualifications.
                            </div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Degree Verification</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Institution Onboarding</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"> Job Market Integration</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/multichain-interoperability"
                                            className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Multichain Interoperability Service</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 3rd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Whitepaper</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">API Documentation</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Institutional Guide</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog/News</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQ</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Career Opportunities</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="#"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">

                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <Link to="#"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Twitter">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="#"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Github">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="#"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Facebook">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="#"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Instagram">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.145" cy="11.892" r="1"/>
                                        <path
                                            d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
                                        <path
                                            d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="#"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Linkedin">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-400 text-sm mr-4">
                            <a href="https://www.contouradvisory.com.au" target="_blank"
                               rel="noopener noreferrer">&copy; contouradvisory.com.au</a> All rights reserved.
                        </div>


                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
