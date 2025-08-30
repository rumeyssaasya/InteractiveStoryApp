import { Story } from '../types/index';

export const sampleStories: Story[] = [
{
  id: '1',
  title: 'Zaman Yolcusu',
  description: 'Bir zaman makinesi ile geçmişe yolculuk',
  author: 'Anonim',
  genre: 'Bilim Kurgu',
  coverImage: 'https://cms.doctorwho.tv/sites/default/files/img/imported/2fh310000001000.jpg',
  firstChapterId: '1',
  chapters: {
    '1': {
      id: '1',
      title: 'Başlangıç',
      content: `Laboratuvarın ortasında parıldayan metalik bir kubbenin önünde duruyorsunuz.
Profesör Elara:
- Dikkatli olun,
- Zaman, hassas bir ipliktir. Küçük bir değişiklik bile büyük sonuçlar doğurabilir.

Makinenin içine adım atıyorsunuz ve kapı yavaşça kapanıyor. Işıklar yanıp sönüyor ve aniden kendinizi farklı bir zamanda buluyorsunuz.`,
      choices: [
        { id: '1', text: '19. yüzyıl Londrasına git', nextChapterId: '2' },
        { id: '2', text: "Antik Mısır'a git", nextChapterId: '3' }
      ]
    },

    '2': { 
      id: '2', 
      title: 'Endüstri Devrimi Londrası', 
      content: `Kendinizi sisli bir Londra sokağında buluyorsunuz. Kalabalık arasında küçük bir çocuk size doğru koşuyor. 
Çocuk:
- İyi misiniz? Kıyafetleriniz çok garip. Siz kimsiniz?

O sırada etrafınızdaki değişiklikleri fark ediyorsunuz. At arabaları, gaz lambaları ve dumanlı fabrikalar...`, 
      choices: [
        { id: '1', text: 'Çocuğa zaman yolcusu olduğunu söyle', nextChapterId: '4' }, 
        { id: '2', text: 'Sadece kaybolduğunu söyle', nextChapterId: '5' }
      ]
    },

    '3': { 
      id: '3', 
      title: 'Antik Mısır', 
      content: `Gözlerinizi açtığınızda piramitlerin gölgesinde bir pazar yerindesiniz. Sokaklar tozlu, insanlar renkli giysiler içinde. Bir grup tüccar mallarını sergiliyor, çocuklar taşla oynuyor. Bir rahip sizi fark ediyor ve yanınıza geliyor. 
Rahip:
- Zaman yolcusu, buraya niyetin ne? Burada yabancı olan dikkat çeker. 
Çevrenizdeki herkes size meraklı gözlerle bakıyor.`,
      choices: [
        { id: '1', text: 'Rahip ile konuş', nextChapterId: '6' }, 
        { id: '2', text: 'Kalabalığa karış ve kaç', nextChapterId: '7' }
      ]
    },

    '4': { 
      id: '4', 
      title: 'Zamanın İfşası', 
      content: `Çocuk büyük bir şaşkınlıkla size bakıyor. Dalga geçtiğinizi düşünerek gülüyor.`, 
      choices: [
        { id: '1', text: 'Çocuğa dalga geçmediğini anlatmaya çalış', nextChapterId: '11' }, 
        { id: '2', text: 'Çocuğu umursamadan ilerlemeye devam et', nextChapterId: '12' }
      ]
    },

    '5': { 
      id: '5', 
      title: 'Kayıp Yolcu', 
      content: `Kaybolduğunuzu söylüyorsunuz. Çocuk size ciddi bir şekilde bakıyor ve ardından başını sallıyor. Size doğru yürüyüp elinizi tutuyor. Bir hikaye anlatıyor ama siz tam olarak anlamıyorsunuz.`, 
      choices: [
        { id: '1', text: 'Zaman makinesine geri dön', nextChapterId: '10' }, 
        { id: '2', text: 'Çocuğu takip et', nextChapterId: '13' }
      ]
    },

    '6': { 
      id: '6', 
      title: 'Tanrıların Sırrı', 
      content: `Rahip sizi kutsal bir odaya götürüyor. "Tanrıların gücüne sahip olmak ister misin?" diye soruyor.`, 
      choices: [
        { id: '1', text: 'Teklifi kabul et', nextChapterId: '8' }, 
        { id: '2', text: 'Reddet ve kaç', nextChapterId: '7' }
      ]
    },

    '7': { 
      id: '7', 
      title: 'Kaçış', 
      content: `Kalabalığa karışıp kaçmaya çalışıyorsunuz. Dar sokaklarda koşarken kendinizi bir çıkmazda buluyorsunuz.`, 
      choices: [
        { id: '1', text: 'Geri dönüp rahip ile konuş', nextChapterId: '6' }, 
        { id: '2', text: 'Duvarları incele', nextChapterId: '14' }
      ]
    },

    '8': { 
      id: '8', 
      title: 'Tanrıların Gücü', 
      content: `Teklifi kabul ettiniz ve tanrıların gücüne sahip oldunuz. Zamanı kontrol edebiliyorsunuz.`, 
      choices: [
        { id: '1', text: 'Gücü dünyayı kurtarmak için kullan', nextChapterId: '9' }, 
        { id: '2', text: 'Gücü reddet ve normale dön', nextChapterId: '15' }
      ]
    },

    '9': { 
      id: '9', 
      title: 'Kurtarıcı', 
      content: `Zamanın gücünü kullanarak dünyayı büyük bir felaketten kurtardınız. Artık bir efsanesiniz.`, 
      choices: [], 
      isEnding: true
    },

    '10': { 
      id: '10', 
      title: 'Geri Dönüş', 
      content: `Zaman makinesine geri dönüyorsunuz. Profesör Elara sizi bekliyor. "Neler öğrendin?" diye soruyor.`, 
      choices: [
        { id: '1', text: 'Her şeyi anlat', nextChapterId: '16' }, 
        { id: '2', text: 'Sadece temel bilgileri ver', nextChapterId: '17' }
      ]
    },

    '11': { 
      id: '11', 
      title: 'İnanılmaz Hikaye',  
      content: `Çocuğa gerçeği anlatıyorsunuz. Gözleri büyüyor ve size inanıyor. "Bana zaman yolculuğunu öğret!" diye yalvarıyor.`,
      choices: [
        { id: '1', text: 'Çocuğa temel bilgileri öğret', nextChapterId: '18' },
        { id: '2', text: 'Reddet ve uzaklaş', nextChapterId: '12' }
      ]
    },

    '12': {
      id: '12',
      title: 'Sisli Sokaklar',
      content: `Londra sokaklarında ilerliyorsunuz. Sis kalın ve ağır; gaz lambalarının ışığı zar zor görünüyor.`,
      choices: [
        { id: '1', text: 'Bir han bulmaya çalış', nextChapterId: '19' },
        { id: '2', text: 'Sokakları keşfetmeye devam et', nextChapterId: '20' }
      ]
    },

    '13': {
      id: '13',
      title: 'Çocuğun Peşinde',
      content: `Çocuğu takip ediyorsunuz. Sizi küçük bir kulübeye götürüyor. İçeride eski kitaplar ve garip aletler var.`,
      choices: [
        { id: '1', text: 'Kitapları incele', nextChapterId: '21' },
        { id: '2', text: 'Hemen ayrıl', nextChapterId: '12' }
      ]
    },

    '14': {
      id: '14',
      title: 'Gizli Geçit',
      content: `Duvarları incelediğinizde gizli bir geçit buluyorsunuz. Geçit sizi piramitlerin derinliklerine götürüyor.`,
      choices: [
        { id: '1', text: 'Geçitten ilerle', nextChapterId: '22' },
        { id: '2', text: 'Geri dön', nextChapterId: '7' }
      ]
    },

    '15': {
      id: '15',
      title: 'Normal Hayat',
      content: `Gücü reddedip normal hayatınıza dönüyorsunuz. Ama zaman yolculuğunun anıları hiç gitmiyor.`,
      choices: [],
      isEnding: true
    },

    '16': {
      id: '16',
      title: 'Detaylı Rapor',
      content: `Profesör Elara'ya her şeyi anlatıyorsunuz. Çok etkileniyor ve yeni deneyler planlamaya başlıyor.`,
      choices: [],
      isEnding: true
    },

    '17': {
      id: '17',
      title: 'Gizli Bilgi',
      content: `Sadece temel bilgileri veriyorsunuz. Profesör meraklı ama saygılı. Belki bir gün her şeyi anlatırsınız.`,
      choices: [],
      isEnding: true
    },

    '18': {
      id: '18',
      title: 'Küçük Öğrenci',
      content: `Çocuğa temel zaman teorisini öğretiyorsunuz. Çocuk çok yetenekli çıkıyor. Belki geleceğin bilim insanı olacak.`,
      choices: [],
      isEnding: true
    },

    '19': {
      id: '19',
      title: 'Hanın Sakinleri',
      content: `Bir han buluyorsunuz. İçeride tuhaf karakterler var. Size garip garip bakıyorlar.`,
      choices: [
        { id: '1', text: 'Onlarla konuş', nextChapterId: '23' },
        { id: '2', text: 'Odana çekil', nextChapterId: '24' }
      ]
    },

    '20': {
      id: '20',
      title: 'Gece Keşfi',
      content: `Gecenin karanlığında sokakları keşfetmeye devam ediyorsunuz. Tehlikeli ama heyecan verici.`,
      choices: [
        { id: '1', text: 'Sesleri takip et', nextChapterId: '25' },
        { id: '2', text: 'Güvenli bir yer bul', nextChapterId: '19' }
      ]
    },

    '21': {
      id: '21',
      title: 'Kadim Bilgiler',
      content: `Kitapları inceliyorsunuz. İçlerinde zaman yolculuğu hakkında kadim bilgiler var.`,
      choices: [],
      isEnding: true
    },

    '22': {
      id: '22',
      title: 'Piramitin Kalbi',
      content: `Geçit sizi piramitin kalbine götürüyor. Odada parlayan bir kristal var.`,
      choices: [
        { id: '1', text: 'Kristale dokun', nextChapterId: '26' },
        { id: '2', text: 'Uzak dur', nextChapterId: '27' }
      ]
    },

    '23': {
      id: '23',
      title: 'Yeni Tanışıklar',
      content: `Hanın sakinleriyle konuşuyorsunuz. Zaman yolcuları olduklarını iddia ediyorlar.`,
      choices: [
        { id: '1', text: 'Onlara inan', nextChapterId: '28' },
        { id: '2', text: 'Şüpheci yaklaş', nextChapterId: '29' }
      ]
    },

    '24': {
      id: '24',
      title: 'Dinlenme',
      content: `Odanda dinleniyorsunuz. Dışarıdan gelen sesler sizi meraklandırıyor.`,
      choices: [
        { id: '1', text: 'Sesi araştır', nextChapterId: '30' },
        { id: '2', text: 'Uyumaya çalış', nextChapterId: '31' }
      ]
    },

    '25': {
      id: '25',
      title: 'Gizemli Sesler',
      content: `Sesleri takip ediyorsunuz. Sizi şehrin gizli bir bölümüne götürüyorlar.`,
      choices: [],
      isEnding: true
    },

    '26': {
      id: '26',
      title: 'Kristalin Gücü',
      content: `Kristale dokunuyorsunuz. Anında farklı bir zamana ışınlanıyorsunuz.`,
      choices: [],
      isEnding: true
    },

    '27': {
      id: '27',
      title: 'İhtiyatlı Davranış',
      content: `Kristalden uzak duruyorsunuz. Bu bilgece bir karardı. Piramitten çıkıyorsunuz.`,
      choices: [],
      isEnding: true
    },

    '28': {
      id: '28',
      title: 'Zaman Kardeşliği',
      content: `Zaman yolcularına inanıyorsunuz. Sizi kardeşliğe kabul ediyorlar.`,
      choices: [],
      isEnding: true
    },

    '29': {
      id: '29',
      title: 'Şüpheci Yaklaşım',
      content: `Şüpheci yaklaşıyorsunuz. Haklı çıkıyorsunuz - sadece dolandırıcılarmış. Zaman makinesine geri dönüyorsunuz.`,
      choices: [],
      isEnding: true
    },

    '30': {
      id: '30',
      title: 'Gece Macerası',
      content: `Sesi araştırıyorsunuz. Beklemediğiniz bir suikastçi ortaya çıkıp sizi öldürüyor.`,
      choices: [],
      isEnding: true
    },

    '31': {
      id: '31',
      title: 'HuzurlU Uyku',
      content: `Uyumaya çalışıyorsunuz. Sabah yeni maceralar için dinlenmiş olarak uyanıyorsunuz.`,
      choices: [],
      isEnding: true
    }
  }
},

    {
        id: '2',
        title: 'Kayıp Orman',
        description: 'Sisli bir ormanda kaybolmuş bir gezginin hikâyesi',
        author: 'Anonim',
        genre: 'Macera',
        coverImage: 'https://reactormag.com/wp-content/uploads/2018/07/TwoTowers-FangornForest.jpg',
        firstChapterId: '1',
        chapters: {
        '1': { 
            id: '1', 
            title: 'Sisli Giriş', 
            content: `Yoğun sisin içinde ormana adım atıyorsun. Dallardan süzülen ışık huzmeleri sis perdesini hafifçe yırtıyor. Soğuk bir rüzgar yaprakları hışırdatıyor. Karşına 2 yol çıktı: Biri sağa, diğeri sola. Hangi yolu seçiyorsun?`, 
            choices: [
                { id: '1', text: 'Sağdaki patikadan git', nextChapterId: '2' }, 
                { id: '2', text: 'Soldaki patikadan git', nextChapterId: '3' }
            ] 
        },
        '2': { 
            id: '2', 
            title: 'Nehrin Kenarı', 
            content: `Sis seyrelir ve sen kendini geniş, gürül gürül akan bir nehrin kenarında bulursun. Suyun sesi sakinleştirici. Uzakta, nehrin karşısında duman tüten bir kulübe görünüyor.`, 
            choices: [
                { id: '1', text: 'Köprüyü incelemeye git', nextChapterId: '4' }, 
                { id: '2', text: 'Nehir kıyısında ilerlemeye devam et', nextChapterId: '5' }
            ] 
        },
        '3': { 
            id: '3', 
            title: 'Eski Tapınak', 
            content: `Ağaçların arasında, sarmaşıklarla kaplı, taştan yapılmış eski bir tapınak buluyorsun. Kapısı hafif aralık ve içerisi karanlık. Üzerinde bilinmeyen semboller olan bir levha kapıya çakılmış.`, 
            choices: [
                { id: '1', text: 'Tapınağın içine gir', nextChapterId: '6' }, 
                { id: '2', text: 'Etrafı incelemeye devam et', nextChapterId: '7' }
            ] 
        },
        '4': { 
            id: '4', 
            title: 'Köprü', 
            content: `Köprüye yaklaştığında tahtaların çürümüş olduğunu fark ediyorsun. Ancak köprünün ortasında parlayan bir nesne görüyorsun.`, 
            choices: [
                { id: '1', text: 'Risk alıp köprüye çık', nextChapterId: '8' }, 
                { id: '2', text: 'Geri dönüp nehir kıyısında ilerle', nextChapterId: '5' }
            ] 
        },
        '5': { 
            id: '5', 
            title: 'Nehir Yolu', 
            content: `Nehir kıyısında ilerlerken suda yüzen bir kütük görüyorsun. İleride nehir ikiye ayrılıyor.`, 
            choices: [
                { id: '1', text: 'Kütüğü kullanarak karşıya geç', nextChapterId: '9' }, 
                { id: '2', text: 'Nehir kıyısında yürümeye devam et', nextChapterId: '10' }
            ] 
        },
        '6': { 
            id: '6', 
            title: 'Tapınak İçi', 
            content: `Tapınağın içi tozlu ve mistik bir atmosfere sahip. Duvarlarda eski yazıtlar var. Ortada üzerinde tuhaf semboller olan bir masa duruyor.`, 
            choices: [
                { id: '1', text: 'Yazıtları okumaya çalış', nextChapterId: '11' },
                { id: '2', text: 'Masayı incele', nextChapterId: '12' }
            ] 
        },
        '7': {
            id: '7',
            title: 'Tapınağın Çevresi',
            content: `Tapınağın etrafını inceliyorsun. Yere düşmüş eski bir parşömen buluyorsun. Üzerinde karmaşık semboller ve harfler var. Bu parşömen bir ipucu olabilir.`,
            choices: [
                { id: '1', text: 'Parşömeni al ve tapınağa dön', nextChapterId: '6' },
                { id: '2', text: 'Parşömeni bırak ve ormanın derinliklerine git', nextChapterId: '13' }
            ]
        },

        '8': {
            id: '8',
            title: 'Köprüde Tehlike',
            content: `Köprüye adım attığında tahtaların gıcırdadığını ve bazı yerlerin çürük olduğunu fark ediyorsun. Tam ortada parlayan nesne eski bir anahtar. Ne yapacaksın?`,
            choices: [
                { id: '1', text: 'Anahtarı al ve dikkatlice köprüyü geç', nextChapterId: '14' },
                { id: '2', text: 'Tehlikeyi göze almadan geri dön', nextChapterId: '5' }
            ]
        },

        '9': {
            id: '9',
            title: 'Karşıya Geçiş',
            content: `Kütüğü dikkatlice kullanarak karşıya geçiyorsun. Nehrin diğer tarafında terkedilmiş bir ev ve eski bir at arabası var. Ormanın derinliklerinden garip sesler geliyor.`,
            choices: [
                { id: '1', text: 'Eve yaklaş', nextChapterId: '15' },
                { id: '2', text: 'At arabasını incele', nextChapterId: '16' }
            ]
        },

        '10': {
            id: '10',
            title: 'Nehir Kıyısında Yalnızlık',
            content: `Nehir kıyısında ilerlerken sessizlik dikkatini çekiyor. Kuş cıvıltıları ve suyun sesi dışında bir ses yok. Birden karşına eski bir şapel çıkıyor.`,
            choices: [
                { id: '1', text: 'Şapelin içine gir', nextChapterId: '17' },
                { id: '2', text: 'Kıyı boyunca yürümeye devam et', nextChapterId: '18' }
            ]
        },

        '11': {
            id: '11',
            title: 'Yazıtların Sırrı',
            content: `Yazıtları okuduğunda eski bir büyü veya zamanla ilgili semboller olduğunu fark ediyorsun. Bunlar sana yeni bir güç veya yol gösterebilir.`,
            choices: [
                { id: '1', text: 'Sembolleri takip et', nextChapterId: '19' },
                { id: '2', text: 'Masayı inceleyip ipucu ara', nextChapterId: '12' }
            ]
        },

        '12': {
            id: '12',
            title: 'Masadaki Gizem',
            content: `Masayı incelediğinde üstünde eski mühürler ve kilitli bir çekmece buluyorsun. Belki de tapınağın gizli hazinesi burada.`,
            choices: [
                { id: '1', text: 'Çekmeceyi açmaya çalış', nextChapterId: '20' },
                { id: '2', text: 'Masayı bırak ve tapınaktan çık', nextChapterId: '7' }
            ]
        },

        '13': {
            id: '13',
            title: 'Ormanın Derinlikleri',
            content: `Ormanın içine doğru ilerledikçe ışık azalıyor, sis yoğunlaşıyor. Gözlerinin önünde tuhaf gölgeler dans ediyor. Sessizliği bozan tek şey uzak bir şelale sesi.`,
            choices: [
                { id: '1', text: 'Şelaleye doğru git', nextChapterId: '21' },
                { id: '2', text: 'Gölgelerin arasına gir', nextChapterId: '22' }
            ]
        },

        '14': {
            id: '14',
            title: 'Köprünün Ötesi',
            content: `Köprüyü dikkatlice geçtin ve anahtarı aldın. Karşında taşlarla çevrili eski bir kapı duruyor. Kapı üzerinde karmaşık semboller var.`,
            choices: [
                { id: '1', text: 'Anahtarı kullanarak kapıyı aç', nextChapterId: '23' },
                { id: '2', text: 'Kapıyı zorlamadan başka yol ara', nextChapterId: '13' }
            ]
        },
        '15': {
            id: '15',
            title: 'Terkedilmiş Ev',
            content: `Terkedilmiş eve yaklaşıyorsun. Kapısı hafif aralık ve içeriden eski bir mum ışığı sızıyor. İçeri girdiğinde yerde eski bir harita ve bazı notlar buluyorsun.`,
            choices: [
                { id: '1', text: 'Haritayı al ve notları incele', nextChapterId: '24' },
                { id: '2', text: 'Evden çık ve ormanın derinliklerine devam et', nextChapterId: '13' }
            ]
        },

        '16': {
            id: '16',
            title: 'At Arabası',
            content: `At arabasını incelediğinde altında eski bir sandık buluyorsun. Sandığı açtığında parlayan bir taş ve notlar var.`,
            choices: [
                { id: '1', text: 'Taşı al ve notları oku', nextChapterId: '24' },
                { id: '2', text: 'Sandığı bırak ve nehir yoluna devam et', nextChapterId: '10' }
            ]
        },

        '17': {
            id: '17',
            title: 'Şapelin Sırrı',
            content: `Şapelin içine giriyorsun. Duvarlarda eski freskler ve altarın üzerinde bir kutu var. Kutuda eski bir anahtar olmalı.`,
            choices: [
                { id: '1', text: 'Kutuyu aç ve anahtarı al', nextChapterId: '23' },
                { id: '2', text: 'Şapelden çık ve kıyı boyunca devam et', nextChapterId: '18' }
            ]
        },

        '18': {
            id: '18',
            title: 'Kıyıdaki Yol',
            content: `Kıyı boyunca yürümeye devam ediyorsun. Birden sis daha da yoğunlaşıyor ve karşına bir mağara çıkıyor.`,
            choices: [
                { id: '1', text: 'Mağaraya gir', nextChapterId: '22' },
                { id: '2', text: 'Geri dön ve şapeli incele', nextChapterId: '17' }
            ]
        },

        '19': {
            id: '19',
            title: 'Semboller ve Güç',
            content: `Sembolleri takip ettikçe eski bir büyü kitabına ulaşıyorsun. Kitap, zamanı geçici olarak kontrol edebilmeni sağlayacak ritüeller içeriyor.`,
            choices: [
                { id: '1', text: 'Ritüeli dene ve gücü kullan', nextChapterId: '25' },
                { id: '2', text: 'Ritüeli bırak ve tapınaktan çık', nextChapterId: '7' }
            ]
        },

        '20': {
            id: '20',
            title: 'Gizli Çekmece',
            content: `Çekmeceyi açtığında eski bir parşömen ve bir anahtar buluyorsun. Parşömen bir harita içeriyor.`,
            choices: [
                { id: '1', text: 'Haritayı takip et', nextChapterId: '24' },
                { id: '2', text: 'Anahtarı al ve geri dön', nextChapterId: '14' }
            ]
        },

        '21': {
            id: '21',
            title: 'Şelale Altı',
            content: `Şelaleye vardığında, suyun ardında gizli bir mağara girişi keşfediyorsun. İçeri girdiğinde eski bir tapınak kalıntısı buluyorsun.`,
            choices: [
                { id: '1', text: 'Tapınak kalıntısını incele', nextChapterId: '6' },
                { id: '2', text: 'Mağaradan çık ve ormanda ilerle', nextChapterId: '13' }
            ]
        },

        '22': {
            id: '22',
            title: 'Gölgelerin İçinde',
            content: `Gölgelerin arasına girdiğinde, eski bir zaman makinesi parçası ve bazı notlar buluyorsun. Bu parçalar sana geçmişi değiştirme imkânı verebilir.`,
            choices: [
                { id: '1', text: 'Parçaları al ve görevi kabul et', nextChapterId: '25' },
                { id: '2', text: 'Parçaları bırak ve geri dön', nextChapterId: '13' }
            ]
        },

        '23': {
            id: '23',
            title: 'Kapının Ardındaki Oda',
            content: `Anahtarı kullanarak kapıyı açıyorsun. İçeride eski zamanlardan kalma eserler, bir sandık ve bir ritüel kitabı var. Geçmişin sırlarını çözecek ipuçları seni bekliyor.`,
            choices: [
                { id: '1', text: 'Ritüeli başlat ve zamanı kontrol et', nextChapterId: '25' },
                { id: '2', text: 'Eseri incele ve çık', nextChapterId: '7' }
            ]
        },

        '24': {
            id: '24',
            title: 'Harita ve İpuçları',
            content: `Harita, ormanın derinliklerinde gizli bir tapınağa giden yolları gösteriyor. Her yol farklı bir sır ve tehlike içeriyor.`,
            choices: [
                { id: '1', text: 'Haritayı takip et ve tapınağa git', nextChapterId: '6' },
                { id: '2', text: 'Haritayı bırak ve kendi yolunu seç', nextChapterId: '13' }
            ]
        },

        '25': {
            id: '25',
            title: 'Zamanın Gücü',
            content: `Artık zamanın gücünü kullanabiliyorsun. Geçmişi değiştirmek veya geleceğe müdahale etmek gibi büyük kararlar almak üzeresin. Her seçim tarihin akışını değiştirecek.`,
            choices: [
                { id: '1', text: 'Geçmişi düzelt ve felaketleri önle', nextChapterId: '26' },
                { id: '2', text: 'Geleceğe müdahale et', nextChapterId: '27' }
            ]
        },

        '26': {
            id: '26',
            title: 'Kurtarıcı',
            content: `Zamanın gücünü kullanarak felaketleri önledin ve birçok hayat kurtuldu. İnsanlar sana hayran, sen tarihin bir parçasısın.`, 
            choices: [], isEnding: true
        },

        '27': {
            id: '27',
            title: 'Geleceğe Müdahale',
            content: `Geleceğe müdahale ederek yeni bir düzen kurdun. Bazıları bundan faydalandı, bazıları zarar gördü. Tarih dengede değil ama sen güç sahibisin.`, 
            choices: [], isEnding: true
        }


        }
    },

    {
        id: '3',
        title: 'Uzay Kolonisi',
        description: 'Mars’ta kurulan ilk kolonide yaşanan gizemli olaylar',
        author: 'Anonim',
        genre: 'Bilim Kurgu', // Yeni alan
        coverImage: 'https://www.historyonthenet.com/wp-content/uploads/2021/11/age-of-discovery-Space-Colonization.jpg',
        firstChapterId: '1',
        chapters: {
        '1': { id: '1', title: 'İlk Gün', content: `Mars kolonisinde ilk sabahına uyanıyorsun...`, choices: [{ id: '1', text: 'Fırtınaya rağmen dışarı çık', nextChapterId: '2' }, { id: '2', text: 'Kontrol merkezine git', nextChapterId: '3' }] },
        '2': { id: '2', title: 'Kayıp Gezgin', content: `Dışarı çıktığında iletişim kayboluyor...`, choices: [], isEnding: true },
        '3': { id: '3', title: 'Merkezde Kriz', content: `Kontrol merkezinde elektrikler gidiyor...`, choices: [{ id: '1', text: 'Sinyali takip et', nextChapterId: '4' }, { id: '2', text: 'Sistemi yeniden başlat', nextChapterId: '5' }] },
        '4': { id: '4', title: 'Yabancı Mesaj', content: `Sinyali çözüyorsun...`, choices: [], isEnding: true },
        '5': { id: '5', title: 'Koloni Güvende', content: `Sistemi yeniden başlattın...`, choices: [], isEnding: true }
        }
    },

    {
        id: '4',
        title: 'Kayıp Şehir',
        description: 'Ormanda kaybolmuş bir kaşifin antik şehir macerası',
        author: 'Anonim',
        genre: 'Macera',
        coverImage: 'https://www.worldtravelguide.net/wp-content/uploads/2021/02/shu-Cambodia-Angkor_254669128-1440x823-1.jpg',
        firstChapterId: '1',
        chapters: {
        '1': {
            id: '1',
            title: 'Orman Yolu',
            content: `Yoğun ormanda ilerliyorsunuz. Ağaçlar sanki kendi aralarında fısıldaşıyor.`,
            choices: [
            { id: '1', text: 'Doğuya git', nextChapterId: '2' },
            { id: '2', text: 'Batıya git', nextChapterId: '3' }
            ]
        },
        '2': {
            id: '2',
            title: 'Eski Tapınak',
            content: `Yıkık dökük bir tapınak buluyorsunuz. Surlar arasında garip işaretler var.`,
            choices: [
            { id: '1', text: 'İşaretleri incele', nextChapterId: '4' },
            { id: '2', text: 'Geri dön', nextChapterId: '1' }
            ]
        },
        '3': {
            id: '3',
            title: 'Nehir Kenarı',
            content: `Bir nehir kenarına ulaştınız. Sular hızlı akıyor.`,
            choices: [
            { id: '1', text: 'Yüzerek geç', nextChapterId: '5' },
            { id: '2', text: 'Köprüden geç', nextChapterId: '6' }
            ]
        },
        '4': {
            id: '4',
            title: 'Tapınağın Sırrı',
            content: `Tapınağın içinde gizli bir oda buluyorsunuz. İçeride eski bir harita var.`,
            choices: [],
            isEnding: true
        },
        '5': {
            id: '5',
            title: 'Nehrin Ötesi',
            content: `Nehrin diğer tarafında antik bir şehir kalıntısı sizi bekliyor.`,
            choices: [],
            isEnding: true
        },
        '6': {
            id: '6',
            title: 'Köprünün Sonu',
            content: `Köprü çöküyor ve suya düşüyorsunuz. Macera burada sona eriyor.`,
            choices: [],
            isEnding: true
        }
        }
    },
  
  {
    id: '5',
    title: 'Uzay Kaşifi',
    description: 'Mars’ta kaybolan bir astronotun sıradışı hikayesi',
    author: 'Anonim',
    genre: 'Bilim Kurgu',
    coverImage: 'https://miro.medium.com/1*6McwTIxIKD470mUSJSXqmw.jpeg',
    firstChapterId: '1',
    chapters: {
      '1': {
        id: '1',
        title: 'Kırmızı Gece',
        content: `Mars'ta ilk geceniz. Kırmızı toz fırtınası yaklaşmakta.`,
        choices: [
          { id: '1', text: 'Dışarı çık', nextChapterId: '2' },
          { id: '2', text: 'Kapsülde kal', nextChapterId: '3' }
        ]
      },
      '2': {
        id: '2',
        title: 'Yabancı Sinyal',
        content: `Uzak bir yerden bilinmeyen bir sinyal alıyorsunuz.`,
        choices: [
          { id: '1', text: 'Sinyali takip et', nextChapterId: '4' },
          { id: '2', text: 'Sinyali görmezden gel', nextChapterId: '5' }
        ]
      },
      '3': {
        id: '3',
        title: 'Kapsül Güvenli',
        content: `Kapsülünüz güvenli, dışarı çıkmak tehlikeli olabilir.`,
        choices: [],
        isEnding: true
      },
      '4': {
        id: '4',
        title: 'Kayıp Koloni',
        content: `Sinyali takip edince terk edilmiş bir koloni buluyorsunuz.`,
        choices: [],
        isEnding: true
      },
      '5': {
        id: '5',
        title: 'Yeni Başlangıç',
        content: `Mars'ta yeni bir kamp kuruyorsunuz. Macera devam ediyor.`,
        choices: [],
        isEnding: true
      }
    }
  },
  
];

export default sampleStories;
