import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}
