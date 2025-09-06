// components/CoursesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const courses = [
  {
    title: "آموزش هوش مصنوعی از پایه",
    description:
      "در این دوره، از مفاهیم پایه هوش مصنوعی شروع می‌کنیم و به مباحث پیشرفته مانند یادگیری ماشین و شبکه‌های عصبی می‌پردازیم. مناسب برای مبتدیان و علاقه‌مندان.",
    cover: "/images/cover.jpg",
    price: "3,000,000 تومان",
    contact: "برای خرید، با شماره 09153122056 تماس بگیرید.",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-purple-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900"
        >
          دوره‌های آموزشی
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg border-purple-200">
                <div className="relative h-48 w-full -mt-4">
                  <Image
                    src={course.cover}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-purple-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-purple-600">{course.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    {course.contact}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
