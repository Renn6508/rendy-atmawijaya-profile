export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  industry: string;
  founded: string;
  location: string;
  website?: string;
  email: string;
  phone: string;
  address: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  values: Array<{
    title: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  logo: string;
}

export const companies: Company[] = [
  {
    id: 'alpan-agro-jaya',
    name: 'Alpan Agro Jaya',
    tagline: 'Solusi Pertanian Modern untuk Indonesia',
    description: 'Perusahaan agribisnis terdepan yang menghadirkan inovasi dan keberlanjutan dalam sektor pertanian Indonesia.',
    longDescription: 'PT Alpan Agro Jaya adalah perusahaan agribisnis yang berdedikasi untuk meningkatkan produktivitas pertanian Indonesia melalui teknologi modern dan praktik berkelanjutan. Kami menyediakan solusi lengkap mulai dari distribusi pupuk berkualitas, konsultasi pertanian profesional, hingga implementasi teknologi agrikultur terkini.',
    industry: 'Agribisnis',
    founded: '2015',
    location: 'Jakarta, Indonesia',
    email: 'info@alpanagrojaya.com',
    phone: '+62 21 1234 5678',
    address: 'Jl. Pertanian No. 123, Jakarta Selatan 12345',
    logo: '/assets/companies/Alpan-agro-jaya.jpeg',
    services: [
      {
        title: 'Distribusi Pupuk Premium',
        description: 'Menyediakan pupuk berkualitas tinggi untuk berbagai jenis tanaman dengan harga kompetitif',
        icon: 'leaf'
      },
      {
        title: 'Konsultasi Pertanian',
        description: 'Tim ahli agronomi siap membantu optimalisasi hasil panen dan pengelolaan lahan',
        icon: 'users'
      },
      {
        title: 'Teknologi Agrikultur',
        description: 'Implementasi IoT dan smart farming untuk pertanian presisi dan efisien',
        icon: 'cpu'
      }
    ],
    values: [
      { title: 'Inovasi', description: 'Terus berinovasi dalam teknologi pertanian' },
      { title: 'Keberlanjutan', description: 'Praktik ramah lingkungan untuk masa depan' },
      { title: 'Kualitas', description: 'Produk dan layanan terbaik untuk petani' }
    ],
    stats: [
      { value: '500+', label: 'Petani Mitra' },
      { value: '50+', label: 'Produk Unggulan' },
      { value: '15+', label: 'Kota Jangkauan' }
    ]
  },
  {
    id: 'berkat-jaya',
    name: 'Berkat Jaya',
    tagline: 'Membangun Masa Depan Bersama',
    description: 'Perusahaan konstruksi dan properti terpercaya dengan rekam jejak proyek berkualitas tinggi di seluruh Indonesia.',
    longDescription: 'PT Berkat Jaya adalah perusahaan konstruksi dan properti yang telah berpengalaman lebih dari satu dekade dalam membangun berbagai proyek infrastruktur, komersial, dan residensial. Dengan tim profesional dan teknologi konstruksi modern, kami berkomitmen menghadirkan bangunan berkualitas yang aman, efisien, dan berkelanjutan.',
    industry: 'Konstruksi & Properti',
    founded: '2010',
    location: 'Surabaya, Indonesia',
    email: 'contact@berkatjaya.co.id',
    phone: '+62 31 9876 5432',
    address: 'Jl. Pembangunan Raya No. 456, Surabaya 60123',
    logo: '/assets/companies/berkat-jaya.jpeg',
    services: [
      {
        title: 'Konstruksi Bangunan',
        description: 'Pembangunan gedung komersial, residensial, dan infrastruktur dengan standar internasional',
        icon: 'building'
      },
      {
        title: 'Manajemen Proyek',
        description: 'Pengelolaan proyek konstruksi end-to-end dengan timeline dan budget yang terukur',
        icon: 'clipboard'
      },
      {
        title: 'Konsultasi Properti',
        description: 'Layanan konsultasi untuk pengembangan properti dan investasi real estate',
        icon: 'briefcase'
      }
    ],
    values: [
      { title: 'Integritas', description: 'Transparansi dan kejujuran dalam setiap proyek' },
      { title: 'Kualitas', description: 'Standar konstruksi terbaik dan material premium' },
      { title: 'Tepat Waktu', description: 'Komitmen menyelesaikan proyek sesuai jadwal' }
    ],
    stats: [
      { value: '200+', label: 'Proyek Selesai' },
      { value: '14 Tahun', label: 'Pengalaman' },
      { value: '98%', label: 'Kepuasan Klien' }
    ]
  },
  {
    id: 'bintang-semeru',
    name: 'Bintang Semeru',
    tagline: 'Cahaya untuk Kemajuan Digital',
    description: 'Perusahaan teknologi inovatif yang menghadirkan solusi digital transformasi untuk bisnis modern.',
    longDescription: 'PT Bintang Semeru adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk membantu bisnis bertransformasi di era digital. Dengan tim developer berpengalaman dan teknologi terkini, kami menyediakan layanan pengembangan software custom, cloud solutions, dan konsultasi digital transformation yang disesuaikan dengan kebutuhan bisnis Anda.',
    industry: 'Teknologi',
    founded: '2018',
    location: 'Bandung, Indonesia',
    email: 'hello@bintangsemeru.tech',
    phone: '+62 22 5555 7890',
    address: 'Jl. Teknologi Digital No. 789, Bandung 40132',
    logo: '/assets/companies/bintang-semeru.jpeg',
    services: [
      {
        title: 'Pengembangan Software',
        description: 'Custom software development untuk web, mobile, dan enterprise applications',
        icon: 'code'
      },
      {
        title: 'Cloud Solutions',
        description: 'Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas optimal',
        icon: 'cloud'
      },
      {
        title: 'Digital Transformation',
        description: 'Konsultasi dan implementasi strategi transformasi digital end-to-end',
        icon: 'trending-up'
      }
    ],
    values: [
      { title: 'Inovasi', description: 'Menggunakan teknologi terbaru dan best practices' },
      { title: 'Kolaborasi', description: 'Bekerja sama erat dengan klien untuk hasil optimal' },
      { title: 'Excellence', description: 'Komitmen pada kualitas kode dan user experience' }
    ],
    stats: [
      { value: '100+', label: 'Proyek Digital' },
      { value: '50+', label: 'Klien Aktif' },
      { value: '24/7', label: 'Support' }
    ]
  },
  {
    id: 'yen-hong',
    name: 'Yen Hong Internasional',
    tagline: 'Tradisi Bertemu Inovasi Global',
    description: 'Perusahaan perdagangan internasional dengan jaringan global yang menghubungkan bisnis Indonesia dengan dunia.',
    longDescription: 'PT Yen Hong Internasional adalah perusahaan perdagangan internasional yang telah membangun jaringan bisnis kuat di berbagai negara. Kami menyediakan layanan import-export, logistik, dan supply chain management yang efisien dan terpercaya. Dengan pengalaman lebih dari satu dekade, kami memahami kompleksitas perdagangan internasional dan siap menjadi mitra bisnis global Anda.',
    industry: 'Perdagangan Internasional',
    founded: '2012',
    location: 'Jakarta, Indonesia',
    email: 'trade@yenhong.co.id',
    phone: '+62 21 8888 9999',
    address: 'Jl. Perdagangan Internasional No. 321, Jakarta Utara 14450',
    logo: '/assets/companies/yen-hong-internasional.jpeg',
    services: [
      {
        title: 'Import & Export',
        description: 'Layanan perdagangan internasional dengan handling customs dan dokumentasi lengkap',
        icon: 'globe'
      },
      {
        title: 'Logistik Global',
        description: 'Pengiriman barang internasional dengan tracking real-time dan asuransi',
        icon: 'truck'
      },
      {
        title: 'Supply Chain Management',
        description: 'Optimalisasi rantai pasok untuk efisiensi biaya dan waktu pengiriman',
        icon: 'package'
      }
    ],
    values: [
      { title: 'Kepercayaan', description: 'Membangun hubungan jangka panjang dengan mitra' },
      { title: 'Efisiensi', description: 'Proses cepat dan biaya kompetitif' },
      { title: 'Global Network', description: 'Jangkauan ke berbagai negara di dunia' }
    ],
    stats: [
      { value: '30+', label: 'Negara Mitra' },
      { value: '1000+', label: 'Shipment/Tahun' },
      { value: '12 Tahun', label: 'Pengalaman' }
    ]
  }
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find(company => company.id === id);
}
