'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import getWord from '../../../lib/parse';

export default function Drawer() {

    return (
        <>
            <div className="drawer-page">
                <div className="drawer-container">
                    <div>
                        <h1 className="jersey-15-regular title red">The notes say- cloying:stoic :: hubris: ___</h1>
                        <h1 className="jersey-15-regular red">&#9661; bravery</h1>
                        <h1 className="jersey-15-regular red">&#9723; fraudulence</h1>
                        <h1 className="jersey-15-regular red">&#9717; timidity</h1>
                    </div>

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
    );
}
