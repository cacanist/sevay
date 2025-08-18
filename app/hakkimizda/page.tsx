import type { Metadata } from "next"
import { Target, Eye, Heart, Award, Users, BookOpen, Shield, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hakkımızda | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi'nin hikayesi, vizyonu ve kurucusu Sevtap Aydın hakkında bilgi edinin.",
  openGraph: {
    title: "Hakkımızda | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi'nin hikayesi, vizyonu ve kurucusu Sevtap Aydın hakkında bilgi edinin.",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image (optimized) */}
        <div className="absolute inset-0">
          <Image
            src="/about-us-education-center.webp"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hakkımızda</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi olarak, çocukların gelişimine katkı sağlamak ve ailelere destek
            olmak için buradayız.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                  Misyonumuz
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Çalışan ebeveynler ve çocuğuna verimli vakit ayıramayan ebeveynler için çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini desteklemek ve kaliteli, güvenilir bir destek sistemi sunmak. Her çocuğun potansiyelini keşfetmesine yardımcı olmak ve aileler için huzurlu bir ortam yaratmak.
              </p>
            </div>

            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-honey-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-honey-400 to-honey-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-honey-600 transition-colors duration-300">
                  Vizyonumuz
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Türkiye'de çocuk gelişimi ve aile desteği alanında öncü bir kurum olmak. Her çocuğun ilgiyle büyüdüğü,
                her ebeveynin çocuğunu güvende bildiği bir toplum yaratmaya katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-honey-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              SEV-AY olarak, çalışmalarımızda bizi yönlendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  Sevgi ve Güven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Her çocuğa sevgiyle yaklaşır, güvenli bir ortam sağlarız. Çocukların kendilerini değerli hissetmeleri
                  için sıcak ve destekleyici bir atmosfer yaratırız.
                </p>
              </div>
            </div>

            <div className="group text-center">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-honey-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-honey-600 transition-colors duration-300">
                  Kalite ve Profesyonellik
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Uzman kadromuzla en yüksek kalitede hizmet sunarız. Sürekli gelişim ve eğitimle kendimizi yeniliyoruz.
                </p>
              </div>
            </div>

            <div className="group text-center">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                  Bireysel Yaklaşım
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Her çocuğun benzersizliğini kabul eder, kişisel gelişimini destekleriz. Bireysel ihtiyaçlara özel
                  çözümler üretiriz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-100 to-honey-100 rounded-3xl p-12 text-center shadow-lg">
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-full mx-auto shadow-2xl overflow-hidden">
                   <img src="/sevtap-aydin.webp" alt="Sevtap Aydın" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-honey-300 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3">Sevtap Aydın</h3>
                <p className="text-honey-600 font-semibold text-lg mb-4">Kurucu & Eğitim Koordinatörü</p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <BookOpen className="text-primary-500" size={20} />
                  </div>
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Users className="text-honey-500" size={20} />
                  </div>
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Heart className="text-red-500" size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Kurucumuz Sevtap Aydın</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Ailelerin çocuklarının gerçek potansiyellerini keşfetmeleri, yoğun iş temposu ve hayat meşgaleleri içerisinde çocuklarına verimli vakit ayırabilme zorluklarını fark eden Sevtap Aydın, çocuk gelişimi ve koçluk alanlarında uzun yıllara dayanan deneyime sahiptir.
                </p>
                <p>
                  Çalışan ebeveynlerin yaşadığı zorlukları yakından gözlemleyen Sevtap Hanım, çocukların kaliteli zaman
                  geçirebileceği ve gelişimlerini destekleyecek bir merkez kurma hayalini gerçekleştirmiştir.
                </p>
                <div className="bg-primary-50 p-6 rounded-2xl border-l-4 border-primary-500">
                  <p className="italic text-primary-700 font-medium text-xl">
                    "Her çocuk ilgiyle büyümeli, her ebeveyn çocuğunu güvende bilmenin huzurunu yaşamalı"
                  </p>
                  <p className="text-sm text-primary-600 mt-2">- Sevtap Aydın</p>
                </div>
                <p>
                  Bu felsefe ile hareket eden Sevtap Aydın, SEV-AY'ı bu değerler üzerine inşa etmiş ve her gün bu
                  vizyonla çalışmaya devam etmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Neden SEV-AY'ı Tercih Etmelisiniz?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Çocuğunuzun gelişimi için en iyi seçimi yapmanızda size yardımcı olacak özelliklerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    Çalışan Ebeveynlerin Yükünü Hafifletiyoruz
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Siz iş yerlerinizde çalışırken, çocuklarınıza kaliteli ve verimli zaman sunmak bizim için büyük bir
                    önem taşıyor. Güvenli ortamımızda çocuğunuz hem öğreniyor hem eğleniyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    Oyun Temelli Öğrenme
                  </h3>
                <p className="text-gray-600 leading-relaxed">
                    Eğlenceli ve öğretici atölyeler, sanat ve bilim etkinlikleri ile çocuklar hem öğreniyor hem de
                    keyifli vakit geçiriyor. 17 farklı atölye programımızla çeşitlilik sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Uzman Kadro
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alanında uzman koçlar ve eğitmenler tarafından sunulan profesyonel hizmet ile çocuğunuzun gelişimini
                    destekliyoruz. Sürekli eğitim alan kadromuzla kaliteyi garanti ediyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    Güvenli ve Sıcak Ortam
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Çocuğunuz güvende ve mutlu bir ortamda, sosyal ve duygusal gelişimini destekleyecek aktivitelerle
                    vakit geçiriyor. Aile sıcaklığında bir atmosfer sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-honey-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Rakamlarla SEV-AY</h2>
            <p className="text-xl opacity-90">Başarılarımızı rakamlarla görmek istiyorsanız</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">21</div>
                <div className="text-lg opacity-90">Farklı Atölye</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">16</div>
                <div className="text-lg opacity-90">Koçluk Alanı</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Mutlu Aile</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-50 to-honey-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Bizi Daha Yakından Tanıyın</h2>
            <p className="text-xl text-gray-600 mb-8">
              Detaylı bilgi için ofisimizde bir kahve ve çay içmek için sizi bekliyoruz. SEV-AY ailesine katılın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ofisimizi Ziyaret Edin
              </a>
              <a
                href="https://wa.me/905444701455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-primary-500 border-2 border-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
