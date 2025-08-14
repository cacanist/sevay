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
    ageGroup: "8-16",
    duration: "Haftada 1 gün 1 saat",
    intro: "Çocukların yaratıcılığını geliştiren, doğal malzemelerle kendi parfümlerini yapmayı öğreten eğlenceli ve öğretici atölye.",
    objectives: [
      "Yaratıcılığı ve hayal gücünü geliştirmek",
      "Doğal malzemeleri tanıma ve kullanma",
      "Koku duyusunu geliştirmek",
      "El becerilerini ve koordinasyonu artırmak",
      "Kimyasal reaksiyonları öğrenmek",
      "Kendi ürününü yaratma deneyimi"
    ],
    targetAudience: [
      "8-16 yaş arası çocuklar",
      "Yaratıcılığını geliştirmek isteyenler",
      "Doğal ürünler yapmayı öğrenmek isteyenler",
      "Kimyaya ilgi duyanlar"
    ],
    contentItems: [
      "Doğal esansiyel yağları tanıma",
      "Koku ailelerini öğrenme",
      "Parfüm notaları ve yapısı",
      "Malzeme ölçümü ve karıştırma",
      "Kendi parfüm formülünü oluşturma",
      "Etiket tasarımı ve ambalajlama",
      "Kalite kontrol ve test etme",
      "Güvenlik kuralları ve hijyen"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Alanında uzman, kimyasal güvenlik formasyonuna sahip eğitmenlerimiz çocukların yaratıcılığını geliştirir.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    testimonials: [
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
    ],
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Kendi yapılan parfüm eve götürülür.",
      "Kontenjan sınırlıdır.",
      "Veliler için bilgilendirme toplantıları yapılır.",
      "Güvenlik ekipmanları sağlanır.",
      "Doğal ve güvenli malzemeler kullanılır."
    ],
  },
  {
    id: 21,
    title: "Zaman Yönetimi ve Planlı Çalışma Atölyesi",
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
    testimonials: [
      {
        quote: "Çocuğum artık ödevlerini planlı bir şekilde yapıyor. Zaman yönetimi çok gelişti.",
        author: "Elif S."
      },
      {
        quote: "Bu atölye sayesinde çocuğum daha organize ve disiplinli çalışmaya başladı.",
        author: "Ahmet K."
      },
      {
        quote: "Zaman yönetimi atölyesi çocuğumun akademik başarısını önemli ölçüde artırdı.",
        author: "Zeynep M."
      }
    ],
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Kişiselleştirilmiş çalışma planları hazırlanır.",
      "Kontenjan sınırlıdır.",
      "Veliler için bilgilendirme toplantıları yapılır.",
      "Sürekli takip ve değerlendirme yapılır."
    ],
  },
  {
    id: 20,
    title: "Kitap Okuma Atölyesi",
    slug: "kitap-okuma-atolyesi",
    image: "/kitap-okuma.jpg",
    category: "Sanat & Gelişim",
    ageGroup: "6-12",
    duration: "Haftada 1 gün 1 saat",
    intro: "Çocukların okuma sevgisini geliştiren, yaratıcı düşünme ve hayal gücünü destekleyen atölye.",
    objectives: [
      "Okuma alışkanlığı kazandırmak",
      "Hayal gücünü ve yaratıcılığı geliştirmek",
      "Kritik düşünme becerilerini artırmak",
      "Kelime dağarcığını zenginleştirmek",
      "Empati ve sosyal becerileri güçlendirmek",
      "Konsantrasyon süresini uzatmak"
    ],
    targetAudience: [
      "6-12 yaş arası çocuklar",
      "Okuma sevgisi geliştirmek isteyenler",
      "Hayal gücünü geliştirmek isteyenler",
      "Sosyal becerilerini güçlendirmek isteyenler"
    ],
    contentItems: [
      "Hikaye okuma ve anlatma etkinlikleri",
      "Karakter analizi ve canlandırma",
      "Kitap tartışma grupları",
      "Yaratıcı yazma çalışmaları",
      "Resimli kitap inceleme",
      "Sesli okuma ve telaffuz çalışmaları",
      "Kitap önerisi ve paylaşım",
      "Kütüphane ziyaretleri"
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor: "Alanında uzman, pedagojik formasyona sahip eğitmenlerimiz çocukların okuma sevgisini geliştirir.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    testimonials: [
      {
        quote: "Çocuğum artık her gün kitap okumayı bekliyor. Atölye sayesinde okuma sevgisi gelişti.",
        author: "Fatma K."
      },
      {
        quote: "Kitap okuma atölyesi çocuğumun hayal gücünü çok geliştirdi. Artık kendi hikayelerini yazıyor.",
        author: "Mehmet A."
      },
      {
        quote: "Çocuklar birbirleriyle kitap hakkında sohbet ediyor, bu çok güzel bir gelişim.",
        author: "Ayşe Y."
      }
    ],
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Çocukların seviyesine uygun kitaplar seçilir.",
      "Kontenjan sınırlıdır.",
      "Veliler için bilgilendirme toplantıları yapılır."
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
      "Kendini ifade etmek veya sosyal iletişimde güçlenmek isteyen herkes",
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
      "Atölye sonunda katılım sertifikası verilir.",
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
      "Günlük yaşamda daha akıcı konuşmak ve sahnede kendini rahat ifade etmek isteyenler",
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
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ile gelinmesi tavsiye edilir.",
      "Etkinlik malzemeleri eğitmen tavsiyesi ile temin edilir.",
      "Kontenjan sınırlıdır.",
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
    ],
  },
  {
    id: 7,
    title: "Zaman Yönetimi ve Planlı Ders Çalışma Atölyesi",
    slug: "zaman-yonetimi-ders-calisma-atolyesi",
    image: "/study-planning-kids.webp",
    category: "Öğrenci Koçluğu",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Zamanını doğru kullan, derslerinde fark yarat!",
    objectives: [
      "Zamanı verimli kullanma",
      "Planlı ve düzenli ders çalışma",
      "Öncelik belirleme ve hedef koyma",
      "Konsantrasyon ve odaklanmayı güçlendirme",
      "Sürdürülebilir çalışma düzeni oluşturma",
    ],
    targetAudience: ["6+ çocuklar", "Zaman yönetiminde zorlananlar", "Hedeflerine ulaşmak isteyen herkes"],
    contentItems: [
      "Zaman planlama oyunları",
      "Hedef belirleme ve küçük adımlar",
      "Dikkat ve mola yönetimi",
      "Günlük/haftalık plan oluşturma",
      "Grup destekli pratikler ve mini yarışmalar",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Uzman koçlarımız verimli ders çalışma ve motivasyon konusunda rehberlik eder.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Defter, kalem ve ajanda getirmeniz tavsiye edilir.",
      "Kontenjan sınırlıdır.",
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
      "Malzemeler eğitmen tavsiyesiyle katılımcı veya atölye tarafından temin edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  {
    id: 9,
    title: "Sokak Oyunları Atölyesi",
    slug: "sokak-oyunlari-atolyesi",
    image: "/traditional-street-games.webp",
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
      "Atölye sonunda katılım sertifikası verilir.",
      "Rahat kıyafet ve spor ayakkabı tavsiye edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  {
    id: 11,
    title: "Kitap Okuma Alışkanlığı Atölyesi",
    slug: "kitap-okuma-aliskanligi-atolyesi",
    image: "/children-reading-books.webp",
    category: "Eğitim",
    ageGroup: "6+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Okuma sevgisiyle hayal gücünü keşfet!",
    objectives: [
      "Okuma sevgisini ve alışkanlığını kazandırmak",
      "Hayal gücü, kelime dağarcığı ve ifade becerisini geliştirmek",
      "Dikkat ve odaklanmayı artırmak",
      "Yorumlama ve analiz becerilerini güçlendirmek",
      "Paylaşım kültürü ve sosyal iletişimi desteklemek",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Okuma alışkanlığı kazanmak isteyen herkes"],
    contentItems: [
      "Eğlenceli okuma saatleri",
      "Kitap seçme ve değerlendirme",
      "Hikâye tamamlama ve yaratıcı yazma",
      "Kitap sohbetleri ve tartışmalar",
      "Okunanlardan ilhamla resim/drama etkinlikleri",
    ],
    schedule: "Haftada 1 gün 1 saat",
    location: "Sev-ay Eğitim ve Kariyer Danışmanlık Merkezi Atölye Salonu",
    instructor:
      "Okuma koçlarımız ilham verici ve etkileşimli yöntemler kullanır.",
    feeInfo: "Ücret bilgisi için arayınız.",
    contactPhone: "0545 136 21 22",
    contactWhatsapp: "0544 470 14 55",
    extraNotes: [
      "Atölye sonunda katılım sertifikası verilir.",
      "Seçilecek kitaplar önerilir veya katılımcı getirir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  {
    id: 12,
    title: "Robotik Kodlama İçerikli Oyun Atölyesi",
    slug: "robotik-kodlama-oyun-atolyesi",
    image: "/coding-kids.webp",
    category: "Teknoloji",
    ageGroup: "8+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Teknolojiyle tanış, kodla, keşfet ve üret!",
    objectives: [
      "Temel kodlama ve algoritma mantığını öğrenmek",
      "Robotik sistemleri tanımak ve kullanmak",
      "Problem çözme ve mantıksal düşünmeyi geliştirmek",
      "Yaratıcılık ve takım çalışmasını pekiştirmek",
      "Teknoloji okuryazarlığını artırmak",
    ],
    targetAudience: ["6+ çocuklar", "Gençler", "Teknolojiye ilgi duyan herkes"],
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
      "Robotik setler atölye tarafından sağlanır.",
      "Gerekli malzemeler tavsiye üzerine temin edilir.",
      "Kontenjan sınırlıdır.",
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
    targetAudience: ["6+ çocuklar", "Gençler ve yetişkinler", "Müziğe ilgi duyan herkes"],
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
      "Rahat kıyafet tavsiye edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  {
    id: 14,
    title: "Oyunlarla Temel Almanca Oyun Atölyesi",
    slug: "temel-almanca-oyun-atolyesi",
    image: "/german-learning-kids.webp",
    category: "Dil Eğitimi",
    ageGroup: "7+",
    duration: "Haftada 1 gün 1 saat",
    intro: "Almancayı eğlenerek öğren, kelimeleri oyunla keşfet!",
    objectives: [
      "Almanca temel kelime ve ifadeleri öğrenmek",
      "Dinleme, konuşma ve anlama becerilerini geliştirmek",
      "Özgüvenle Almanca iletişim kurmak",
      "Yaratıcılık ve grup çalışması becerilerini artırmak",
      "Eğlenerek öğrenme motivasyonunu güçlendirmek",
    ],
    targetAudience: ["6+ çocuklar", "Gençler ve yeni başlayanlar", "Oyunla pratik yapmak isteyen herkes"],
    contentItems: [
      "Almanca tanışma ve ısınma oyunları",
      "Kelimeler ve eşleştirme etkinlikleri",
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
      "Rahat kıyafet tavsiye edilir.",
      "Etkinlik malzemeleri eğitmen tavsiyesi ile temin edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
  // Ek programlar (listede görünmeyebilir ama detay sayfaları için hazır)
  {
    id: 15,
    title: "Hitabet ve Diksiyon Çalışmaları Atölyesi",
    slug: "hitabet-diksiyon-atolyesi",
    image: "/hitabet-atolyesi.webp",
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
    extraNotes: ["Atölye sonunda katılım sertifikası verilir.", "Kontenjan sınırlıdır."],
  },
  {
    id: 16,
    title: "Roman Yazımı Atölyesi",
    slug: "roman-yazimi-atolyesi",
    image: "/roman-yazim-atolyesi.webp",
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
    extraNotes: ["Atölye sonunda katılım sertifikası verilir.", "Yazma materyalleri katılımcı tarafından temin edilir."],
  },
  {
    id: 17,
    title: "Senaryo Yazımı Atölyesi",
    slug: "senaryo-yazimi-atolyesi",
    image: "/happy-children-classroom.webp",
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
    extraNotes: ["Atölye sonunda katılım sertifikası verilir.", "Yazma materyalleri katılımcı tarafından temin edilir."],
  },
  {
    id: 18,
    title: "İçsel Ritim Atölyesi",
    slug: "icsel-ritim-piyano-atolyesi",
    image: "/orff-music-class.webp",
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
      "Piyano ve müzik aletleri atölye tarafından sağlanır.",
      "Rahat kıyafet tavsiye edilir.",
      "Kontenjan sınırlıdır.",
    ],
  },
]

export function getWorkshopBySlug(slug: string): WorkshopDetail | undefined {
  return workshops.find((w) => w.slug === slug)
}

export function getWorkshopSlugs(): string[] {
  return workshops.map((w) => w.slug)
}

