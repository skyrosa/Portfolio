import React from 'react';
import 'tailwindcss/tailwind.css';
function NotepadLarge() {
    return (
        <div className="grid justify-items-stretch relative h-[800px] w-[340px] bg-white rounded-lg border-2 p-2 m-2 border-coffee dark:bg-red dark:border-pink">

            <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_heart.png" className="flex w-8 h-8 z-10" />
            
            <div className="flex absolute self-start flex-row-reverse space-x-2 space-x-reverse w-[337px] h-[50px] p-3 bg-pink rounded-t-lg top-0 border-b-2 border-coffee dark:border-pink">
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/x-close.png" className="flex w-5 h-5" />
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/maximize.png" className="flex w-5 h-5" />
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/minimize.png" className="flex w-5 h-1 mt-4" />
            </div>

            <div className="absolute justify-self-end h-[700px] w-[30px] bg-yellow top-12 right-0 border-l-2 border-coffee dark:bg-red dark:border-pink">
                <div className="flex absolute h-[40px] w-[28px] bg-yellow border-t-2 border-b-2 border-coffee justify-center text-3xl top-0 text-coffee dark:bg-red dark:border-pink dark:text-red"> ▴ </div>
                <div className="flex absolute h-[40px] w-[28px] bg-yellow border-t-2 border-b-2 border-coffee justify-center bottom-0 text-3xl text-coffee dark:bg-red dark:border-pink dark:text-red"> ▾ </div>
            </div>

            <div className="absolute self-end bottom-0 w-[337px] h-[50px] bg-pink rounded-b-lg border-t-2 border-coffee dark:border-pink"></div>
        </div>
    );
}

export default NotepadLarge;