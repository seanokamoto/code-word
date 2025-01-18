import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const handleGoClick = () => {
    alert("Go button clicked!")
  }

  const handleVaultClick = () => {
    alert("Vault button clicked!")
  };

  return (
    <>
      <div className="computer-container">
        <h1 className="jersey-15-regular title glow">code word</h1>
        {/* Buttons */}
        <div className="button-container">
          <Link href="/game">
            <button
              id="goButton"
              className="jersey-15-regular glow bg-transparent start-button">
              &gt; go
            </button>
          </Link>

          <Link href="/game">
            <button
              id="vaultButton"
              className="jersey-15-regular glow bg-transparent start-button">
              &gt; vault
            </button>
          </Link>
        </div>
      </div>
      <h1 className="names">myer cheng and sean okamoto</h1>
    </>
  )
}
