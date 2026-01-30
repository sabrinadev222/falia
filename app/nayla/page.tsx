import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pageFancy">

      <div className="ucapanCard">

        <h1>🎂 Panjang Umur</h1>

        {/* FOTO CARD */}
        <div className="photoCard">
          <Image
            src="/nayla1.jpg"
            alt=""
            width={220}
            height={220}
            className="photoFancy"
          />
        </div>

        <p className="textUcapan">
          Semoga panjang umur, sehat selalu,  
          dan hidupmu penuh cerita indah ✨  
          Tetap jadi orang ceria yang disayang banyak orang 🤍
        </p>

        

        <Link href="/" className="backBtn">
          ⬅ Kembali
        </Link>

      </div>
    </div>
  );
}
