import type { BlogArticle } from "../blog-data";

export const TEKNOLOGI_ARTICLES: BlogArticle[] = [
  {
    slug: "next-js-vs-wordpress-mana-yang-lebih-baik",
    title: "Next.js vs WordPress: Perbandingan Jujur untuk Website Bisnis",
    description:
      "Kapan WordPress cukup dan kapan Next.js layak dibayar — dari performa, keamanan, SEO, hingga total biaya kepemilikan. Ditulis dari pengalaman membangun dengan Next.js.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2025-05-20",
    updated: "2026-10-06",
    readTime: "10 menit",
    author: "tim-nufanas",
    tags: ["nextjs", "wordpress", "web development"],
    intro:
      "Disclosure dulu: kami membangun website dengan Next.js — jadi artikel ini tidak netral, tapi jujur tentang kapan masing-masing menang. Jawaban pendeknya: WordPress menang untuk blog/website konten dengan tim non-teknis; Next.js menang untuk website yang menjadi produk atau aset performa.",
    keyTakeaways: [
      "WordPress: tepat untuk website konten, tim non-teknis, budget awal minimal",
      "Next.js: tepat untuk performa, SEO teknis, fitur custom, dan keamanan",
      "Biaya WordPress yang sebenarnya sering tersembunyi di plugin berbayar + maintenance keamanan",
      "Keputusan harus mengikuti kebutuhan — bukan preferensi vendor",
    ],
    sections: [
      {
        title: "Perbandingan Langsung",
        body: `<table>
<thead><tr><th>Aspek</th><th>WordPress</th><th>Next.js</th></tr></thead>
<tbody>
<tr><td>Kecepatan</td><td>Bergantung hosting + plugin</td><td>Sangat cepat (static/SSR, edge)</td></tr>
<tr><td>Edit konten sendiri</td><td>Sangat mudah (Gutenberg)</td><td>Butuh CMS (bisa headless)</td></tr>
<tr><td>Keamanan</td><td>Target utama hacker; plugin = risiko</td><td>Surface area kecil, tanpa plugin</td></tr>
<tr><td>Fitur custom</td><td>Terbatas plugin/tema</td><td>Tak terbatas — code is the limit</td></tr>
<tr><td>SEO teknis</td><td>Butuh plugin + optimasi</td><td>SSR/SSG bawaan, metadata API</td></tr>
<tr><td>Biaya awal</td><td>Rendah</td><td>Lebih tinggi</td></tr>
<tr><td>Biaya 3 tahun</td><td>Bisa lebih tinggi (plugin, keamanan, rebuild)</td><td>Maintenance ringan</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Kapan WordPress Masih Jawaban Benar",
        body: `<p>Kalau website Anda pada dasarnya blog/majalah dengan tim editor yang sering update sendiri, budget sangat terbatas, atau Anda perlu sesuatu live minggu ini — WordPress adalah pilihan rasional. Masalahnya bukan WordPress; melainkan menumpuk 30 plugin di atasnya sampai website lambat dan rentan.</p>`,
      },
      {
        title: "Kapan Next.js Layak Dibayar",
        body: `<p>Ketika website adalah aset strategis: kecepatan memengaruhi konversi dan ranking, Anda butuh fitur custom (booking, portal, integrasi API), atau Anda tidak mau website Anda bergantung pada plugin pihak ketiga yang bisa abandoned. Semua project kami — dari <a href="/portfolio/bimbel-kedinasan-online">platform e-learning</a> sampai <a href="/portfolio/kaosdn99-ecommerce">e-commerce</a> — dibangun di Next.js untuk alasan ini.</p>
<p>Untuk konten, kami memasangkannya dengan CMS headless atau file-based content — Anda tetap bisa update artikel tanpa coding.</p>`,
      },
      {
        title: "Pertanyaan Penentu",
        body: `<p>Tanya diri Anda: apakah website ini produk/aset jangka panjang, atau hanya brosur digital? Apakah ada budget untuk performa? Apakah fitur saya ada di plugin yang ada? Jika dua jawaban pertama 'ya' — Next.js (atau framework serupa) adalah investasi yang benar. Kalau hanya brosur sederhana, WordPress atau bahkan <a href="/layanan/landing-page">landing page</a> mungkin cukup.</p>`,
      },
    ],
    faqs: [
      {
        question: "Apakah website Next.js bisa edit konten sendiri?",
        answer:
          "Bisa — dengan headless CMS (Sanity, Strapi) atau CMS ringan yang kami siapkan. Anda tetap dapat admin panel untuk update berita, halaman, dan produk tanpa menyentuh kode.",
      },
      {
        question: "Apakah Next.js lebih mahal untuk dihosting?",
        answer:
          "Tidak selalu — platform seperti Vercel punya tier gratis yang cukup untuk website bisnis, dan VPS biasa pun bisa menjalankannya via Docker.",
      },
    ],
    relatedServices: [
      { href: "/jasa-website-custom", label: "Jasa Website Custom" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/nuviral-ai-studio", label: "NuViral — Next.js" },
    ],
  },
  {
    slug: "flutter-vs-react-native-mana-yang-terbaik",
    title: "Flutter vs React Native: Cara Memilih untuk Aplikasi Anda",
    description:
      "Perbandingan praktis Flutter dan React Native dari sisi pemilik bisnis: performa, biaya, talent, dan kapan native masih lebih baik.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2025-04-30",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["flutter", "react native", "mobile app"],
    intro:
      "Flutter dan React Native sama-sama menyelesaikan masalah yang sama: satu codebase untuk Android dan iOS. Pilihannya jarang soal teknologi — lebih sering soal tim, ekosistem, dan jenis aplikasi Anda.",
    keyTakeaways: [
      "Keduanya matang — perbedaannya ada di detail, bukan 'bagus vs jelek'",
      "Flutter: UI kaya & konsisten; React Native: lebih dekat ke ekosistem web/React",
      "Untuk aplikasi yang sangat hardware-intensive, native masih menang",
      "Faktor terbesar sebenarnya: siapa yang membangun dan merawatnya",
    ],
    sections: [
      {
        title: "Perbandingan Praktis",
        body: `<table>
<thead><tr><th>Aspek</th><th>Flutter</th><th>React Native</th></tr></thead>
<tbody>
<tr><td>Bahasa</td><td>Dart</td><td>JavaScript/TypeScript</td></tr>
<tr><td>Rendering</td><td>Engine sendiri — pixel-perfect identik antar platform</td><td>Komponen native asli OS</td></tr>
<tr><td>Kekuatan</td><td>UI kompleks, animasi, tampilan konsisten</td><td>Berbagi logika dengan tim web React</td></tr>
<tr><td>Talent Indonesia</td><td>Tumbuh cepat</td><td>Lebih besar (JS lebih umum)</td></tr>
<tr><td>Library</td><td>Pub.dev matang</td><td>NPM raksasa</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Cara Kami Memutuskan di Project Nyata",
        body: `<ul>
<li>Tim sudah paham React/web? → React Native mengurangi learning curve.</li>
<li>Aplikasi dengan UI kompleks, animasi, atau konsistensi visual penting? → Flutter.</li>
<li>Butuh Bluetooth/hardware/native module berat? → pertimbangkan native (Kotlin/Swift) — cross-platform tetap bisa tapi jembatan native-nya menambah kompleksitas.</li>
<li>Target utamanya Android saja untuk validasi? → native Kotlin atau bahkan Flutter untuk siap-siap iOS nanti.</li>
</ul>`,
      },
      {
        title: "Pertanyaan yang Lebih Penting dari Framework",
        body: `<p>Dari sisi bisnis, hal yang lebih menentukan: apakah vendor menulis dokumentasi, apakah source code milik Anda, dan bagaimana update OS ditangani. Flutter vs React Native salah pilih bisa diperbaiki; codebase tanpa dokumentasi dengan vendor yang hilang tidak bisa.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-aplikasi-mobile", label: "Jasa Aplikasi Mobile" },
      { href: "/jasa-aplikasi-android", label: "Jasa Aplikasi Android" },
    ],
  },
  {
    slug: "kotlin-vs-java-untuk-android-development",
    title: "Kotlin vs Java untuk Android: Penjelasan untuk Pemilik Bisnis",
    description:
      "Mengapa Kotlin menjadi standar Android modern, kapan Java masih masuk akal, dan apa artinya untuk project aplikasi Anda.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2024-12-25",
    updated: "2026-10-06",
    readTime: "6 menit",
    author: "tim-nufanas",
    tags: ["kotlin", "java", "android"],
    intro:
      "Jawaban singkat untuk keputusan project baru: Kotlin. Google telah menjadikannya bahasa utama Android sejak 2019, tooling modern dibuat untuknya, dan ekosistem library baru selalu Kotlin-first. Java masih relevan hanya jika Anda memelihara aplikasi lama yang sudah ditulis dalam Java.",
    keyTakeaways: [
      "Project baru → Kotlin; aplikasi Java lama → bertahap migrasi, bukan rewrite total",
      "Kotlin lebih ringkas dan lebih aman dari NullPointerException — sumber crash paling umum",
      "Talent Java Android makin langka — mempengaruhi biaya maintenance jangka panjang",
      "Keputusan bahasa sebaiknya didiskusikan bersama vendor, bukan diputuskan sendiri di awal",
    ],
    sections: [
      {
        title: "Mengapa Kotlin Menang",
        body: `<ul>
<li><strong>Null safety bawaan</strong> — kesalahan paling sering penyebab crash dicegah oleh compiler, bukan harapan programmer.</li>
<li><strong>Lebih ringkas</strong> — fungsi yang sama bisa 30-50% lebih pendek dari Java — lebih sedikit kode = lebih sedikit bug.</li>
<li><strong>100% interoperable dengan Java</strong> — bisa dipakai bertahap di project lama tanpa rewrite.</li>
<li><strong>Coroutines</strong> — async/background task jauh lebih sederhana dibanding Java.</li>
<li><strong>Jetpack Compose</strong> — UI toolkit modern Android hanya tersedia untuk Kotlin.</li>
</ul>`,
      },
      {
        title: "Kapan Java Masih Relevan",
        body: `<p>Kalau aplikasi Anda sudah berjalan stabil dalam Java dan tim maintenance menguasainya — migrasi penuh bisa jadi pemborosan. Strategi umum: fitur baru ditulis Kotlin, kode Java lama dibiarkan atau dimigrasi bertahap saat disentuh. Jangan migrasi untuk migrasi.</p>`,
      },
      {
        title: "Apa Artinya untuk Anda sebagai Pemilik Bisnis",
        body: `<p>Saat vendor mengusulkan aplikasi Android baru, 'Kotlin' adalah jawaban yang benar hari ini. Kalau vendor masih menawarkan project baru 100% Java — atau sebaliknya memaksa cross-platform padahal kebutuhan Anda native-heavy — itu pertanda untuk bertanya lebih dalam. Lihat juga <a href="/blog/jasa-pembuatan-aplikasi-android">checklist memilih vendor aplikasi</a>.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-aplikasi-android", label: "Jasa Aplikasi Android" },
      { href: "/jasa-aplikasi-mobile", label: "Jasa Aplikasi Mobile" },
    ],
  },
  {
    slug: "docker-kubernetes-untuk-deployment-aplikasi",
    title: "Docker dan Kubernetes untuk Bisnis: Kapan Perlu, Kapan Tidak",
    description:
      "Penjelasan tanpa hype: apa yang Docker selesaikan, kapan VPS biasa cukup, dan kapan Kubernetes benar-benar dibutuhkan.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2024-10-20",
    updated: "2026-10-06",
    readTime: "10 menit",
    author: "tim-nufanas",
    tags: ["docker", "kubernetes", "deployment", "devops"],
    intro:
      "Kami menjalankan deployment production dengan Docker di VPS — jadi artikel ini ditulis dari praktik, bukan teori. Jawaban pendeknya: Docker berguna hampir untuk semua project web modern; Kubernetes hampir tidak pernah dibutuhkan sampai Anda punya puluhan service dan tim SRE.",
    keyTakeaways: [
      "Docker = 'bekerja di komputer saya' tidak lagi jadi masalah — environment identik di mana pun",
      "VPS + Docker Compose cukup untuk mayoritas aplikasi bisnis Indonesia",
      "Kubernetes baru masuk akal di skala multi-service, multi-team",
      "Yang penting untuk owner: bukan Kubernetes atau bukan — tapi apakah deployment otomatis dan bisa di-rollback",
    ],
    sections: [
      {
        title: "Masalah yang Docker Selesaikan",
        body: `<p>Sebelum Docker, 'works on my machine' adalah joke paling mahal di software development: versi Node berbeda, dependency beda, konfigurasi beda — dan aplikasi yang berjalan di laptop developer gagal di server. Container membungkus aplikasi + seluruh environment-nya, sehingga yang berjalan di laptop adalah <em>persis</em> yang berjalan di production.</p>
<p>Manfaat langsung untuk bisnis: deployment yang bisa diprediksi, rollback cepat saat ada masalah, dan pindah server tanpa drama konfigurasi.</p>`,
      },
      {
        title: "Spektrum Deployment — Dari Sederhana ke Kompleks",
        body: `<ol>
<li><strong>Shared hosting</strong> — cukup untuk website statis kecil.</li>
<li><strong>VPS + Docker Compose</strong> — sweet spot untuk website bisnis, web app, dan API dengan traffic normal. Ini yang kami pakai untuk deployment client.</li>
<li><strong>PaaS (Vercel, Railway, dsb)</strong> — deploy tanpa mengurus server sama sekali; cocok untuk Next.js dan aplikasi dengan traffic tidak terduga.</li>
<li><strong>Kubernetes</strong> — untuk puluhan service, auto-scaling berat, dan tim ops dedicated. Mayoritas bisnis tidak sampai ke sini — dan itu bagus.</li>
</ol>`,
      },
      {
        title: "Yang Harus Anda Tanyakan ke Vendor",
        body: `<p>Bukan 'pakai Kubernetes atau tidak', melainkan:</p>
<ul>
<li>Apakah deployment otomatis (CI/CD), atau masih upload manual via FTP?</li>
<li>Kalau update bermasalah, bagaimana cara kembali ke versi sebelumnya?</li>
<li>Apakah ada staging environment untuk test sebelum production?</li>
<li>Backup dijalankan otomatis ke mana, dan apakah pernah di-test restore?</li>
</ul>
<p>Empat pertanyaan itu memberi tahu Anda jauh lebih banyak tentang kematangan tim daripada nama teknologi yang mereka sebut.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-custom-software", label: "Custom Software" },
    ],
  },
  {
    slug: "optimasi-kecepatan-website-core-web-vitals",
    title: "Core Web Vitals: Optimasi Kecepatan Website dari Praktik Nyata",
    description:
      "Cara mengoptimasi LCP, INP, dan CLS — termasuk apa yang benar-benar kami lakukan di website ini sendiri untuk kecepatan.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2025-05-10",
    updated: "2026-10-06",
    readTime: "12 menit",
    author: "tim-nufanas",
    tags: ["core web vitals", "page speed", "lighthouse"],
    intro:
      "Core Web Vitals mengukur tiga hal: seberapa cepat konten utama muncul (LCP), seberapa responsif halaman terhadap interaksi (INP), dan seberapa stabil layoutnya (CLS). Kabar baiknya: mayoritas masalah kecepatan website Indonesia berasal dari tiga hal yang sama — gambar besar, JavaScript berlebih, dan font/iklan yang menggeser layout.",
    keyTakeaways: [
      "LCP <2.5s hampir selalu berarti: optimasi gambar hero + server cepat + minim render-blocking JS",
      "Gambar adalah tersangka utama — kompres, pakai format modern (WebP/AVIF), lazy-load",
      "Contoh nyata di situs ini: mengganti video hero 4MB dengan mockup + screenshot statis",
      "INP turun drastis dengan mengurangi JS pihak ketiga — setiap script tag berhutang",
    ],
    sections: [
      {
        title: "Tiga Metrik dan Cara Memperbaikinya",
        body: `<table>
<thead><tr><th>Metrik</th><th>Target</th><th>Penyebab buruk umum</th><th>Perbaikan prioritas</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>&lt; 2.5 detik</td><td>Gambar hero besar, server lambat, JS render-blocking</td><td>Kompres + preload gambar utama; hosting lebih cepat; critical CSS</td></tr>
<tr><td>INP</td><td>&lt; 200 ms</td><td>JavaScript berlebih, third-party scripts</td><td>Kurangi JS; tunda script non-esensial</td></tr>
<tr><td>CLS</td><td>&lt; 0.1</td><td>Gambar/iklan tanpa dimensi, font swap</td><td>Selalu set width/height; reserve space; font-display</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Yang Paling Sering Kami Temui",
        body: `<p>Dalam audit website client, urutan penyebabnya hampir selalu sama:</p>
<ol>
<li><strong>Gambar tidak dioptimasi</strong> — foto produk 3-5MB langsung dari kamera. Ini perbaikan paling murah dengan dampak terbesar.</li>
<li><strong>Video background autoplay</strong> — bagus di screenshot, buruk di data seluler. Kami sendiri menghapusnya dari hero situs ini.</li>
<li><strong>Plugin/JS pihak ketiga</strong> — chat widget, tracking, slider library menumpuk sampai puluhan request.</li>
<li><strong>Server lambat</strong> — shared hosting Rp 50rb/bulan tidak bisa memberi TTFB baik. VPS murah sering lebih cepat.</li>
</ol>`,
      },
      {
        title: "Cara Mengukur yang Benar",
        body: `<p>Jangan hanya pakai skor Lighthouse lab — ukur <em>field data</em> lewat PageSpeed Insights (data pengguna nyata) dan Search Console. Skor 100 di laptop developer Anda tidak berarti pengunjung di jaringan 4G merasakan hal sama.</p>
<p>Untuk detail teknis gambar, lihat <a href="/blog/cara-optimasi-gambar-website-untuk-seo">panduan optimasi gambar</a>.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/layanan/jasa-seo", label: "Jasa SEO" },
    ],
  },
  {
    slug: "cara-optimasi-gambar-website-untuk-seo",
    title: "Optimasi Gambar Website: Panduan Praktis untuk SEO & Kecepatan",
    description:
      "Checklist teknis gambar: format WebP/AVIF, lazy loading, srcset responsive, alt text yang benar, dan filename deskriptif.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2024-11-05",
    updated: "2026-10-06",
    readTime: "7 menit",
    author: "tim-nufanas",
    tags: ["optimasi gambar", "image seo", "web performance"],
    intro:
      "Gambar biasanya menyumbang 50-80% berat halaman. Mengoptimasinya adalah perbaikan kecepatan dengan rasio effort-ke-impact terbaik — dan sekaligus peluang SEO melalui Google Images.",
    keyTakeaways: [
      "Format modern (WebP/AVIF) memangkas ukuran 30-70% tanpa penurunan kualitas terlihat",
      "Setiap gambar wajib: alt deskriptif, width/height, lazy-load kecuali hero",
      "Filename deskriptif membantu SEO: nufanas-project-dashboard.png > IMG_1234.png",
      "next/image (atau CDN gambar) mengotomatisasi hampir semuanya",
    ],
    sections: [
      {
        title: "Checklist per Gambar",
        body: `<ul>
<li><strong>Format</strong> — WebP atau AVIF. PNG untuk grafik dengan transparansi; JPEG/PNG tidak lagi default.</li>
<li><strong>Ukuran</strong> — resize ke dimensi maksimum yang benar-benar ditampilkan, jangan upload 4000px untuk thumbnail 300px.</li>
<li><strong>Alt text</strong> — deskripsikan apa yang terlihat ('Dashboard analytics penjualan Q3') — bukan keyword stuffing.</li>
<li><strong>Width & height</strong> — selalu set eksplisit agar tidak ada layout shift (CLS).</li>
<li><strong>Loading</strong> — lazy untuk semua gambar bawah fold; eager/priority hanya untuk gambar hero LCP.</li>
<li><strong>srcset/sizes</strong> — browser memilih ukuran sesuai layar; jangan kirim gambar desktop ke ponsel.</li>
</ul>`,
      },
      {
        title: "Cara Cepat Mengecek Website Anda",
        body: `<p>Jalankan PageSpeed Insights — lihat bagian 'Opportunities': biasanya 'Serve images in next-gen formats' dan 'Properly size images' muncul pertama. Atau buka DevTools → Network → filter Img: jika ada file >500KB untuk gambar non-hero, itu masalah.</p>
<p>Di Next.js, komponen <code>&lt;Image&gt;</code> sudah menangani format modern, srcset, dan lazy-load secara otomatis — itulah kenapa semua gambar di situs ini melewatinya.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/layanan/jasa-seo", label: "Jasa SEO" },
    ],
  },
  {
    slug: "pentingnya-ssl-untuk-website-bisnis",
    title: "SSL untuk Website Bisnis: Wajib, Bukan Opsional",
    description:
      "Kenapa HTTPS wajib untuk semua website bisnis — kepercayaan pengunjung, ranking Google, dan keamanan data form.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2025-03-15",
    updated: "2026-10-06",
    readTime: "5 menit",
    author: "tim-nufanas",
    tags: ["ssl", "keamanan website", "https"],
    intro:
      "SSL (yang membuat URL Anda https:// dan menampilkan gembok) mengenkripsi data antara pengunjung dan server Anda. Sejak bertahun-tahun lalu browser menandai situs tanpa SSL sebagai 'Not Secure' — dan itu membunuh kepercayaan secara instan.",
    keyTakeaways: [
      "Tanpa SSL, browser menampilkan peringatan 'Not Secure' — pengunjung pergi sebelum membaca",
      "HTTPS adalah syarat ranking Google dan syarat untuk hampir semua fitur modern (geolokasi, PWA, HTTP/2)",
      "SSL gratis (Let's Encrypt) sudah cukup untuk mayoritas website bisnis",
      "SSL tidak menjamin situs 'aman' — ia hanya mengenkripsi jalurnya",
    ],
    sections: [
      {
        title: "Tiga Alasan Ini Wajib",
        body: `<ol>
<li><strong>Kepercayaan</strong> — label 'Not Secure' muncul tepat saat pengunjung akan mengisi form atau membeli.</li>
<li><strong>SEO</strong> — HTTPS adalah sinyal ranking resmi Google sejak 2014.</li>
<li><strong>Data</strong> — tanpa enkripsi, apa pun yang diketik pengunjung (password, nomor kartu, alamat) bisa disadap di jaringan publik.</li>
</ol>`,
      },
      {
        title: "Jenis SSL — Gratis Sudah Cukup untuk Mayoritas",
        body: `<p>DV (Domain Validation) gratis dari Let's Encrypt sudah cukup untuk hampir semua website bisnis — otomatis renewable, didukung semua hosting modern. OV/EV (yang memverifikasi identitas organisasi) hanya perlu jika industri Anda mengharuskannya (finansial, pemerintahan). Jangan biarkan ada yang menjual 'SSL premium' sebagai kebutuhan wajib untuk website company profile.</p>`,
      },
      {
        title: "Masalah Umum Setelah Pasang SSL",
        body: `<p>Mixed content — halaman HTTPS yang masih memuat gambar/script via HTTP — akan memunculkan warning meski SSL terpasang. Pastikan semua resource internal memakai https:// dan lakukan redirect 301 dari http ke https.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    slug: "cara-memilih-hosting-terbaik-indonesia",
    title: "Memilih Hosting untuk Website Bisnis: Shared, VPS, atau Cloud?",
    description:
      "Panduan jujur memilih hosting berdasarkan jenis website dan traffic — bukan berdasarkan siapa yang pasang iklan paling besar.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "commercial",
    date: "2025-02-28",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["hosting", "vps", "cloud hosting"],
    intro:
      "Shared hosting Rp 50rb/bulan cukup untuk website profil kecil. Tapi begitu Anda menjalankan e-commerce atau aplikasi dengan database aktif, VPS menjadi kebutuhan — bukan kemewahan. Memilih hosting yang benar itu soal jenis workload, bukan soal brand.",
    keyTakeaways: [
      "Shared hosting: untuk landing page/company profile traffic rendah",
      "VPS: titik awal untuk e-commerce, web app, dan WordPress yang serius",
      "Cloud/PaaS (Vercel, dll): untuk Next.js dan traffic yang tidak terduga",
      "Yang lebih penting dari provider: lokasi server (Jakarta/SG untuk Indonesia), backup, dan support",
    ],
    sections: [
      {
        title: "Jenis Hosting dalam Bahasa Sederhana",
        body: `<table>
<thead><tr><th>Jenis</th><th>Analogi</th><th>Cocok untuk</th><th>Kisaran biaya</th></tr></thead>
<tbody>
<tr><td>Shared hosting</td><td>Kos — satu rumah banyak penghuni</td><td>Website informasi kecil</td><td>Rp 300rb–1jt/tahun</td></tr>
<tr><td>VPS</td><td>Apartemen — server sendiri, gedung berbagi</td><td>E-commerce, web app, CMS serius</td><td>Rp 60rb–500rb/bulan</td></tr>
<tr><td>Cloud/PaaS</td><td>Hotel — bayar sesuai pakai, auto scale</td><td>Next.js, traffic spike, SaaS</td><td>Gratis–jutaan/bulan</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Checklist Memilih Provider",
        body: `<ul>
<li><strong>Lokasi server</strong> — Jakarta atau Singapura untuk audiens Indonesia; server US menambah 150-250ms latency.</li>
<li><strong>Uptime & support</strong> — garansi uptime 99.9% dan support yang benar-benar menjawab.</li>
<li><strong>Backup</strong> — otomatis, dan bisa Anda export (jangan tergantung pada backup vendor saja).</li>
<li><strong>Upgrade path</strong> — bisa naik spesifikasi tanpa migrasi menyakitkan.</li>
<li><strong>Bandwidth</strong> — 'unlimited' di shared hosting biasanya tetap ada fair-use limit.</li>
</ul>`,
      },
      {
        title: "Rekomendasi Berdasarkan Project",
        body: `<p>Landing page/company profile → shared atau hosting statis. Toko online & web app → VPS mulai 2GB RAM atau PaaS. SaaS/platform → cloud dengan scaling. Project kami sendiri berjalan di VPS dengan Docker — sederhana, murah, dan mudah di-rollback. Kalau ragu, vendor development Anda seharusnya bisa merekomendasikan — itu bagian dari <a href="/jasa-pembuatan-website">lingkup kerja</a>.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/jasa-web-application", label: "Jasa Web Application" },
    ],
  },
  {
    slug: "cara-setup-google-analytics-4",
    title: "Cara Setup Google Analytics 4 (GA4): Panduan untuk Pemilik Website",
    description:
      "Langkah memasang GA4 dengan benar: properti, data stream, event konversi penting untuk bisnis, dan cara membaca datanya.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2024-12-05",
    updated: "2026-10-06",
    readTime: "10 menit",
    author: "tim-nufanas",
    tags: ["google analytics", "ga4", "web analytics"],
    intro:
      "GA4 menjawab pertanyaan dasar bisnis: pengunjung datang dari mana, apa yang mereka lakukan, dan di titik mana mereka menghubungi atau membeli. Setup-nya 15 menit — yang lebih penting adalah menandai event yang benar-benar berarti untuk bisnis Anda.",
    keyTakeaways: [
      "Pasang via Google Tag Manager — jangan paste script langsung, agar tracking lain mudah dikelola",
      "Event penting untuk bisnis jasa: klik WhatsApp, submit form, klik telpon, lihat halaman harga",
      "Tandai event sebagai 'key event' (conversion) agar bisa dipakai di Google Ads",
      "Minta akses admin ke properti GA4 Anda sendiri — jangan biarkan di akun vendor",
    ],
    sections: [
      {
        title: "Langkah Setup",
        body: `<ol>
<li>Buat akun & properti GA4 di analytics.google.com.</li>
<li>Buat <em>web data stream</em> dengan URL website Anda → dapatkan Measurement ID (G-XXXX).</li>
<li>Pasang lewat Google Tag Manager (recommended) atau snippet gtag.js di semua halaman.</li>
<li>Test dengan Realtime report — buka website Anda dan lihat kunjungan muncul.</li>
</ol>`,
      },
      {
        title: "Event yang Harus Anda Track",
        body: `<p>Untuk website bisnis/jasa, konversi utamanya bukan 'pageview' melainkan:</p>
<ul>
<li><strong>Klik WhatsApp</strong> — channel kontak utama di Indonesia.</li>
<li><strong>Submit form kontak</strong> — langsung ke lead.</li>
<li><strong>Klik nomor telepon / email</strong>.</li>
<li><strong>Kunjungan ke halaman harga/portfolio</strong> — sinyal niat.</li>
</ul>
<p>Tandai yang penting sebagai <em>key event</em> di GA4 sehingga laporan 'conversion' langsung berarti. Website yang kami bangun sudah menyiapkan struktur tracking ini sejak awal.</p>`,
      },
      {
        title: "Yang Harus Diperhatikan Pemilik Bisnis",
        body: `<ul>
<li>Akun dan properti harus di email perusahaan Anda — vendor cukup diberi akses, bukan memiliki.</li>
<li>Jangan lupa filter traffic internal (tim sendiri) agar data tidak bias.</li>
<li>Hubungkan ke Google Search Console untuk melihat query pencarian yang mendatangkan pengunjung.</li>
</ul>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/layanan/jasa-seo", label: "Jasa SEO" },
    ],
  },
  {
    slug: "cara-membuat-sitemap-xml-website",
    title: "Sitemap XML: Cara Membuat dan Submit ke Google",
    description:
      "Apa itu sitemap, kenapa penting untuk indexation, dan cara membuatnya di Next.js, WordPress, dan platform lain.",
    category: "Teknologi",
    cluster: "teknologi",
    intent: "informational",
    date: "2024-10-01",
    updated: "2026-10-06",
    readTime: "6 menit",
    author: "tim-nufanas",
    tags: ["sitemap", "google search console", "technical seo"],
    intro:
      "Sitemap XML adalah daftar URL halaman website Anda yang diberikan ke Google — seperti daftar isi yang mempercepat crawler menemukan dan mengindex halaman. Ia tidak menaikkan ranking secara langsung, tapi memastikan tidak ada halaman penting yang terlewat.",
    keyTakeaways: [
      "Sitemap = peta halaman untuk crawler; robots.txt = aturan mana yang boleh/tidak",
      "Hanya masukkan URL canonical yang ingin diindex — bukan halaman duplikat atau hasil filter",
      "Generate otomatis lewat framework/CMS — jangan ditulis manual",
      "Submit sekali di Search Console; update terjadi otomatis",
    ],
    sections: [
      {
        title: "Apa yang Masuk (dan Tidak Masuk) Sitemap",
        body: `<p>Masukkan: semua halaman canonical yang ingin diindex — layanan, portfolio, artikel blog, halaman statis.</p>
<p>Jangan masukkan: halaman hasil filter/search, URL parameter, halaman admin, halaman duplikat, atau halaman thin yang tidak memberi nilai. Sitemap yang bersih membantu crawler fokus ke halaman penting — itulah kenapa kami juga tidak memasukkan halaman tag/category yang thin.</p>`,
      },
      {
        title: "Cara Membuat per Platform",
        body: `<ul>
<li><strong>Next.js</strong> — file <code>app/sitemap.ts</code> mengembalikan array URL (generate dari data Anda), atau pakai library seperti next-sitemap.</li>
<li><strong>WordPress</strong> — plugin SEO (Yoast/RankMath) menggenerate otomatis di /sitemap_index.xml.</li>
<li><strong>Umum</strong> — generator online atau script dari daftar URL; upload ke root sehingga tersedia di /sitemap.xml.</li>
</ul>
<p>Verifikasi di browser: buka domainanda.com/sitemap.xml — harus tampil XML berisi daftar URL.</p>`,
      },
      {
        title: "Submit & Pantau",
        body: `<p>Di Google Search Console: Sitemaps → tambahkan <code>sitemap.xml</code> → Submit. Pantau bagian 'Pages' untuk memastikan halaman terindex. Jika banyak halaman 'Discovered - currently not indexed', biasanya itu masalah kualitas konten, bukan sitemap.</p>`,
      },
    ],
    relatedServices: [
      { href: "/layanan/jasa-seo", label: "Jasa SEO" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
];
