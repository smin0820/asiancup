import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flex justify-between bg-symbol px-4 py-3 text-white font-bold'>
            <Link className='text-2xl'>
                <h1>카타르 아시안컵</h1>
            </Link>
            <nav className='text-base flex items-center gap-4'>
                <Link to='/roster'>선수 명단</Link>
                <Link to='/cheer'>응원하기</Link>
                <Link to='/manager'>내가 감독</Link>
                <Link to='/predict'>승부 예측</Link>
            </nav>
        </header>
    );
}