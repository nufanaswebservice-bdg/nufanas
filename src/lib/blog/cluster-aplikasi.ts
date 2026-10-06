import type { BlogArticle } from "../blog-data";

export const APLIKASI_ARTICLES: BlogArticle[] = [
  {
    slug: "biaya-pembuatan-aplikasi-mobile-2025",
    title: "Biaya Pembuatan Aplikasi Mobile: Estimasi Realistis per Kompleksitas",
    description:
      "Berapa biaya membuat aplikasi Android dan iOS? Rincian estimasi harga berdasarkan fitur dan kompleksitas — dari aplikasi bisnis sederhana sampai platform.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "commercial",
    date: "2025-05-05",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["biaya aplikasi", "android", "ios", "jasa pembuatan aplikasi"],
    intro:
      "Aplikasi mobile di Indonesia berkisar dari belasan juta untuk aplikasi bisnis sederhana sampai ratusan juta untuk platform multi-peran. Selisihnya bukan di 'mahal-murah vendor' — melainkan di jumlah platform (Android saja vs Android+iOS), backend, dan fitur real-time.",
    keyTakeaways: [
      "Aplikasi bisnis (POS, booking, internal): mulai Rp 15 juta",
      "Aplikasi Android saja lebih hemat dari cross-platform; iOS biasanya lebih mahal (proses review App Store lebih ketat)",
      "Backend, payment, dan fitur real-time (chat, tracking) adalah penggerak biaya terbesar",
      "Biaya tahunan: server, akun developer (Google Play $25 sekali; Apple $99/tahun), dan maintenance",
    ],
    sections: [
      {
        title: "Estimasi per Jenis Aplikasi",
        body: `<p>Dari daftar harga layanan kami sebagai acuan pasar:</p>
<table>
<thead><tr><th>Jenis</th><th>Mulai dari</th><th>Cakupan umum</th></tr></thead>
<tbody>
<tr><td>Aplikasi bisnis/operasional</td><td>Rp 15.000.000</td><td>POS, booking, inventory sederhana</td></tr>
<tr><td>Aplikasi Android</td><td>Rp 20.000.000</td><td>Satu platform, fitur standar</td></tr>
<tr><td>Aplikasi iOS / cross-platform</td><td>Rp 25.000.000</td><td>Flutter/React Native atau native</td></tr>
<tr><td>Custom software / platform</td><td>Rp 30.000.000+</td><td>Multi-role, integrasi kompleks</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Lima Faktor yang Menentukan Harga",
        body: `<ol>
<li><strong>Jumlah platform</strong> — Android saja termurah; cross-platform (Flutter/React Native) lebih hemat dari dua native terpisah.</li>
<li><strong>Backend & database</strong> — aplikasi yang butuh server, API, dan admin panel harganya beda jauh dari aplikasi statis.</li>
<li><strong>Fitur real-time</strong> — chat, live tracking, push notification kompleks menambah effort signifikan.</li>
<li><strong>Integrasi</strong> — payment gateway, maps, WhatsApp, sistem internal.</li>
<li><strong>Desain & polish</strong> — UI custom dan animasi memerlukan waktu desain tersendiri.</li>
</ol>`,
      },
      {
        title: "Biaya Tersembunyi yang Sering Dilupakan",
        body: `<ul>
<li>Akun Google Play Developer: USD 25 (sekali).</li>
<li>Apple Developer Program: USD 99/tahun.</li>
<li>Server/backend: Rp 300rb–3jt/bulan tergantung traffic.</li>
<li>Maintenance & update OS: aplikasi yang tidak di-update akan rusak saat Android/iOS major update.</li>
</ul>
<p>Selalu tanyakan apakah penawaran sudah termasuk publish ke store dan maintenance awal.</p>`,
      },
      {
        title: "Jalur Hemat: MVP Dulu",
        body: `<p>Cara paling aman memulai: bangun MVP dengan 2-3 fitur inti, launch ke pengguna nyata, lalu iterasi. Hampir semua aplikasi sukses dimulai lebih kecil dari rencana awal pemiliknya. Untuk konsultasi scope, <a href="/kontak">tim kami bisa membantu memetakan MVP</a> tanpa komitmen.</p>`,
      },
    ],
    faqs: [
      {
        question: "Apakah lebih murah membuat aplikasi Android saja?",
        answer:
          "Ya — untuk validasi awal, Android saja (mulai Rp 20 juta) adalah pilihan paling hemat karena mayoritas pengguna Indonesia memakai Android. Tambah iOS setelah produk terbukti.",
      },
      {
        question: "Kenapa aplikasi iOS lebih mahal?",
        answer:
          "Proses review App Store lebih ketat dan tooling-nya menuntut environment Apple. Kecuali pakai cross-platform seperti Flutter yang kodenya dibagi untuk kedua platform.",
      },
      {
        question: "Apakah ada biaya bulanan setelah aplikasi jadi?",
        answer:
          "Ya: biaya server/backend (mulai ~Rp 300rb/bulan), Apple Developer ($99/tahun), dan opsional paket maintenance untuk update dan perbaikan.",
      },
    ],
    relatedServices: [
      { href: "/jasa-aplikasi-mobile", label: "Jasa Aplikasi Mobile" },
      { href: "/jasa-aplikasi-android", label: "Jasa Aplikasi Android" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
    ],
  },
  {
    slug: "jasa-pembuatan-aplikasi-android",
    title: "Jasa Pembuatan Aplikasi Android: Cara Memilih Vendor yang Tepat",
    description:
      "Checklist memilih vendor aplikasi Android: pertanyaan yang harus diajukan, red flag, dan apa yang seharusnya termasuk dalam penawaran.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "commercial",
    date: "2025-04-10",
    updated: "2026-10-06",
    readTime: "8 menit",
    author: "tim-nufanas",
    tags: ["aplikasi android", "software house", "mobile developer"],
    intro:
      "Memilih vendor aplikasi Android bukan soal mencari yang termurah — melainkan memastikan source code milik Anda, timeline realistis, dan ada kepastian siapa yang bertanggung jawab saat aplikasi bermasalah setelah launch. Berikut checklist yang kami sarankan sebelum tanda tangan.",
    keyTakeaways: [
      "Minta repo access sejak awal — source code di akun Anda, bukan vendor",
      "Native (Kotlin) vs cross-platform (Flutter) — pilih berdasarkan kebutuhan, bukan tren",
      "Pastikan penawaran mencakup publish ke Play Store dan masa garansi",
      "Vendor tanpa portfolio aplikasi live di Play Store adalah red flag",
    ],
    sections: [
      {
        title: "Native vs Cross-Platform: Tanya Dulu Sebelum Bayar",
        body: `<p>Vendor yang baik akan menjelaskan trade-off, bukan menjual satu teknologi ke semua client:</p>
<ul>
<li><strong>Kotlin (native)</strong> — performa terbaik, akses fitur Android penuh. Cocok untuk aplikasi padat (POS offline, tracking, hardware).</li>
<li><strong>Flutter</strong> — satu codebase untuk Android+iOS. Hemat ~30-40% jika Anda butuh dua platform.</li>
<li><strong>PWA/hybrid</strong> — paling murah, tapi terbatas untuk fitur hardware.</li>
</ul>
<p>Kalau vendor memaksa satu jawaban tanpa mendengar use case Anda, itu tanda untuk bertanya lebih jauh.</p>`,
      },
      {
        title: "Checklist Sebelum Deal",
        body: `<ul>
<li>Apakah ada aplikasi live di Play Store yang bisa saya unduh dan coba?</li>
<li>Apakah source code disimpan di repository milik saya?</li>
<li>Apakah penawaran termasuk backend, admin panel, dan publish ke Play Store?</li>
<li>Berapa lama garansi bug pasca-launch, dan bagaimana skema maintenance setelahnya?</li>
<li>Bagaimana mekanisme perubahan scope di tengah project (change request)?</li>
</ul>`,
      },
      {
        title: "Red Flag yang Sering Terjadi",
        body: `<ul>
<li>Harga terlalu murah untuk scope besar — biasanya berarti template atau hasil akhir yang tidak bisa dirawat.</li>
<li>Tidak ada demo/verifikasi progress berkala — Anda baru melihat hasil di akhir.</li>
<li>Akun Play Console milik vendor — saat hubungan berakhir, aplikasi Anda ikut hilang.</li>
</ul>
<p>Di project kami sendiri, repository client dan akun store selalu atas nama client — kami hanya diberi akses sebagai developer.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-aplikasi-android", label: "Jasa Aplikasi Android" },
      { href: "/jasa-aplikasi-mobile", label: "Jasa Aplikasi Mobile" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
    ],
  },
  {
    slug: "kapan-bisnis-membutuhkan-aplikasi",
    title: "Kapan Bisnis Benar-Benar Membutuhkan Aplikasi? (dan Kapan Tidak)",
    description:
      "Framework keputusan jujur: tanda bisnis Anda sudah butuh aplikasi/sistem — dan kondisi di mana spreadsheet atau WhatsApp masih cukup.",
    category: "Bisnis",
    cluster: "aplikasi",
    intent: "informational",
    date: "2026-10-06",
    readTime: "7 menit",
    author: "tim-nufanas",
    tags: ["aplikasi bisnis", "custom software", "digitalisasi bisnis"],
    intro:
      "Jawaban jujur: bisnis Anda butuh aplikasi ketika proses manual mulai menghambat — bukan karena kompetitor punya. Kalau rekap penjualan makan 2 jam tiap malam, booking tercatat di chat WhatsApp yang sering terlewat, atau data tersebar di 5 spreadsheet yang tidak pernah sinkron — itu sinyal nyata.",
    keyTakeaways: [
      "Butuh aplikasi = proses repetitif manual + data tersebar + butuh akses multi-user real-time",
      "Belum butuh = volume masih kecil, proses belum stabil, atau tools murah sudah menyelesaikan masalah",
      "Urutan yang benar: stabilkan SOP dulu → digitalisasi → jangan mengkodekan kekacauan",
    ],
    sections: [
      {
        title: "Tanda-Tanda Anda Sudah Butuh",
        body: `<ul>
<li><strong>Pekerjaan repetitif memakan jam kerja.</strong> Rekap penjualan manual, hitung stok harian, buat laporan mingguan — semua itu bisa diotomasi.</li>
<li><strong>Data tersebar dan sering konflik.</strong> Versi 'mana yang benar' berbeda antar orang — spreadsheet A bilang stok 10, B bilang 8.</li>
<li><strong>Proses tergantung satu orang.</strong> Hanya admin tertentu yang tahu cara kerjanya — risiko besar saat dia resign.</li>
<li><strong>Butuh multi-user real-time.</strong> Kasir input transaksi, gudang melihat stok, owner memantau laporan — bersamaan.</li>
<li><strong>Pelanggan menunggu proses manual.</strong> Booking harus menunggu admin balas chat; cek status harus tanya CS.</li>
</ul>`,
      },
      {
        title: "Kapan Belum Perlu",
        body: `<ul>
<li>Volume transaksi masih <10/hari dan satu orang bisa menanganinya.</li>
<li>Proses bisnis belum stabil — SOP masih berubah tiap minggu.</li>
<li>Tools siap pakai (Google Sheets, Notion, software POS murah) sudah menyelesaikan masalah dengan baik.</li>
</ul>
<p>Mengkodekan proses yang berantakan hanya menghasilkan kekacauan digital. Rapikan SOP dulu, baru digitalisasi.</p>`,
      },
      {
        title: "Spektrum Solusi: Website → Web App → Mobile",
        body: `<p>Tidak semua 'butuh aplikasi' berarti aplikasi mobile di Play Store:</p>
<ul>
<li><strong>Website</strong> — jika kebutuhannya informasi dan akuisisi pelanggan.</li>
<li><strong><a href="/jasa-web-application">Web application</a></strong> — jika tim perlu input data, dashboard, dan workflow. Berjalan di browser, tidak perlu install, satu codebase untuk semua device. Ini jawaban untuk mayoritas kebutuhan internal bisnis.</li>
<li><strong><a href="/jasa-aplikasi-mobile">Aplikasi mobile</a></strong> — jika pengguna harus akses offline, fitur hardware (kamera, GPS, notifikasi), atau customer-facing dengan engagement tinggi.</li>
</ul>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
      { href: "/jasa-pembuatan-aplikasi-bisnis", label: "Aplikasi Bisnis" },
      { href: "/jasa-web-application", label: "Web Application" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/portal-agatha", label: "Portal Agatha" },
    ],
  },
  {
    slug: "custom-software-vs-saas",
    title: "Custom Software vs SaaS Berlangganan: Cara Menghitung Mana yang Tepat",
    description:
      "Framework keputusan antara membangun software sendiri atau berlangganan SaaS — dengan perhitungan biaya 3 tahun yang sering mengejutkan.",
    category: "Bisnis",
    cluster: "aplikasi",
    intent: "commercial",
    date: "2026-10-06",
    readTime: "8 menit",
    author: "tim-nufanas",
    tags: ["custom software", "saas", "erp", "software development"],
    intro:
      "SaaS cocok untuk proses standar — akuntansi, email, HR dasar. Custom software mulai menang ketika proses Anda unik, lisensi per-user membengkak, atau software itu sendiri adalah produk yang Anda jual. Keputusan yang benar dihitung dari total biaya 3 tahun, bukan biaya awal.",
    keyTakeaways: [
      "SaaS menang untuk proses standar dengan tim kecil; custom menang untuk proses unik dan skala user besar",
      "Hitung total cost 3 tahun: lisensi SaaS tumbuh dengan jumlah user; biaya custom mendatar setelah development",
      "Lock-in dan kepemilikan data adalah faktor yang sering dilupakan",
      "Jika software = produk bisnis Anda, custom bukan pilihan — melainkan keharusan",
    ],
    sections: [
      {
        title: "Perbandingan Langsung",
        body: `<table>
<thead><tr><th>Aspek</th><th>SaaS Berlangganan</th><th>Custom Software</th></tr></thead>
<tbody>
<tr><td>Biaya awal</td><td>Rendah</td><td>Tinggi (development)</td></tr>
<tr><td>Biaya berjalan</td><td>Lisensi per user/bulan, naik seiring tim tumbuh</td><td>Server + maintenance, relatif datar</td></tr>
<tr><td>Waktu pakai</td><td>Hari ini juga</td><td>Mingguan–bulanan</td></tr>
<tr><td>Kesesuaian proses</td><td>Anda menyesuaikan software</td><td>Software menyesuaikan Anda</td></tr>
<tr><td>Kepemilikan</td><td>Sewa — berhenti bayar, hilang akses</td><td>Milik Anda sepenuhnya</td></tr>
<tr><td>Kompetitor</td><td>Memakai software yang sama</td><td>Keunggulan yang tidak bisa dibeli kompetitor</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Matematika 3 Tahun",
        body: `<p>Contoh sederhana: SaaS ERP Rp 300rb/user/bulan untuk 20 user = Rp 72jt/tahun = <strong>Rp 216jt dalam 3 tahun</strong>, dan Anda masih tidak memiliki apa-apa. Custom system Rp 60-100jt + maintenance Rp 12jt/tahun ≈ <strong>Rp 100-140jt dalam 3 tahun</strong> — dan sistemnya milik Anda.</p>
<p>Break-even biasanya terjadi di sekitar 10-25 user, atau saat Anda membayar fitur SaaS yang sebagian besar tidak dipakai.</p>`,
      },
      {
        title: "Kapan SaaS Tetap Jawaban Benar",
        body: `<p>Jangan custom-build kalau: prosesnya standar (akuntansi, payroll sederhana, email marketing), tim <10 user, atau Anda butuh jalan hari ini. Membangun ulang software yang sudah bagus di pasaran adalah pemborosan — energi Anda lebih baik diarahkan ke proses yang memang unik di bisnis Anda.</p>`,
      },
      {
        title: "Contoh dari Project Kami",
        body: `<p><a href="/portfolio/portal-agatha">Portal Agatha</a> adalah contoh kasus custom: alur verifikasi data anggota komunitas yang tidak tersedia di software jadi manapun — solusinya sistem informasi sederhana yang mengikuti SOP organisasi, bukan sebaliknya. Untuk produk yang memang dijual ke pasar, <a href="/portfolio/nuviral-ai-studio">NuViral</a> menunjukkan sisi lain: platform SaaS yang kami bangun sebagai produk — di sini custom software adalah bisnisnya.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-custom-software", label: "Custom Software Development" },
      { href: "/jasa-pembuatan-sistem-informasi", label: "Sistem Informasi" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/portal-agatha", label: "Portal Agatha" },
      { href: "/portfolio/nuviral-ai-studio", label: "NuViral AI" },
    ],
  },
  {
    slug: "cara-membuat-aplikasi-kasir-untuk-bisnis",
    title: "Aplikasi Kasir (POS) untuk Retail & F&B: Fitur, Opsi, dan Biaya",
    description:
      "Apa yang harus ada di aplikasi kasir yang baik — dan cara memutuskan antara POS siap pakai vs POS custom untuk bisnis Anda.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "informational",
    date: "2025-03-20",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["aplikasi kasir", "pos system", "bisnis retail"],
    intro:
      "Aplikasi kasir yang baik menjawab tiga hal: transaksi cepat saat ramai, stok yang selalu akurat, dan laporan yang bisa dibaca owner tanpa rekap manual. Pertanyaan sesungguhnya bukan 'POS apa' — melainkan 'apakah POS siap pakai cukup, atau proses Anda perlu yang custom'.",
    keyTakeaways: [
      "POS siap pakai cukup untuk toko standar; custom masuk akal untuk alur unik atau multi-cabang",
      "Fitur kritikal: mode offline, integrasi printer thermal, stok real-time, laporan per shift",
      "POS custom berbasis web = tidak perlu install, jalan di komputer kasir dan HP owner",
      "Biaya custom POS mulai Rp 15 juta — bandingkan dengan total langganan SaaS POS per tahun",
    ],
    sections: [
      {
        title: "Fitur yang Benar-Benar Dipakai Kasir Setiap Hari",
        body: `<ul>
<li><strong>Transaksi cepat</strong> — cari produk via barcode/nama, split bill, diskon, cetak struk thermal.</li>
<li><strong>Stok otomatis</strong> — setiap penjualan langsung mengurangi stok; alert saat stok minimum.</li>
<li><strong>Mode offline</strong> — internet mati ≠ toko tutup. Transaksi disimpan lokal lalu sync saat online kembali.</li>
<li><strong>Laporan otomatis</strong> — penjualan harian, produk terlaris, per shift dan per kasir.</li>
<li><strong>Multi-role</strong> — kasir tidak bisa mengubah harga; hanya owner yang melihat laba.</li>
</ul>`,
      },
      {
        title: "POS Siap Pakai vs Custom",
        body: `<p><strong>Pakai SaaS POS (Moka, Qasir, dsb) jika:</strong> toko tunggal, alur standar, budget minimal di awal. Kelemahannya: biaya bulanan per outlet, fitur mengikuti roadmap vendor, data di platform orang lain.</p>
<p><strong>Bangun custom jika:</strong> alur Anda unik (custom order, bundling rumit, harga bertingkat member), multi-cabang dengan konsolidasi pusat, atau butuh integrasi ke sistem lain (accounting, e-commerce). Custom POS web-based kami rancang berjalan di browser — kasir pakai komputer biasa, owner pantau dari HP.</p>`,
      },
      {
        title: "Hardware yang Perlu Disiapkan",
        body: `<p>Printer thermal ESC/POS (Rp 1–2jt), barcode scanner (Rp 300–800rb), cash drawer (opsional), dan tablet/komputer dengan browser. Semua hardware standar — tidak perlu perangkat proprietary.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-aplikasi-bisnis", label: "Jasa Aplikasi Bisnis" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
    ],
  },
  {
    slug: "aplikasi-inventory-management-panduan",
    title: "Aplikasi Inventory: Kapan Spreadsheet Tidak Lagi Cukup",
    description:
      "Tanda stok manual mulai merugikan bisnis, fitur inventory system yang penting, dan opsi dari sederhana sampai multi-gudang.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "informational",
    date: "2024-11-10",
    updated: "2026-10-06",
    readTime: "8 menit",
    author: "tim-nufanas",
    tags: ["inventory management", "stok barang", "aplikasi gudang"],
    intro:
      "Spreadsheet bekerja baik sampai titik tertentu — biasanya saat ada lebih dari satu orang yang mengubah stok, lebih dari satu lokasi penyimpanan, atau ketika salah hitung mulai membuat Anda oversell. Lewat titik itu, aplikasi inventory bukan lagi kemewahan.",
    keyTakeaways: [
      "Sinyal spreadsheet sudah tidak cukup: multi-user konflik, multi-lokasi, selisih stok berulang",
      "Fitur inti: stok real-time, mutasi antar lokasi, alert minimum, stock opname, audit trail",
      "Bar/QR code scanning memangkas kesalahan input drastis",
      "Inventory yang terhubung ke kasir & purchasing menghapus double-entry",
    ],
    sections: [
      {
        title: "Tanda-Tanda Anda Sudah Lewat Batas Spreadsheet",
        body: `<ul>
<li>Dua orang membuka file yang sama dan data saling menimpa.</li>
<li>Stok di kertas sistem tidak pernah sama dengan stok fisik saat opname.</li>
<li>Oversell: marketplace menampilkan stok yang sebenarnya sudah habis.</li>
<li>Barang 'hilang' antar gudang/cabang tanpa jejak mutasi.</li>
</ul>`,
      },
      {
        title: "Fitur yang Harus Ada",
        body: `<ul>
<li><strong>Stok real-time</strong> — satu angka kebenaran yang dilihat semua orang.</li>
<li><strong>Mutasi & multi-lokasi</strong> — barang masuk, keluar, pindah antar gudang tercatat.</li>
<li><strong>Barcode/QR scanning</strong> — input tanpa ketik manual; kesalahan hampir nol.</li>
<li><strong>Stock opname</strong> — mode hitung fisik dengan laporan selisih.</li>
<li><strong>Audit trail</strong> — siapa mengubah apa dan kapan. Penting untuk mencegah kebocoran.</li>
<li><strong>Integrasi</strong> — ke kasir/POS, e-commerce, dan purchasing agar tidak ada input ganda.</li>
</ul>`,
      },
      {
        title: "Opsi Implementasi",
        body: `<p>Skala kecil (satu gudang, <500 SKU): tools siap pakai atau aplikasi inventory sederhana cukup. Skala menengah dengan proses unik — misalnya produksi, barang konsinyasi, atau lot/expiry tracking — biasanya memerlukan <a href="/jasa-pembuatan-sistem-informasi">sistem informasi custom</a> yang mengikuti alur gudang Anda.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Sistem Informasi" },
      { href: "/jasa-pembuatan-aplikasi-bisnis", label: "Aplikasi Bisnis" },
    ],
  },
  {
    slug: "erp-system-panduan-lengkap-untuk-bisnis",
    title: "ERP untuk Bisnis Menengah: Panduan Tanpa Jargon",
    description:
      "Apa itu ERP, kapan bisnis Indonesia benar-benar membutuhkannya, dan alternatif modular yang lebih terjangkau dari SAP/Odoo.",
    category: "Bisnis",
    cluster: "aplikasi",
    intent: "informational",
    date: "2025-03-10",
    updated: "2026-10-06",
    readTime: "11 menit",
    author: "tim-nufanas",
    tags: ["erp", "enterprise software", "sistem informasi"],
    intro:
      "ERP (Enterprise Resource Planning) adalah sistem yang menghubungkan pembelian, stok, produksi, penjualan, dan keuangan dalam satu database — sehingga penjualan di cabang langsung terlihat oleh gudang dan finance tanpa rekap. Yang tidak dibilang vendor ERP: mayoritas implementasi gagal bukan karena software-nya, tapi karena dipaksakan big-bang ke proses yang belum siap.",
    keyTakeaways: [
      "ERP = satu database untuk seluruh proses — bukan sekadar software akuntansi",
      "Butuh saat: multi-departemen berebut data yang sama dan rekap manual menghambat keputusan",
      "Implementasi bertahap (modul per modul) punya tingkat keberhasilan jauh lebih tinggi",
      "ERP custom modular sering lebih cocok untuk perusahaan menengah daripada ERP enterprise mahal",
    ],
    sections: [
      {
        title: "Apa yang ERP Sebenarnya Lakukan",
        body: `<p>Bayangkan satu sumber kebenaran: sales input order → stok otomatis teralokasi → purchasing mendapat alert saat stok kurang → finance melihat invoice dan cashflow — semua real-time, tanpa ada yang mengetik ulang. Itulah janji ERP, dan ketika berjalan benar, ia menghapus 'telepon berantai' antar departemen.</p>`,
      },
      {
        title: "Tanda Anda Sudah Siap (dan Belum)",
        body: `<p><strong>Sudah siap:</strong> data penjualan, stok, dan keuangan hidup di sistem berbeda dan tidak pernah sinkron; laporan konsolidasi butuh berhari-hari; tidak ada yang berani memastikan angka mana yang benar.</p>
<p><strong>Belum siap:</strong> proses bisnis masih berubah-ubah, tidak ada sponsor di level direksi, atau tim belum disiplin input data. ERP tidak memperbaiki disiplin — ia mempercepat proses yang sudah rapi.</p>`,
      },
      {
        title: "Tiga Jalur ERP",
        body: `<ul>
<li><strong>ERP enterprise (SAP, Oracle)</strong> — lengkap tapi mahal: lisensi + konsultan implementasi bisa ratusan juta. Untuk korporasi besar.</li>
<li><strong>ERP open/mid-market (Odoo, ERPNext)</strong> — lebih terjangkau, modular, tapi tetap memaksa Anda menyesuaikan cara kerja ke framework mereka.</li>
<li><strong>Sistem informasi custom modular</strong> — bangun modul yang benar-benar dibutuhkan (inventory → sales → finance), ikuti SOP Anda, tanpa lisensi per-user. <a href="/blog/custom-software-vs-saas">Perbandingan biayanya kami bahas di sini</a>.</li>
</ul>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Sistem Informasi" },
      { href: "/jasa-custom-software", label: "Custom Software" },
    ],
  },
  {
    slug: "apa-itu-crm-dan-manfaatnya",
    title: "Apa Itu CRM: Panduan Praktis untuk Tim Sales",
    description:
      "CRM dalam bahasa sederhana: apa yang dicatat, kapan bisnis Anda membutuhkannya, dan kapan spreadsheet masih cukup.",
    category: "Bisnis",
    cluster: "aplikasi",
    intent: "informational",
    date: "2025-02-20",
    updated: "2026-10-06",
    readTime: "7 menit",
    author: "tim-nufanas",
    tags: ["crm", "sales", "customer management"],
    intro:
      "CRM (Customer Relationship Management) adalah sistem yang mencatat setiap interaksi dengan calon dan pelanggan: siapa lead-nya, dari mana datangnya, sudah dihubungi kapan, dan di tahap apa penawarannya. Fungsi utamanya sederhana — tidak ada lead yang hilang karena lupa follow-up.",
    keyTakeaways: [
      "CRM = satu tempat untuk pipeline penjualan, bukan sekadar database kontak",
      "Butuh saat: lebih dari satu sales, lead datang dari banyak channel, follow-up sering terlewat",
      "Spreadsheet masih cukup untuk <50 lead aktif dengan satu penanganan",
      "CRM yang dipakai tim adalah CRM yang sederhana — bukan yang paling lengkap",
    ],
    sections: [
      {
        title: "Masalah yang CRM Selesaikan",
        body: `<p>Pola yang selalu sama di tim sales tanpa CRM: lead masuk ke WhatsApp masing-masing sales, follow-up mengandalkan ingatan, dan saat sales resign — seluruh pipeline ikut hilang. CRM memindahkan hubungan pelanggan dari kepala individu ke aset perusahaan.</p>`,
      },
      {
        title: "Fitur Inti yang Benar-Benar Dipakai",
        body: `<ul>
<li><strong>Pipeline visual</strong> — lead → contacted → proposal → deal, dengan nilai estimasi.</li>
<li><strong>Reminder follow-up</strong> — notifikasi otomatis, bukan ingatan manual.</li>
<li><strong>Riwayat interaksi</strong> — catatan tiap kontak agar siapa pun bisa melanjutkan.</li>
<li><strong>Sumber lead</strong> — tahu channel mana yang benar-benar menghasilkan deal.</li>
<li><strong>Laporan funnel</strong> — di tahap mana lead paling banyak gugur.</li>
</ul>`,
      },
      {
        title: "Kapan Spreadsheet Masih Cukup",
        body: `<p>Satu sales, kurang dari 50 lead aktif, siklus penjualan pendek — spreadsheet rapi masih bekerja. CRM menjadi kebutuhan saat ada tim sales, lead dari banyak channel, atau deal cycle panjang yang butuh follow-up berbulan-bulan.</p>
<p>Untuk kebutuhan khusus — misalnya CRM yang menyatu dengan sistem operasional Anda — <a href="/jasa-pembuatan-sistem-informasi">sistem informasi custom</a> sering lebih efektif daripada memaksa SaaS CRM besar.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Sistem Informasi" },
      { href: "/jasa-pembuatan-aplikasi-bisnis", label: "Aplikasi Bisnis" },
    ],
  },
  {
    slug: "hris-system-manajemen-sdm-modern",
    title: "HRIS: Digitalisasi SDM dari Absensi sampai Payroll",
    description:
      "Apa yang HRIS kerjakan, modul yang paling berdampak untuk perusahaan menengah, dan cara mulai tanpa proyek raksasa.",
    category: "Bisnis",
    cluster: "aplikasi",
    intent: "informational",
    date: "2025-01-20",
    updated: "2026-10-06",
    readTime: "8 menit",
    author: "tim-nufanas",
    tags: ["hris", "human resource", "payroll"],
    intro:
      "HRIS (Human Resource Information System) memusatkan data karyawan, absensi, cuti, dan payroll dalam satu sistem. Untuk perusahaan 50+ karyawan, HRIS biasanya bukan soal fitur — melainkan soal menghapus pekerjaan manual HR yang tumbuh linear dengan jumlah karyawan.",
    keyTakeaways: [
      "Modul paling berdampak dulu: database karyawan + absensi + cuti; payroll menyusul",
      "Self-service karyawan (ajukan cuti, lihat slip) memangkas beban admin HR secara langsung",
      "Integrasi payroll menghapus double-input yang paling rawan salah hitung",
      "Mulai modular — jangan implementasi semua modul sekaligus",
    ],
    sections: [
      {
        title: "Modul HRIS dari yang Paling Berdampak",
        body: `<ol>
<li><strong>Database karyawan</strong> — kontrak, dokumen, struktur organisasi. Pondasi semua modul lain.</li>
<li><strong>Absensi</strong> — clock-in via mobile/QR, shift, overtime tracking.</li>
<li><strong>Cuti & approval</strong> — pengajuan self-service dengan alur persetujuan berjenjang.</li>
<li><strong>Payroll</strong> — gaji, lembur, potongan, slip otomatis; paling sensitif, paling butuh akurasi.</li>
<li><strong>Performa & rekrutmen</strong> — biasanya tahap kedua, bukan prioritas awal.</li>
</ol>`,
      },
      {
        title: "SaaS HR vs Sistem Custom",
        body: `<p>SaaS HRIS Indonesia (Talenta, Gadjian, dsb) kuat untuk proses standar dan perhitungan BPJS/pajak yang kompleks — dan biaya per karyawan per bulan masuk akal untuk tim kecil. Custom masuk akal saat: kebijakan Anda sangat spesifik (shift rumit, struktur komisi unik), ada kebutuhan integrasi ke ERP internal, atau jumlah karyawan membuat lisensi per-user mahal dalam 3 tahun.</p>`,
      },
      {
        title: "Yang Sering Dilupakan Saat Implementasi",
        body: `<p>Migrasi data karyawan dan sosialisasi ke karyawan. Sistem secanggih apapun gagal kalau karyawan tetap datang ke HR untuk urusan yang sebenarnya bisa self-service. Anggaran waktu untuk training — itu bagian dari implementasi, bukan bonus.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Sistem Informasi" },
      { href: "/jasa-custom-software", label: "Custom Software" },
    ],
  },
  {
    slug: "saas-development-panduan-membangun-produk",
    title: "Membangun Produk SaaS: Dari MVP sampai Produk Berbayar",
    description:
      "Pelajaran membangun platform SaaS dari project nyata: scope MVP, multi-tenancy, billing, dan kesalahan yang paling sering membunuh produk baru.",
    category: "Teknologi",
    cluster: "aplikasi",
    intent: "informational",
    date: "2024-12-15",
    updated: "2026-10-06",
    readTime: "12 menit",
    author: "tim-nufanas",
    tags: ["saas", "software development", "startup", "mvp"],
    intro:
      "Membangun SaaS berbeda dengan membangun software internal: penggunanya adalah pelanggan yang membayar, downtime berarti kehilangan revenue, dan setiap pelanggan berbagi sistem yang sama (multi-tenant). Dari pengalaman membangun platform SaaS seperti NuViral, ini hal-hal yang menentukan hidup-mati produk di tahun pertama.",
    keyTakeaways: [
      "MVP SaaS seharusnya menyelesaikan satu masalah dengan sangat baik — bukan sepuluh masalah dengan biasa-biasa",
      "Multi-tenancy dan billing adalah dua komponen yang paling sering diremehkan",
      "Onboarding yang cepat ke 'nilai pertama' menentukan retensi lebih dari fitur apapun",
      "Tunda scale engineering sampai ada traction — arsitektur sederhana dulu",
    ],
    sections: [
      {
        title: "Scope MVP: Satu Alur yang Lengkap",
        body: `<p>Kesalahan paling umum: membangun semua fitur sebelum launch. MVP yang benar adalah <em>satu alur lengkap</em> — daftar → dapat nilai → bayar. Untuk platform AI seperti <a href="/portfolio/nuviral-ai-studio">NuViral</a>, itu berarti satu AI tool yang bekerja sempurna sebelum menambah delapan lainnya.</p>`,
      },
      {
        title: "Komponen Teknis yang Sering Diremehkan",
        body: `<ul>
<li><strong>Multi-tenancy</strong> — data setiap pelanggan harus terisolasi dari awal. Menambahkannya belakangan jauh lebih mahal daripada merancangnya sejak awal.</li>
<li><strong>Billing & subscription</strong> — downgrade, gagal bayar, grace period, prorata. Selalu lebih rumit dari perkiraan; pakai payment provider yang sudah menangani dunning.</li>
<li><strong>Async jobs</strong> — proses berat (generate video, export besar) jangan pernah dijalankan sinkron — pakai queue, tampilkan status progres.</li>
<li><strong>Observability</strong> — error tracking dan logging sejak hari pertama; pelanggan tidak akan melaporkan error, mereka langsung churn.</li>
</ul>`,
      },
      {
        title: "Keputusan Stack untuk SaaS",
        body: `<p>Stack yang kami pakai dan terbukti: Next.js untuk frontend + backend API, PostgreSQL untuk data tenant, dan deployment ter-container (Docker) agar staging/production identik. Prinsipnya: teknologi yang tim Anda kuasai > teknologi yang sedang hype.</p>`,
      },
      {
        title: "Metrik yang Lebih Penting dari Fitur",
        body: `<p>Tiga angka yang harus bisa Anda jawab sejak launch: activation (berapa persen pengguna baru sampai ke nilai pertama), retention (berapa banyak kembali di minggu kedua), dan time-to-value (berapa lama sampai pengguna merasakan manfaat). Fitur baru tanpa tiga ini adalah biaya, bukan investasi.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-custom-software", label: "Custom Software Development" },
      { href: "/jasa-web-application", label: "Jasa Web Application" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/nuviral-ai-studio", label: "NuViral — Case Study" },
    ],
  },
  {
    slug: "aplikasi-sekolah-e-learning-fitur-penting",
    title: "Aplikasi Sekolah & E-Learning: Fitur yang Benar-Benar Terpakai",
    description:
      "Pengalaman dari project pendidikan: fitur e-learning yang benar-benar dipakai guru dan siswa — dan mana yang hanya terlihat bagus di proposal.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "informational",
    date: "2024-10-05",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["aplikasi sekolah", "e-learning", "lms", "tryout online"],
    intro:
      "Dari pengalaman membangun platform pendidikan seperti Bimbel Kedinasan, pola yang selalu terlihat: fitur yang menang adalah yang menghemat waktu guru — bukan yang paling canggih. Tryout dengan auto-scoring dipakai setiap minggu; forum diskusi fancy sepi.",
    keyTakeaways: [
      "Fitur paling terpakai: tryout/quiz auto-scoring, materi video terstruktur, dan pendaftaran online",
      "Prioritaskan alur guru: input soal dan nilai harus lebih cepat dari cara manual",
      "Akses per peran (admin, pengajar, siswa, orang tua) menentukan keberhasilan adopsi",
      "Mulai dari pendaftaran online + tryout — itu ROI paling langsung",
    ],
    sections: [
      {
        title: "Fitur yang Benar-Benar Terpakai",
        body: `<ul>
<li><strong>Pendaftaran online</strong> — menghapus formulir kertas dan input ulang admin. Di <a href="/portfolio/bimbel-kedinasan-online">Bimbel Kedinasan</a>, ini berdampak langsung ke jumlah pendaftar.</li>
<li><strong>Tryout & auto-scoring</strong> — timer, penyimpanan jawaban, nilai langsung keluar. Ini fitur yang membuat siswa kembali.</li>
<li><strong>Materi video terstruktur</strong> — dikelompokkan per paket/program, dengan kontrol akses per siswa.</li>
<li><strong>Laporan progres</strong> — nilai tryout dan kehadiran yang bisa dilihat admin dan orang tua.</li>
</ul>`,
      },
      {
        title: "Yang Terlihat Bagus Tapi Jarang Dipakai",
        body: `<p>Forum diskusi internal, gamifikasi rumit, dan live class bawaan (kebanyakan lembaga tetap pakai Zoom/Meet). Bangun fitur ini hanya setelah alur inti terbukti dipakai.</p>`,
      },
      {
        title: "Struktur Role yang Benar",
        body: `<p>Empat role cukup: admin (kelola semua), pengajar (input materi & soal), siswa (akses sesuai paket), orang tua (lihat progres). Menjaga role tetap sederhana membuat sistem jauh lebih mudah dioperasikan — dan lebih murah dibangun.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-sistem-informasi", label: "Jasa Sistem Informasi" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/bimbel-kedinasan-online", label: "Bimbel Kedinasan — Case Study" },
    ],
  },
  {
    slug: "cara-membuat-marketplace-online",
    title: "Membangun Marketplace Online: Yang Perlu Anda Tahu Sebelum Mulai",
    description:
      "Marketplace multi-vendor adalah salah satu sistem paling kompleks yang bisa dibangun. Struktur MVP yang benar, dan mengapa harus dimulai dari satu sisi dulu.",
    category: "Aplikasi",
    cluster: "aplikasi",
    intent: "informational",
    date: "2025-01-05",
    updated: "2026-10-06",
    readTime: "12 menit",
    author: "tim-nufanas",
    tags: ["marketplace", "multi vendor", "platform"],
    intro:
      "Marketplace punya masalah dua sisi: tidak ada pembeli tanpa penjual, tidak ada penjual tanpa pembeli. Inilah kenapa hampir semua marketplace sukses dimulai <em>satu sisi dulu</em> — curate penjualnya sendiri, baru buka multi-vendor setelah transaksi berjalan.",
    keyTakeaways: [
      "Mulai satu sisi: sebagai 'katalog terkurasi' — bukan multi-vendor sejak hari pertama",
      "Komponen kompleks: escrow/split payment, komisi, payout vendor, dispute resolution",
      "MVP marketplace masih jauh lebih mahal dari e-commerce biasa — siapkan ekspektasi budget",
      "Legal: marketplace butuh perhatian pada pajak, retur, dan tanggung jawab antar pihak",
    ],
    sections: [
      {
        title: "Mengapa Marketplace Beda dari E-Commerce",
        body: `<p>E-commerce biasa: satu penjual (Anda), satu arus uang. Marketplace: banyak penjual, uang pembeli harus di-split — komisi platform + payout vendor — dengan hold period untuk retur. Setiap fitur pembeli berarti juga membangun sisi vendor: dashboard, onboarding, manajemen produk, payout.</p>`,
      },
      {
        title: "MVP Marketplace yang Masuk Akal",
        body: `<ol>
<li><strong>Fase 0 — katalog terkurasi:</strong> Anda input produk vendor secara manual; pembeli checkout; Anda meneruskan order ke vendor via WhatsApp. Memvalidasi demand tanpa membangun sisi vendor.</li>
<li><strong>Fase 1 — vendor dashboard:</strong> vendor input produk dan terima order sendiri; pembayaran masih terpusat.</li>
<li><strong>Fase 2 — split payment & payout otomatis:</strong> integrasi payment gateway yang mendukung disbursement (Xendit/Midtrans punya fitur ini).</li>
<li><strong>Fase 3 — dispute & rating:</strong> lapisan kepercayaan setelah volume cukup.</li>
</ol>`,
      },
      {
        title: "Biaya dan Realistis Timeline",
        body: `<p>MVP marketplace fase 1-2 umumnya masuk kategori <a href="/jasa-web-application">web application</a> dengan budget mulai Rp 40-80jt dan timeline 3-5 bulan. Siapa pun yang menjanjikan marketplace lengkap di bawah Rp 10 juta sedang menjual template.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-custom-software", label: "Custom Software" },
      { href: "/jasa-website-ecommerce", label: "Jasa E-Commerce" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/kaosdn99-ecommerce", label: "KaosDN99 — Case Study" },
    ],
  },
];
