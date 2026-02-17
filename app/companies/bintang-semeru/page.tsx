import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'Bintang Semeru - Cahaya untuk Kemajuan Digital',
  description: 'Perusahaan teknologi inovatif yang menghadirkan solusi digital transformasi untuk bisnis modern.',
};

export default function BintangSemeruPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar companyName="Bintang Semeru" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-6">
                Teknologi
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Bintang Semeru
              </h1>
              <p className="text-2xl text-blue-200 mb-8">
                Cahaya untuk Kemajuan Digital
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Perusahaan teknologi inovatif yang menghadirkan solusi digital transformasi untuk bisnis modern.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Hubungi Kami
                <Icon name="arrow" className="w-4 h-4" />
              </a>
            </div>
            <div className="relative h-80 md:h-96 bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/companies/bintang-semeru.jpeg"
                  alt="Bintang Semeru logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">100+</div>
              <div className="text-zinc-600">Proyek Digital</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">50+</div>
              <div className="text-zinc-600">Klien Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">24/7</div>
              <div className="text-zinc-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Tentang Kami
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            PT Bintang Semeru adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk membantu bisnis bertransformasi di era digital. Dengan tim developer berpengalaman dan teknologi terkini, kami menyediakan layanan pengembangan software custom, cloud solutions, dan konsultasi digital transformation yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-y border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Solusi teknologi terdepan untuk transformasi digital bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-zinc-50 border border-zinc-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="code" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Pengembangan Software
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Custom software development untuk web, mobile, dan enterprise applications
              </p>
            </div>
            <div className="group p-8 bg-zinc-50 border border-zinc-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="cloud" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Cloud Solutions
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas optimal
              </p>
            </div>
            <div className="group p-8 bg-zinc-50 border border-zinc-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="trending-up" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                Digital Transformation
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Konsultasi dan implementasi strategi transformasi digital end-to-end
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Nilai-Nilai Kami
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Prinsip yang memandu setiap solusi teknologi kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Inovasi</h3>
            <p className="text-zinc-600">Menggunakan teknologi terbaru dan best practices</p>
          </div>
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Kolaborasi</h3>
            <p className="text-zinc-600">Bekerja sama erat dengan klien untuk hasil optimal</p>
          </div>
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Excellence</h3>
            <p className="text-zinc-600">Komitmen pada kualitas kode dan user experience</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Hubungi Kami
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                Mari wujudkan transformasi digital bisnis Anda bersama tim teknologi kami.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mail" className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-1">Email</div>
                    <a href="mailto:hello@bintangsemeru.tech" className="text-zinc-900 hover:text-blue-700 transition-colors">
                      hello@bintangsemeru.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="phone" className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-1">Telepon</div>
                    <a href="tel:+622255557890" className="text-zinc-900 hover:text-blue-700 transition-colors">
                      +62 22 5555 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="map-pin" className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-1">Alamat</div>
                    <p className="text-zinc-900">Jl. Teknologi Digital No. 789, Bandung 40132</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-zinc-900 mb-6">
                Kirim Pesan
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-700 mb-2">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              © 2026 Bintang Semeru. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Tentang
              </a>
              <a href="#services" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Layanan
              </a>
              <a href="#contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
