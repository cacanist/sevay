import type { Metadata } from "next"
import Image from "next/image"
import { Flower, Users, Award, CheckCircle, Palette, Heart, Star, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Parfüm Yapım Atölyesi | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "Çocukların yaratıcılığını geliştiren, doğal malzemelerle kendi parfümlerini yapmayı öğreten eğlenceli ve öğretici atölye.",
  openGraph: {
    title: "Parfüm Yapım Atölyesi | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "Çocukların yaratıcılığını geliştiren, doğal malzemelerle kendi parfümlerini yapmayı öğreten eğlenceli ve öğretici atölye.",
  },
}

export default function ParfumYapimAtolyesiPage() {
  const objectives = [
    "Yaratıcılığı ve hayal gücünü geliştirmek",
    "Doğal malzemeleri tanıma ve kullanma",
    "Koku duyusunu geliştirmek",
    "El becerilerini ve koordinasyonu artırmak",
    "Kimyasal reaksiyonları öğrenmek",
    "Kendi ürününü yaratma deneyimi"
  ]

  const contentItems = [
    "Doğal esansiyel yağları tanıma",
    "Koku ailelerini öğrenme",
    "Parfüm notaları ve yapısı",
    "Malzeme ölçümü ve karıştırma",
    "Kendi parfüm formülünü oluşturma",
    "Etiket tasarımı ve ambalajlama",
    "Kalite kontrol ve test etme",
    "Güvenlik kuralları ve hijyen"
  ]

  const targetAudience = [
    "8-16 yaş arası çocuklar",
    "Yaratıcılığını geliştirmek isteyenler",
    "Doğal ürünler yapmayı öğrenmek isteyenler",
    "Kimyaya ilgi duyanlar"
  ]

  const testimonials = [
    {
      quote: "Çocuğum kendi parfümünü yapmayı çok sevdi. Artık her gün farklı kokular deniyor.",
      author: "Merve K."
    },
    {
      quote: "Bu atölye çocuğumun yaratıcılığını çok geliştirdi. Kendi ürününü yapmak çok gurur verici.",
      author: "Can D."
    },
    {
      quote: "Parfüm yapım atölyesi çocuğumun el becerilerini ve koku duyusunu geliştirdi.",
      author: "Zeynep L."
    }
  ]

  const benefits = [
    {
      icon: Flower,
      title: "Yaratıcılık",
      description: "Kendi benzersiz parfümünü tasarlama"
    },
    {
      icon: Heart,
      title: "Doğal Ürünler",
      description: "Doğal malzemelerle güvenli üretim"
    },
    {
      icon: Palette,
      title: "El Becerileri",
      description: "İnce motor becerilerini geliştirme"
    },
    {
      icon: Sparkles,
      title: "Bilimsel Merak",
      description: "Kimyasal reaksiyonları öğrenme"
    }
  ]

  const materials = [
    "Doğal esansiyel yağlar",
    "Alkol bazlı çözücüler",
    "Cam şişeler ve damlalıklar",
    "Ölçüm kapları ve pipetler",
    "Karıştırma çubukları",
    "Etiketler ve ambalaj malzemeleri"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/parfume.jpg"
            alt="Çocuklar parfüm yapım atölyesinde doğal malzemelerle çalışıyor"
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
                <Flower className="text-primary-600" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Parfüm Yapım Atölyesi</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Çocukların yaratıcılığını geliştiren, doğal malzemelerle kendi parfümlerini yapmayı 
              öğreten eğlenceli ve öğretici kimyasal sanat atölyesi
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="text-primary-500" size={16} />
                <span>8-16 yaş</span>
              </div>
              <div className="flex items-center gap-2">
                <Flower className="text-primary-500" size={16} />
                <span>Haftada 1 gün 1 saat</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-primary-500" size={16} />
                <span>Bilim & Sanat</span>
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
                  src="/parfume.jpg"
                  alt="Çocuklar parfüm yapım atölyesinde"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Neden Parfüm Yapım Atölyesi?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Parfüm yapım atölyemiz, çocukların hem yaratıcılıklarını hem de bilimsel meraklarını 
                geliştiren benzersiz bir deneyim sunar. Doğal malzemelerle çalışarak kendi parfümlerini 
                yaratan çocuklar, kimyasal reaksiyonları öğrenir ve el becerilerini geliştirir.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Doğal malzemeler</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Güvenli ortam</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Uzman eğitmenler</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Kendi ürününü yaratma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Atölyenin Faydaları</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Parfüm yapım atölyemiz çocukların gelişimine nasıl katkı sağlar?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Atölye Hedefleri</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Parfüm yapım atölyemizde çocukların gelişimini destekleyen kapsamlı hedefler belirliyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{objective}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kullanılan Malzemeler</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Atölyemizde kullanılan doğal ve güvenli malzemeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{material}</h3>
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
            <div className="bg-primary-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Flower className="text-primary-600" size={24} />
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
                    <p className="text-gray-600">8-16 yaş arası çocuklar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kategori</h4>
                    <p className="text-gray-600">Bilim & Sanat</p>
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
              Parfüm yapım atölyemizde çocuklarını geliştiren velilerimizin deneyimleri
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
          <h2 className="text-3xl font-bold text-white mb-6">Çocuğunuzun Yaratıcılığını Keşfedin</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Parfüm yapım atölyemizde çocuğunuzun kendi benzersiz ürününü yaratmasını sağlayın
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
