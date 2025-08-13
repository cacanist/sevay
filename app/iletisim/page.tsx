import type { Metadata } from "next"
import { Phone, MapPin, Instagram, Youtube, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "İletişim | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi ile iletişime geçin. Telefon, WhatsApp, adres ve sosyal medya bilgileri.",
  openGraph: {
    title: "İletişim | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi ile iletişime geçin. Telefon, WhatsApp, adres ve sosyal medya bilgileri.",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-100 to-honey-100 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">İletişim</h1>
          <p className="text-xl text-gray-600">
            Bizimle iletişime geçin, sorularınızı yanıtlayalım ve size yardımcı olalım
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefon</h3>
                    <p className="text-gray-600">0545 136 21 22</p>
                    <a href="tel:05451362122" className="text-primary-500 hover:text-primary-600 text-sm">
                      Hemen Ara
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+90 544 470 14 55</p>
                    <a
                      href="https://wa.me/905444701455"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 text-sm"
                    >
                      WhatsApp ile Mesaj Gönder
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Bahçelievler Mah., Turgut Reis Cad.,
                      <br />
                      Bozkurt Apt. No:23,
                      <br />
                      Muratpaşa / ANTALYA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cumartesi: 09:00 - 21:00
                      <br />
                      Pazar: 11:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/sevayegitimkariyerdanismanlik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-100 p-3 rounded-full hover:bg-primary-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-primary-500" size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@sevaykisiselgelisim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-100 p-3 rounded-full hover:bg-primary-200 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="text-primary-500" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Bize Mesaj Gönderin</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="atolye">Atölye Programları</option>
                    <option value="kocluk">Koçluk Hizmetleri</option>
                    <option value="seminer">Seminerler</option>
                    <option value="kayit">Kayıt İşlemleri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Konumumuz</h2>
            <p className="text-gray-600">Bahçelievler Mahallesi'nde, ulaşımı kolay bir konumda hizmet veriyoruz</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8234567890123!2d30.7234567!3d36.8876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUzJzE1LjYiTiAzMMKwNDMnMjQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ofisimizi Ziyaret Edin</h2>
          <p className="text-xl mb-8 opacity-90">
            Detaylı bilgi için, ofisimizde bir kahve ve çay içmek için sizi bekliyoruz...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905444701455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-honey-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              WhatsApp ile Randevu Al
            </a>
            <a
              href="tel:05451362122"
              className="border-2 border-white hover:bg-white hover:text-honey-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Telefon ile Ara
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
