import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { workshops as workshopDetails } from "@/lib/workshops"
import { BookOpen, Users, Award, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Atölye Programları | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "23 farklı atölye programı, koçluk hizmetleri ve seminerler. Çocukların gelişimini destekleyen kapsamlı atölye programları.",
  openGraph: {
    title: "Atölye Programları | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "23 farklı atölye programı, koçluk hizmetleri ve seminerler. Çocukların gelişimini destekleyen kapsamlı atölye programları.",
  },
}

export default function EducationPage() {
  const workshops = workshopDetails.map((w) => ({
    id: w.id,
    title: w.title,
    description: w.intro || "",
    image: w.image || "/placeholder.svg",
    category: w.category || "",
    ageGroup: w.ageGroup || "",
    duration: w.duration || "",
    slug: w.slug,
  }))

  const coachingAreas = [
    "Yaşam Koçluğu",
    "Öğrenci & Eğitim Koçluğu",
    "Ebeveyn Koçluğu",
    "Nefes Koçluğu",
    "Hareket ve Dans, Performans Koçluğu",
    "Kariyer Koçluğu",
    "Takım Koçluğu",
    "İlişki Koçluğu",
    "Aile Koçluğu",
    "Diksiyon ve Etkili Konuşma",
    "Zaman ve Stres Yönetimi",
    "Bilinçaltı Uzmanı ile Mindfulness",
    "Kuantum Koçluğu",
    "Spor Koçluğu",
  ]

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image (optimized) */}
        <div className="absolute inset-0">
          <Image
            src="/children-learning-activities.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-500 bg-opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Atölye Programlarımız</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen kapsamlı atölye programları ve
            koçluk hizmetleri
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sev-Ay’da Gelişimi ve Eğitimi Destekleyici Oyun ve Hobby & Gelişim Programı</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Okul saatleri dışında çocuklarınızın kaliteli zaman geçirmesi için SEV-AY'da gelişim içerikli oyun
              atölyeleri. Programımız, özellikle çalışan ebeveynlere yönelik olarak çocukların akademik, sosyal,
              fiziksel ve bilişsel gelişimlerini desteklemeyi amaçlamaktadır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">23 Farklı Atölye</h3>
              <p className="text-gray-600">
                Çocukların farklı yeteneklerini keşfedebileceği çeşitli atölye programları
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzman Koçluk</h3>
              <p className="text-gray-600">Birçok alanda profesyonel koçluk hizmetleri</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Katılım Belgesi</h3>
              <p className="text-gray-600">3 aylık düzenli katılım sonrası katılım belgesi verilir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="atolyeler" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Atölye Programlarımız</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
          23 farklı atölye programı ile çocukların yeteneklerini keşfediyoruz. Her atölye, çocukların farklı
          alanlarda gelişimini desteklemek için özel olarak tasarlanmıştır.
        </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Link
                key={workshop.id}
                href={`/egitimler/${workshop.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-honey-300 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {workshop.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{workshop.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{workshop.ageGroup}</span>
                    <span>{workshop.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Atölye Programı Hakkında</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <p className="text-gray-600">Atölyeler hafta içi ve hafta sonu farklı saatlerde düzenlenir</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <p className="text-gray-600">Minimum kontenjan oluştuğunda atölye aktif hâle gelir</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <p className="text-gray-600">Atölyeler merkezimizdeki uygulama salonunda yapılır</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <p className="text-gray-600">
                    Tüm hizmetlerimizden size özel gün ve saatler içinde bireysel olarak faydalanabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kayıt ve Bilgi İçin</h2>
          <p className="text-xl mb-8 opacity-90">
            Detaylı bilgi için, ofisimizde bir kahve ve çay içmek için sizi bekliyoruz...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05451362122"
              className="bg-white text-honey-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Telefon: 0545 136 21 22
            </a>
            <a
              href="https://wa.me/905444701455"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-honey-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
