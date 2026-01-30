import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pageFancy">

      <h1 className="title">🌟Wish You All the Best</h1>

      <div className="cardGrid">

        <div className="photoCard">
          <Image src="/all1.jpg" alt="" width={160} height={160} className="photoFancy"/>
          <p>
            Barakallah fii umrik. Semoga di sisa usia ini diberkahi, diberikan kemudahan dalam segala urusan, dan tercapai impianmu✨
          </p>
        </div>

        <div className="photoCard">
          <Image src="/all02.jpg" alt="" width={160} height={160} className="photoFancy"/>
          <p>
           Happy birthday! Wishing you a day filled with love and laughter,
           Another year older, wiser, and even more amazing.
          </p>
        </div>

        <div className="photoCard">
          <Image src="/all3.jpg" alt="" width={160} height={160} className="photoFancy"/>
          <p>
           Wishing you a day filled with endless joy, laughter, and everything that makes
            you happy💫
          </p>
        </div>

        <div className="photoCard">
          <Image src="/all4.jpg" alt="" width={160} height={160} className="photoFancy"/>
          <p>
           Cheers to another year! Hope your day is filled with love⭐
          </p>
        </div>

      </div>

      <Link href="/" className="backBtn">
        ⬅ Kembali
      </Link>

    </div>
  );
}