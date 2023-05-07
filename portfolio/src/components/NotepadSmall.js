import React from 'react';
import 'tailwindcss/tailwind.css';

function NotepadSmall() {
    return (
        <div className="grid justify-items-stretch relative h-[280px] w-[340px] bg-white rounded-lg border-2 p-1 m-2 border-coffee dark:bg-red dark:border-pink">
            <div className="absolute self-end top-10 w-[317px] h-[20px] bg-yellow border-t-2 border-coffee dark:border-pink"></div>
            <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/icon%20_heart.png" className="flex w-3 h-3 z-10" />
            <div className="flex absolute self-start flex-row-reverse space-x-2 space-x-reverse w-[337px] h-[20px] p-1 bg-pink rounded-t-lg top-0 border-b-2 border-coffee">
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/x-close.png" className="flex w-3 h-3" />
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/maximize.png" className="flex w-3 h-3" />
                <img src="https://raw.githubusercontent.com/skyrosa/Portfolio/main/portfolio-site/navbar-icons/minimize.png" className="flex w-3 h-1 mt-2" />
            </div>
            <div className="absolute justify-self-end h-[237px] w-[20px] bg-yellow top-5 right-0 border-l-2 border-coffee dark:border-pink dark:bg-red">
                <div className="flex absolute z-10 h-[22px] w-[20px] bg-yellow border-b-2 border-r-2 border-coffee justify-center  top-0 text-coffee dark:border-pink dark:bg-red"> ▴ </div>
                <div className="flex absolute justify-center h-[60px] w-[20px] bg-pink border-b-2 border-t-2 border-r-2 rounded-3xl top-11 border-coffee"></div>
                <div className="flex absolute h-[22px] w-[20px] bg-yellow border-t-2 border-r-2 border-coffee justify-center bottom-0 text-coffee dark:border-pink dark:bg-red"> ▾ </div>
            </div>
            <div className="absolute self-end bottom-5 w-[317px] h-[20px] bg-yellow border-t-2 border-coffee dark:border-pink dark:bg-red"></div>
            <div className="absolute self-end bottom-0 w-[337px] h-[20px] bg-pink rounded-b-lg border-t-2 border-coffee dark:border-pink"></div>
        </div>

    );
}

export default NotepadSmall;