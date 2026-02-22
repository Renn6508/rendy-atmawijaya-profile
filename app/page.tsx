'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, Menu } from 'lucide-react';
import Link from 'next/link';
import CompanyCard from '@/components/CompanyCard';
import SmoothScroll from '@/components/SmoothScroll';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileMenu } from '@/components/MobileMenu';
import { companies } from '@/lib/companies';
import { useRef, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <SmoothScroll />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6"
        >
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-full px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center justify-between">
            <Link href="/" className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              PORTFOLIO
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#companies"
                className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Companies
              </a>
              <a
                href="#about"
                className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                About
              </a>
              <ThemeToggle />
              <a
                href="#companies"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105"
              >
                Explore
              </a>
            </div>
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section with Enhanced Background */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
            
            {/* Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>
          
          {/* Enhanced Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-orange-500/10 dark:via-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 dark:from-cyan-500/8 dark:via-blue-500/8 dark:to-indigo-500/8 rounded-full blur-3xl"
          />

          <motion.div
            style={{ opacity, scale, y }}
            className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                Trusted by Industry Leaders
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6 leading-[0.9]"
            >
              Building the
              <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-600 bg-clip-text text-transparent">
                Future
              </span>{' '}
              Together
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Koleksi perusahaan terkemuka yang mendefinisikan standar industri melalui
              inovasi, kualitas, dan kepercayaan berkelanjutan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#companies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Lihat Perusahaan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
              >
                Pelajari Lebih Lanjut
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600"
              >
                <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section - Minimalist */}
        <section className="border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100 dark:divide-zinc-800"
            >
              {[
                { value: '4', label: 'Perusahaan' },
                { value: '10+', label: 'Tahun Pengalaman' },
                { value: '500+', label: 'Klien Puas' },
                { value: 'Multi', label: 'Industri' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      delay: index * 0.1,
                    }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* About Section - Asymmetric */}
        <section id="about" className="py-32 bg-white dark:bg-zinc-900 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 leading-tight">
                  Lebih dari
                  <br />
                  sekadar{' '}
                  <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-300 bg-clip-text text-transparent">
                    bisnis biasa
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Kami adalah kolektif strategis yang bergerak di sektor agribisnis,
                    konstruksi, teknologi, dan perdagangan. Filosofi kami sederhana:
                    melakukan hal yang benar, dengan cara yang benar.
                  </p>
                  <p>
                    Setiap entitas dalam portofolio kami beroperasi dengan otonomi penuh
                    namun terikat oleh satu visi: memberikan nilai tambah yang berkelanjutan
                    bagi masyarakat dan mitra bisnis.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-7xl font-bold mb-2"
                  >
                    2026
                  </motion.div>
                  <p className="text-sm text-white/80">Tahun Pertumbuhan</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy & Vision Section - The "Why" */}
        <section id="philosophy" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: The Main "Why" */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mb-8 shadow-sm">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">Filosofi Bisnis</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-[1.1]">
                  Empat entitas. <br />
                  Satu{' '}
                  <span className="bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-100 bg-clip-text text-transparent">
                    DNA yang sama.
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Keempat usaha ini beroperasi di sektor yang berbeda dan menghadapi tantangan uniknya masing-masing. Namun, mereka tidak berdiri sendiri. Semuanya lahir dari satu benang merah yang sama.
                  </p>
                  <p>
                    Visi kami bukan sekadar mendominasi pasar, melainkan membangun ekosistem bisnis yang <strong>memberdayakan manusia</strong> dan menciptakan <strong>solusi yang berkelanjutan</strong> untuk jangka panjang.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Core Values / DNA Grid */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Integritas Bertumbuh",
                    desc: "Kepercayaan adalah fondasi. Kami membangun operasional yang transparan dan etis di semua lini.",
                    delay: 0.2
                  },
                  {
                    title: "Inovasi Adaptif",
                    desc: "Tidak takut merombak cara lama demi menemukan efisiensi dan nilai tambah yang lebih besar.",
                    delay: 0.3
                  },
                  {
                    title: "Fokus Ekosistem",
                    desc: "Kesuksesan satu perusahaan harus mampu memberikan dampak positif bagi perusahaan lain dan mitranya.",
                    delay: 0.4
                  },
                  {
                    title: "Dampak Manusia",
                    desc: "Pada akhirnya, bisnis adalah tentang manusia. Mengutamakan kesejahteraan tim dan kepuasan pelanggan.",
                    delay: 0.5
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6">
                      <Sparkles className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section id="companies" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                  Ekosistem Kami
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Sinergi lintas industri untuk menciptakan dampak nyata.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-300 dark:from-zinc-700 to-transparent ml-12 mb-6"
              />
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CompanyCard company={company} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder / Orchestrator Section */}
        <section id="founder" className="py-32 px-6 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Portrait Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-2xl"
              >
                {/* Ganti URL gambar di bawah dengan foto profesional Anda */}
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" 
                  alt="Founder Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-1">[Nama Anda]</h3>
                  <p className="text-sm text-zinc-300 uppercase tracking-widest font-medium">Founder & CEO</p>
                </div>
              </motion.div>

              {/* Right Column: Copywriting & Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 w-max mb-8">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                    The Orchestrator
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 leading-[1.1]">
                  Visi besar membutuhkan{' '}
                  <span className="bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-100 bg-clip-text text-transparent">
                    eksekusi yang tepat.
                  </span>
                </h2>
                
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                  <p>
                    Sebagai pendiri dan pemimpin dari empat entitas bisnis ini, peran saya adalah memastikan setiap perusahaan tidak hanya berkembang di jalurnya masing-masing, tetapi juga saling memperkuat satu sama lain membentuk sebuah ekosistem yang solid.
                  </p>
                  <p>
                    Saya percaya bahwa bisnis yang tangguh dibangun di atas tiga pilar utama: <strong>integritas tanpa kompromi, inovasi yang berani, dan investasi pada manusia</strong>. Ini adalah komitmen saya untuk menciptakan nilai dan dampak nyata bagi industri.
                  </p>
                </div>

                {/* Personal Quote */}
                <div className="pl-6 border-l-4 border-zinc-200 dark:border-zinc-700">
                  <p className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 italic mb-4 leading-snug">
                    "Keberhasilan bukan sekadar tentang berapa banyak bisnis yang kita bangun, melainkan seberapa besar nilai tambah yang kita ciptakan untuk ekosistem."
                  </p>
                  <p className="text-sm font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                    — [Nama Anda], 2026
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Gallery Section - Modern Bento Grid */}
        <section className="py-32 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                Portofolio Visual
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Melihat lebih dekat karya dan pencapaian dari setiap perusahaan dalam ekosistem kami
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Large Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern Workspace</h3>
                    <p className="text-sm text-white/80">Inovasi dalam setiap detail</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
                  alt="Business meeting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>

              {/* Small Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                  alt="City skyline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>

              {/* Medium Image 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-video"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Kolaborasi Tim</h3>
                    <p className="text-sm text-white/80">Bersama mencapai tujuan</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                  alt="Data analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>

              {/* Small Image 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
                  alt="Professional team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>

              {/* Medium Image 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 aspect-video"
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 right-6 text-white text-right">
                    <h3 className="text-xl font-bold mb-1">Ruang Kreatif</h3>
                    <p className="text-sm text-white/80">Inspirasi tanpa batas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        

        {/* Features Section with Images */}
        <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                Keunggulan Kami
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Kombinasi sempurna antara pengalaman, inovasi, dan dedikasi
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                    alt="Innovation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-zinc-900" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Inovasi Berkelanjutan</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Terus berinovasi dengan teknologi terkini untuk memberikan solusi terbaik
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="Team Excellence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-zinc-900" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Tim Profesional</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Didukung oleh tim ahli yang berpengalaman di bidangnya masing-masing
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                    alt="Quality Assurance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ChevronDown className="w-6 h-6 text-zinc-900" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Kualitas Terjamin</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Standar kualitas tinggi dalam setiap produk dan layanan yang kami berikan
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        

        {/* CTA Section - High Contrast */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-32 px-6 bg-zinc-900 dark:bg-zinc-950 text-white text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
            >
              Siap Berkolaborasi?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 dark:text-zinc-500 mb-12 max-w-2xl mx-auto">
              Mari diskusikan bagaimana ekosistem kami dapat membantu pertumbuhan bisnis
              Anda.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="#companies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-white dark:bg-zinc-100 text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-200 transition-all shadow-2xl"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.section>
        {/* Trusted Partners / Social Proof Marquee Section */}
        <section className="py-24 px-6 border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Dipercaya oleh perusahaan dan institusi terkemuka
              </p>
            </motion.div>

            {/* Infinite Marquee Wrapper */}
            <div 
              className="relative flex w-full overflow-hidden"
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 30 // Semakin besar angka, semakin lambat gerakannya
                }}
                className="flex items-center gap-16 md:gap-24 min-w-max pr-16 md:pr-24"
              >
                {/* Kita menduplikasi list 2 kali agar animasinya berputar mulus (seamless loop) */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 md:gap-24">
                    
                    {/* Placeholder Logo 1 */}
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 grayscale hover:grayscale-0 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                      <Sparkles className="w-8 h-8" />
                      <span className="text-2xl font-bold tracking-tighter">TechNova</span>
                    </div>
                    
                    {/* Placeholder Logo 2 */}
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 grayscale hover:grayscale-0 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                      <Menu className="w-8 h-8" />
                      <span className="text-2xl font-black tracking-tight uppercase">BumiKarya</span>
                    </div>
                    
                    {/* Placeholder Logo 3 */}
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 grayscale hover:grayscale-0 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                      <ArrowRight className="w-8 h-8" />
                      <span className="text-2xl font-serif italic font-bold">AgriSynergy</span>
                    </div>
                    
                    {/* Placeholder Logo 4 */}
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 grayscale hover:grayscale-0 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                      <ChevronDown className="w-8 h-8" />
                      <span className="text-2xl font-bold tracking-widest">NEXUS.</span>
                    </div>
                    
                    {/* Placeholder Logo 5 */}
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 grayscale hover:grayscale-0 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                      <div className="w-7 h-7 rounded-full border-4 border-current"></div>
                      <span className="text-2xl font-bold">GlobalTrade</span>
                    </div>

                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer - Clean */}
        <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  PORTFOLIO
                </Link>
                <div className="hidden md:flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                  <a href="#companies" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    Companies
                  </a>
                  <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    About
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                © 2026 Portfolio Group. Designed with precision.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
