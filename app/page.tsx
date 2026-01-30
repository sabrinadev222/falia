import Image from "next/image";
import Link from "next/link";

export default function BirthdayPage() {
  
  return (
    <main className="container">
      <div className="card">

        {/* JUDUL DENGAN ICON GAMBAR */}
        <h1 className="title" style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
          <Image src="/partyy.png" alt="party" width={100} height={150} />
          HAPPY BIRTHDAY
          <Image src="/partyy.png" alt="party" width={100} height={150} />
        </h1>

        {/* FOTO */}
        <div className="gallery">
          <Image src="/foto1.jpg" alt="" width={120} height={120} className="foto"/>
          <Image src="/foto2.jpeg" alt="" width={120} height={120} className="foto"/>
          <Image src="/foto03.jpg" alt="" width={120} height={120} className="foto"/>
        </div>

        {/* GRID UCAPAN */}
        <div className="wishGrid">
          <Link href="/nayla" className="wishButton">🎂 nayla</Link>
          <Link href="/najwa" className="wishButton">💸 najwa</Link>
          <Link href="/hilwa" className="wishButton">🌟 hilwa</Link>
          <Link href="/raisya" className="wishButton">🎁 raisya</Link>

          <Link href="/all" className="wishButton allButton">
            💖 happy sweet seventeen!!
          </Link>
        </div>

      </div>
    </main>
  );
}
