# Library Guide - Animasi & Utilities

## 📦 Library yang Diinstall

```bash
npm install framer-motion lenis lucide-react clsx tailwind-merge
```

## 🎨 Library Overview

### 1. Framer Motion
**Purpose**: Animasi React yang powerful dan mudah digunakan

**Features yang Diimplementasikan:**
- Fade in animations
- Slide animations
- Scale animations
- Stagger children (animasi berurutan)
- Scroll-triggered animations
- Hover & tap interactions

**Contoh Penggunaan:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### 2. Lenis
**Purpose**: Smooth scrolling library untuk pengalaman scroll yang halus

**Features:**
- Smooth scroll behavior
- Easing functions
- Performance optimized
- Touch-friendly

**Implementasi:**
- Component: `components/SmoothScroll.tsx`
- Otomatis aktif di semua halaman

### 3. Lucide React
**Purpose**: Icon library modern dengan 1000+ icons

**Features:**
- Tree-shakeable (hanya import icon yang dipakai)
- Consistent design
- Customizable size & color
- TypeScript support

**Contoh Penggunaan:**
```tsx
import { Mail, Phone, MapPin } from 'lucide-react';

<Mail className="w-6 h-6 text-zinc-900" />
```

### 4. clsx & tailwind-merge
**Purpose**: Utility untuk menggabungkan className dengan smart

**Features:**
- Conditional classes
- Merge Tailwind classes tanpa konflik
- Type-safe

**Implementasi:**
- Utility function: `lib/utils.ts`
- Function: `cn(...classes)`

**Contoh Penggunaan:**
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  'hover:bg-zinc-100'
)} />
```

## 🎯 Implementasi di Project

### Homepage (`app/page.tsx`)

**Animasi yang Diterapkan:**

1. **Navigation Slide Down**
   ```tsx
   <motion.nav
     initial={{ y: -100 }}
     animate={{ y: 0 }}
     transition={{ duration: 0.5 }}
   >
   ```

2. **Hero Fade In**
   ```tsx
   <motion.h1
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.2 }}
   >
   ```

3. **Stats Counter Animation**
   ```tsx
   <motion.div
     initial={{ scale: 0 }}
     whileInView={{ scale: 1 }}
     viewport={{ once: true }}
   >
   ```

4. **Stagger Children (Companies Grid)**
   ```tsx
   <motion.div
     initial="initial"
     whileInView="animate"
     variants={staggerContainer}
   >
   ```

5. **Bouncing Arrow**
   ```tsx
   <motion.div
     animate={{ y: [0, 5, 0] }}
     transition={{ duration: 1.5, repeat: Infinity }}
   >
   ```

### CompanyCard (`components/CompanyCard.tsx`)

**Animasi yang Diterapkan:**

1. **Card Fade In on Scroll**
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, margin: '-100px' }}
     transition={{ duration: 0.5, delay: index * 0.1 }}
   >
   ```

2. **Logo Scale on Hover**
   ```tsx
   <motion.div
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.3 }}
   >
   ```

3. **Arrow Slide on Hover**
   ```tsx
   <motion.div
     whileHover={{ x: 5 }}
     transition={{ duration: 0.2 }}
   >
   ```

### Navbar (`components/Navbar.tsx`)

**Animasi yang Diterapkan:**

1. **Navbar Slide Down**
   ```tsx
   <motion.nav
     initial={{ y: -100 }}
     animate={{ y: 0 }}
   >
   ```

2. **Mobile Menu Expand**
   ```tsx
   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 1, height: 'auto' }}
         exit={{ opacity: 0, height: 0 }}
       >
     )}
   </AnimatePresence>
   ```

3. **Underline Hover Effect**
   ```css
   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full" />
   ```

4. **Scroll-based Background Change**
   ```tsx
   const [scrolled, setScrolled] = useState(false);
   
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 20);
     };
   }, []);
   ```

### Icon Component (`components/Icon.tsx`)

**Implementasi Lucide React:**
```tsx
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  check: Check,
};

const IconComponent = icons[name] || Check;
return <IconComponent className={className} />;
```

## 🎨 Animation Variants

### Fade In Up
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
```

### Stagger Container
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

## 🚀 Performance Tips

### 1. Viewport Once
```tsx
viewport={{ once: true }}
```
Animasi hanya trigger sekali saat pertama kali terlihat

### 2. Viewport Margin
```tsx
viewport={{ once: true, margin: '-100px' }}
```
Trigger animasi sebelum element benar-benar terlihat

### 3. Layout Animations
```tsx
<motion.div layout>
```
Smooth layout changes

### 4. Will Change
```css
.animated-element {
  will-change: transform, opacity;
}
```

## 📝 Best Practices

### 1. Use Variants for Complex Animations
```tsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>
```

### 2. Reuse Animation Configs
```tsx
// Define once
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

// Use everywhere
<motion.div {...fadeInUp} />
```

### 3. Optimize with useMemo
```tsx
const animationConfig = useMemo(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}), []);
```

### 4. Use AnimatePresence for Exit Animations
```tsx
<AnimatePresence>
  {show && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

## 🎯 Customization

### Menambah Animasi Baru

1. **Fade In Left**
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
```

2. **Rotate In**
```tsx
<motion.div
  initial={{ opacity: 0, rotate: -180 }}
  animate={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8 }}
>
```

3. **Scale Bounce**
```tsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ 
    type: "spring",
    stiffness: 260,
    damping: 20 
  }}
>
```

### Menambah Icon Baru

1. Import dari Lucide React:
```tsx
import { NewIcon } from 'lucide-react';
```

2. Tambahkan ke Icon component:
```tsx
const icons: Record<string, LucideIcon> = {
  // ... existing icons
  'new-icon': NewIcon,
};
```

3. Gunakan:
```tsx
<Icon name="new-icon" className="w-6 h-6" />
```

## 🔧 Troubleshooting

### Animasi Tidak Muncul
- Pastikan component dibungkus dengan `'use client'`
- Check console untuk errors
- Verify framer-motion installed correctly

### Smooth Scroll Tidak Bekerja
- Check SmoothScroll component di-import
- Verify Lenis installed
- Check browser compatibility

### Icons Tidak Muncul
- Verify import statement
- Check icon name di Icon component
- Ensure lucide-react installed

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis GitHub](https://github.com/studio-freight/lenis)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
