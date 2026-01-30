import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pageFancy">

      <div className="ucapanCard">

        <h1>🌟 Impian Tercapai</h1>

        {/* FOTO */}
        <div className="photoCard">
          <Image
            src="/hilwa1.jpg"
            alt=""
            width={220}
            height={220}
            className="photoFancy"
          />
        </div>

        <p className="textUcapan">
          Semoga semua mimpimu pelan-pelan  
          berubah jadi kenyataan 
          Setiap usaha yang kamu lakukan  
          semoga berbuah hasil indah 
        </p>

       

        <Link href="/" className="backBtn">
          ⬅ Kembali
        </Link>

      </div>
    </div>
  );
}
