import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pageFancy">

      <div className="ucapanCard">

        <h1>💸 Rezeki Lancar</h1>

        {/* FOTO */}
        <div className="photoCard">
          <Image
            src="/najwa1.jpg"
            alt=""
            width={220}
            height={220}
            className="photoFancy"
          />
        </div>

        <p className="textUcapan">
          Semoga setiap tahun yang datang  
          membawa kesehatan, ketenangan,  
          dan banyak alasan untuk tersenyum
        </p>

        

        <Link href="/" className="backBtn">
          ⬅ Kembali
        </Link>

      </div>
    </div>
  );
}
