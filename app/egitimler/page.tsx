import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Users, Award, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Eğitim Programları | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "14 farklı atölye programı, koçluk hizmetleri ve seminerler. Çocukların gelişimini destekleyen kapsamlı eğitim programları.",
  openGraph: {
    title: "Eğitim Programları | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "14 farklı atölye programı, koçluk hizmetleri ve seminerler. Çocukların gelişimini destekleyen kapsamlı eğitim programları.",
  },
}

export default function EducationPage() {
  const workshops = [
    {
      id: 1,
      title: "Temel İngilizce İçerikli Oyun Atölyesi",
      description: "Oyun temelli öğrenme ile İngilizce kelime dağarcığını geliştiren eğlenceli atölye",
      image: "/english-learning-children.png",
      category: "Dil Eğitimi",
      ageGroup: "6-12 yaş",
      duration: "45 dakika",
      slug: "temel-ingilizce-oyun-atolyesi",
    },
    {
      id: 2,
      title: "Satranç Oyun Atölyesi",
      description: "Stratejik düşünme ve problem çözme becerilerini geliştiren satranç eğitimi",
      image: "/classroom-chess-game.png",
      category: "Strateji Oyunları",
      ageGroup: "7-14 yaş",
      duration: "60 dakika",
      slug: "satranc-oyun-atolyesi",
    },
    {
      id: 3,
      title: "Lego & Zeka Akıl Oyunları Atölyesi",
      description: "Yaratıcılık ve mühendislik becilerini geliştiren yapı oyunları",
      image: "/children-building-and-puzzles.png",
      category: "Yaratıcılık",
      ageGroup: "5-12 yaş",
      duration: "50 dakika",
      slug: "lego-zeka-oyunlari-atolyesi",
    },
    {
      id: 4,
      title: "Dans ve Hareket İçerikli Oyun Atölyesi",
      description: "Fiziksel gelişim ve koordinasyonu destekleyen dans aktiviteleri",
      image: "/colorful-dance-studio.png",
      category: "Fiziksel Gelişim",
      ageGroup: "4-10 yaş",
      duration: "45 dakika",
      slug: "dans-hareket-oyun-atolyesi",
    },
    {
      id: 5,
      title: "Aerobik ve Hareket İçerikli Oyun Atölyesi",
      description: "Enerji dolu aktivitelerle fiziksel kondisyonu artıran program",
      image: "/children-sports-activities.png",
      category: "Fiziksel Gelişim",
      ageGroup: "6-12 yaş",
      duration: "40 dakika",
      slug: "aerobik-hareket-oyun-atolyesi",
    },
    {
      id: 6,
      title: "Ödev Yapmaya Teşvik ve Motivasyon Atölyesi",
      description: "Ödev yapma alışkanlığı kazandıran motivasyon teknikleri",
      image: "/homework-motivation-kids.png",
      category: "Eğitim Desteği",
      ageGroup: "7-14 yaş",
      duration: "45 dakika",
      slug: "odev-motivasyon-atolyesi",
    },
    {
      id: 7,
      title: "Zaman Yönetimi ve Planlı Ders Çalışma Atölyesi",
      description: "Öğrenci koçu ile etkili çalışma teknikleri ve zaman yönetimi",
      image: "/study-planning-kids.png",
      category: "Öğrenci Koçluğu",
      ageGroup: "8-16 yaş",
      duration: "60 dakika",
      slug: "zaman-yonetimi-ders-calisma-atolyesi",
    },
    {
      id: 8,
      title: "Temel Resim Boyama İçerikli Oyun Atölyesi",
      description: "Sanatsal yaratıcılığı geliştiren resim ve boyama teknikleri",
      image: "/colorful-children-art.png",
      category: "Sanat",
      ageGroup: "4-12 yaş",
      duration: "50 dakika",
      slug: "temel-resim-boyama-atolyesi",
    },
    {
      id: 9,
      title: "Sokak Oyunları Atölyesi",
      description: "Geleneksel oyunlarla sosyal etkileşim ve fiziksel aktivite",
      image: "/traditional-street-games.png",
      category: "Sosyal Gelişim",
      ageGroup: "5-12 yaş",
      duration: "45 dakika",
      slug: "sokak-oyunlari-atolyesi",
    },
    {
      id: 10,
      title: "Yaratıcı Drama",
      description: "Kendini ifade etme ve özgüven geliştirme drama aktiviteleri",
      image: "/children-creative-drama.png",
      category: "Sanat",
      ageGroup: "6-14 yaş",
      duration: "55 dakika",
      slug: "yaratici-drama-atolyesi",
    },
    {
      id: 11,
      title: "Kitap Okuma Alışkanlığı Atölyesi",
      description: "Okuma sevgisi kazandıran interaktif kitap okuma saatleri",
      image: "/children-reading-books.png",
      category: "Eğitim",
      ageGroup: "5-12 yaş",
      duration: "40 dakika",
      slug: "kitap-okuma-aliskanligi-atolyesi",
    },
    {
      id: 12,
      title: "Robotik Kodlama İçerikli Oyun Atölyesi",
      description: "Teknoloji ve programlama mantığını öğreten robotik aktiviteler",
      image: "/coding-kids.png",
      category: "Teknoloji",
      ageGroup: "8-14 yaş",
      duration: "60 dakika",
      slug: "robotik-kodlama-oyun-atolyesi",
    },
    {
      id: 13,
      title: "Orff Müzik Atölyesi",
      description: "Müzik aletleri ile ritim ve melodi öğrenme aktiviteleri",
      image: "/orff-music-class.png",
      category: "Müzik",
      ageGroup: "4-10 yaş",
      duration: "45 dakika",
      slug: "orff-muzik-atolyesi",
    },
    {
      id: 14,
      title: "Oyunlarla Temel Almanca Oyun Atölyesi",
      description: "Eğlenceli aktivitelerle Almanca kelime ve ifade öğrenme",
      image: "/german-learning-kids.png",
      category: "Dil Eğitimi",
      ageGroup: "7-12 yaş",
      duration: "45 dakika",
      slug: "temel-almanca-oyun-atolyesi",
    },
  ]

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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/children-learning-activities.png')`,
          }}
        >
          <div className="absolute inset-0 bg-primary-500 bg-opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Eğitim Programlarımız</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen kapsamlı eğitim programları ve
            koçluk hizmetleri
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEV-AY'da Eğitimi Destekleyici Oyun ve Hobby & Gelişim Programı
            </h2>
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
              <h3 className="text-xl font-semibold mb-2">14 Farklı Atölye</h3>
              <p className="text-gray-600">
                Çocukların farklı yeteneklerini keşfedebileceği çeşitli atölye programları
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzman Koçluk</h3>
              <p className="text-gray-600">14 farklı alanda profesyonel koçluk hizmetleri</p>
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

      {/* Workshops Grid Section */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Atölye Programlarımız</h2>
            <p className="text-gray-600">Çocukların farklı yeteneklerini keşfedebileceği 14 farklı atölye programı</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Link
                key={workshop.id}
                href={`/egitimler/${workshop.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-honey-300 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {workshop.category}
                    </span>
                  </div>

                  {/* Age Group Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {workshop.ageGroup}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {workshop.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{workshop.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center text-primary-500 group-hover:text-primary-600 font-medium">
                      <span>Detayları Gör</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-honey-100 p-3 rounded-2xl mr-4">
                <Clock className="text-honey-600" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Atölye Katılımı Nasıl Olur?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <CheckCircle className="text-green-600" size={16} />
                </div>
                <p className="text-gray-600">Katılımcılar, atölye kayıt formu doldurur ve gün/saat belirtir</p>
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
      </section>

      {/* Coaching Services */}
      <section className="section-padding bg-white">
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
                  Bilinçaltı Uzmanı ile Mindfulness
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
              <p className="text-gray-600 text-sm">Enerji çalışması ve bilinç dönüşümü teknikleri</p>
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

      {/* Seminars Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Seminerlerimiz</h2>
            <p className="text-gray-600">
              Farklı sektörlerden talepler üzerine, her yaş grubuna yönelik kişisel gelişim seminerleri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Seminer İçerikleri</h3>
              <p className="text-gray-600 mb-4">
                Seminer içerikleri, bireyin yaşamını pozitif bir döngüde sürdürebilmesi için kapsamlı şekilde
                hazırlanır.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-gray-600">Her yaş grubuna uygun içerik</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-gray-600">Sektörel ihtiyaçlara özel</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-gray-600">Pozitif yaşam döngüsü odaklı</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detaylı Bilgi</h3>
              <p className="text-gray-600 mb-6">
                Kişisel gelişim seminerlerimiz hakkında detaylı bilgi ve güncel planlama için SEV-AY ofisini ziyaret
                edebilirsiniz.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  <strong>Not:</strong> Bu hizmetlerimiz yaz tatili sürecinde de geçerli olacak...
                </p>
                <p className="text-sm text-gray-500">Güncel içeriklere Instagram sayfamızdan ulaşabilirsiniz.</p>
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
