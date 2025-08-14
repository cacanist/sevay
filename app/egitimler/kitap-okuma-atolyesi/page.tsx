import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, Users, Award, Clock, CheckCircle, Heart, Star, BookMarked } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitap Okuma Atölyesi | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "Çocukların okuma sevgisini geliştiren, yaratıcı düşünme ve hayal gücünü destekleyen kitap okuma atölyesi.",
  openGraph: {
    title: "Kitap Okuma Atölyesi | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "Çocukların okuma sevgisini geliştiren, yaratıcı düşünme ve hayal gücünü destekleyen kitap okuma atölyesi.",
  },
}

export default function KitapOkumaAtolyesiPage() {
  const objectives = [
    "Okuma alışkanlığı kazandırmak",
    "Hayal gücünü ve yaratıcılığı geliştirmek",
    "Kritik düşünme becerilerini artırmak",
    "Kelime dağarcığını zenginleştirmek",
    "Empati ve sosyal becerileri güçlendirmek",
    "Konsantrasyon süresini uzatmak"
  ]

  const contentItems = [
    "Hikaye okuma ve anlatma etkinlikleri",
    "Karakter analizi ve canlandırma",
    "Kitap tartışma grupları",
    "Yaratıcı yazma çalışmaları",
    "Resimli kitap inceleme",
    "Sesli okuma ve telaffuz çalışmaları",
    "Kitap önerisi ve paylaşım",
    "Kütüphane ziyaretleri"
  ]

  const targetAudience = [
    "6-12 yaş arası çocuklar",
    "Okuma sevgisi geliştirmek isteyenler",
    "Hayal gücünü geliştirmek isteyenler",
    "Sosyal becerilerini güçlendirmek isteyenler"
  ]

  const testimonials = [
    {
      quote: "Çocuğum artık her gün kitap okumayı bekliyor. Atölye sayesinde okuma sevgisi gelişti.",
      author: "Fatma K."
    },
    {
      quote: "Kitap okuma atölyesi çocuğumun hayal gücünü çok geliştirdi. Artık kendi hikayelerini yazıyor.",
      author: "Mehmet A."
    },
    {
      quote: "Çocuklar birbirleriyle kitap hakkında sohbet ediyor, bu çok güzel bir gelişim.",
      author: "Ayşe Y."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/kitap-okuma.jpg"
            alt="Çocuklar birlikte kitap okuma atölyesi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-600 bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center">
                <BookOpen className="text-primary-600" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Kitap Okuma Atölyesi</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Çocukların okuma sevgisini geliştiren, yaratıcı düşünme ve hayal gücünü destekleyen 
              eğlenceli ve öğretici atölye programı
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="text-primary-500" size={16} />
                <span>6-12 yaş</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary-500" size={16} />
                <span>Haftada 1 gün 1 saat</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-primary-500" size={16} />
                <span>Sanat & Gelişim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/kitap-okuma.jpg"
                  alt="Çocuklar kitap okuma atölyesinde"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-full shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Neden Kitap Okuma Atölyesi?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kitap okuma atölyemiz, çocukların sadece okuma becerilerini değil, aynı zamanda 
                hayal güçlerini, yaratıcılıklarını ve sosyal becerilerini geliştirmeyi hedefler. 
                Çocuklar bu atölyede kitapların büyülü dünyasını keşfeder, karakterlerle tanışır 
                ve kendi hikayelerini yaratır.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Küçük gruplar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Uzman eğitmenler</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Kişiselleştirilmiş yaklaşım</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Eğlenceli aktiviteler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Atölye Hedefleri</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kitap okuma atölyemizde çocukların gelişimini destekleyen kapsamlı hedefler belirliyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookMarked className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{objective}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Schedule */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content Items */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Atölye İçeriği</h2>
              <div className="space-y-4">
                {contentItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary-500 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule & Info */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Program Süresi</h4>
                    <p className="text-gray-600">Haftada 1 gün, 1 saat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hedef Kitle</h4>
                    <p className="text-gray-600">6-12 yaş arası çocuklar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kategori</h4>
                    <p className="text-gray-600">Sanat & Gelişim</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Hedef Kitle</h4>
                <div className="space-y-2">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600 text-sm">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Velilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kitap okuma atölyemizde çocuklarını geliştiren velilerimizin deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-primary-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Çocuğunuzun Okuma Yolculuğuna Başlayın</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Kitap okuma atölyemizde çocuğunuzun hayal gücünü geliştirin, okuma sevgisini artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0545 136 21 22"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hemen Ara: 0545 136 21 22
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
      </section>
    </>
  )
}
