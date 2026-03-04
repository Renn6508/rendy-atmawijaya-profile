# Company Color Scheme Update

## Overview
Warna tema untuk Bintang Semeru dan Yen Hong telah diupdate sesuai dengan identitas visual masing-masing perusahaan.

## Color Changes

### 1. Bintang Semeru - Merah Gelap (Rose/Dark Red)

**Sebelumnya**: Blue (Biru)
**Sekarang**: Rose (Merah Gelap)

#### Color Palette
```css
Primary: rose-600 (#e11d48)
Hover: rose-700 (#be123c)
Dark: rose-900 (#881337), rose-950 (#4c0519)
Light: rose-400 (#fb7185), rose-300 (#fda4af)
Accent: rose-800 (#9f1239)
Background gradient: from-[#4c0519] (rose-950)
```

#### Visual Characteristics
- Merah gelap yang sophisticated
- Memberikan kesan premium dan profesional
- Cocok untuk perusahaan teknologi yang ingin tampil bold
- Kontras tinggi dengan background putih

#### Files Updated
- `app/companies/bintang-semeru/page.tsx`
- `app/companies/bintang-semeru/components/**/*.tsx`

---

### 2. Yen Hong Internasional - Merah Terang (Bright Red)

**Sebelumnya**: Red Dark (Merah Gelap)
**Sekarang**: Red Bright (Merah Terang)

#### Color Palette
```css
Primary: red-500 (#ef4444)
Hover: red-600 (#dc2626)
Dark: red-700 (#b91c1c)
Light: red-400 (#f87171), red-300 (#fca5a5)
Accent: red-600 (#dc2626)
Background gradient: from-[#dc2626] (red-600)
```

#### Visual Characteristics
- Merah terang yang energik dan dinamis
- Memberikan kesan berani dan percaya diri
- Cocok untuk perusahaan perdagangan internasional
- Eye-catching dan memorable

#### Files Updated
- `app/companies/yen-hong/page.tsx`
- `app/companies/yen-hong/components/**/*.tsx`

---

## Complete Color Scheme Summary

### All Companies

| Company | Color Theme | Primary | Gradient | Character |
|---------|-------------|---------|----------|-----------|
| **Alpan Agro Jaya** | Emerald (Hijau) | `emerald-600` | `#064e3b` | Natural, Growth |
| **Berkat Jaya** | Amber (Kuning Tua) | `amber-600` | `#78350f` | Warm, Stable |
| **Bintang Semeru** | Rose (Merah Gelap) | `rose-600` | `#4c0519` | Premium, Bold |
| **Yen Hong** | Red (Merah Terang) | `red-500` | `#dc2626` | Energetic, Dynamic |

---

## Visual Comparison

### Bintang Semeru

**Before (Blue)**
```css
Primary: blue-600 (#2563eb)
Gradient: from-[#1e3a8a]
Character: Tech, Trust
```

**After (Rose - Dark Red)**
```css
Primary: rose-600 (#e11d48)
Gradient: from-[#4c0519]
Character: Premium, Bold
```

### Yen Hong

**Before (Dark Red)**
```css
Primary: red-600 (#dc2626)
Gradient: from-[#991b1b]
Character: Strong, Serious
```

**After (Bright Red)**
```css
Primary: red-500 (#ef4444)
Gradient: from-[#dc2626]
Character: Energetic, Dynamic
```

---

## Dark Mode Support

Semua perubahan warna mendukung dark mode:

### Bintang Semeru (Rose)
- `dark:text-rose-500`
- `dark:bg-rose-700`
- `dark:border-rose-600`
- `dark:shadow-rose-900/30`

### Yen Hong (Red)
- `dark:text-red-400`
- `dark:bg-red-600`
- `dark:border-red-500`
- `dark:shadow-red-900/30`

---

## Content Updates

### Bintang Semeru
| Element | Updated Text |
|---------|--------------|
| Company Name | PT. BINTANG SEMERU |
| Tagline | Cahaya untuk Kemajuan Digital |

### Yen Hong
| Element | Updated Text |
|---------|--------------|
| Company Name | PT. YEN HONG INTERNASIONAL |
| Tagline | Tradisi Bertemu Inovasi Global |

---

## Testing

Untuk melihat perubahan:
```bash
npm run dev
```

Kemudian kunjungi:
- http://localhost:3000/companies/bintang-semeru (Merah Gelap)
- http://localhost:3000/companies/yen-hong (Merah Terang)

---

## Design Rationale

### Bintang Semeru (Rose - Merah Gelap)
- **Why Rose instead of Blue?**
  - Lebih distinctive dan memorable
  - Rose memberikan kesan premium dan sophisticated
  - Berbeda dari stereotype "tech = blue"
  - Merah gelap cocok untuk perusahaan yang ingin tampil bold namun profesional

### Yen Hong (Red - Merah Terang)
- **Why Bright Red?**
  - Merah terang lebih energik dan dinamis
  - Cocok untuk perusahaan perdagangan yang aktif dan global
  - Memberikan kesan berani dan percaya diri
  - Lebih eye-catching untuk menarik perhatian

---

## Color Psychology

### Rose (Merah Gelap) - Bintang Semeru
- **Passion**: Passionate about technology
- **Sophistication**: Premium tech solutions
- **Confidence**: Bold and confident approach
- **Innovation**: Breaking tech stereotypes

### Red (Merah Terang) - Yen Hong
- **Energy**: Dynamic international trade
- **Action**: Fast-moving business
- **Confidence**: Bold global presence
- **Attention**: Stand out in the market

---

## Accessibility

Semua kombinasi warna telah dipertimbangkan untuk:
- ✅ Kontras yang cukup untuk readability (WCAG AA)
- ✅ Visible dalam light dan dark mode
- ✅ Distinguishable dari warna perusahaan lain
- ✅ Tidak mengganggu user dengan color blindness

---

## Notes

- Semua perubahan sudah include dark mode support
- Tidak ada diagnostic errors
- Warna sudah ditest untuk kontras dan accessibility
- Setiap perusahaan sekarang memiliki identitas visual yang unik dan mudah dibedakan
