'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function SolveCode() {
    const [slots, setSlots] = useState(['▽', '▽', '▽', '▽']);
    const [message, setMessage] = useState('');
    const correctCode = ['◵', '▽', '◻', '◻']; // Correct code
    const router = useRouter();

    const characters = ['▽', '◻', '◵'];

    // Handle the logic when clicking Lock In
    const handleLockIn = () => {
        if (JSON.stringify(slots) === JSON.stringify(correctCode)) {
            setMessage('Your new word is "sonder".'); // Set the success message
        } else {
            setMessage('Code failed.'); // Set the failure message
        }
    };

    // Handle letter cycling when down arrow is pressed
    const handleArrowDown = (index: number) => {
        setSlots((prevSlots) => {
            const newSlots = [...prevSlots];
            const currentChar = prevSlots[index];
            const nextIndex = (characters.indexOf(currentChar) + 1) % characters.length; // Get next character index and loop
            newSlots[index] = characters[nextIndex];
            return newSlots;
        });
    };

    const custom = (index: number) => {
        switch (index) {
            case 0:
                return "jersey-15-regular w-12 h-12 text-center bg-transparent rounded red";
            case 1:
                return "jersey-15-regular w-12 h-12 text-center bg-transparent rounded blue";
            case 2:
                return "jersey-15-regular w-12 h-12 text-center bg-transparent rounded yellow";
            default:
                return "jersey-15-regular w-12 h-12 text-center bg-transparent rounded purple";
        }
    }

    return (
        <div className="code-page">
            <div className="code-container">
                <h1 className="jersey-15-regular title glow green">Enter the Code:</h1>
                <div className="flex space-x-2 mb-4">
                    {slots.map((slot, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                value={slot}
                                readOnly
                                className={custom(index)}
                            />
                            <button
                                onClick={() => handleArrowDown(index)}
                                className="jersey-15-regular glow bg-transparent arrow-button green rounded"
                            >
                                ↓
                            </button>
                        </div>
                    ))}
                </div>

                {/* Lock in button */}
                <button
                    onClick={handleLockIn}
                    className="jersey-15-regular glow bg-transparent start-button green"
                >
                    &gt; Lock In
                </button>

                {/* Message display */}
                {message && (
                    <div className="mt-4 text-center jersey-15-regular glow green">
                        {message}
                    </div>
                )}
            </div>
            <Link href="/game">
                <button
                    id="backButton"
                    className="jersey-15-regular top-left-text gray">
                    &gt; back
                </button>
            </Link>
        </div>

    );
}