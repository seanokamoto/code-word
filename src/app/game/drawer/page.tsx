'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Drawer() {

    return (
        <>
            <div className="drawer-page">

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
