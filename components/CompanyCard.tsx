'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Company } from '@/lib/companies';

interface CompanyCardProps {
  company: Company;
  index: number;
}

export default function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/companies/${company.id}`}
        className="group block bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300"
      >
        {/* Logo Section */}
        <div className="relative h-48 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center p-8 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors mb-1">
                {company.name}
              </h3>
              <p className="text-sm text-zinc-500">{company.tagline}</p>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" />
            </motion.div>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {company.description}
          </p>

          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full font-medium">
              {company.industry}
            </span>
            <span className="text-zinc-500">{company.location}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
