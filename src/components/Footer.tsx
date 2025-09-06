// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="border-t bg-purple-200 text-purple-900">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 font-bold">درباره ما</h3>
            <p>
              حمید علامه، مدرس متخصص هوش مصنوعی با تمرکز بر آموزش از پایه تا
              پیشرفته.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-4 font-bold">تماس با ما</h3>
            <ul className="space-y-2">
              <li>ایمیل: info@rwai.ir</li>
              <li>
                آدرس: خراسان رضوی فریمان، امام خمینی 3، کوچه شهید توحیدی، پلاک
                0.0، طبقه 1
              </li>
              <li>کد پستی: 9391634462</li>
              <li>شماره تماس: 05134631861</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-4 font-bold">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:underline">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:underline">
                  دوره‌ها
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} حمید علامه. تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
