"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const photos = [
    { src: "/images/gallery2.png", alt: "Muhammad Faisal Wraich Transformation Photo 2", objectPosition: "object-[center_30%]", isLarge: true },
    { src: "/images/gallery3.png", alt: "Muhammad Faisal Wraich Transformation Photo 3", objectPosition: "object-[center_20%]", isLarge: false },
  ];

  return (
    <section id="transformations" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            The <span className="text-[#ff3b30]">Standard</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light"
          >
            Elite physiques require elite discipline. Witness the level of conditioning you can achieve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: customEase, delay: i * 0.15 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#0a0a0a] ${
                photo.isLarge 
                  ? "md:col-span-8 aspect-square md:aspect-auto md:h-[600px]" 
                  : "md:col-span-4 aspect-square md:aspect-[4/5] md:h-[600px]"
              }`}
              style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}
            >
              <Image 
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.objectPosition} contrast-[1.1] saturate-[1.05] brightness-[0.95] group-hover:scale-[1.03] transition-transform duration-700`}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-20 pointer-events-none opacity-80" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
