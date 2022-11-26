import Link from "next/link"
import Logo from "../../public/logo.svg"

const Navigation = () => {
    return (
        <nav className="mx-2 flex justify-center">
            <header
                className={`py-8 flex items-center justify-center px-3 max-w-lg w-full`}
            >
                <a href="/">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="30" fill="white" viewBox="0 0 500.000000 500.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                            fill="#D1D5DB" stroke="none">
                            <path d="M2465 3445 c-1414 -637 -1926 -871 -1944 -891 -29 -34 -24 -89 11
                                    -119 15 -13 258 -90 671 -214 433 -130 651 -200 656 -210 5 -9 88 -295 185
                                    -636 97 -341 185 -631 195 -644 9 -14 28 -28 42 -31 63 -17 68 -11 452 450
                                    l367 440 47 -19 c27 -10 314 -125 638 -255 348 -140 604 -237 624 -238 23 0
                                    42 8 60 26 l26 26 3 1538 c2 1082 0 1548 -8 1574 -11 39 -50 69 -87 67 -10 0
                                    -882 -389 -1938 -864z m1842 -2131 c-4 -5 -1647 650 -1647 656 0 3 370 451
                                    823 995 l822 990 3 -1319 c1 -726 1 -1321 -1 -1322z m-532 2497 c-17 -16 -447
                                    -382 -958 -815 l-927 -786 -503 151 c-276 83 -505 154 -509 158 -5 4 2899
                                    1317 2922 1320 2 1 -9 -12 -25 -28z m-161 -393 c-4 -6 -277 -336 -606 -731
                                    -532 -641 -598 -724 -598 -754 0 -64 14 -73 265 -173 129 -51 235 -96 235 -99
                                    0 -10 -548 -662 -556 -662 -8 0 -313 1054 -313 1081 0 11 1562 1348 1577 1350
                                    2 0 0 -5 -4 -12z"/>
                        </g>
                    </svg>
                </a>


            </header>
        </nav>
    )
}

export default Navigation