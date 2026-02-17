# Company Portfolio Website

Website company profile modern dan minimalis dengan halaman individual untuk 4 perusahaan menggunakan Next.js 16 dan Tailwind CSS 4.

## ✨ Fitur Lengkap

### Homepage
- Hero section dengan gradient background dan grid pattern
- Statistics section menampilkan angka-angka penting
- Grid perusahaan dengan logo dan informasi singkat
- About section untuk penjelasan portfolio
- CTA section untuk call-to-action
- Responsive navigation dengan sticky header

### Halaman Individual Per Perusahaan
Setiap perusahaan memiliki halaman terpisah dengan tema warna unik:

- **Hero Section**: Gradient background dengan logo perusahaan
- **Stats Section**: Menampilkan statistik perusahaan (klien, proyek, dll)
- **About Section**: Deskripsi lengkap tentang perusahaan
- **Services Section**: Grid 3 layanan dengan icon dan deskripsi
- **Values Section**: 3 nilai-nilai perusahaan
- **Contact Section**: Form kontak dan informasi lengkap (email, telepon, alamat)
- **Footer**: Navigasi dan copyright

## 🏢 Perusahaan

1. **Alpan Agro Jaya** - Agribisnis (Tema: Hijau)
   - URL: `/companies/alpan-agro-jaya`
   - Logo: `/assets/companies/Alpan-agro-jaya.jpeg`
   
2. **Berkat Jaya** - Konstruksi & Properti (Tema: Orange)
   - URL: `/companies/berkat-jaya`
   - Logo: `/assets/companies/berkat-jaya.jpeg`
   
3. **Bintang Semeru** - Teknologi (Tema: Biru)
   - URL: `/companies/bintang-semeru`
   - Logo: `/assets/companies/bintang-semeru.jpeg`
   
4. **Yen Hong Internasional** - Perdagangan (Tema: Merah)
   - URL: `/companies/yen-hong`
   - Logo: `/assets/companies/yen-hong-internasional.jpeg`

## 🎨 Design Modern & Minimalis

- **Typography**: Geist font untuk tampilan modern
- **Color Scheme**: Tema warna unik per perusahaan (Green, Orange, Blue, Red)
- **Spacing**: Whitespace yang cukup untuk readability
- **Animations**: Smooth transitions dan hover effects
- **Responsive**: Mobile-first design
- **Glassmorphism**: Backdrop blur effects pada navbar
- **Gradient**: Modern gradient backgrounds per perusahaan
- **Icons**: Custom icon component dengan 15+ pilihan

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

```
├── app/
│   ├── companies/
│   │   ├── alpan-agro-jaya/
│   │   │   └── page.tsx          # Halaman Alpan Agro Jaya
│   │   ├── berkat-jaya/
│   │   │   └── page.tsx          # Halaman Berkat Jaya
│   │   ├── bintang-semeru/
│   │   │   └── page.tsx          # Halaman Bintang Semeru
│   │   └── yen-hong/
│   │       └── page.tsx          # Halaman Yen Hong
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── CompanyCard.tsx           # Card component dengan logo
│   ├── Navbar.tsx                # Navigation component
│   └── Icon.tsx                  # Icon component
├── lib/
│   └── companies.ts              # Data perusahaan
└── public/
    └── assets/
        └── companies/            # Logo perusahaan
```

## 🌐 URL Structure

```
/                                 → Homepage
/companies/alpan-agro-jaya       → Alpan Agro Jaya
/companies/berkat-jaya           → Berkat Jaya
/companies/bintang-semeru        → Bintang Semeru
/companies/yen-hong              → Yen Hong Internasional
```

## 🎯 Cara Menambah Perusahaan Baru

### 1. Tambah Logo
Simpan logo di:
```
public/assets/companies/nama-perusahaan.jpeg
```

### 2. Buat Folder & Halaman
```bash
mkdir app/companies/nama-perusahaan
```

Buat file `app/companies/nama-perusahaan/page.tsx` dengan struktur yang sama seperti perusahaan lain.

### 3. Tambah Data di Homepage
Edit `lib/companies.ts` untuk menambah data perusahaan baru agar muncul di homepage.

### 4. Pilih Tema Warna
Pilih warna tema untuk gradient dan button (contoh: purple, teal, indigo, dll)

## 🎨 Customisasi

### Warna Tema Perusahaan
Edit file `app/companies/[nama-perusahaan]/page.tsx`:
```tsx
// Ganti warna di hero section
from-green-900 via-green-800 to-green-900  // Ganti green dengan warna lain

// Ganti warna button
bg-green-900 hover:bg-green-800  // Ganti green dengan warna lain

// Ganti warna icon background
bg-green-100  // Ganti green dengan warna lain
```

### Font
Ganti di `app/layout.tsx` (saat ini menggunakan Geist):
```typescript
import { Geist } from "next/font/google";
```

### Icon
Tambah icon baru di `components/Icon.tsx`:
```typescript
'nama-icon': (
  <svg>...</svg>
)
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Font**: Geist Sans & Geist Mono
- **Images**: Next.js Image Optimization

## 🌟 Highlights

- Halaman individual per perusahaan (bukan dynamic route)
- Tema warna unik untuk setiap perusahaan
- SEO-friendly dengan metadata per halaman
- Type-safe dengan TypeScript
- Optimized images dengan Next.js Image
- Smooth scroll behavior
- Accessible form inputs
- Mobile-responsive design
- Fast page load

## 📝 Sections yang Tersedia

### Homepage
1. Navigation (sticky)
2. Hero dengan CTA
3. Statistics
4. Companies Grid (4 perusahaan)
5. About
6. CTA Section
7. Footer

### Company Detail Page
1. Navigation dengan nama perusahaan
2. Hero dengan logo dan gradient
3. Statistics perusahaan
4. About Us
5. Services (3 layanan)
6. Values (3 nilai)
7. Contact (form + info)
8. Footer

## 📖 Dokumentasi Tambahan

- `STRUKTUR-HALAMAN.md` - Penjelasan lengkap struktur halaman
- `ROUTING-EXPLANATION.md` - Penjelasan routing (untuk referensi)
- `TEST-ROUTING.md` - Checklist testing

## 🎯 Best Practices

- Menggunakan semantic HTML
- Accessible navigation
- Optimized images
- Clean code structure
- Reusable components
- Type-safe data
- Responsive design
- Performance optimized
- Unique branding per company

