import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Örnek blog yazısı - gerçek uygulamada veritabanından gelecek
const blogPost = {
  id: 1,
  title: "Çocuklarda Oyunun Önemi ve Gelişime Katkıları",
  content: `
    <p>Oyun, çocukların hayatında sadece eğlenceli bir aktivite değil, aynı zamanda öğrenme ve gelişimin en temel aracıdır. Çocuklar oyun oynarken aslında hayata hazırlanıyor, sosyal becerilerini geliştiriyor ve yaratıcılıklarını keşfediyorlar.</p>

    <h2>Oyunun Çocuk Gelişimine Katkıları</h2>

    <h3>1. Fiziksel Gelişim</h3>
    <p>Oyun, çocukların motor becerilerini geliştirmelerine yardımcı olur. Koşma, zıplama, top oynama gibi aktiviteler büyük kas gruplarını güçlendirirken, puzzle yapma, boyama gibi etkinlikler ince motor becerileri geliştirir.</p>

    <h3>2. Bilişsel Gelişim</h3>
    <p>Oyun sırasında çocuklar problem çözme becerileri kazanır, yaratıcılıklarını kullanır ve hayal güçlerini geliştirir. Özellikle rol yapma oyunları, çocukların farklı perspektifleri anlamalarına yardımcı olur.</p>

    <h3>3. Sosyal ve Duygusal Gelişim</h3>
    <p>Grup oyunları çocukların paylaşmayı, sıra beklemeyi ve işbirliği yapmayı öğrenmelerine yardımcı olur. Aynı zamanda duygularını ifade etmeyi ve yönetmeyi de öğrenirler.</p>

    <h2>Ebeveynlerin Rolü</h2>
    <p>Ebeveynler olarak çocuklarımızın oyun oynaması için güvenli ve uyarıcı ortamlar yaratmalıyız. Oyuncak seçiminde çocuğun yaşına ve gelişim düzeyine uygun seçimler yapmalı, çocukla birlikte oyun oynamalıyız.</p>

    <h2>SEV-AY'da Oyun Temelli Öğrenme</h2>
    <p>SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi olarak, oyun temelli öğrenmenin önemini biliyoruz. Atölyelerimizde çocuklar oyun oynayarak öğreniyor, gelişiyor ve keyifli vakit geçiriyorlar.</p>

    <p>14 farklı atölye programımızda çocuklar:</p>
    <ul>
      <li>Yaratıcı drama ile kendilerini ifade ediyorlar</li>
      <li>Satranç ile stratejik düşünme becerilerini geliştiriyorlar</li>
      <li>Lego ve zeka oyunları ile problem çözme yeteneklerini artırıyorlar</li>
      <li>Dans ve hareket atölyeleri ile fiziksel gelişimlerini destekliyorlar</li>
    </ul>

    <h2>Sonuç</h2>
    <p>Oyun, çocukların sağlıklı gelişimi için vazgeçilmezdir. Çocuklarımıza oyun oynama fırsatı tanıyarak, onların fiziksel, zihinsel, sosyal ve duygusal gelişimlerine katkıda bulunabiliriz.</p>
  `,
  author: "Sevtap Aydın",
  date: "2024-01-15",
  category: "Çocuk Gelişimi",
  slug: "cocuklarda-oyunun-onemi",
}

export const metadata: Metadata = {
  title: `${blogPost.title} | SEV-AY Blog`,
  description:
    "Oyun, çocukların fiziksel, zihinsel, sosyal ve duygusal gelişimlerinde kritik bir rol oynar. Bu yazımızda oyunun çocuk gelişimine katkılarını inceliyoruz.",
  openGraph: {
    title: `${blogPost.title} | SEV-AY Blog`,
    description: "Oyun, çocukların fiziksel, zihinsel, sosyal ve duygusal gelişimlerinde kritik bir rol oynar.",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Gerçek uygulamada slug'a göre blog yazısını veritabanından çekeceğiz
  if (params.slug !== blogPost.slug) {
    notFound()
  }

  return (
    <article className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Blog'a Dön
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">{blogPost.title}</h1>

          <div className="flex items-center text-gray-600 space-x-6">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{new Date(blogPost.date).toLocaleDateString("tr-TR")}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-orange-50 rounded-xl">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-orange-700">SA</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sevtap Aydın</h3>
              <p className="text-gray-600 text-sm">
                SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi kurucusu. Çocuk gelişimi ve eğitim alanında uzun yıllara
                dayanan deneyime sahip.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">İlgili Yazılar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/calisan-ebeveynler-zaman-yonetimi" className="card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Çalışan Ebeveynler İçin Zaman Yönetimi İpuçları
              </h4>
              <p className="text-gray-600 text-sm">
                İş ve aile yaşamı arasında denge kurmak için pratik stratejiler...
              </p>
            </Link>
            <Link href="/blog/cocuklarda-okuma-aliskanligi" className="card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Çocuklarda Okuma Alışkanlığı Nasıl Geliştirilir?
              </h4>
              <p className="text-gray-600 text-sm">Çocuğunuzda okuma sevgisi uyandırmak için etkili yöntemler...</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
