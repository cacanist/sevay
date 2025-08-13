import Link from "next/link"
import { Phone, MapPin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-honey-300 mb-4">SEV-AY</h3>
            <p className="text-gray-300 mb-4">Eğitim ve Kariyer Danışmanlık Merkezi</p>
            <p className="text-gray-300 text-sm">
              Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekliyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-honey-300 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-honey-300 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/egitimler" className="text-gray-300 hover:text-honey-300 transition-colors">
                  Eğitimler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-honey-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-honey-300 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-honey-300" />
                <span className="text-gray-300">0545 136 21 22</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 text-honey-300 mt-1" />
                <span className="text-gray-300 text-sm">
                  Bahçelievler Mah., Turgut Reis Cad., Bozkurt Apt. No:23, Muratpaşa / ANTALYA
                </span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://instagram.com/sevayegitimkariyerdanismanlik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-honey-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@sevay-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-honey-300 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
