export type WorkshopDetail = {
  id: number
  title: string
  slug: string
  image?: string
  category?: string
  ageGroup?: string
  duration?: string
  intro?: string
  objectives?: string[]
  targetAudience?: string[]
  contentItems?: string[]
  schedule?: string
  location?: string
  instructor?: string
  feeInfo?: string
  contactPhone?: string
  contactWhatsapp?: string
  testimonials?: { quote: string; author?: string }[]
  extraNotes?: string[]
}

export const workshops: WorkshopDetail[] = [
  {
    id: 23,
    title: "Parfüm Yapım Atölyesi",
    slug: "parfum-yapim-atolyesi",
    image: "/parfume.jpg",
    category: "Bilim & Sanat",

    duration: "Haftada 1 gün 1 saat",
    intro: "Kendi karakterinizi yansıtan, kişisel bir parfüm yaratmanızı sağlamak",
    objectives: [
      "Koku duyusunu ve yaratıcılığı geliştirmek",
      "Farklı esanslar ve notalar hakkında bilgi vermek",
      "Katılımcılara parfüm yapımının temellerini öğretmek",
      "Kendi ürününü yaratma deneyimi"
    ],
    targetAudience: [
      "Parfüm meraklıları",
      "Yeni bir hobi veya deneyim arayanlar",
      "Etkinliklere, atölye çalışmalarına katılmaktan hoşlananlar",
      "Kendi imza kokusunu oluşturmak isteyen kadınlar ve erkekler"
    ],
    contentItems: [
      "Parfüm tarihine kısa bir giriş",
      "Koku notaları (üst, orta, alt) hakkında bilgi",
      "Esansiyel yağlar ve aromaların tanıtımı",
      "Parfüm formülü oluşturma teknikleri",
      " Kendi parfümünüzü tasarlama ve şişeleme çalışması",
    ],
    schedule: "Haftada 1 gün 2 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Koku tasarımı ve aromaterapi alanında deneyimli eğitmenlerimiz hem teorik hem de uygulamalı bilgilerle size rehberlik edecek.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
 
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilmektedir",
      "Junior Parfümör Sertifikası (Parfüm Tasarımı Eğitimi Belgesi, uluslararası geçerliliği var.)",
      "Burun Değerlendirme Raporu (kişiye özel)",
      "Tasarımı tamamlanan kişisel parfüm şişesi",
      "Kaan Demirdöven imzalı Referans Mektubu",
      "1 ay boyunca 7/24 soru-cevap ve danışmanlık desteği",
      "Atölye sonunda kendi tasarladığınız parfümü yanınızda götürebilirsiniz",
      "Kontenjanımız sınırlıdır."
    ],
  },
  {
    id: 21,
    title: "Zaman Yönetimi ve Planlı Ders Çalışma Teknikleri İçerikli Oyun Atölyesi",
    slug: "zaman-yonetimi-planli-calisma-atolyesi",
    image: "/odev-yapma.jpg",
    category: "Kişisel Gelişim",
    ageGroup: "8-15",
    duration: "Haftada 1 gün 1 saat",
    intro: "Çocukların zaman yönetimi becerilerini geliştiren, planlı çalışma alışkanlığı kazandıran ve akademik başarıyı artıran atölye.",
    objectives: [
      "Zaman yönetimi becerilerini geliştirmek",
      "Planlı çalışma alışkanlığı kazandırmak",
      "Öncelik belirleme ve hedef koyma",
      "Konsantrasyon süresini uzatmak",
      "Ödev ve proje planlaması yapmak",
      "Stres yönetimi ve motivasyon"
    ],
    targetAudience: [
      "8-15 yaş arası öğrenciler",
      "Zaman yönetimi becerisi geliştirmek isteyenler",
      "Planlı çalışma alışkanlığı kazanmak isteyenler",
      "Akademik başarıyı artırmak isteyenler"
    ],
    contentItems: [
      "Zaman yönetimi teknikleri ve araçları",
      "Günlük, haftalık ve aylık planlama",
      "Öncelik belirleme matrisi oluşturma",
      "Çalışma programı hazırlama",
      "Hedef belirleme ve takip sistemi",
      "Konsantrasyon artırma teknikleri",
      "Ödev ve proje organizasyonu",
      "Motivasyon ve ödül sistemleri"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Alanında uzman, pedagojik formasyona sahip eğitmenlerimiz çocukların organizasyon becerilerini geliştirir.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
  
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Kişiselleştirilmiş çalışma planları hazırlanır.",
      "Kontenjan sınırlıdır.",
      "Veliler için bilgilendirme toplantıları yapılır.",
      "Sürekli takip ve değerlendirme yapılır."
    ],
  },

  {
    id: 10,
    title: "Yaratıcı Drama",
    slug: "yaratici-drama-atolyesi",
    image: "/children-creative-drama.webp",
    category: "Sanat",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Yaratıcılığınızı geliştirin, ifade ve iletişim becerilerinizi güçlendirin.",
    objectives: [
      "Yaratıcılığı geliştirmek",
      "İletişim ve ifade becerilerini güçlendirmek",
      "Özgüveni artırmak",
      "Grup çalışması, empati ve iş birliği yeteneklerini pekiştirmek",
    ],
    targetAudience: [
      "6 yaş ve üzeri çocuklar",
      "Gençler ve yetişkinler",
      "Kendini ifade etme becerilerini ve sosyal iletişimini güçlendirmek isteyen herkes",
    ],
    contentItems: [
      "Isınma ve tanışma oyunları",
      "Rol oynama çalışmaları",
      "Hikâye canlandırma teknikleri",
      "Doğaçlama ve beden dili çalışmaları",
      "Grup oyunları ve yaratıcı problem çözme etkinlikleri",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Alanında uzman, pedagojik formasyona sahip yaratıcı drama liderlerimiz keyifli bir deneyim sunar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    testimonials: [
      {
        quote:
          "Çocuğum drama sayesinde hem daha özgüvenli oldu hem de arkadaşlarıyla daha rahat iletişim kuruyor.",
        author: "Ayşe İ.",
      },
      { quote: "Yaratıcılığımı yeniden keşfettim. Eğlenceli ve öğretici bir deneyimdi.", author: "Ali C." },
    ],
    extraNotes: [
      "3 aylık atölyeye katılım sağlanması halinde katılım belgesi verilir.",
      "Rahat kıyafet ve spor ayakkabı ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  {
    id: 1,
    title: "Temel İngilizce Oyun Atölyesi",
    slug: "temel-ingilizce-oyun-atolyesi",
    image: "/english-learning-children.webp",
    category: "Dil Eğitimi",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "İngilizceyi eğlenerek öğren; sahnede ve iletişimde özgüven kazan!",
    objectives: [
      "İngilizce kelime dağarcığını ve telaffuzu geliştirmek",
      "İletişim ve ifade becerilerini güçlendirmek",
      "Yaratıcılığı ortaya çıkarmak",
      "Özgüven kazanmak",
      "Grup çalışması, empati ve iş birliği yeteneklerini pekiştirmek",
    ],
    targetAudience: [
      "6 yaş ve üzeri çocuklar",
      "Gençler ve yetişkinler",
      "Günlük yaşamda temel İngilizce terimleri hakim olmak ve kendini daha rahat ifade etmek isteyenler",
    ],
    contentItems: [
      "İngilizce tanışma ve ısınma oyunları",
      "Rol oynama ve canlandırma çalışmaları",
      "Hikâye anlatma ve canlandırma",
      "Doğaçlama, beden dili ve telaffuz çalışmaları",
      "Grup oyunları ve İngilizce problem çözme etkinlikleri",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Pedagojik formasyonlu eğitmenlerimiz, yaratıcı drama ve yabancı dil tecrübesiyle öğrenmeyi kalıcı kılar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",

    extraNotes: [
      "3 aylık atölyeye katılım sağlanması halinde katılım belgesi verilir.",
      "Rahat kıyafet ile gelinmesi tavsiye edilir.",
      "Etkinlik malzemeleri eğitmen tavsiyesi ile temin edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, İngilizce konuşma sahnesi sizin olsun!"
    ],
  },
  {
    id: 2,
    title: "Satranç Oyun Atölyesi",
    slug: "satranc-oyun-atolyesi",
    image: "/classroom-chess-game.webp",
    category: "Strateji Oyunları",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Zekânı geliştir, stratejini kur, hamleni yap!",
    objectives: [
      "Stratejik düşünme ve problem çözme becerilerini geliştirmek",
      "Konsantrasyon ve dikkat süresini artırmak",
      "Sabır, planlama ve mantıksal düşünmeyi pekiştirmek",
      "Karar verme ve öngörü yeteneğini güçlendirmek",
      "Sportif rekabet ve centilmenlik ruhunu kazanmak",
    ],
    targetAudience: ["6 yaş ve üzeri çocuklar", "Gençler ve yetişkinler", "Başlangıç ve orta seviye herkes"],
    contentItems: [
      "Taşların tanıtımı ve hareketleri",
      "Açılış stratejileri",
      "Oyun ortası taktikleri",
      "Mat etme teknikleri",
      "Pratik oyunlar ve turnuva simülasyonları",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Turnuva dereceli eğitmenlerimiz teoriyi pratikle birleştirerek keyifli bir süreç sunar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
  
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, ilk hamleyi siz yapın!"
    ],
  },
  {
    id: 3,
    title: "Lego & Zeka Akıl Oyunları Atölyesi",
    slug: "lego-zeka-oyunlari-atolyesi",
    image: "/children-building-and-puzzles.webp",
    category: "Yaratıcılık",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Hayal et, tasarla, çöz ve üret!",
    objectives: [
      "Yaratıcılık ve tasarım becerilerini geliştirmek",
      "Problem çözme ve mantıksal düşünmeyi artırmak",
      "İnce motor becerilerini güçlendirmek",
      "Sabır, odaklanma ve planlı çalışmayı pekiştirmek",
      "İş birliği ve paylaşma kültürünü desteklemek",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Zekâ oyunlarına ilgi duyan herkes"],
    contentItems: [
      "Serbest ve temalı Lego tasarımları",
      "Zekâ oyunları ve strateji bulmacaları",
      "Takım halinde yaratıcı görevler",
      "Mantık, hafıza ve dikkat oyunları",
      "Problem çözme atölyeleri ve mini yarışmalar",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Deneyimli eğitmenlerimiz eğlenceyi, yaratıcılığı ve gelişimi bir araya getirir.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",

    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, yaratıcılığınızı ortaya çıkarın!"
    ],
  },
  {
    id: 4,
    title: "Dans ve Hareket İçerikli Oyun Atölyesi",
    slug: "dans-hareket-oyun-atolyesi",
    image: "/colorful-dance-studio.webp",
    category: "Fiziksel Gelişim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Ritmini yakala, enerjini keşfet, özgürce hareket et!",
    objectives: [
      "Beden farkındalığı ve koordinasyonu geliştirmek",
      "Ritim duygusunu ve müzikle uyumu artırmak",
      "Özgüveni güçlendirmek",
      "Enerjiyi doğru kullanma ve beden kontrolünü sağlamak",
      "Grup çalışması ve sosyal iletişimi pekiştirmek",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Dans ve hareketi seven herkes"],
    contentItems: [
      "Isınma ve ritim çalışmaları",
      "Temel dans adımları ve koreografi oyunları",
      "Yaratıcı hareket çalışmaları",
      "Grup uyumu ve senkron oyunları",
      "Serbest dans ve doğaçlama",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Deneyimli dans ve hareket eğitmenlerimiz enerjik bir öğrenme deneyimi sunar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, ritim sizinle olsun!"
    ],
  },
  {
    id: 5,
    title: "Aerobik ve Hareket İçerikli Oyun Atölyesi",
    slug: "aerobik-hareket-oyun-atolyesi",
    image: "/children-sports-activities.webp",
    category: "Fiziksel Gelişim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Enerjini açığa çıkar, hareket et, güçlen!",
    objectives: [
      "Fiziksel kondisyonu artırmak",
      "Esneklik, koordinasyon ve dengeyi geliştirmek",
      "Kalp-damar sağlığını desteklemek",
      "Dayanıklılık ve beden kontrolünü güçlendirmek",
      "Sosyal iletişim ve eğlenceli rekabeti pekiştirmek",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Formda kalmak isteyen herkes"],
    contentItems: [
      "Isınma ve temel aerobik hareketler",
      "Müzik eşliğinde tempo çalışmaları",
      "Dayanıklılık ve güç oyunları",
      "Koordinasyon ve denge aktiviteleri",
      "Serbest hareket ve takım oyunları",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Uzman eğitmenlerimiz motive edici ve güvenli bir ortam sağlar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, enerjini harekete dönüştür!"
    ],
  },

  {
    id: 8,
    title: "Temel Resim Boyama İçerikli Oyun Atölyesi",
    slug: "temel-resim-boyama-atolyesi",
    image: "/colorful-children-art.webp",
    category: "Sanat",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Renkleri keşfet, hayal gücünü tuvale yansıt!",
    objectives: [
      "Yaratıcılık ve estetik bakış açısını geliştirmek",
      "Renk bilgisi ve boyama tekniklerini öğrenmek",
      "El-göz koordinasyonu ve ince motor becerilerini güçlendirmek",
      "Sabır, odaklanma ve özgüveni pekiştirmek",
      "Sanatsal ifade becerisini artırmak",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Sanata ilgi duyan herkes"],
    contentItems: [
      "Temel çizim teknikleri",
      "Farklı boyama yöntemleri",
      "Renk karışımları ve ton çalışmaları",
      "Yaratıcı resim oyunları",
      "Grup etkinlikleri ve serbest boyama",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Uzman sanat eğitmenlerimiz teknik bilgiyi yaratıcılıkla birleştirir.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Boya, fırça ve gerekli malzemeler eğitmen tavsiyesi üzerine katılımcı ya da atölye yöneticileri tarafından temin edilecektir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, fırçanız hayal gücünüzü anlatsın!"
    ],
  },
  {
    id: 9,
    title: "Sokak Oyunları Atölyesi",
    slug: "sokak-oyunlari-atolyesi",
    image: "/sokak.png",
    category: "Sosyal Gelişim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Geleneksel oyunlarla eğlen, hareket et, birlikte öğren!",
    objectives: [
      "Fiziksel hareket ve dayanıklılığı geliştirmek",
      "Geleneksel oyunları tanımak ve yaşatmak",
      "Takım ruhu ve sosyal iletişimi pekiştirmek",
      "Stratejik düşünme ve hızlı karar verme",
      "Özgüveni artırmak",
      "Çocukların sanal ortamdan, gerçek aktivitelerde bulunmalarını sağlamak"
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve geleneksel oyunları seven herkes"],
    contentItems: [
      "İp atlama, sek sek, istop, körebe",
      "Mendil kapmaca, yakan top, birdirbir",
      "Halat çekme, köşe kapmaca, elim sende",
      "Strateji ve hız gerektiren grup oyunları",
      "Takım çalışması ve liderlik oyunları",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Deneyimli oyun liderlerimiz güvenli ve eğlenceli bir ortam sağlar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Rahat kıyafet ve spor ayakkabı ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, sokak oyunlarının enerjisini yaşayın!"
    ],
  },

  {
    id: 12,
    title: "Robotik Kodlama İçerikli Oyun Atölyesi",
    slug: "robotik-kodlama-oyun-atolyesi",
    image: "/coding-kids.webp",
    category: "Teknoloji",
    ageGroup: "7+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Teknolojiyle tanış, kodla, keşfet ve üret!",
    objectives: [
      "Temel kodlama ve algoritma mantığını öğrenmek",
      "Robotik sistemleri tanımak ve kullanmak",
      "Problem çözme ve mantıksal düşünmeyi geliştirmek",
      "Yaratıcılık ve takım çalışmasını pekiştirmek",
      "Teknoloji okuryazarlığını artırmak",
    ],
    targetAudience: ["7+ yaş ve üzeri çocuklar", "Gençler", "Teknolojiye ilgi duyan herkes"],
    contentItems: [
      "Temel kodlama oyunları",
      "Robotik setlerle programlama",
      "Robotları hareket ettirme ve görevler",
      "Takım halinde proje geliştirme",
      "Yaratıcı problem çözme ve tasarım",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Uzman eğitmenlerimiz interaktif ve keyifli bir ortam sağlar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Robotik setler atölye tarafından sağlanmaktadır.",
      "Gerekli malzemeler eğitmen tavsiyesi üzerine katılımcı yada atölye tarafından temin edilecektir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, teknolojiyle yaratıcılığınızı buluşturun!"
    ],
  },
  {
    id: 13,
    title: "Orff Müzik Atölyesi",
    slug: "orff-muzik-atolyesi",
    image: "/orff-music-class.webp",
    category: "Müzik",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Ritimle tanış, müziği keşfet, birlikte üret!",
    objectives: [
      "Ritim duygusu ve müziksel yaratıcılığı geliştirmek",
      "Müzik aletlerini tanımak ve etkin kullanmak",
      "Duygusal ifade ve özgüveni artırmak",
      "Grup uyumu, dinleme ve iş birliği becerilerini güçlendirmek",
      "Sosyal iletişim ve motor becerileri desteklemek",
    ],
    targetAudience: ["6+ çocuklar",  "Müziğe ilgi duyan herkes"],
    contentItems: [
      "Orff çalgıları tanıtımı",
      "Temel ritim ve melodi çalışmaları",
      "Ritim oyunları ve doğaçlamalar",
      "Müzik-hareket bütünlüğü egzersizleri",
      "Yaratıcı performanslar ve mini gösteriler",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Deneyimli müzik eğitmenlerimiz Orff yaklaşımı ile interaktif bir deneyim sunar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Müzik aletleri atölye tarafından sağlanır.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, müziğin büyülü dünyasına adım atın!"
    ],
  },
  {
    id: 14,
    title: "Oyunlarla Temel Almanca Oyun Atölyesi",
    slug: "temel-almanca-oyun-atolyesi",
    image: "/german-learning-kids.webp",
    category: "Dil Eğitimi",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Almancayı eğlenerek öğren, kelimeleri oyunla keşfet!",
    objectives: [
      "Almanca temel kelime ve ifadeleri öğrenmek",
      "Dinleme, konuşma ve anlama becerilerini geliştirmek",
      "Özgüvenle Almanca iletişim kurmak",
      "Yaratıcılık ve grup çalışması becerilerini artırmak",
      "Eğlenerek öğrenme motivasyonunu güçlendirmek",
    ],
    targetAudience: ["6 yaş ve üzeri çocuklar", "Oyunla pratik yapmak isteyen herkes"],
    contentItems: [
      "Almanca tanışma ve ısınma oyunları",
      "Basit rol oynama ve diyalog",
      "Grup oyunları ile iletişim pratiği",
      "Almanca şarkılar ve tekerlemeler",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Formasyonlu Almanca eğitmenlerimiz oyun-temelli metotlarla ilerler.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelinmesi tavsiye edilir.",
      "Etkinlik malzemeleri eğitmen tavsiyesi ile temin edilecektir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, Almancayı oyunla keşfedin!"
    ],
  },
  // Ek programlar (listede görünmeyebilir ama detay sayfaları için hazır)
  {
    id: 15,
    title: "Hitabet ve Diksiyon Çalışmaları Atölyesi",
    slug: "hitabet-diksiyon-atolyesi",
    image: "/diksiyon.png",
    category: "İletişim",
    ageGroup: "12+",
    duration: "Haftada 1 gün 1.5 saat",
    intro: "Konuşmanın gücünü keşfet, kendini daha etkili ifade et!",
    objectives: [
      "Doğru ve anlaşılır konuşma tekniklerini öğrenmek",
      "Nefes kontrolü ve ses kullanımı",
      "Doğru telaffuz ve akıcılık",
      "Özgüven ve topluluk önünde konuşma",
      "Hitabet ve etkili iletişim",
    ],
    targetAudience: ["12+ gençler ve yetişkinler", "Konuşma becerilerini geliştirmek isteyen herkes"],
    contentItems: [
      "Nefes teknikleri ve ses egzersizleri",
      "Telaffuz ve vurgu çalışmaları",
      "Artikülasyon ve hız egzersizleri",
      "Topluluk önünde konuşma pratiği",
      "Hitabet teknikleri ve beden dili",
    ],
    schedule: "Haftada 1 gün 1.5 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Uzman diksiyon eğitmenlerimiz bireysel ve grup çalışmalarıyla destek olur.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Gerekli malzemeler eğitmen tavsiyesi üzerine katılımcı yada atölye tarafından temin edilecektir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, sesinizin gücünü keşfedin!"
    ],
  },
  {
    id: 16,
    title: "Roman Yazımı Atölyesi",
    slug: "roman-yazimi-atolyesi",
    image: "/roman-yazimi.png",
    category: "Yazarlık",
    ageGroup: "16+",
    duration: "Haftada 1 gün 2 saat",
    intro: "Kendi hikâyeni yaz, dünyanı kelimelerle şekillendir!",
    objectives: [
      "Roman yazım teknikleri",
      "Karakter, mekân ve olay örgüsü oluşturma",
      "Yaratıcı düşünce ve anlatım gücü",
      "Yazma disiplini ve sürdürülebilirlik",
      "Yayın sürecine dair bilgi",
    ],
    targetAudience: ["16+ gençler ve yetişkinler", "Yazarlığa ilgi duyan herkes"],
    contentItems: [
      "Roman türleri ve yapısı",
      "Karakter derinliği ve diyalog",
      "Mekân betimlemeleri",
      "Olay örgüsü ve tempo",
      "Atölyeler, grup çalışmaları ve geri bildirim",
    ],
    schedule: "Haftada 1 gün 2 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Yaratıcı yazarlık eğitmenlerimiz sürecin her aşamasında rehberlik eder.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Yazma materyalleri katılımcı tarafından temin edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, kendi dünyanızı yazmaya başlayın!"
    ],
  },
  {
    id: 17,
    title: "Senaryo Yazımı Atölyesi",
    slug: "senaryo-yazimi-atolyesi",
    image: "/senorya-yazim.png",
    category: "Yazarlık",
    ageGroup: "16+",
    duration: "Haftada 1 gün 2 saat",
    intro: "Hayalindeki hikâyeyi ekrana taşı!",
    objectives: [
      "Senaryo yazım teknikleri",
      "Karakter ve diyalog",
      "Hikâye yapısı ve dramatik yapı",
      "Görsel anlatım ve sahne kurgusu",
      "Yaratıcı düşünce ve yazma disiplini",
    ],
    targetAudience: ["16+ gençler ve yetişkinler", "Senaryo yazmaya ilgi duyan herkes"],
    contentItems: [
      "Senaryo formatı ve yapı",
      "Karakter analizi",
      "Diyalog ve sahne tasarımı",
      "Öykü kurgusu ve çatışma",
      "Atölye ve geri bildirim seansları",
    ],
    schedule: "Haftada 1 gün 2 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Deneyimli senaristler eşliğinde uygulamalı eğitim",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Yazma materyalleri katılımcı tarafından temin edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, kendi senaryonuzu yazmaya başlayın!"
    ],
  },
  {
    id: 18,
    title: "İçsel Ritim Atölyesi",
    slug: "icsel-ritim-piyano-atolyesi",
    image: "/ritim.png",
    category: "Müzik",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Kendi ritmini keşfet, piyano tuşlarında hayallerini çal!",
    objectives: [
      "Temel piyano teknikleri",
      "Ritim duygusunu geliştirmek",
      "Müzik teorisi ve nota bilgisi",
      "Duygusal ifade ve yaratıcılık",
      "Konsantrasyon, sabır ve disiplin",
      "Bireyin müzik potansiyelini ve yeteneğini ortaya çıkarmak"
    ],
    targetAudience: ["6+ çocuklar, gençler ve yetişkinler", "Piyanoya başlayanlar veya temelini geliştirmek isteyenler"],
    contentItems: [
      "Piyano tuşları ve nota bilgisi",
      "Ritim egzersizleri ve tempo",
      "Basit parçalar çalma",
      "İçsel ritim ve müziksel duyarlılık",
      "Grup ve bireysel performans çalışmaları",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Deneyimli piyano eğitmenlerimiz ve ritim uzmanlarımız eşliğinde dersler",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Piyano ve müzik aletleri atölye tarafından sağlanmaktadır.",
      "Rahat kıyafet ile gelmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, müziğin ritmini içinizde hissedin!"
    ],
  },
  {
    id: 24,
    title: "Ödev Yapmaya Teşvik ve Motivasyon Atölyesi",
    slug: "odev-yapmaya-tesvik-motivasyon-atolyesi",
    image: "/Unknown.jpeg",
    category: "Kişisel Gelişim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Derslerini keyifle yap, başarıya adım adım ilerle!",
    objectives: [
      "Ders ve ödevlere karşı olumlu tutum geliştirmek",
      "Zaman yönetimi ve planlama becerilerini artırmak",
      "Konsantrasyon ve odaklanma süresini uzatmak",
      "Sorumluluk bilincini güçlendirmek",
      "Çalışma alışkanlığını eğlenceli yöntemlerle pekiştirmek"
    ],
    targetAudience: [
      "6 yaş ve üzeri çocuklar",
      "Ödev yapma alışkanlığı kazanmakta zorlanan çocuklar",
      "Motivasyonunu artırmak ve derslerinde düzenli çalışmak isteyen herkes"
    ],
    contentItems: [
      "Eğlenceli ısınma ve dikkat toplama etkinlikleri",
      "Zaman yönetimi oyunları",
      "Ödevleri planlı şekilde tamamlama teknikleri",
      "Hedef belirleme ve motivasyon çalışmaları",
      "Grup destekli ve bireysel ödev tamamlama seansları"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Alanında uzman eğitim koçlarımız; öğrencilerin hem keyif alarak hem de verimli çalışarak ödevlerini tamamlamasına rehberlik ediyor.",
    feeInfo: "Ücret: İletişim numaralarımızdan bilgi alabilirsiniz.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
   
    extraNotes: [
      "Defter, kalem gibi temel ders araç gereçlerini yanınızda getirmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt yaptır, ödevler yük değil başarıya giden bir yol olsun!"
    ],
  },
  {
    id: 25,
    title: "Kitap Okuma Alışkanlığı Kazanma Atölyesi",
    slug: "kitap-okuma-aliskanligi-atolyesi",
    image: "/kitap-okuma.jpg",
    category: "Kişisel Gelişim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Okuma sevgisiyle hayal gücünü keşfet, bilgi dünyasına yolculuğa çık!",
    objectives: [
      "Okuma sevgisini ve alışkanlığını kazandırmak",
      "Hayal gücünü, kelime dağarcığını ve ifade becerisini geliştirmek",
      "Dikkat ve odaklanma yeteneğini artırmak",
      "Yorumlama ve analiz becerilerini güçlendirmek",
      "Paylaşım kültürü ve kitap üzerinden sosyal iletişimi desteklemek"
    ],
    targetAudience: [
      "6 yaş ve üzeri çocuklar",
      "Gençler ve yetişkinler",
      "Okuma alışkanlığı kazanmak veya kitap dünyasında yeni yolculuklara çıkmak isteyen herkes"
    ],
    contentItems: [
      "Eğlenceli okuma saatleri",
      "Kitap seçme, tanıma ve değerlendirme etkinlikleri",
      "Hikâye tamamlama ve yaratıcı yazma çalışmaları",
      "Grup halinde kitap sohbetleri ve tartışmalar",
      "Okunan kitaplardan ilhamla resim, drama veya kısa oyun etkinlikleri"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Alanında deneyimli okuma koçlarımız ve eğitimcilerimiz; kitap sevgisini katılımcılara ilham verici, keyifli ve etkileşimli yöntemlerle aktarıyor.",
    feeInfo: "Ücret: İletişim numaralarımızdan bilgi alabilirsiniz.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
   
    extraNotes: [

      "Seçilecek kitaplar atölye tarafından önerilir veya katılımcı getirir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, sayfaların büyülü dünyasına adım atın!"
    ],
  },
  {
    id: 26,
    title: "Yapay Zekayı Verimli Kullanma Atölyesi",
    slug: "yapay-zeka-verimli-kullanma-atolyesi",
    image: "/yapayzeka.png",
    category: "Teknoloji",
    ageGroup: "7+",
    duration: "Haftada 1 gün 1.5 saat",
    intro: "Yapay zeka araçlarını etkili kullanarak günlük hayatınızı kolaylaştırın ve verimliliğinizi artırın!",
    objectives: [
      "Yapay zeka araçlarının temel kullanımını öğrenmek",
      "Günlük hayatta AI araçlarını verimli şekilde kullanmak",
      "Eğitim ve iş hayatında AI destekli çözümler geliştirmek",
      "AI araçlarının güvenli ve etik kullanımını öğrenmek",
      "Yaratıcılık ve problem çözme becerilerini AI ile geliştirmek",
    ],
    targetAudience: [
      "7 yaş ve üzeri öğrenciler",
      "Yapay zeka araçlarını öğrenmek isteyenler",
      "Verimliliğini artırmak isteyen profesyoneller",
      "Teknolojiye ilgi duyan herkes"
    ],
    contentItems: [
      "Yapay zeka araçlarının tanıtımı ve kullanım alanları",
      "ChatGPT, Claude, Gemini gibi AI asistanların kullanımı",
      "AI destekli yazım, çeviri ve içerik oluşturma",
      "Eğitimde AI araçlarının etkili kullanımı",
      "AI araçlarıyla görsel tasarım ve sunum hazırlama",
      "Güvenlik, gizlilik ve etik kullanım kuralları",
      "Pratik projeler ve uygulamalar"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Teknoloji ve yapay zeka alanında uzman eğitmenlerimiz, güncel AI araçlarını kullanarak pratik ve etkili bir öğrenme deneyimi sunar.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Kişisel bilgisayarınızı getirmeniz gerekmektedir.",
      "İnternet bağlantısı atölye tarafından sağlanmaktadır.",
      "Gerekli yazılımlar eğitmen tarafından yönlendirilir.",
      "Kontenjan sınırlıdır.",
      "✨ Hemen kayıt olun, geleceğin teknolojisiyle tanışın!"
    ],
  },
]

export function getWorkshopBySlug(slug: string): WorkshopDetail | undefined {
  return workshops.find((w) => w.slug === slug)
}

export function getWorkshopSlugs(): string[] {
  return workshops.map((w) => w.slug)
}

