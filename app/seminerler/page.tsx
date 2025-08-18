import type { Metadata } from "next"
import Image from "next/image"
import { Users, Award, Clock, CheckCircle, GraduationCap, Heart, Star, Calendar, MapPin, Phone, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Seminerler | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "Eğitim kurumları ve sağlık kuruluşları için özel seminer programları. Bilinçli eğitim ve sağlıklı yaşam seminerleri.",
  openGraph: {
    title: "Seminerler | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "Eğitim kurumları ve küçük ve büyük çaplı tüm kurum ve kuruluşlar için özel seminer programları. Bilinçli eğitim ve sağlıklı yaşam seminerleri.",
  },
}

export default function SeminerlerPage() {
  const seminars = [
    {
      id: 1,
      title: "Bilinçli Eğitim Semineri",
      subtitle: "Eğitim kurumlarına özel farkındalık ve gelişim programı!",
      image: "/egitim.png",
      category: "Eğitim & Gelişim",
      duration: "Yarım gün veya tam gün",
      location: "Eğitim kurumlarında veya merkezimizde",
      objectives: [
        "Eğitimde bilinçli ve etkili yaklaşımın önemi",
        "Öğrenci motivasyonu ve dikkat artırma teknikleri",
        "Sınıf yönetimi ve iletişim becerilerinin geliştirilmesi",
        "Ebeveyn-öğretmen iş birliği ve destek yöntemleri",
        "Öğrencilerin akademik ve sosyal gelişimini destekleme stratejileri"
      ],
      content: [
        "Modern eğitim yaklaşımları ve pedagojik yöntemler",
        "Dikkat ve motivasyon artırma teknikleri",
        "Etkili iletişim ve pozitif sınıf ortamı yaratma",
        "Teknoloji kullanımı ve dijital çağda eğitim",
        "Farklı çalışma teknikleri ve uygulamalı örnekler"
      ],
      targetAudience: [
        "Okul yöneticileri",
        "Öğretmenler ve eğitimciler",
        "Veliler ve eğitim danışmanları",
        "Eğitim kurumlarında çalışan diğer ilgili kişiler"
      ],
      features: [
        "Seminer sonunda katılım belgesi verilir",
        "Katılımcı sayısına göre özel program düzenlenir",
        "Tarih ve içerik taleplere göre uyarlanabilir",
        "Pratik, bilimsel ve güncel bilgiler"
      ]
    },
    {
      id: 2,
      title: "Sağlıklı Yaşam Semineri",
      subtitle: "Küçük ve büyük çaplı tüm kurum ve kuruluşlar için ",
      image: "/saglik.png",
      category: "Sağlık & Wellness",
      duration: "Yarım gün veya tam gün",
      location: "Otel konferans salonları veya sağlık kuruluşlarında",
      objectives: [
        "Sağlıklı beslenme alışkanlıkları kazandırmak",
        "Fiziksel aktivitenin önemi ve günlük yaşama entegrasyonu",
        "Stres yönetimi ve zihinsel sağlığı destekleyen teknikler",
        "İş yerinde ergonomi ve sağlıklı yaşam uygulamaları",
        "Kişisel bakım ve hijyen bilincini artırmak",
        "Personel uyum ve iş dayanışması durumlarını güçlendirmek",
        "Personelin çalıştığı kurum ve kuruluşun vizyonuna bağlı hareket etmesine katkı sağlamak",
        "Personel iş verimliliğini artırmak",
        "Personel çalışma süresinin sürekliliğini sağlamak"
      ],
      content: [
        "Dengeli ve bilinçli beslenme",
        "Günlük hareket ve egzersiz önerileri",
        "Stresle başa çıkma yöntemleri",
        "Uyku düzeni ve dinlenmenin önemi",
        "Sağlıklı yaşam için pratik tavsiyeler"
      ],
      targetAudience: [
        "Otel personeli ve yöneticileri",
        "Sağlık kuruluşları çalışanları",
        "Otellerde ve sağlık tesislerinde misafirler",
        "Sağlıklı yaşam ve wellness alanına ilgi duyan herkes"
      ],
      features: [
        "Seminer sonunda katılım sertifikası verilir",
        "İçerik ve süre kurumun ihtiyaçlarına göre uyarlanabilir",
        "İnteraktif ve motive edici seminer deneyimi",
        "Güncel bilimsel bilgiler"
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/seminer.png"
            alt="Eğitim ve seminer ortamı"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-600 bg-opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Profesyonel Seminerler</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Eğitim kurumları ve küçük ve büyük çaplı tüm kurum ve kuruluşlar için özel seminer programları. Bilinçli eğitim ve sağlıklı yaşam seminerleri.
          </p>
        </div>
      </section>

      {/* Seminars Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Seminer Programlarımız</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Kurumlarınızın ihtiyaçlarına özel olarak tasarlanmış, yarım gün veya tam gün 
              süren profesyonel seminer programları ile ekibinizi geliştirin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seminars.map((seminar) => (
              <div key={seminar.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={seminar.image}
                    alt={seminar.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {seminar.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{seminar.title}</h3>
                  <p className="text-gray-600 mb-6 italic">{seminar.subtitle}</p>

                  {/* Info Icons */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary-500" size={16} />
                      <span>{seminar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-primary-500" size={16} />
                      <span>{seminar.location}</span>
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Award className="text-primary-500" size={20} />
                      Amaç ve Kazanımlar
                    </h4>
                    <ul className="space-y-2">
                      {seminar.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Users className="text-primary-500" size={20} />
                      Hedef Kitle
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {seminar.targetAudience.map((audience, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Star className="text-primary-500" size={20} />
                      Özellikler
                    </h4>
                    <ul className="space-y-1">
                      {seminar.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href="tel:0545 136 21 22"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone size={16} />
                      Hemen Ara ve Bilgi Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Kurumunuz İçin Özel Seminer Programı</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Seminer içeriği, süre ve tarih konularında kurumunuzun ihtiyaçlarına göre 
            özel programlar hazırlıyoruz. Hemen iletişime geçin!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Phone className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
              <a href="tel:0545 136 21 22" className="text-primary-600 font-semibold text-lg">
                0545 136 21 22
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/905444701455" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold text-lg"
              >
                0544 470 14 55
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-primary-100 mb-4">
              ✨ Kurumunuzda fark yaratmak için bizimle iletişime geçin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0545 136 21 22"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905444701455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp'tan Bilgi Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
