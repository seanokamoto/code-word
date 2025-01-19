'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Painting() {

    return (
        <>
            <div className="painting-page">
                <div className="painting-container">
                    <h1 className="jersey-15-regular title purple">A reed diffuser releases essential oil aroma through a reed, whereas</h1>
                    <h1 className="jersey-15-regular title purple">an ultrasonic diffuser mixes essential oils with water to better</h1>
                    <h1 className="jersey-15-regular title purple">disperse aroma. Which option is likely more cloying?</h1>
                    <h1 className="jersey-15-regular purple">&#9661; Reed</h1>
                    <h1 className="jersey-15-regular purple">&#9723; Ultrasonic</h1>
                </div>
            </div>
            <Link href="/game">
                <button
                    id="backButton"
                    className="jersey-15-regular top-left-text gray">
                    &gt; back
                </button>
            </Link>
        </>

    )
}
