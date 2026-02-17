# Gallery & Image Sections Design

## 🎨 Design Concept

Website ini menggunakan **Bento Grid Layout** yang populer di 2024-2026, dengan gambar dari Unsplash untuk visual yang profesional dan berkualitas tinggi.

## 📸 Image Sources

Semua gambar menggunakan **Unsplash API** dengan parameter:
- `w=800` atau `w=600` untuk width
- `q=80` untuk quality (optimal balance)
- Auto-format untuk WebP support

### Keuntungan Unsplash:
✅ Free untuk commercial use
✅ High quality professional photos
✅ CDN global untuk loading cepat
✅ Auto-optimization
✅ No attribution required (tapi recommended)

## 🎯 Gallery Sections

### 1. Bento Grid Gallery

**Layout:**
```
┌─────────┬─────┬─────┐
│         │  1  │  2  │
│  HERO   ├─────┴─────┤
│  (2x2)  │  3 (2x1)  │
│         ├─────┬─────┤
├─────────┤  4  │  5  │
│  6 (2x1)├─────┴─────┤
└─────────┘
```

**Features:**
- 1 large featured image (2x2 grid)
- 4 small square images (1x1 grid)
- 2 medium horizontal images (2x1 grid)
- Hover effects dengan scale & overlay
- Gradient overlays untuk text readability

**Images Used:**
1. **Featured**: Modern office workspace
2. **Small 1**: Business meeting
3. **Small 2**: City skyline
4. **Small 3**: Data analytics
5. **Small 4**: Professional team
6. **Medium 1**: Team collaboration
7. **Medium 2**: Creative workspace

### 2. About Section with Image

**Layout:**
- 2-column grid (text left, image right)
- Square aspect ratio
- Gradient overlay
- Animated text overlay

**Image:**
- Team collaboration photo
- Shows teamwork and professionalism
- Gradient overlay untuk depth

**Animation:**
- "2026" text dengan scale animation
- Pulsing effect untuk attention

### 3. Features Section with Images

**Layout:**
- 3-column grid
- 4:3 aspect ratio images
- Icon badges on images
- Hover scale effect

**Images:**
1. **Innovation**: Team brainstorming
2. **Team Excellence**: Professional meeting
3. **Quality**: Team collaboration

**Features:**
- Gradient overlay dari bottom
- White circular icon badge
- Hover scale 1.05x
- Smooth transitions

## 🎨 Design Patterns

### Bento Grid Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {/* Large: 2x2 */}
  <div className="md:col-span-2 md:row-span-2">
  
  {/* Small: 1x1 */}
  <div className="aspect-square">
  
  {/* Medium: 2x1 */}
  <div className="md:col-span-2">
</div>
```

### Image Hover Effects
```tsx
<img className="group-hover:scale-105 transition-transform duration-700" />
<div className="bg-black/20 group-hover:bg-black/40 transition-colors" />
```

### Gradient Overlays
```tsx
{/* Bottom to top */}
<div className="bg-gradient-to-t from-black/60 to-transparent" />

{/* Left to right */}
<div className="bg-gradient-to-r from-black/60 via-black/0 to-black/0" />
```

## 🎭 Animations

### Image Animations
1. **Scale on Hover**: `scale-105` (700ms duration)
2. **Overlay Fade**: `opacity-0` → `opacity-100`
3. **Text Slide**: Slide in from bottom
4. **Stagger Load**: Sequential fade in

### Timing
- **Image Scale**: 700ms (smooth & luxurious)
- **Overlay**: 300ms (quick response)
- **Text**: 400ms (readable)

## 📐 Aspect Ratios

### Gallery Images
- **Large Featured**: `aspect-square` (1:1)
- **Small Images**: `aspect-square` (1:1)
- **Medium Images**: `aspect-video` (16:9)

### Feature Images
- **All Features**: `aspect-[4/3]` (4:3)

### About Image
- **About Section**: `aspect-square` (1:1)

## 🎨 Color Overlays

### Gradient Overlays
```css
/* Dark gradient bottom */
from-black/60 via-black/0 to-black/0

/* Dark gradient top */
from-zinc-900/60 to-transparent

/* Hover overlay */
bg-black/20 → bg-black/40
```

### Icon Badges
```css
/* White circle */
bg-white rounded-full

/* Icon color */
text-zinc-900
```

## 🚀 Performance Optimization

### Image Loading
1. **Lazy Loading**: Native browser lazy loading
2. **Responsive Images**: Unsplash auto-serves optimal size
3. **WebP Format**: Auto-converted by Unsplash
4. **CDN**: Global CDN untuk fast loading

### CSS Optimization
1. **Transform**: GPU-accelerated
2. **Will-change**: Hint browser untuk optimization
3. **Contain**: Layout containment

### Best Practices
```tsx
<img
  loading="lazy"
  decoding="async"
  alt="Descriptive alt text"
  className="will-change-transform"
/>
```

## 📱 Responsive Design

### Mobile (< 768px)
- Bento grid: 1 column
- All images: Full width
- Maintain aspect ratios
- Stack vertically

### Tablet (768px - 1024px)
- Bento grid: 2 columns
- Features: 2 columns
- Adjusted spacing

### Desktop (> 1024px)
- Bento grid: 4 columns
- Features: 3 columns
- Full layout

## 🎯 Image Selection Criteria

### Professional Quality
✅ High resolution (min 1920px)
✅ Good composition
✅ Relevant to business context
✅ Consistent color palette

### Business Context
✅ Office environments
✅ Team collaboration
✅ Modern workspaces
✅ Professional settings

### Color Harmony
✅ Neutral tones (zinc, gray)
✅ Natural lighting
✅ Clean backgrounds
✅ Professional aesthetic

## 🔧 Customization Guide

### Mengganti Gambar

1. **Cari gambar di Unsplash**:
   ```
   https://unsplash.com/s/photos/[keyword]
   ```

2. **Copy image URL**:
   ```
   https://images.unsplash.com/photo-[id]
   ```

3. **Tambahkan parameters**:
   ```
   ?w=800&q=80
   ```

4. **Replace di code**:
   ```tsx
   <img src="https://images.unsplash.com/photo-[id]?w=800&q=80" />
   ```

### Mengubah Layout

**Bento Grid Variations:**
```tsx
{/* 3x3 grid */}
<div className="md:col-span-3 md:row-span-3">

{/* 1x2 vertical */}
<div className="md:row-span-2">

{/* 3x1 horizontal */}
<div className="md:col-span-3">
```

### Mengubah Hover Effects

**Scale Amount:**
```tsx
group-hover:scale-105  // Subtle
group-hover:scale-110  // Medium
group-hover:scale-125  // Dramatic
```

**Overlay Darkness:**
```tsx
bg-black/20  // Light
bg-black/40  // Medium
bg-black/60  // Dark
```

## 📚 Unsplash Collections

### Recommended Collections
- **Business**: `/s/photos/business`
- **Office**: `/s/photos/office`
- **Team**: `/s/photos/team-work`
- **Technology**: `/s/photos/technology`
- **Modern**: `/s/photos/modern-office`

### Search Keywords
- "modern office"
- "team collaboration"
- "business meeting"
- "workspace"
- "professional"
- "corporate"
- "startup"
- "coworking"

## 🎨 Design Inspiration

### Similar Websites
- **Apple.com**: Clean product photography
- **Stripe.com**: Bento grid layouts
- **Linear.app**: Minimalist imagery
- **Notion.so**: Lifestyle photography
- **Figma.com**: Modern workspace shots

### Design Trends 2024-2026
✅ Bento grid layouts
✅ Large hero images
✅ Gradient overlays
✅ Rounded corners (3xl)
✅ Hover scale effects
✅ Asymmetric layouts
✅ Generous whitespace

## 🔍 SEO & Accessibility

### Alt Text Best Practices
```tsx
alt="Descriptive text that explains the image content"
// Good: "Team collaborating in modern office"
// Bad: "image1" or "photo"
```

### Image Optimization
- Use descriptive filenames
- Add alt text to all images
- Use appropriate aspect ratios
- Lazy load below-fold images
- Provide fallback colors

## 📊 Performance Metrics

### Target Metrics
- **LCP**: < 2.5s (Largest Contentful Paint)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **FID**: < 100ms (First Input Delay)

### Optimization Tips
1. Use Unsplash CDN
2. Specify width/height
3. Use aspect-ratio CSS
4. Lazy load images
5. Preload hero image

## 🎯 Future Enhancements

### Potential Additions
- [ ] Lightbox modal untuk full-size view
- [ ] Image carousel/slider
- [ ] Lazy loading dengan blur placeholder
- [ ] Progressive image loading
- [ ] Video integration
- [ ] 3D hover effects
- [ ] Parallax scrolling untuk images
- [ ] Image filters on hover
