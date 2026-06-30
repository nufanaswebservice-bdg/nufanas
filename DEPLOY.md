# Panduan Deploy Nufanas ke Vercel + GitHub (Auto Deploy)

## Alur Kerja

```
Push ke GitHub → Vercel auto build & deploy → nufanas.com live
```

Setiap kali Anda push perubahan ke GitHub, Vercel otomatis:
1. Detect perubahan
2. Build project (next build + sitemap)
3. Deploy ke production
4. Website live dalam ~60 detik

---

## Step 1: Buat Repository di GitHub

1. Buka https://github.com/new
2. **Repository name:** `nufanas` (atau nama lain yang Anda mau)
3. **Visibility:** Private (recommended untuk bisnis)
4. Jangan centang apapun (README, .gitignore, license) — kita sudah punya
5. Klik **Create repository**

---

## Step 2: Push Code ke GitHub

Setelah repo dibuat, jalankan perintah ini di terminal (folder project):

```bash
cd "c:\Users\USER\Documents\trae_projects\nufanas revisi indo\nufanas"

git remote add origin https://github.com/USERNAME_ANDA/nufanas.git
git branch -M main
git push -u origin main
```

> Ganti `USERNAME_ANDA` dengan username GitHub Anda.

---

## Step 3: Connect ke Vercel

1. Buka https://vercel.com dan **Sign up/Login** dengan akun GitHub
2. Klik **"Add New..." → Project**
3. Pilih repository `nufanas` yang baru Anda push
4. Vercel otomatis mendeteksi Next.js — **tidak perlu ubah settings**
5. Klik **Deploy**
6. Tunggu 1-2 menit sampai build selesai

Setelah deploy, website Anda akan live di URL sementara seperti:
`https://nufanas-xxxxx.vercel.app`

---

## Step 4: Setting Domain nufanas.com

### Di Vercel:
1. Buka project → **Settings → Domains**
2. Tambahkan `nufanas.com` dan `www.nufanas.com`
3. Vercel akan memberikan DNS records yang perlu ditambahkan

### Di Jagoan Hosting (DNS):
1. Login ke panel Jagoan Hosting
2. Buka **DNS Management** untuk domain `nufanas.com`
3. Hapus/ubah record A yang lama
4. Tambahkan record sesuai instruksi Vercel:

**Untuk apex domain (nufanas.com):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**Untuk www:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

> IP address mungkin berbeda — ikuti yang ditampilkan Vercel.

5. Tunggu DNS propagation (5 menit - 48 jam, biasanya <1 jam)

---

## Step 5: Verifikasi

Setelah DNS terhubung:
- ✅ https://nufanas.com → live
- ✅ https://www.nufanas.com → redirect ke nufanas.com
- ✅ SSL certificate otomatis dari Vercel (gratis)
- ✅ CDN global aktif

---

## Auto Deploy: Bagaimana Cara Kerjanya

Setelah setup selesai, alur auto deploy:

1. **Edit code** di local (pakai Kiro atau editor lain)
2. **Commit & push** ke GitHub:
   ```bash
   git add .
   git commit -m "update: deskripsi perubahan"
   git push
   ```
3. **Vercel otomatis** detect push → build → deploy
4. **Live** dalam ~60 detik

### Preview Deploy (bonus):
- Buat branch baru → push → Vercel buat preview URL
- Review perubahan sebelum merge ke main
- Merge ke main → auto deploy ke production

---

## Environment Variables (Optional)

Jika nanti butuh (misalnya Google Analytics ID), tambahkan di:
**Vercel → Project → Settings → Environment Variables**

Contoh:
| Key | Value |
|-----|-------|
| NEXT_PUBLIC_GA_ID | G-XXXXXXXXXX |
| NEXT_PUBLIC_GTM_ID | GTM-XXXXXXX |

---

## Troubleshooting

### Build gagal di Vercel?
- Cek build log di Vercel dashboard
- Pastikan `npm run build` berhasil di local dulu

### Domain tidak terhubung?
- Tunggu propagasi DNS (bisa sampai 48 jam)
- Cek di https://dnschecker.org apakah record sudah update
- Pastikan tidak ada record A/CNAME lama yang conflict

### SSL error?
- Vercel handle SSL otomatis setelah DNS terhubung
- Jika belum, klik "Refresh" di Vercel domain settings

---

## Hosting Lama di Jagoan

Setelah domain dialihkan ke Vercel:
- Hosting lama di Jagoan masih aktif tapi tidak melayani traffic nufanas.com
- Anda bisa membatalkan hosting jika tidak dipakai untuk hal lain
- Domain tetap di Jagoan (hanya DNS yang diarahkan ke Vercel)

---

## Biaya

| Item | Biaya |
|------|-------|
| Vercel (Hobby plan) | **Gratis** |
| GitHub (Private repo) | **Gratis** |
| Domain (di Jagoan) | Tetap bayar renewal tahunan |
| SSL | **Gratis** (dari Vercel) |

> Vercel Hobby plan gratis untuk project personal/small business.
> Jika traffic >100GB/bulan, upgrade ke Pro ($20/bulan).
