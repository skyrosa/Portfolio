import React from 'react';
import 'tailwindcss/tailwind.css';

function Navbar() {
    return (
        <div className="flex justify-around w-auto h-[90px] bg-white p-5 dark:bg-brown dark:border-pink">
            <button>
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/home1.png" className="h-[50px] w-[50px] hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_home_.png dark:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/home_dark_hover.png dark:hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/home_dark.png" />
            </button>
            
            <button>
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/study1.png" className="h-[50px] w-[50px] hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_book%20open_.png dark:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/studies_dark_hover.png dark:hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/studies_dark.png" />
            </button>
            
            <button>
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/project1.png" className="h-[50px] w-[50px] hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_image%20gallery_.png dark:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/projects_dark_hover.png dark:hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/projects_dark.png" />
            </button>
            
            <button>
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/message1.png" className="h-[50px] w-[50px] hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_mail_.png dark:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/contact_dark_hover.png dark:hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/contact_dark.png" />
            </button>

            <button>
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/color1.png" className="h-[50px] w-[50px] hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_sun_.png dark:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/mode_dark_hover.png dark:hover:src:https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/mode_dark.png" />
            </button>
        </div>
    );
}

export default Navbar;