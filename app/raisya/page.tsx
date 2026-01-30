import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pageFancy">

      <div className="ucapanCard">

        <h1>🎁 Selalu Bahagia</h1>

        {/* FOTO */}
        <div className="photoCard">
          <Image
            src="/raisya1.jpg"
            alt=""
            width={220}
            height={220}
            className="photoFancy"
          />
        </div>

        <p className="textUcapan">
          Semoga harimu selalu dipenuhi tawa,  
          hatimu ringan tanpa beban 🌷  
          dan hidupmu dipenuhi orang orang baik
        </p>

        
        <Link href="/" className="backBtn">
          ⬅ Kembali
        </Link>

      </div>
    </div>
  );
}
