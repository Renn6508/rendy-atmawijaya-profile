import { Leaf, Mail, MapPin, Phone, MessageCircle, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import ScrollToTop from "../ui/ScrollToTop";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#dc2626] pt-16 pb-8 text-white border-t border-red-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* KOLOM 1: BRAND & SOSMED */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white p-1 rounded-full">
                {/* <Leaf size={20} className="text-white" /> */}
                <Image src="/assets/companies/yen-hong-internasional.jpeg" alt="Logo" width={25} height={25} className="text-red-500" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">
                Yen <span className="text-red-200">Hong</span>
              </span>
            </Link>
            <p className="text-gray-100 text-sm leading-relaxed max-w-sm">
              Perusahaan perdagangan internasional dengan jaringan global yang menghubungkan bisnis Indonesia dengan dunia.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div className="md:pl-12">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Our Store</h4>
            <ul className="flex flex-col gap-4 text-gray-100 text-sm uppercase tracking-widest">
              <li><Link href="#" className="hover:text-red-200 transition-colors">Home</Link></li>
              <li><Link href="#tentang-kami" className="hover:text-red-200 transition-colors">About</Link></li>
              <li><Link href="#visi-misi" className="hover:text-red-200 transition-colors">Visi Misi</Link></li>
              <li><Link href="#layanan" className="hover:text-red-200 transition-colors">Service</Link></li>
              <li><Link href="#kontak" className="hover:text-red-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT INFO */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="flex flex-col gap-5 text-gray-100 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-red-200 shrink-0" size={20} />
                <span>Jl. Perdagangan Internasional No. 321, Jakarta Utara 14450</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-red-200 shrink-0" size={20} />
                <span>+62 21 8888 9999</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-red-200 shrink-0" size={20} />
                <span>trade@yenhong.co.id</span>
              </li>
              <li className="flex items-center gap-4">
                <Instagram className="text-red-200 shrink-0" size={20} />
                <span>yenhong_international</span>
              </li>
      
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BORDER */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-red-100">
            Copyright © 2026 <span className="text-white font-bold">PT. Yen Hong Internasional</span> | Developed by Rendy Atmawijaya 
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;