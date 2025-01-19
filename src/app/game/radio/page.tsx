'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import getWord from '../../../lib/parse';

export default function Radio() {

    return (
        <>
            <div className="radio-page">
                <div className="radio-container">
                    <div>
                        <h1 className="jersey-15-regular title yellow">&#9834; Who doesn&#39;t love a cloying, sweet drink that tastes like dessert? &#9834;</h1>
                    </div>

                </div>
            </div>
            <h1 className="jersey-15-regular bottom-text gray">
                Is this correct? &#9661; Yes, &#9723; No
            </h1>
            <Link href="/game">
                <button
                    id="backButton"
                    className="jersey-15-regular top-left-text gray">
                    &gt; back
                </button>
            </Link>
        </>
    );
}
