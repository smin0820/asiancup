import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <Link>
                <h1>카타르 아시안컵</h1>
            </Link>
            <nav>
                <Link to='/roster'>선수 명단</Link>
                <Link to='/cheer'>응원하기</Link>
                <Link to='/manager'>내가 감독</Link>
                <Link to='/predict'>승부 예측</Link>
            </nav>
        </header>
    );
}