"use client";
import { Target, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";

export default function BerkatJayaPage() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-orange-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-orange-600 dark:text-orange-500">
              BERKAT JAYA
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tentang-kami" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                Tentang
              </a>
              <a href="#visi-misi" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                Visi & Misi
              </a>
              <a href="#layanan" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                Layanan
              </a>
              <a href="#kontak" className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors text-sm font-medium">
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
            src="/assets/images/berkatjaya.png"
            alt="Construction Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9a3412] via-transparent to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] mb-4 text-orange-300 uppercase">
              PT. BERKAT JAYA
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 leading-tight font-bold uppercase">
              Membangun Masa Depan <br className="hidden md:block" />
              <span className="text-orange-400">Bersama</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-8 max-w-2xl leading-relaxed">
              Perusahaan konstruksi dan properti terpercaya dengan rekam jejak proyek berkualitas tinggi di seluruh Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#layanan" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm">
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
          <div className="bg-orange-600/95 dark:bg-orange-700/95 backdrop-blur-sm py-6">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                <div>
                  <h3 className="font-bold text-lg mb-1">200+</h3>
                  <p className="text-sm text-orange-100">Proyek Selesai</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">14 Tahun</h3>
                  <p className="text-sm text-orange-100">Pengalaman</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">98%</h3>
                  <p className="text-sm text-orange-100">Kepuasan Klien</p>
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
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
              <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                Who We Are
              </span>
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Tentang <span className="text-orange-600 dark:text-orange-500">Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-orange-600 dark:bg-orange-500 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              PT Berkat Jaya adalah perusahaan konstruksi dan properti yang telah berpengalaman lebih dari satu dekade dalam membangun berbagai proyek infrastruktur, komersial, dan residensial.
            </p>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
              Dengan tim profesional dan teknologi konstruksi modern, kami berkomitmen menghadirkan bangunan berkualitas yang aman, efisien, dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="visi-misi" className="relative pt-24 pb-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
              <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                Focus & Goals
              </span>
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Visi & <span className="text-orange-600 dark:text-orange-500">Misi Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-orange-600 dark:bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div data-aos="fade-up" className="lg:col-span-5 bg-orange-600 dark:bg-orange-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-orange-200 dark:shadow-orange-900/30 relative overflow-hidden group">
              <Target className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" size={180} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-orange-100">Visi Kami</h3>
                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  "Menjadi perusahaan konstruksi terdepan yang membangun masa depan Indonesia dengan integritas dan kualitas terbaik"
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-7 bg-white dark:bg-zinc-800 border-2 border-orange-400 dark:border-orange-600 rounded-3xl p-8 md:p-12 shadow-sm relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-orange-600 dark:text-orange-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-zinc-100 uppercase tracking-tight">Misi Strategis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: "Integritas", desc: "Transparansi dan kejujuran dalam setiap proyek" },
                  { title: "Kualitas", desc: "Standar konstruksi terbaik dan material premium" },
                  { title: "Tepat Waktu", desc: "Komitmen menyelesaikan proyek sesuai jadwal" },
                  { title: "Inovasi", desc: "Menggunakan teknologi konstruksi terkini" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-orange-100 dark:border-orange-900/50 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group">
                    <span className="absolute -left-[2px] top-0 h-0 w-[2px] bg-orange-500 group-hover:h-full transition-all duration-300"></span>
                    <h4 className="font-bold text-orange-600 dark:text-orange-500 text-sm uppercase mb-1">{item.title}</h4>
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
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
              <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                What We Do
              </span>
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Layanan <span className="text-orange-600 dark:text-orange-500">Unggulan</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-orange-600 dark:bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Konstruksi Bangunan",
                desc: "Pembangunan gedung komersial, residensial, dan infrastruktur dengan standar internasional",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
              },
              {
                title: "Manajemen Proyek",
                desc: "Pengelolaan proyek konstruksi end-to-end dengan timeline dan budget yang terukur",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              },
              {
                title: "Konsultasi Properti",
                desc: "Layanan konsultasi untuk pengembangan properti dan investasi real estate",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
              }
            ].map((service, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
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
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
              <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-[2px] bg-orange-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-zinc-100 uppercase tracking-tight">
              Hubungi <span className="text-orange-600 dark:text-orange-500">Tim Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-orange-600 dark:bg-orange-500 rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-lg">
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Email: contact@berkatjaya.co.id
              </p>
              <p className="text-gray-600 dark:text-zinc-400 mb-6">
                Phone: +62 31 9876 5432
              </p>
              <p className="text-gray-600 dark:text-zinc-400">
                Address: Jl. Pembangunan Raya No. 456, Surabaya 60123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-orange-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              © 2026 PT Berkat Jaya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
