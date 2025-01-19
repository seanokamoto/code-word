'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import '../globals.css';

export default function Game() {
    const [hoveringOver, setHoveringOver] = useState(0);

    useEffect(() => {
        const tvButton = document.getElementById("tvButton");
        const radioButton = document.getElementById("radioButton");
        const boxButton = document.getElementById("boxButton");
        const paintingButton = document.getElementById("paintingButton");
        const drawerButton = document.getElementById("drawerButton");

        // Adding hover event listeners
        if (tvButton) {
            tvButton.addEventListener("mouseenter", () => setHoveringOver(1));
            tvButton.addEventListener("mouseleave", () => setHoveringOver(0));
        }

        if (radioButton) {
            radioButton.addEventListener("mouseenter", () => setHoveringOver(2));
            radioButton.addEventListener("mouseleave", () => setHoveringOver(0));
        }

        if (boxButton) {
            boxButton.addEventListener("mouseenter", () => setHoveringOver(3));
            boxButton.addEventListener("mouseleave", () => setHoveringOver(0));
        }

        if (paintingButton) {
            paintingButton.addEventListener("mouseenter", () => setHoveringOver(4));
            paintingButton.addEventListener("mouseleave", () => setHoveringOver(0));
        }

        if (drawerButton) {
            drawerButton.addEventListener("mouseenter", () => setHoveringOver(5));
            drawerButton.addEventListener("mouseleave", () => setHoveringOver(0));
        }

        // Cleanup event listeners
        return () => {
            if (tvButton) {
                tvButton.removeEventListener("mouseenter", () => setHoveringOver(1));
                tvButton.removeEventListener("mouseleave", () => setHoveringOver(0));
            }
            if (radioButton) {
                radioButton.removeEventListener("mouseenter", () => setHoveringOver(2));
                radioButton.removeEventListener("mouseleave", () => setHoveringOver(0));
            }
            if (boxButton) {
                boxButton.removeEventListener("mouseenter", () => setHoveringOver(3));
                boxButton.removeEventListener("mouseleave", () => setHoveringOver(0));
            }
            if (paintingButton) {
                paintingButton.removeEventListener("mouseenter", () => setHoveringOver(4));
                paintingButton.removeEventListener("mouseleave", () => setHoveringOver(0));
            }
            if (drawerButton) {
                drawerButton.removeEventListener("mouseenter", () => setHoveringOver(5));
                drawerButton.removeEventListener("mouseleave", () => setHoveringOver(0));
            }
        };
    }, []);

    const getBackgroundClass = () => {
        switch (hoveringOver) {
            case 1:
                return "tv";
                break;
            case 2:
                return "radio";
                break;
            case 3:
                return "box";
                break;
            case 4:
                return "painting";
                break;
            case 5:
                return "drawer";
                break;
            default:
                return "game-page";
                break;
        }
    };

    return (
        <>
            <link rel="preload" as="image" href="/assets/game.png" />
            <link rel="preload" as="image" href="/assets/tv.png" />
            <link rel="preload" as="image" href="/assets/radio.png" />
            <link rel="preload" as="image" href="/assets/box.png" />
            <link rel="preload" as="image" href="/assets/painting.png" />
            <link rel="preload" as="image" href="/assets/drawer.png" />
            <div className={getBackgroundClass()}>
                {/* TV Buttons */}
                <Link href="/game/tv">
                    <button
                        id="tvButton"
                        className="tv-button">
                    </button>
                </Link>

                <Link href="/game/radio">
                    <button
                        id="radioButton"
                        className="radio-button">
                    </button>
                </Link>

                <Link href="/game/box">
                    <button
                        id="boxButton"
                        className="box-button">
                    </button>
                </Link>

                <Link href="/game/painting">
                    <button
                        id="paintingButton"
                        className="painting-button">
                    </button>
                </Link>

                <Link href="/game/drawer">
                    <button
                        id="drawerButton"
                        className="drawer-button">
                    </button>
                </Link>

            </div>
            <h1 className="jersey-15-regular bottom-text gray">
                <Typewriter
                    options={{
                        strings: ["Search through the room to find clues and crack the 4-digit code."],
                        autoStart: true,
                        cursor: "",
                        loop: true,
                        deleteSpeed: 0,
                        delay: 80,
                    }}>

                </Typewriter>
            </h1>
            <Link href="/">
                <button
                    id="menuButton"
                    className="jersey-15-regular top-left-text gray">
                    &gt; menu
                </button>
            </Link>
        </>

    )
}

