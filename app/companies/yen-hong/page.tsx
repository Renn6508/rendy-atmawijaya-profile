"use client";
import { Target, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";

export default function YenHongPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-red-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-red-600 dark:text-red-500">
              YEN HONG INTERNASIONAL
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tentang-kami" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                Tentang
              </a>
              <a href="#visi-misi" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                Visi & Misi
              </a>
              <a href="#layanan" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                Layanan
              </a>
              <a href="#kontak" className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-sm font-medium">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center text-white z-20 overflow-visible py-20 md:py-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/images/yenhong.png"
            alt="International Trade Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#991b1b] via-transparent to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] mb-4 text-red-300 uppercase">
              PT. YEN HONG INTERNASIONAL
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 leading-tight font-bold uppercase">
              Tradisi Bertemu <br className="hidden md:block" />
              <span className="text-red-400">Inovasi Global</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-8 max-w-2xl leading-relaxed">
              Perusahaan perdagangan internasional dengan jaringan global yang menghubungkan bisnis Indonesia dengan dunia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#layanan" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm">
                Layanan Kami
              </Link>
              <Link href="#visi-misi" className="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10 uppercase text-sm tracking-wider transition-all">
                Visi & Misi
              </Link>
            </div>
          </div>
        </div>

        {/* Service Ribbon */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="bg-red-600/95 dark:bg-red-700/95 backdrop-blur-sm py-6">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                <div>
                  <h3 className="font-bold text-lg mb-1">30+</h3>
                  <p className="text-sm text-red-100">Negara Mitra</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">1000+</h3>
                  <p className="text-sm text-red-100">Shipment/Tahun</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">12 Tahun</h3>
                  <p className="text-sm text-red-100">Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang-kami" className="pt-24 md:pt-24 pb-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-8 md:mb-14">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-red-500/50"></div>
              <span className="text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase">
                Who We Are
              </span>
              <div className="w-8 h-[2px] bg-red-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Tentang <span className="text-red-600 dark:text-red-500">Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-red-600 dark:bg-red-500 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              PT Yen Hong Internasional adalah perusahaan perdagangan internasional yang telah membangun jaringan bisnis kuat di berbagai negara.
            </p>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
              Kami menyediakan layanan import-export, logistik, dan supply chain management yang efisien dan terpercaya. Dengan pengalaman lebih dari satu dekade, kami memahami kompleksitas perdagangan internasional dan siap menjadi mitra bisnis global Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="visi-misi" className="relative pt-24 pb-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-red-500/50"></div>
              <span className="text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase">
                Focus & Goals
              </span>
              <div className="w-8 h-[2px] bg-red-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Visi & <span className="text-red-600 dark:text-red-500">Misi Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-red-600 dark:bg-red-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div data-aos="fade-up" className="lg:col-span-5 bg-red-600 dark:bg-red-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-red-200 dark:shadow-red-900/30 relative overflow-hidden group">
              <Target className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" size={180} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-red-100">Visi Kami</h3>
                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  "Menjadi jembatan perdagangan terpercaya yang menghubungkan Indonesia dengan pasar global"
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-7 bg-white dark:bg-zinc-800 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 md:p-12 shadow-sm relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-red-600 dark:text-red-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-zinc-100 uppercase tracking-tight">Misi Strategis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: "Kepercayaan", desc: "Membangun hubungan jangka panjang dengan mitra" },
                  { title: "Efisiensi", desc: "Proses cepat dan biaya kompetitif" },
                  { title: "Global Network", desc: "Jangkauan ke berbagai negara di dunia" },
                  { title: "Reliability", desc: "Layanan konsisten dan dapat diandalkan" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-red-100 dark:border-red-900/50 hover:border-red-500 dark:hover:border-red-500 transition-colors group">
                    <span className="absolute -left-[2px] top-0 h-0 w-[2px] bg-red-500 group-hover:h-full transition-all duration-300"></span>
                    <h4 className="font-bold text-red-600 dark:text-red-500 text-sm uppercase mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="pt-24 md:pt-24 pb-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-red-500/50"></div>
              <span className="text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase">
                What We Do
              </span>
              <div className="w-8 h-[2px] bg-red-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Layanan <span className="text-red-600 dark:text-red-500">Unggulan</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-red-600 dark:bg-red-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Import & Export",
                desc: "Layanan perdagangan internasional dengan handling customs dan dokumentasi lengkap",
                image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80"
              },
              {
                title: "Logistik Global",
                desc: "Pengiriman barang internasional dengan tracking real-time dan asuransi",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
              },
              {
                title: "Supply Chain Management",
                desc: "Optimalisasi rantai pasok untuk efisiensi biaya dan waktu pengiriman",
                image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80"
              }
            ].map((service, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="pt-24 md:pt-24 pb-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-red-500/50"></div>
              <span className="text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-[2px] bg-red-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Hubungi <span className="text-red-600 dark:text-red-500">Tim Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-red-600 dark:bg-red-500 rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-lg">
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Email: trade@yenhong.co.id
              </p>
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Phone: +62 21 8888 9999
              </p>
              <p className="text-gray-600 dark:text-zinc-400">
                Address: Jl. Perdagangan Internasional No. 321, Jakarta Utara 14450
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              © 2026 PT Yen Hong Internasional. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
