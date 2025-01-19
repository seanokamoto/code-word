'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Box() {

    return (
        <>
            <div className="box-page">

            </div>
            <h1 className="jersey-15-regular bottom-text gray">
                Hm... it doesn't look like anything's here.
            </h1>
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
