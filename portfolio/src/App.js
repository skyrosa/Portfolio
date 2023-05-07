import { useState } from 'react';
import { ReactDOM } from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import './fonts.css';
import NotepadLarge from './components/NotepadLarge.js';
import NotepadSmall from './components/NotepadSmall.js';
import Navbar from './components/Navbar.js';
import ArrowRight from './components/ArrowRight';
import ArrowLeft from './components/ArrowLeft';
import Box from './components/Test';
function App() {
  return (
    <div className="container mx-auto bg-white border-8 border-coffee">

      <Navbar />

      <div className="p-2">

        <div className="relative flex">
          <NotepadSmall />
          <p className="absolute z-10 pt-7 pl-5 font-h2">Your text goes here</p>
          <p className="absolute z-10 pt-20 pl-10 font-h2 text-2xl">
            • brazilian <br/>
            • 25 years old <br/>
            • 156cm <br/>
            • extrovert</p>
        </div>

        <div className='flex justify-evenly m-5'>
          <ArrowLeft />
          <ArrowRight />
        </div>


        <NotepadLarge />

      </div>
    </div>
  );
}

export default App;
