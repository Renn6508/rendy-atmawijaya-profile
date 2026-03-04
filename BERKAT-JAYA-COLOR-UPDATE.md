# Berkat Jaya - Color Theme Update

## Perubahan Warna

Berkat Jaya telah diupdate dari warna **emerald (hijau)** menjadi **amber (kuning tua)** untuk menyesuaikan dengan logo perusahaan.

## Warna Baru

### Amber Theme (Kuning Tua)
```css
Primary: amber-600 (#d97706)
Hover: amber-700 (#b45309)
Light: amber-100, amber-300, amber-400
Dark: amber-500, amber-900
Background gradient: from-[#78350f] (amber-900)
```

## File yang Diupdate

### Main Page
- `app/companies/berkat-jaya/page.tsx`
  - Navbar colors
  - Hero section (text, buttons, gradient)
  - Section headers
  - Visi & Misi cards
  - Service section
  - Contact section

### Components
- `app/companies/berkat-jaya/components/layout/Navbar.tsx`
- `app/companies/berkat-jaya/components/layout/Footer.tsx`
- `app/companies/berkat-jaya/components/section/ServiceRibbon.tsx`
- `app/companies/berkat-jaya/components/ui/*.tsx` (all UI components)

## Perubahan Konten

Selain warna, beberapa teks juga diupdate:

| Sebelumnya | Sesudah |
|------------|---------|
| PT. BERKAT JAYA UTAMA | PT. BERKAT JAYA |
| Solusi Agribisnis | Membangun Masa Depan |
| Hulu ke Hilir | Bersama |

## Visual Comparison

### Sebelumnya (Emerald - Hijau)
- Primary: `emerald-600` (#059669)
- Accent: `emerald-400` (#34d399)
- Background: `from-[#064e3b]` (emerald-900)

### Sekarang (Amber - Kuning Tua)
- Primary: `amber-600` (#d97706)
- Accent: `amber-400` (#fbbf24)
- Background: `from-[#78350f]` (amber-900)

## Dark Mode Support

Semua perubahan warna juga mendukung dark mode:
- `dark:text-amber-500`
- `dark:bg-amber-700`
- `dark:border-amber-600`
- `dark:shadow-amber-900/30`

## Testing

Untuk melihat perubahan:
```bash
npm run dev
```

Kemudian kunjungi: http://localhost:3000/companies/berkat-jaya

## Notes

- Warna amber memberikan kesan hangat, profesional, dan stabil
- Cocok untuk perusahaan konstruksi dan properti
- Kontras yang baik dengan background putih dan gelap
- Mudah dibedakan dari perusahaan lain (Alpan: hijau, Bintang Semeru: biru, Yen Hong: merah)
