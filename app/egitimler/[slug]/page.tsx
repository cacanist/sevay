import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, MapPin, User, ArrowLeft, CheckCircle, Phone, MessageCircle } from "lucide-react"
import { getWorkshopBySlug, getWorkshopSlugs } from "@/lib/workshops"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getWorkshopSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const w = getWorkshopBySlug(slug)
  return {
    title: w ? `${w.title} | SEV-AY Atölyeler` : "Atölye | SEV-AY",
    description: w?.intro,
    openGraph: {
      title: w ? `${w.title} | SEV-AY Atölyeler` : "Atölye | SEV-AY",
      description: w?.intro,
    },
  }
}

export default async function WorkshopDetailPage({ params }: Props) {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)
  if (!workshop) {
    return (
      <article className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Atölye bulunamadı</h1>
          <Link href="/egitimler" className="text-primary-500 hover:text-primary-600">/egitimler</Link>
        </div>
      </article>
    )
  }

  return (
    <article className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <Link href="/egitimler#atolyeler" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft size={20} className="mr-2" /> Atölyelere Dön
        </Link>

        <header className="mb-8">
          <div className="mb-4">
            {workshop.category ? (
              <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {workshop.category}
              </span>
            ) : null}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{workshop.title}</h1>
          {workshop.intro ? <p className="text-gray-600 text-lg">{workshop.intro}</p> : null}
        </header>

        {workshop.image ? (
          <div className="mb-8 rounded-2xl overflow-hidden shadow">
            <img src={workshop.image} alt={workshop.title} className="w-full h-auto object-cover" />
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center text-gray-700"><Clock size={18} className="mr-2" /> {workshop.schedule || workshop.duration}</div>
          <div className="flex items-center text-gray-700"><MapPin size={18} className="mr-2" /> {workshop.location}</div>
          <div className="flex items-center text-gray-700"><User size={18} className="mr-2" /> {workshop.ageGroup}</div>
        </div>

        {workshop.objectives?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Amaç ve Kazanımlar</h2>
            <ul className="space-y-2">
              {workshop.objectives.map((obj, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {workshop.targetAudience?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Hedef Kitle</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {workshop.targetAudience.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {workshop.contentItems?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Atölye İçeriği</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              {workshop.contentItems.map((c, i) => (
                <li key={i} className="flex items-start"><span className="mt-1 mr-2">•</span>{c}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Süre ve Program</h2>
          <p className="text-gray-700 flex items-center"><Calendar size={18} className="mr-2" /> {workshop.schedule || workshop.duration}</p>
          {workshop.location ? (
            <p className="text-gray-700 flex items-center mt-1"><MapPin size={18} className="mr-2" /> {workshop.location}</p>
          ) : null}
        </section>

        {workshop.instructor ? (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Eğitmen Hakkında</h2>
            <p className="text-gray-700">{workshop.instructor}</p>
          </section>
        ) : null}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Katılım Ücreti ve Kayıt</h2>
          <p className="text-gray-700">{workshop.feeInfo || "Ücret bilgisi için arayınız."}</p>
          <div className="flex flex-wrap gap-4 mt-3">
            {workshop.contactPhone ? (
              <a href={`tel:${workshop.contactPhone.replace(/\s/g, "")}`} className="inline-flex items-center btn-primary">
                <Phone size={18} className="mr-2" /> {workshop.contactPhone}
              </a>
            ) : null}
            {workshop.contactWhatsapp ? (
              <a
                href={`https://wa.me/${workshop.contactWhatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                <MessageCircle size={18} className="mr-2" /> WhatsApp: {workshop.contactWhatsapp}
              </a>
            ) : null}
          </div>
        </section>

        {workshop.testimonials?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Katılımcı Yorumları</h2>
            <div className="space-y-4">
              {workshop.testimonials.map((t, i) => (
                <blockquote key={i} className="p-4 bg-gray-50 rounded-xl border">
                  <p className="italic text-gray-700">“{t.quote}”</p>
                  {t.author ? <footer className="mt-2 text-sm text-gray-500">— {t.author}</footer> : null}
                </blockquote>
              ))}
            </div>
          </section>
        ) : null}

        {workshop.extraNotes?.length ? (
          <section className="mb-2">
            <h2 className="text-2xl font-semibold mb-2">Ek Bilgiler</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {workshop.extraNotes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  )
}


