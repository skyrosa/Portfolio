import React from 'react';

const Box = () => {
    return (
        <div className="container mx-auto bg-blue-400 h-auto w-auto p-7">
            <div className="bg-white rounded-lg border-2 p-2 border-coffee dark:bg-red dark:border-pink">
                <p>I am a box inside another box!</p>
            </div>
        </div>
    );
}

export default Box;

