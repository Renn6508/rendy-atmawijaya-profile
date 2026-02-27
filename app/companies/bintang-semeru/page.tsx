"use client";
import { Target, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";

export default function BintangSemeruPage() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-blue-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-500">
              BINTANG SEMERU
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tentang-kami" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Tentang
              </a>
              <a href="#visi-misi" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Visi & Misi
              </a>
              <a href="#layanan" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Layanan
              </a>
              <a href="#kontak" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
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
            src="/assets/images/bintangsemeru.png"
            alt="Technology Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-transparent to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] mb-4 text-blue-300 uppercase">
              PT. BINTANG SEMERU
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 leading-tight font-bold uppercase">
              Cahaya untuk <br className="hidden md:block" />
              <span className="text-blue-400">Kemajuan Digital</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-8 max-w-2xl leading-relaxed">
              Perusahaan teknologi inovatif yang menghadirkan solusi digital transformasi untuk bisnis modern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#layanan" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm">
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
          <div className="bg-blue-600/95 dark:bg-blue-700/95 backdrop-blur-sm py-6">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                <div>
                  <h3 className="font-bold text-lg mb-1">100+</h3>
                  <p className="text-sm text-blue-100">Proyek Digital</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">50+</h3>
                  <p className="text-sm text-blue-100">Klien Aktif</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">24/7</h3>
                  <p className="text-sm text-blue-100">Support</p>
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
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">
                Who We Are
              </span>
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Tentang <span className="text-blue-600 dark:text-blue-500">Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              PT Bintang Semeru adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk membantu bisnis bertransformasi di era digital.
            </p>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
              Dengan tim developer berpengalaman dan teknologi terkini, kami menyediakan layanan pengembangan software custom, cloud solutions, dan konsultasi digital transformation yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="visi-misi" className="relative pt-24 pb-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">
                Focus & Goals
              </span>
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Visi & <span className="text-blue-600 dark:text-blue-500">Misi Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div data-aos="fade-up" className="lg:col-span-5 bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/30 relative overflow-hidden group">
              <Target className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" size={180} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-blue-100">Visi Kami</h3>
                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  "Menjadi mitra teknologi terpercaya yang memberdayakan bisnis Indonesia melalui inovasi digital"
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-7 bg-white dark:bg-zinc-800 border-2 border-blue-400 dark:border-blue-600 rounded-3xl p-8 md:p-12 shadow-sm relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-blue-600 dark:text-blue-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-zinc-100 uppercase tracking-tight">Misi Strategis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: "Inovasi", desc: "Menggunakan teknologi terbaru dan best practices" },
                  { title: "Kolaborasi", desc: "Bekerja sama erat dengan klien untuk hasil optimal" },
                  { title: "Excellence", desc: "Komitmen pada kualitas kode dan user experience" },
                  { title: "Skalabilitas", desc: "Solusi yang dapat berkembang seiring bisnis" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-blue-100 dark:border-blue-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                    <span className="absolute -left-[2px] top-0 h-0 w-[2px] bg-blue-500 group-hover:h-full transition-all duration-300"></span>
                    <h4 className="font-bold text-blue-600 dark:text-blue-500 text-sm uppercase mb-1">{item.title}</h4>
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
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">
                What We Do
              </span>
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Layanan <span className="text-blue-600 dark:text-blue-500">Unggulan</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Pengembangan Software",
                desc: "Custom software development untuk web, mobile, dan enterprise applications",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
              },
              {
                title: "Cloud Solutions",
                desc: "Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas optimal",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80"
              },
              {
                title: "Digital Transformation",
                desc: "Konsultasi dan implementasi strategi transformasi digital end-to-end",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              }
            ].map((service, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
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
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-[2px] bg-blue-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Hubungi <span className="text-blue-600 dark:text-blue-500">Tim Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-lg">
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Email: hello@bintangsemeru.tech
              </p>
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Phone: +62 22 5555 7890
              </p>
              <p className="text-gray-600 dark:text-zinc-400">
                Address: Jl. Teknologi Digital No. 789, Bandung 40132
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              © 2026 PT Bintang Semeru. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
