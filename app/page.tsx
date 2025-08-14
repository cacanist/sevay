import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Users, Heart, BookOpen, Award, ArrowRight, GraduationCap, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi | Ana Sayfa",
  description:
    "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları. Çalışan ebeveynler için özel destek programları.",
  openGraph: {
    title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description: "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları.",
  },
}

export default function HomePage() {
  const workshops = [
    {
      title: "Parfüm Yapım Atölyesi",
      image: "/parfume.jpg",
      category: "Bilim & Sanat",
      slug: "parfum-yapim-atolyesi",
    },
    {
      title: "İçsel Ritim Piyano Atölyesi",
      image: "/piano.JPG",
      category: "Müzik & Sanat",
      slug: "icsel-ritim-piyano-atolyesi",
    },
    {
      title: "Zaman Yönetimi ve Planlı Çalışma Atölyesi",
      image: "/odev-yapma.jpg",
      category: "Kişisel Gelişim",
      slug: "zaman-yonetimi-planli-calisma-atolyesi",
    },
    {
      title: "Kitap Okuma Atölyesi",
      image: "/kitap-okuma.jpg",
      category: "Sanat & Gelişim",
      slug: "kitap-okuma-atolyesi",
    },
    {
      title: "Temel İngilizce Oyun Atölyesi",
      image: "/english-learning-children.webp",
      category: "Dil Eğitimi",
    },
    {
      title: "Satranç Oyun Atölyesi",
      image: "/classroom-chess-game.webp",
      category: "Strateji Oyunları",
    },
    {
      title: "Lego & Zeka Oyunları",
      image: "/children-building-and-puzzles.webp",
      category: "Yaratıcılık",
    },
    {
      title: "Dans ve Hareket Atölyesi",
      image: "/colorful-dance-studio.webp",
      category: "Fiziksel Gelişim",
    },
    {
      title: "Robotik Kodlama Atölyesi",
      image: "/coding-kids.webp",
      category: "Teknoloji",
    },
    {
      title: "Yaratıcı Drama",
      image: "/children-creative-drama.webp",
      category: "Sanat",
    },
    {
      title: "Roman Yazımı Atölyesi",
      image: "/roman-yazim-atolyesi.webp",
      category: "Yazarlık",
    },
    {
      title: "Hitabet ve Diksiyon Çalışmaları",
      image: "/hitabet-atolyesi.webp",
      category: "İletişim",
    },
  ]

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

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SEV-AY Eğitim ve Kariyer
            <span className="text-honey-300"> Danışmanlık Merkezi</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Çocuklar için oyun temelli gelişim atölyeleri ve ailelere özel koçluk programlarıyla güvenli, kaliteli bir
            eğitim ortamı sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/egitimler" className="btn-accent">
              Atölye Programlarımız
              <ArrowRight className="ml-2 inline" size={20} />
            </Link>
            <Link
              href="/seminerler"
              className="bg-honey-300 text-white hover:bg-honey-400 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Profesyonel Seminerler
            </Link>
            <Link
              href="/iletisim"
              className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops Grid Section */}
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

      {/* Features Section */}
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
              <p className="text-gray-600">19 farklı atölye programı ile çocukların yeteneklerini keşfediyoruz.</p>
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
                  SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi, çalışan ebeveynlerin yaşadığı zorlukları yakından
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
              atölyeleri. Programımız, özellikle çalışan ebeveynlere yönelik olarak çocukların akademik, sosyal,
              fiziksel ve bilişsel gelişimlerini desteklemeyi amaçlamaktadır.
            </p>
            <p className="opacity-90">
              Siz iş yerlerinizde çalışırken, çocuklarınıza kaliteli ve verimli zaman sunmak bizim için büyük bir önem
              taşıyor.
            </p>
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Çocuğunuzun Gelişimi İçin Hemen Başlayın</h2>
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
