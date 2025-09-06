// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-300 to-purple-200 text-gray-800"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            حمید علامه، مدرس هوش مصنوعی
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl leading-relaxed md:text-2xl"
          >
            با سال‌ها تجربه در آموزش هوش مصنوعی، به شما کمک می‌کنم تا از پایه تا
            پیشرفته این حوزه را بیاموزید. دوره‌های من طراحی شده‌اند تا دانش عملی
            و تئوری را به طور همزمان ارائه دهند.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-purple-500 text-white hover:bg-purple-600"
            >
              مشاهده دوره‌ها
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_70%)]" />
      </motion.div>
    </section>
  );
}
