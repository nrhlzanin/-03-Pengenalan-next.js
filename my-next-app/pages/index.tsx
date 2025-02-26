import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Website Saya!</h1>
      <p>Ini adalah halaman utama.</p>

      <ul>
        <li><Link href="/about">Tentang Kami</Link></li>
        <li><Link href="/users">Daftar Pengguna</Link></li>
        <li><Link href="/weather">Data Cuaca</Link></li>
      </ul>
    </div>
  );
}
