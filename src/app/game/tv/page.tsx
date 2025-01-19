'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function TV() {

    return (
        <>
            <div className="tv-page">
                <div className="tv-container">
                    <h1 className="jersey-15-regular title blue">A detective investigated the Three Bear&#39;s</h1>
                    <h1 className="jersey-15-regular title blue">house and found their cake to be cloying.</h1>
                    <h1 className="jersey-15-regular title blue">How sweet was it?</h1>
                    <h1 className="jersey-15-regular blue">&#9661; Very sweet</h1>
                    <h1 className="jersey-15-regular blue">&#9723; Just right</h1>
                    <h1 className="jersey-15-regular blue">&#9717; Bitter</h1>
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
