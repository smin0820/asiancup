import React from 'react';

export default function Title(title) {
    return (
        <div className='text-2xl text-white bg-background px-3 py-4 mt-2 font-semibold w-fit'>
            {title.title}
        </div>
    );
}

