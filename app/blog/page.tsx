import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description: "Çocuk gelişimi, eğitim ve aile yaşamı hakkında uzman görüşleri ve faydalı bilgiler.",
  openGraph: {
    title: "Blog | SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description: "Çocuk gelişimi, eğitim ve aile yaşamı hakkında uzman görüşleri ve faydalı bilgiler.",
  },
}

// Örnek blog yazıları - gerçek uygulamada veritabanından gelecek
const blogPosts = [
  {
    id: 1,
    title: "Çocuklarda Oyunun Önemi ve Gelişime Katkıları",
    excerpt:
      "Oyun, çocukların fiziksel, zihinsel, sosyal ve duygusal gelişimlerinde kritik bir rol oynar. Bu yazımızda oyunun çocuk gelişimine katkılarını inceliyoruz.",
    author: "Sevtap Aydın",
    date: "2024-01-15",
    category: "Çocuk Gelişimi",
    slug: "cocuklarda-oyunun-onemi",
  },
  {
    id: 2,
    title: "Çalışan Ebeveynler İçin Zaman Yönetimi İpuçları",
    excerpt:
      "İş ve aile yaşamı arasında denge kurmak zor olabilir. Çalışan ebeveynler için pratik zaman yönetimi stratejileri.",
    author: "Sevtap Aydın",
    date: "2024-01-10",
    category: "Ebeveynlik",
    slug: "calisan-ebeveynler-zaman-yonetimi",
  },
  {
    id: 3,
    title: "Çocuklarda Okuma Alışkanlığı Nasıl Geliştirilir?",
    excerpt:
      "Kitap okuma alışkanlığı çocukluk döneminde kazanılır. Çocuğunuzda okuma sevgisi uyandırmak için etkili yöntemler.",
    author: "Sevtap Aydın",
    date: "2024-01-05",
    category: "Eğitim",
    slug: "cocuklarda-okuma-aliskanligi",
  },
  {
    id: 4,
    title: "Yaratıcı Drama ile Çocuklarda Özgüven Geliştirme",
    excerpt: "Yaratıcı drama etkinlikleri çocukların kendilerini ifade etmelerini sağlar ve özgüvenlerini artırır.",
    author: "Sevtap Aydın",
    date: "2023-12-28",
    category: "Sanat ve Yaratıcılık",
    slug: "yaratici-drama-ozguven",
  },
  {
    id: 5,
    title: "Teknoloji Çağında Çocuk Yetiştirme",
    excerpt: "Dijital çağda çocukları nasıl yetiştirmeli? Teknoloji kullanımında sınırlar ve fırsatlar.",
    author: "Sevtap Aydın",
    date: "2023-12-20",
    category: "Modern Ebeveynlik",
    slug: "teknoloji-caginda-cocuk-yetistirme",
  },
  {
    id: 6,
    title: "Çocuklarda Sosyal Beceri Geliştirme Yöntemleri",
    excerpt:
      "Sosyal becerilerin gelişimi çocuğun gelecekteki başarısı için kritiktir. Etkili sosyal beceri geliştirme stratejileri.",
    author: "Sevtap Aydın",
    date: "2023-12-15",
    category: "Sosyal Gelişim",
    slug: "sosyal-beceri-gelistirme",
  },
]

const categories = [
  "Tümü",
  "Çocuk Gelişimi",
  "Ebeveynlik",
  "Eğitim",
  "Sanat ve Yaratıcılık",
  "Modern Ebeveynlik",
  "Sosyal Gelişim",
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-100 to-honey-100 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Blog</h1>
          <p className="text-xl text-gray-600">
            Çocuk gelişimi, eğitim ve aile yaşamı hakkında uzman görüşleri ve faydalı bilgiler
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === "Tümü"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-muted hover:bg-primary-100 hover:text-primary-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  Devamını Oku
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Önceki
              </button>
              <button className="px-4 py-2 bg-honey-500 text-white rounded-lg">1</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Yazılarımızdan Haberdar Olun</h2>
          <p className="text-gray-600 mb-8">Çocuk gelişimi ve eğitim konularındaki en güncel yazılarımızı kaçırmayın</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-honey-500 focus:border-transparent"
            />
            <button className="btn-primary">Abone Ol</button>
          </div>
        </div>
      </section>
    </>
  )
}
