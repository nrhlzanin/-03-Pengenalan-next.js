This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720016|
| Nama |  Nurhaliza Anindya Putri |
| Kelas | TI - 3D |

##  Langkah-langkah Praktikum 
### Persiapan Lingkungan

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan 
menjalankan perintah berikut di terminal atau command prompt: 
> ![Screenshot](assets-report/a/01.png)

2. Buat direktori baru untuk proyek Next.js Anda 
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan 
> ![Screenshot](assets-report/a/02.png)

4. Jalankan aplikasi Next.js dengan perintah: 
> ![Screenshot](assets-report/a/03.png)

Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

> ![Screenshot](assets-report/a/04.png)
> 
> Node js dan npm sudah terinstal dan sudah membuat direktori baru untuk projek next.js

### Membuat Halaman dengan Server-Side Rendering (SSR)
1. Buka file pages/index.tsx di text editor Anda. 
2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana: 
```bash
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Selamat Datang di Website Saya!</h1>
      <p>Ini adalah halaman utama.</p>
    </div>
  );
};

export default HomePage; 
```

3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks 
"Selamat Datang di Website Saya!".
> ![Screenshot](assets-report/b/01.png)
>
> Halaman SSR sudah dibuat

### Menggunakan Static Site Generation (SSG) 
1. Buat file baru di direktori pages dengan nama blog.js. 
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG: 
> ![Screenshot](assets-report/c/02.png)

3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal.
> ![Screenshot](assets-report/c/02.png)
> 
> Berhasil menambahkan tombol yang dapat meningkatkan gitungan saat di klik

### Menggunakan Dynamic Routes 
1. Buat direktori baru di pages dengan nama blog. 
2. Buat file di dalam direktori blog dengan nama [slug].js 
> ![Screenshot](assets-report/04.png)

3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug: 
4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL.
> ![Screenshot](assets-report/04.png)
> 
> Berhasil melaukan pengiriman data dengan props

### Menggunakan API Routes 
1. Pastikan terdapat direktori di pages dengan nama api. 
2. Buat file di dalam direktori api dengan nama products.js. 
3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk: 
4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk: 
5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route.
> ![Screenshot](assets-report/05.png)
> 
> Berhasil 

### Menggunakan Link Component 
1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke halaman lain: 
2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami": 
3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang.
> ![Screenshot](assets-report/05.png)
> 
> Berhasil 

## Tugas 
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar 
pengguna dari API https://jsonplaceholder.typicode.com/users. 
2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID. 
3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, 
OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.

> ![Screenshot](assets-report/tugas/01.png)
> 
> Berhasil membuat todo list yang menampilkan daftar tugas yang bisa ditambahkan dan dihapus
