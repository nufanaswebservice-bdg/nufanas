import type { BlogArticle } from "../blog-data";

export const BISNIS_ARTICLES: BlogArticle[] = [
  {
    slug: "mengapa-bisnis-perlu-web-application",
    title: "Website vs Web Application: Kapan Bisnis Anda Butuh yang Kedua",
    description:
      "Perbedaan website dan web application dalam bahasa bisnis — dan tanda jelas bahwa operasional Anda sudah melampaui website biasa.",
    category: "Bisnis",
    cluster: "bisnis",
    intent: "informational",
    date: "2024-11-01",
    updated: "2026-10-06",
    readTime: "7 menit",
    author: "tim-nufanas",
    tags: ["web application", "website", "otomasi bisnis"],
    intro:
      "Website menyampaikan informasi; web application menjalankan proses. Jika tim Anda masih mengelola bisnis lewat spreadsheet dan chat, yang Anda butuhkan kemungkinan bukan website baru — melainkan web application.",
    keyTakeaways: [
      "Website = satu arah (menampilkan info); web app = dua arah (input, proses, output)",
      "Tanda butuh web app: data tersebar di spreadsheet, proses manual repetitif, butuh multi-user real-time",
      "Web app tidak perlu di-install — cukup browser, jalan di desktop dan HP",
      "Contoh nyata: sistem booking, portal member, dashboard operasional, admin internal",
    ],
    sections: [
      {
        title: "Perbedaan dalam Satu Kalimat",
        body: `<p>Website menjawab pertanyaan pengunjung. Web application menjalankan pekerjaan penggunanya. Company profile adalah website; sistem kasir, portal member, dan dashboard HR adalah web application — meski keduanya sama-sama dibuka lewat browser.</p>`,
      },
      {
        title: "Tanda-Tanda Website Biasa Sudah Tidak Cukup",
        body: `<ul>
<li>Data pelanggan/order dicatat manual setelah form website masuk.</li>
<li>Tim mengandalkan Excel + WhatsApp untuk menjalankan operasional harian.</li>
<li>Anda ingin pelanggan login dan mengelola akun/booking mereka sendiri.</li>
<li>Owner butuh laporan real-time, bukan rekap mingguan.</li>
</ul>
<p>Kalau salah satu terasa familiar — upgrade ke <a href="/jasa-web-application">web application</a> akan mengembalikan jam kerja tim Anda lebih banyak dari yang dibayangkan.</p>`,
      },
      {
        title: "Contoh dari Project Kami",
        body: `<p><a href="/portfolio/teman-sejiwa">Teman Sejiwa</a>: booking konseling, video call, dan dashboard admin — pengguna berinteraksi, bukan sekadar membaca. <a href="/portfolio/portal-agatha">Portal Agatha</a>: pengurus mengelola data anggota dan kegiatan lewat satu portal. Keduanya 'hanya website' di mata pengunjung — tapi sebenarnya sistem operasional yang berjalan di browser.</p>`,
      },
      {
        title: "Web App vs Aplikasi Mobile",
        body: `<p>Pertanyaan lanjutan yang umum: web app atau aplikasi mobile dulu? Untuk proses internal bisnis, web app hampir selalu jawaban pertama — satu codebase untuk semua device, tanpa proses install. Aplikasi mobile masuk akal ketika pengguna adalah konsumen eksternal atau perlu fitur offline/hardware. <a href="/blog/kapan-bisnis-membutuhkan-aplikasi">Framework keputusannya kami bahas di sini</a>.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-web-application", label: "Jasa Web Application" },
      { href: "/jasa-pembuatan-aplikasi-bisnis", label: "Aplikasi Bisnis" },
    ],
    relatedPortfolio: [
      { href: "/portfolio/teman-sejiwa", label: "Teman Sejiwa" },
      { href: "/portfolio/portal-agatha", label: "Portal Agatha" },
    ],
  },
  {
    slug: "digital-agency-vs-freelancer-mana-yang-dipilih",
    title: "Digital Agency vs Freelancer: Panduan Memilih untuk Project Anda",
    description:
      "Kapan freelancer cukup dan kapan agency layak dibayar lebih — dilihat dari risiko, bukan hanya harga.",
    category: "Bisnis",
    cluster: "bisnis",
    intent: "commercial",
    date: "2024-12-01",
    updated: "2026-10-06",
    readTime: "7 menit",
    author: "tim-nufanas",
    tags: ["digital agency", "freelancer", "vendor website"],
    intro:
      "Freelancer cocok untuk scope kecil yang jelas dan siklus pendek. Agency masuk akal ketika project melibatkan banyak disiplin (desain, backend, QA, deployment), perlu SLA, atau tidak boleh gagal. Pilihannya bukan tentang 'profesional vs amatir' — melainkan tentang risiko.",
    keyTakeaways: [
      "Freelancer: scope kecil-jelas, budget ketat, Anda bisa me-manage langsung",
      "Agency: multi-disiplin, kontinuitas, SLA, dan tidak hilang saat satu orang sakit",
      "Risiko nyata freelancer: single point of failure — sakit, overload, atau hilang",
      "Yang harus dicek di dua-duanya: portfolio live, komunikasi, dan kepemilikan aset",
    ],
    sections: [
      {
        title: "Perbandingan Jujur",
        body: `<table>
<thead><tr><th>Aspek</th><th>Freelancer</th><th>Agency</th></tr></thead>
<tbody>
<tr><td>Biaya</td><td>Lebih rendah</td><td>Lebih tinggi (overhead tim)</td></tr>
<tr><td>Komunikasi</td><td>Langsung ke eksekutor</td><td>Via PM — terstruktur tapi berlapis</td></tr>
<tr><td>Keahlian</td><td>Satu-dua disiplin</td><td>Tim lengkap: desain, dev, QA, DevOps</td></tr>
<tr><td>Kontinuitas</td><td>Tergantung satu orang</td><td>Tim — ada backup jika ada yang absen</td></tr>
<tr><td>Garansi & SLA</td><td>Informal</td><td>Tertulis dalam kontrak</td></tr>
<tr><td>Cocok untuk</td><td>Landing page, revisi, project kecil</td><td>Sistem, e-commerce, aplikasi, project kritis</td></tr>
</tbody>
</table>`,
      },
      {
        title: "Risiko yang Sering Luput",
        body: `<p>Risiko terbesar bekerja dengan satu orang bukan kualitas — melainkan kontinuitas. Freelancer sakit, dapat project lain, atau menghilang: project Anda ikut berhenti. Pola yang sering kami dengar dari client yang datang untuk 'melanjutkan' project: freelancer sebelumnya tidak bisa dihubungi dan source code tidak jelas keberadaannya. Apapun pilihan Anda — pastikan repository dan akun infrastruktur atas nama Anda.</p>`,
      },
      {
        title: "Cara Menilai Dua-duanya",
        body: `<p>Pertanyaan yang sama berlaku: minta portfolio yang masih online, tanya siapa yang mengerjakan (bukan siapa yang menjual), dan bagaimana mekanisme garansi setelah launch. Freelancer bagus akan menjawab dengan percaya diri; agency bagus akan menunjukkan prosesnya. Lihat juga <a href="/blog/cara-memilih-software-house">panduan memilih software house</a>.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
    ],
  },
  {
    slug: "cara-memilih-software-house",
    title: "Cara Memilih Software House: Checklist Sebelum Tanda Tangan",
    description:
      "Panduan praktis mengevaluasi software house: pertanyaan yang harus diajukan, cara verifikasi portfolio, dan red flag yang harus diwaspadai.",
    category: "Bisnis",
    cluster: "bisnis",
    intent: "commercial",
    date: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["software house", "vendor website", "custom software"],
    intro:
      "Software house yang tepat akan menyelamatkan Anda puluhan juta dan berbulan-bulan waktu; yang salah bisa meninggalkan codebase yang tidak bisa dirawat siapa pun. Checklist ini merangkum apa yang harus Anda verifikasi — hal yang bisa Anda cek sendiri tanpa keahlian teknis.",
    keyTakeaways: [
      "Portfolio yang masih live adalah bukti terkuat — bukan screenshot, bukan presentasi",
      "Pastikan repository, domain, dan akun infrastruktur atas nama Anda",
      "Vendor yang bertanya tentang proses bisnis Anda > vendor yang langsung menjual teknologi",
      "Selalu mulai dari scope kecil/MVP sebagai uji kerja sama",
    ],
    sections: [
      {
        title: "Lima Hal yang Harus Anda Verifikasi",
        body: `<ol>
<li><strong>Portfolio live</strong> — minta URL project yang masih berjalan. Uji sendiri: buka dari HP, coba fitur utamanya. Lihat <a href="/portfolio">portfolio kami</a> sebagai contoh yang harus bisa ditunjukkan vendor.</li>
<li><strong>Siapa yang mengerjakan</strong> — tim in-house atau disubkontrakkan? Kualitas dan akuntabilitasnya beda jauh.</li>
<li><strong>Kepemilikan aset</strong> — source code di repo milik Anda, domain dan hosting di akun Anda.</li>
<li><strong>Proses kerja</strong> — ada discovery/requirement phase? Demo berkala? Atau 'serahkan dan tunggu'?</li>
<li><strong>Pasca-launch</strong> — garansi bug berapa lama? Skema maintenance? SLA untuk insiden?</li>
</ol>`,
      },
      {
        title: "Pertanyaan yang Membedakan Vendor Serius",
        body: `<ul>
<li>"Bagaimana kalau scope berubah di tengah jalan?" — jawaban yang baik menjelaskan mekanisme change request, bukan 'tenang saja'.</li>
<li>"Boleh lihat contoh dokumentasi project?" — vendor serius mendokumentasikan arsitektur dan API.</li>
<li>"Apa yang menurut Anda TIDAK perlu dibangun dari keinginan saya?" — vendor baik menyarankan scope lebih kecil, bukan membesarkan tagihan.</li>
<li>"Apa risiko terbesar dari project ini menurut Anda?" — menguji apakah mereka benar-benar memikirkan project Anda.</li>
</ul>`,
      },
      {
        title: "Red Flag yang Sering Terlihat",
        body: `<ul>
<li>Harga jauh di bawah pasaran untuk scope besar — berarti ada yang dipangkas (biasanya testing dan dokumentasi).</li>
<li>Tidak mau berbagi progress sebelum 'final delivery'.</li>
<li>Menolak menaruh repository di akun Anda.</li>
<li>Menjanjikan timeline yang terlalu bagus untuk jadi kenyataan tanpa melihat requirement dulu.</li>
</ul>`,
      },
      {
        title: "Cara Mulai dengan Risiko Minimal",
        body: `<p>Mulai dari fase kecil berbayar: discovery workshop atau prototype. Ini menguji komunikasi, kualitas pemikiran, dan cara kerja vendor dengan komitmen terbatas — sebelum Anda menandatangani project penuh. Vendor yang percaya diri dengan kualitasnya tidak akan keberatan.</p>`,
      },
    ],
    faqs: [
      {
        question: "Software house lokal vs luar negeri?",
        answer:
          "Untuk mayoritas bisnis Indonesia, vendor lokal atau remote-Indonesia lebih efektif: zona waktu sama, komunikasi lancar, dan memahami konteks bisnis lokal (payment gateway, WhatsApp, regulasi). Vendor luar masuk akal untuk keahlian yang sangat spesifik.",
      },
      {
        question: "Berapa budget yang masuk akal untuk software custom?",
        answer:
          "Sangat tergantung scope — aplikasi bisnis mulai Rp 15 juta, sistem kompleks bisa ratusan juta. Yang penting: minta rincian per modul/fitur, bukan satu angka global, agar Anda bisa memprioritaskan.",
      },
    ],
    relatedServices: [
      { href: "/jasa-custom-software", label: "Custom Software" },
      { href: "/jasa-pembuatan-aplikasi", label: "Jasa Pembuatan Aplikasi" },
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
  {
    slug: "ui-ux-design-meningkatkan-conversion-rate",
    title: "Prinsip UI/UX yang Terbukti Meningkatkan Konversi Website",
    description:
      "Prinsip desain yang berdampak langsung ke konversi — dari hierarchy visual, CTA, form, hingga kesalahan paling umum di website bisnis Indonesia.",
    category: "Bisnis",
    cluster: "bisnis",
    intent: "informational",
    date: "2025-03-05",
    updated: "2026-10-06",
    readTime: "9 menit",
    author: "tim-nufanas",
    tags: ["ui ux", "conversion rate", "desain website"],
    intro:
      "Konversi website jarang ditentukan oleh seberapa 'keren' tampilannya — melainkan oleh seberapa cepat pengunjung paham apa yang Anda tawarkan dan apa yang harus mereka lakukan selanjutnya. Berikut prinsip yang kami terapkan di setiap project.",
    keyTakeaways: [
      "Pengunjung memutuskan dalam hitungan detik — value proposition harus terbaca tanpa scroll",
      "Satu CTA utama per layar; tombol WhatsApp harus selalu terlihat di mobile",
      "Setiap field tambahan di form menurunkan completion rate",
      "Mobile-first bukan slogan — mayoritas pengunjung Indonesia datang dari HP",
    ],
    sections: [
      {
        title: "Prinsip yang Berdampak Langsung",
        body: `<ol>
<li><strong>Kejelasan dalam 5 detik</strong> — headline menjawab 'apa yang ditawarkan' dan 'untuk siapa' di atas fold.</li>
<li><strong>Satu aksi utama</strong> — satu tombol dominan per layar. Terlalu banyak pilihan = tidak ada yang dipilih.</li>
<li><strong>Bukti dekat CTA</strong> — testimoni, logo client, atau angka hasil diletakkan tepat sebelum tombol aksi.</li>
<li><strong>Form minimal</strong> — tanya nama + WhatsApp + kebutuhan. Data lain bisa ditanyakan saat follow-up.</li>
<li><strong>Hierarki visual</strong> — ukuran, warna, dan spacing memandu mata ke yang penting — bukan dekorasi.</li>
</ol>`,
      },
      {
        title: "Mobile-First adalah Kebutuhan, Bukan Tren",
        body: `<p>Mayoritas traffic website bisnis Indonesia datang dari smartphone. Artinya: tombol cukup besar untuk jempol, nomor telepon bisa diketuk untuk menelepon, dan WhatsApp CTA selalu dalam jangkauan layar. Kami menguji setiap project di device mobile nyata sebelum launch — bukan hanya resize browser.</p>`,
      },
      {
        title: "Kesalahan Umum di Website Bisnis",
        body: `<ul>
<li>Slider/carousel hero — hampir tidak pernah diklik selain slide pertama.</li>
<li>Video autoplay besar — memperlambat halaman dan jarang ditonton.</li>
<li>Wall of text tanpa struktur — orang membaca scanning, bukan membaca utuh.</li>
<li>CTA 'Hubungi Kami' yang tidak menjelaskan apa yang terjadi setelah diklik.</li>
<li>Desain yang mengorbankan kecepatan — 1 detik delay berarti pengunjung pergi.</li>
</ul>`,
      },
      {
        title: "Cara Menilai Tanpa Jadi Desainer",
        body: `<p>Tes sederhana: minta seseorang yang tidak kenal bisnis Anda membuka website selama 10 detik, lalu tanya — bisnis ini jual apa, untuk siapa, dan apa yang harus dilakukan pengunjung? Kalau tidak bisa dijawab, desainnya bekerja melawan Anda.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
      { href: "/jasa-website-custom", label: "Jasa Website Custom" },
    ],
  },
  {
    slug: "panduan-memilih-domain-website-bisnis",
    title: "Memilih Nama Domain untuk Bisnis: .com, .co.id, atau .id?",
    description:
      "Panduan praktis memilih domain: ekstensi yang tepat untuk pasar Indonesia, aturan nama yang baik, dan kesalahan yang harus dihindari.",
    category: "Bisnis",
    cluster: "bisnis",
    intent: "informational",
    date: "2025-05-15",
    updated: "2026-10-06",
    readTime: "5 menit",
    author: "tim-nufanas",
    tags: ["domain", "hosting", "website bisnis"],
    intro:
      "Domain adalah alamat dan nama bisnis Anda di internet — pilih yang pendek, mudah dieja lewat telepon, dan ekstensi yang sesuai target pasar. Untuk mayoritas bisnis Indonesia, urutan pilihan yang aman: .com → .co.id → .id.",
    keyTakeaways: [
      "Pendek dan mudah diucapkan > keyword di nama domain",
      ".com paling universal; .co.id memberi sinyal bisnis resmi Indonesia; .id alternatif modern",
      "Beli sendiri atas nama perusahaan — jangan titip di vendor",
      "Lindungi nama brand: ambil juga ekstensi alternatifnya jika murah",
    ],
    sections: [
      {
        title: "Ekstensi yang Tepat",
        body: `<ul>
<li><strong>.com</strong> — universal, paling diingat, dan bekerja di mana pun. Selalu coba ini dulu.</li>
<li><strong>.co.id</strong> — untuk PT/CV (butuh dokumen legal); memberi kesan 'bisnis resmi' dan sinyal lokal untuk pasar Indonesia.</li>
<li><strong>.id</strong> — lebih pendek dan modern; tidak butuh dokumen. Alternatif baik jika .com diambil.</li>
<li><strong>.net/.org/.xyz</strong> — gunakan hanya jika tidak ada pilihan di atas; .xyz sering diasosiasikan dengan spam.</li>
</ul>`,
      },
      {
        title: "Aturan Nama yang Baik",
        body: `<ul>
<li>Pendek — idealnya di bawah 15 karakter.</li>
<li>Mudah dieja saat didengar (tes: sebutkan lewat telepon, apakah orang bisa mengetiknya langsung?).</li>
<li>Hindari tanda hubung dan angka — rawan salah ketik.</li>
<li>Nama brand > keyword generik: 'nufanas.com' lebih kuat dan lebih awet daripada 'jasawebsitemurah.com'.</li>
</ul>`,
      },
      {
        title: "Kesalahan yang Harus Dihindari",
        body: `<ul>
<li>Membeli domain di akun pribadi karyawan atau vendor — saat keluar/putus hubungan, domain ikut hilang.</li>
<li>Lupa auto-renew — domain jatuh dan diambil orang lain; selalu aktifkan perpanjangan otomatis.</li>
<li>Tidak mengecek ketersediaan handle media sosial yang senada.</li>
</ul>
<p>Domain adalah aset termurah dari seluruh kehadiran digital Anda — sekitar Rp 200–300rb/tahun — tapi yang paling mahal kalau hilang.</p>`,
      },
    ],
    relatedServices: [
      { href: "/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
    ],
  },
];
