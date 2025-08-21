import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Users, Heart, BookOpen, Award, ArrowRight, GraduationCap, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi | Ana Sayfa",
  description:
    "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları. Çalışan ebeveynler için özel destek programları.",
  openGraph: {
    title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description: "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları.",
  },
}

import { workshops as workshopDetails } from "@/lib/workshops"

export default function HomePage() {
  const workshops = workshopDetails.slice(0, 12).map((w) => ({
    title: w.title,
    image: w.image || "/placeholder.svg",
    category: w.category || "",
    slug: w.slug,
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image (optimized) */}
        <div className="absolute inset-0">
          <Image
            src="/happy-children-classroom.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-500 bg-opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SEV-AY Eğitim ve Kariyer
            <br />
            <span className="text-honey-300">Danışmanlık Merkezi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Çocuklarınızın gelişimi için güvenli ve kaliteli bir ortam sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/egitimler" className="btn-accent">
              Atölye Programlarımız
              <ArrowRight className="ml-2 inline" size={20} />
            </Link>
            <Link href="/iletisim" className="btn-secondary">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Workshops Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popüler Atölyelerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Çocukların farklı yeteneklerini keşfedebileceği, eğlenceli ve öğretici atölye programlarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workshops.map((workshop, index) => (
              <Link
                key={index}
                href={`/egitimler/${workshop.slug || workshop.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-honey-300 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {workshop.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-honey-300 transition-colors duration-300">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <BookOpen size={16} className="mr-2" />
                      <span>Detayları Gör</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen size={32} className="mx-auto mb-3" />
                      <p className="font-semibold">Atölyeyi İncele</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/egitimler"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Tüm Atölyeleri Görüntüle
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Profesyonel Seminerler</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Eğitim kurumları ve sağlık kuruluşları için özel olarak tasarlanmış seminer programları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Bilinçli Eğitim Semineri</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Eğitim kurumlarına özel farkındalık ve gelişim programı. Öğrenci motivasyonu, 
                sınıf yönetimi ve iletişim becerileri.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-2" size={16} />
                <span>Yarım gün veya tam gün</span>
              </div>
              <Link href="/seminerler" className="text-honey-600 font-semibold hover:text-honey-700">
                Detayları Gör →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-honey-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-honey-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sağlıklı Yaşam Semineri</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Otellere ve sağlık kuruluşlarına özel sağlık ve wellness programı. 
                Beslenme, egzersiz ve stres yönetimi.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-2" size={16} />
                <span>Yarım gün veya tam gün</span>
              </div>
              <Link href="/seminerler" className="text-honey-600 font-semibold hover:text-honey-700">
                Detayları Gör →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/seminerler"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Tüm Seminerleri İncele
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Çalışan Ebeveynler İçin Özel Program</h2>
              <p className="text-muted mb-6">
                Günümüzün yoğun iş temposunda ebeveyn olmak büyük sorumluluk. İşte tam da bu noktada, çalışan anne ve
                babalara özel destek programımızla yanınızdayız!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <p className="text-muted">
                    <strong>Duygusal Gelişim:</strong> Çocukların sosyal, duygusal gelişimlerini destekleyecek grup
                    oyunları
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <p className="text-muted">
                    <strong>Öğrenci Koçluğu:</strong> Zaman yönetimi ve planlı ders çalışma teknikleri
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <p className="text-muted">
                    <strong>Kaliteli Zaman:</strong> Eğlenceli ve öğretici atölyelerle keyifli vakit geçirme
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/egitimler" className="btn-primary">
                  Tüm Programları İncele
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Popüler Atölyelerimiz</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div className="bg-primary-500 w-3 h-3 rounded-full mr-3"></div>
                  <span className="text-muted">Temel İngilizce Oyun Atölyesi</span>
                </div>
                <div className="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div className="bg-primary-500 w-3 h-3 rounded-full mr-3"></div>
                  <span className="text-muted">Satranç Oyun Atölyesi</span>
                </div>
                <div className="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div className="bg-primary-500 w-3 h-3 rounded-full mr-3"></div>
                  <span className="text-muted">Robotik Kodlama Atölyesi</span>
                </div>
                <div className="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div className="bg-primary-500 w-3 h-3 rounded-full mr-3"></div>
                  <span className="text-muted">Yaratıcı Drama Atölyesi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section id="kocluk" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Koçluk Hizmetlerimiz</h2>
            <p className="text-gray-600">
              Alanında uzman koçlar tarafından, aylık paketler hâlinde randevulu şekilde yapılır
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                  Yaşam Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Kişisel hedeflerinize ulaşmanız için yaşam dengenizi kurmanızda destek
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-honey-400 to-honey-500 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-honey-600 transition-colors duration-300">
                  Öğrenci & Eğitim Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Akademik başarı ve etkili öğrenme teknikleri geliştirme desteği</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  Ebeveyn Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Etkili ebeveynlik becerileri ve çocuk gelişimi konularında rehberlik
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Nefes Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Stres yönetimi ve mindfulness için nefes teknikleri eğitimi</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Hareket ve Dans, Performans Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Sahne performansı ve beden dili geliştirme teknikleri</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  Kariyer Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Profesyonel hedeflerinize ulaşmak için kariyer planlama desteği</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  Takım Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Ekip çalışması ve liderlik becerilerini geliştirme programları</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  İlişki Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Kişilerarası ilişkileri güçlendirme ve iletişim becerileri</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  Aile Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Aile içi iletişimi güçlendirme ve uyum sağlama teknikleri</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  Diksiyon ve Etkili Konuşma
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Sunum becerileri ve etkili iletişim teknikleri geliştirme</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                  Zaman ve Stres Yönetimi
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Verimlilik artırma ve stresle başa çıkma stratejileri</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                Bilinçli Yaşam ve Farkındalık Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Farkındalık artırma ve zihinsel sağlık geliştirme teknikleri</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-violet-500 to-violet-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                  Kuantum Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Motivasyona ihtiyaç duyduğunuz alanlarda sizi destekler ve pozitif düşünce becerilerinizi geliştirir</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  Spor Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Fiziksel performans artırma ve spor psikolojisi desteği</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                  Hızlı Okuma Koçluğu
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Okuma hızını artırma ve anlama becerilerini geliştirme teknikleri</p>
            </div>
          </div>

          <div className="mt-12 bg-honey-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seanslar Nasıl Düzenlenir?</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                <p>Danışan ile koç, uygunluk durumuna göre ofis görevlisi tarafından organize edilir</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                <p>Verimlilik için en az 1 aylık kayıt yapılmalıdır</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                <p>Kişisel gelişimi destekleyici atölyeler alanında uzman koçlar ve eğitmenler tarafından sunulur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camps Section */}
      <section id="kamplar" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kamplar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mindfulness'tan Yaratıcı Drama ve Parfüm Tasarımına kadar özgün atölyelerle dolu unutulmaz bir kamp deneyimi!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Yaratıcı ve Farkındalık Kamp Programları</h3>
                <p className="text-gray-600 mb-6">
                  Mindfulness teknikleri, yaratıcı drama ve parfüm tasarımı ile dolu, kişisel gelişim odaklı kamp programlarımız.
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800">Amaç ve Kazanımlar:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Mindfulness teknikleri ile stres yönetimi ve farkındalık geliştirmek</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Yaratıcı drama ile ifade becerilerini ve empatiyi artırmak</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Parfüm tasarımı ile yaratıcılığı ve duyusal algıyı geliştirmek</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Grup içi iletişim, iş birliği ve sosyal becerileri güçlendirmek</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Kişisel gelişim ve özgüven kazanımı</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Hedef Kitle:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Gençler ve yetişkinler</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Kişisel gelişim ve yaratıcılık alanında kendini geliştirmek isteyenler</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Farklı disiplinlerde deneyim kazanmak isteyen herkes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800">Program İçeriği:</h4>
                  <div className="space-y-3">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-primary-700 mb-2">Mindfulness Atölyesi</h5>
                      <p className="text-gray-600 text-sm">Nefes ve dikkat çalışmaları, zihni sakinleştirme teknikleri</p>
                    </div>
                    <div className="bg-honey-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-honey-700 mb-2">Yaratıcı Drama Atölyesi</h5>
                      <p className="text-gray-600 text-sm">Rol yapma, doğaçlama ve hikâye anlatımı</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-700 mb-2">Parfüm Tasarım Atölyesi</h5>
                      <p className="text-gray-600 text-sm">Koku notalarını tanıma ve özgün parfüm yaratma</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-700 mb-2">Diğer Aktiviteler</h5>
                      <p className="text-gray-600 text-sm">Pozitif Yaşamı destekleyici gelişim atölyeleri ve açık hava aktiviteleri</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-500 to-honey-300 rounded-xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">Kamp Detayları</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="mr-2" size={16} />
                      <span>Program Süresi: 3-5 günlük kamp seçenekleri</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Yer: Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi kamp alanı</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2" size={16} />
                      <span>Alanında uzman mindfulness eğitmenleri ve drama liderleri</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-honey-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kamp Bilgileri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <p>Kamp sonunda katılım belgesi verilir</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <p>Konaklama ve yemek seçenekleri hakkında bilgi verilir</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <p>Kontenjan sınırlıdır, erken kayıt önerilir</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>İletişim: 0545 136 21 22</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp: 0544 470 14 55</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>Ücret: İletişim numaralarımızdan bilgi alabilirsiniz</span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-primary-600 mb-2">✨ Hemen kaydolun, kendinizi keşfetmeye ve yenilenmeye başlayın!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Neden SEV-AY?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Çünkü her çocuk ilgiyle büyümeli, her ebeveyn çocuğunu güvende bilmenin huzurunu yaşamalı.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Ortam</h3>
              <p className="text-gray-600">Çocuğunuz siz çalışırken güvende ve mutlu bir ortamda vakit geçiriyor.</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sosyal Gelişim</h3>
              <p className="text-gray-600">
                Grup oyunları ve sosyal aktivitelerle çocukların gelişimini destekliyoruz.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eğitici Atölyeler</h3>
              <p className="text-gray-600">23 farklı atölye programı ile çocukların yeteneklerini keşfediyoruz.</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzman Kadro</h3>
              <p className="text-gray-600">Alanında uzman koçlar ve eğitmenler tarafından sunulan kaliteli hizmet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">SEV-AY Hakkında</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Çocukların gelişimine katkı sağlamak ve ailelere destek olmak için kurulmuş bir eğitim merkeziyiz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Hikayemiz</h3>
              <div className="space-y-4 text-muted">
                <p>
                  SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi, çalışan ve çoçuklarının hem akademik hem sosyal ve kişisel gelişimini desteklemek isteyen ebeveynlerin yaşadığı zorlukları yakından
                  gözlemleyen kurucumuz Sevtap Aydın tarafından, çocukların kaliteli zaman geçirebileceği ve
                  gelişimlerini destekleyecek bir merkez kurma hayaliyle gerçekleştirilmiştir.
                </p>
                <p>
                  "Her çocuk ilgiyle büyümeli, her ebeveyn çocuğunu güvende bilmenin huzurunu yaşamalı" felsefesiyle
                  hareket eden merkezimiz, bu değerler üzerine inşa edilmiştir.
                </p>
                <p>
                  Günümüzün yoğun iş temposunda ebeveyn olmak büyük sorumluluk taşır. İşte tam da bu noktada, çalışan
                  anne ve babalara özel destek programımızla yanınızdayız!
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Değerlerimiz</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sevgi ve Güven</h4>
                    <p className="text-muted text-sm">Her çocuğa sevgiyle yaklaşır, güvenli bir ortam sağlarız.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-honey-300 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kalite ve Profesyonellik</h4>
                    <p className="text-muted text-sm">Uzman kadromuzla en yüksek kalitede hizmet sunarız.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Bireysel Yaklaşım</h4>
                    <p className="text-muted text-sm">
                      Her çocuğun benzersizliğini kabul eder, kişisel gelişimini destekleriz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-500 to-honey-300 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">SEV-AY'ın Amacı</h3>
            <p className="text-lg mb-6 opacity-90">
              Okul saatleri dışında çocuklarınızın kaliteli zaman geçirmesi için SEV-AY'da gelişim içerikli oyun
              atölyeleri. Programımız, özellikle çoçuklarımızın ve gençlerimizin yaşamda kendi potansiyellerini 
              keşfetmek ve bu doğrultuda akademik, sosyal, kişisel gelişimine katkı sağlamak isteyenler için özel 
              olarak geliştirilmiş olup eğitimi destekleyen bir kurum olarak faaliyet göstermektedir. 
            </p>
            <p className="opacity-90">
              Siz iş yerlerinizde çalışırken, çocuklarınıza kaliteli ve verimli zaman sunmak bizim için büyük bir önem
              taşıyor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Çocuğunuzun gelişimi için 
          hemen kayıt yaptirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Detaylı bilgi için ofisimizde bir kahve ve çay içmek için sizi bekliyoruz...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Randevu Alın
            </Link>
            <a
              href="https://wa.me/905444701455"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
