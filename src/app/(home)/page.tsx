'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import '../globals.css';

export default function Home() {

  return (
    <>
      <div className="home-page">
        <div className="computer-container">
          <h1 className="jersey-15-regular title glow green">code word</h1>
          {/* Buttons */}
          <div className="button-container">
            <Link href="/game">
              <button
                id="goButton"
                className="jersey-15-regular glow bg-transparent start-button green">
                &gt; go
              </button>
            </Link>

            <Link href="/game">
              <button
                id="vaultButton"
                className="jersey-15-regular glow bg-transparent start-button green">
                &gt; vault
              </button>
            </Link>
          </div>
        </div>
        <h1 className="names">myer cheng and sean okamoto</h1>
      </div>
    </>
  )
}
