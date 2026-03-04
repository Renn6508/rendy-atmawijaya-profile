# Service Ribbon Color Update

## Overview
Service Ribbon component untuk ketiga perusahaan telah diupdate dengan warna yang sesuai dengan tema masing-masing perusahaan.

## Changes Made

### 1. Berkat Jaya - Amber (Kuning Tua)

**Color Scheme**:
```css
Active Background: bg-[#78350f] (amber-900)
Inactive Text: text-[#78350f]
Hover Background: hover:bg-amber-50
Active Icon: text-amber-300
Inactive Icon: text-amber-600
```

**Updates**:
- ✅ Background active dari `#064e3b` (hijau) menjadi `#78350f` (amber)
- ✅ Text color inactive dari `text-[#064e3b]` menjadi `text-[#78350f]`
- ✅ Hover background dari `hover:bg-gray-50` menjadi `hover:bg-amber-50`
- ✅ Icon active dari `text-[#10b981]` (emerald) menjadi `text-amber-300`
- ✅ Icon inactive dari `text-[#10b981]` menjadi `text-amber-600`

---

### 2. Bintang Semeru - Rose (Merah Gelap)

**Color Scheme**:
```css
Active Background: bg-[#4c0519] (rose-950)
Inactive Text: text-[#4c0519]
Hover Background: hover:bg-rose-50
Active Icon: text-rose-300
Inactive Icon: text-rose-600
```

**Updates**:
- ✅ Background active dari `#064e3b` (hijau) menjadi `#4c0519` (rose)
- ✅ Text color inactive dari `text-[#064e3b]` menjadi `text-[#4c0519]`
- ✅ Hover background dari `hover:bg-gray-50` menjadi `hover:bg-rose-50`
- ✅ Icon active dari `text-[#10b981]` (emerald) menjadi `text-rose-300`
- ✅ Icon inactive dari `text-[#10b981]` menjadi `text-rose-600`

---

### 3. Yen Hong - Red (Merah Terang)

**Color Scheme**:
```css
Active Background: bg-[#dc2626] (red-600)
Inactive Text: text-[#dc2626]
Hover Background: hover:bg-red-50
Active Icon: text-red-200
Inactive Icon: text-red-500
```

**Updates**:
- ✅ Background active dari `#064e3b` (hijau) menjadi `#dc2626` (red)
- ✅ Text color inactive dari `text-[#064e3b]` menjadi `text-[#dc2626]`
- ✅ Hover background dari `hover:bg-gray-50` menjadi `hover:bg-red-50`
- ✅ Icon active dari `text-[#10b981]` (emerald) menjadi `text-red-200`
- ✅ Icon inactive dari `text-[#10b981]` menjadi `text-red-500`

---

## Complete Service Ribbon Color Scheme

| Company | Active BG | Inactive Text | Hover BG | Active Icon | Inactive Icon |
|---------|-----------|---------------|----------|-------------|---------------|
| **Alpan Agro Jaya** | `#064e3b` (emerald-900) | `text-[#064e3b]` | `hover:bg-gray-50` | `text-[#10b981]` | `text-[#10b981]` |
| **Berkat Jaya** | `#78350f` (amber-900) | `text-[#78350f]` | `hover:bg-amber-50` | `text-amber-300` | `text-amber-600` |
| **Bintang Semeru** | `#4c0519` (rose-950) | `text-[#4c0519]` | `hover:bg-rose-50` | `text-rose-300` | `text-rose-600` |
| **Yen Hong** | `#dc2626` (red-600) | `text-[#dc2626]` | `hover:bg-red-50` | `text-red-200` | `text-red-500` |

---

## Visual States

### Active State (Hovered/Selected)
- Background: Company theme color (dark)
- Text: White
- Icon: Light shade of theme color
- Scale: 105-110% (slight zoom effect)
- Shadow: Elevated shadow

### Inactive State (Default)
- Background: White
- Text: Company theme color (dark)
- Icon: Medium shade of theme color
- Scale: 100%
- Shadow: None

### Hover State (Mouse over inactive)
- Background: Light tint of theme color (50 shade)
- Text: Company theme color (dark)
- Icon: Slight upward translation (-0.5)
- Transition: Smooth 300ms

---

## Component Structure

Service Ribbon displays 5 service items:
1. **Hulu** - Sarana (Shovel icon)
2. **Budidaya** - Teknologi (Sprout icon)
3. **Hilir** - Hasil (Factory icon)
4. **Pasar** - Niaga (ShoppingBag icon)
5. **Jaringan** - Nasional (Globe2 icon)

Default active index: 2 (Hilir)

---

## Interactive Features

- ✅ Hover to activate
- ✅ Click to activate
- ✅ Mouse leave resets to default (index 2)
- ✅ Smooth transitions (300ms)
- ✅ Scale animation on active
- ✅ Icon translation on hover
- ✅ Responsive design (mobile & desktop)

---

## Responsive Behavior

### Mobile (< 768px)
- Icon size: 16px
- Text size: 10px
- Padding: py-3 px-1
- Description: Hidden

### Desktop (≥ 768px)
- Icon size: 28px (size-7)
- Text size: 14px
- Padding: py-6 px-4
- Description: Visible (10px)

---

## Design Consistency

Setiap Service Ribbon sekarang:
1. ✅ Menggunakan warna tema perusahaan
2. ✅ Kontras yang baik antara active/inactive states
3. ✅ Hover effects yang smooth
4. ✅ Icon colors yang visible
5. ✅ Consistent interaction patterns

---

## Files Modified

1. `app/companies/berkat-jaya/components/section/ServiceRibbon.tsx`
2. `app/companies/bintang-semeru/components/section/ServiceRibbon.tsx`
3. `app/companies/yen-hong/components/section/ServiceRibbon.tsx`

---

## Testing

Untuk melihat perubahan:
```bash
npm run dev
```

Kemudian lihat Service Ribbon di bagian bawah hero section:
- http://localhost:3000/companies/berkat-jaya (Amber)
- http://localhost:3000/companies/bintang-semeru (Rose)
- http://localhost:3000/companies/yen-hong (Red)

Coba hover dan click pada setiap item untuk melihat transisi warna.

---

## Summary

Service Ribbon sekarang memiliki:
- ✅ Warna yang sesuai dengan tema perusahaan
- ✅ Kontras yang baik untuk readability
- ✅ Smooth hover dan active states
- ✅ Consistent design pattern
- ✅ No diagnostic errors
- ✅ Responsive untuk semua screen sizes
