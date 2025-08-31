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
        '1': { 
            id: '1', 
            title: 'İlk Gün', 
            content: `Mars kolonisinde ilk sabahına uyanıyorsun. Kırmızı gezegenin puslu manzarası pencereyi dolduruyor. Dışarıda hafif bir toz fırtınası var.`, 
            choices: [
                { id: '1', text: 'Fırtınaya rağmen dışarı çık ve keşfet', nextChapterId: '2' }, 
                { id: '2', text: 'Güvenliği için kontrol merkezine git', nextChapterId: '3' }
            ] 
        },
        '2': { 
            id: '2', 
            title: 'Kayıp Gezgin', 
            content: `Dışarı çıktığında aniden şiddetlenen fırtına yüzünden iletişim kesiliyor. Görüş mesafen sıfıra yakın. Yakınlarda bir mağara girişi görüyorsun.`, 
            choices: [
                { id: '1', text: 'Mağaraya sığın', nextChapterId: '4' },
                { id: '2', text: 'Yön bulmaya çalışarak üsse dön', nextChapterId: '5' }
            ] 
        },
        '3': { 
            id: '3', 
            title: 'Merkezde Kriz', 
            content: `Kontrol merkezine vardığında elektrikler aniden kesiliyor. Acil durum ışıkları yanıyor. Ana bilgisayarda garip bir sinyal beliriyor.`, 
            choices: [
                { id: '1', text: 'Sinyalin kaynağını araştır', nextChapterId: '6' }, 
                { id: '2', text: 'Önce enerji sistemini yeniden başlat', nextChapterId: '7' }
            ] 
        },
        '4': {
            id: '4',
            title: 'Antik Mağara',
            content: `Mağarada duvarlara kazınmış antik Mars yazıtları buluyorsun. Yazıtlar, Mars'ta eskiden bir medeniyet olduğunu gösteriyor. Derinde mavi bir ışık parlıyor.`,
            choices: [
                { id: '1', text: 'Işığa doğru ilerle', nextChapterId: '8' },
                { id: '2', text: 'Yazıtları inceleyip üsse bilgi gönder', nextChapterId: '9' }
            ]
        },
        '5': {
            id: '5',
            title: 'Kum Fırtınası',
            content: `Fırtınada kayboluyorsun. Oksijen seviyen tehlikeli derecede düşüyor. Aniden önüne çıkan bir kaya oluşumu sığınak olabilir.`,
            choices: [
                { id: '1', text: 'Kaya oluşumunun altına sığın', nextChapterId: '10' },
                { id: '2', text: 'Son oksijenle üssü bulmaya çalış', nextChapterId: '11' }
            ]
        },
        '6': {
            id: '6',
            title: 'Gizemli Sinyal',
            content: `Sinyalin kaynağını buldun: Koloninin altında gizli bir bölme var. İçeriden tuhaf bir enerji yayılıyor.`,
            choices: [
                { id: '1', text: 'Gizli bölmeyi aç', nextChapterId: '12' },
                { id: '2', text: 'Önce diğer kolonicileri uyar', nextChapterId: '13' }
            ]
        },
        '7': {
            id: '7',
            title: 'Sistem Restart',
            content: `Enerjiyi yeniden başlattın ama sistemler stabil değil. Ana bilgisayar "Dışarıda yaşam formu tespit edildi" uyarısı veriyor.`,
            choices: [
                { id: '1', text: 'Dış kamerları kontrol et', nextChapterId: '14' },
                { id: '2', text: 'Savunma sistemlerini aktive et', nextChapterId: '15' }
            ]
        },
        '8': {
            id: '8',
            title: 'Marsın Kalbi',
            content: `Mavi ışığın kaynağına ulaştın: Devasa bir kristal. Dokunduğunda tüm Mars'ın tarihi zihninde canlanıyor. İnsanlık için yeni bir çağ başlıyor!`,
            choices: [],
            isEnding: true
        },
        '9': {
            id: '9',
            title: 'Tarihi Keşif',
            content: `Yazıtları çözdün ve Dünya'ya gönderdin. Buluşun insanlık tarihini değiştirdi. Mars kolonisi insanlığın yeni umudu oldu.`,
            choices: [],
            isEnding: true
        },
        '10': {
            id: '10',
            title: 'Kurtuluş',
            content: `Fırtına dinene kadar kayaların altında saklandın. Sonra üssün acil sinyalini buldun. Başarıyla üsse döndün!`,
            choices: [],
            isEnding: true
        },
        '11': {
            id: '11',
            title: 'Son Nefes',
            content: `Oksijen tükendi. Mars'ın kırmızı kumlarında son nefesini verirken, yıldızlar çok güzel görünüyor...`,
            choices: [],
            isEnding: true
        },
        '12': {
            id: '12',
            title: 'İlk Temas',
            content: `Gizli bölmede antik Mars teknolojisi buldun. Teknoloji insanlığa yeni bir çağ getirdi. Marslı atalarımızla ilk teması sen sağladın!`,
            choices: [],
            isEnding: true
        },
        '13': {
            id: '13',
            title: 'Kahraman',
            content: `Herkesi uyarıp gizli bölmeyi birlikte açtınız. İçerideki teknoloji tüm koloniyi kurtardı. Koloninin kahramanı oldun!`,
            choices: [],
            isEnding: true
        },
        '14': {
            id: '14',
            title: 'Komşularımız',
            content: `Kameralarda Mars yüzeyinde hareket eden gölgeler gördün. İlk temas ekibini yönlendirdin. İnsanlık ilk kez başka bir yaşam formuyla iletişim kurdu!`,
            choices: [],
            isEnding: true
        },
        '15': {
            id: '15',
            title: 'Savunma Zaferi',
            content: `Savunma sistemlerini aktive ettin. Dışarıdaki tehdit etkisiz hale getirildi. Koloniyi kurtardın ve Mars'ta insan varlığını güvence altına aldın!`,
            choices: [],
            isEnding: true
        }
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
            content: `Yoğun ormanda ilerliyorsunuz. İlerledikçe iki yol ayrımı görüyorsunuz: biri karanlık ve dar, diğeri aydınlık ve geniş.`,
            choices: [
            { id: '1', text: 'Doğuya git (karanlık patika)', nextChapterId: '2' },
            { id: '2', text: 'Batıya git (aydınlık patika)', nextChapterId: '3' }
            ]
        },
        '2': {
            id: '2',
            title: 'Eski Tapınak',
            content: `Dar patika sizi yıkık dökük bir tapınağa götürüyor. Tapınağın kapısı hafif aralık, içeriden tuhaf bir ışık sızıyor.`,
            choices: [
            { id: '1', text: 'İşaretleri incele', nextChapterId: '4' },
            { id: '2', text: 'Tapınağın içine gir', nextChapterId: '7' }
            ]
        },
        '3': {
            id: '3',
            title: 'Nehir Kenarı',
            content: `Aydınlık patika sizi bir nehir kenarına çıkarıyor. Karşıda eski bir köprü ve bağlı bir bot var.`,
            choices: [
            { id: '1', text: 'Köprüden geç', nextChapterId: '6' },
            { id: '2', text: 'Botu kullan', nextChapterId: '8' }
            ]
        },
        '4': {
            id: '4',
            title: 'Tapınağın Sırrı',
            content: `Tapınağın içinde gizli bir oda buluyorsunuz. Haritada ormanın derinliklerinde bir yer işaretli.`,
            choices: [
            { id: '1', text: 'Haritayı al ve ormanın derinliklerine git', nextChapterId: '9' },
            { id: '2', text: 'Odayı incelemeye devam et', nextChapterId: '10' }
            ]
        },
        '5': {
            id: '5',
            title: 'Şehir Kalıntıları',
            content: `Nehrin ötesindeki kalıntıları geziyorsunuz. Eski bir tapınağın taş levhası üzerinde bilinmeyen bir dil var.`,
            choices: [
            { id: '1', text: 'Levhayı incele', nextChapterId: '16' },
            { id: '2', text: 'Kalıntıları keşfetmeye devam et', nextChapterId: '11' }
            ]
        },
        '6': {
            id: '6',
            title: 'Köprünün Sonu',
            content: `Köprü çürük ve çöküyor. Tam ortasına geldiğinizde tahtalar kırıldı ve suya düştünüz. Macera burada sona eriyor.`,
            choices: [],
            isEnding: true
        },
        '7': {
            id: '7',
            title: 'Tapınağın Derinlikleri',
            content: `Tapınağın içinde karanlık bir koridor sizi bekliyor. Duvarlarda eski yazıtlar ve semboller var.`,
            choices: [
            { id: '1', text: 'Koridoru takip et', nextChapterId: '12' },
            { id: '2', text: 'Yazıtları incele', nextChapterId: '4' }
            ]
        },
        '8': {
            id: '8',
            title: 'Bot Yolculuğu',
            content: `Botu kullanarak nehri geçiyorsunuz. Karşı kıyıda gizemli bir mağara girişi görüyorsunuz.`,
            choices: [
            { id: '1', text: 'Mağaraya gir', nextChapterId: '13' },
            { id: '2', text: 'Yeni bir yol bulmak için ormana sap', nextChapterId: '1' }
            ]
        },
        '9': {
            id: '9',
            title: 'Ormanın Derinlikleri',
            content: `Haritada işaretli yere ulaştınız. Büyük bir taş kapı var ve üzerinde garip semboller kazınmış.`,
            choices: [
            { id: '1', text: 'Sembolleri çözerek kapıyı aç', nextChapterId: '14' },
            { id: '2', text: 'Güç kullanarak zorla aç', nextChapterId: '15' }
            ]
        },
        '10': {
            id: '10',
            title: 'Tapınak Notları',
            content: `Odadaki eski notları inceliyorsunuz. Notlarda kaybolmuş bir medeniyetin sırları yazıyor.`,
            choices: [
            { id: '1', text: 'Notları yanınıza al', nextChapterId: '9' },
            { id: '2', text: 'Notları bırak ve dışarı çık', nextChapterId: '3' }
            ]
        },
        '11': {
            id: '11',
            title: 'Şehir Kalıntıları Keşfi',
            content: `Kalıntılarda gizemli bir alan buluyorsunuz. Atmosfer gizemli ve biraz tehlikeli.`,
            choices: [
            { id: '1', text: 'Derinlemesine keşfet', nextChapterId: '16' },
            { id: '2', text: 'Güvenli alana dön', nextChapterId: '1' }
            ]
        },
        '12': {
            id: '12',
            title: 'Karanlık Koridor',
            content: `Koridor uzanıyor ve ayak sesleri duyuyorsunuz. Bir gölge hızla köşeden geçiyor.`,
            choices: [
            { id: '1', text: 'Gölgeyi takip et', nextChapterId: '17' },
            { id: '2', text: 'Koridordan geri dön', nextChapterId: '4' }
            ]
        },
        '13': {
            id: '13',
            title: 'Mağara Derinlikleri',
            content: `Mağara karanlık ve nemli. İçeride eski bir hazinenin parıltısı görünüyor.`,
            choices: [
            { id: '1', text: 'Hazineye yaklaş', nextChapterId: '18' },
            { id: '2', text: 'Geri çık', nextChapterId: '8' }
            ]
        },
        '14': {
            id: '14',
            title: 'Taş Kapı',
            content: `Sembolleri çözerek kapıyı açtınız. İçeride kayıp bir tapınak ve eski eserler var.`,
            choices: [],
            isEnding: true
        },
        '15': {
            id: '15',
            title: 'Zorla Açılan Kapı',
            content: `Kapıyı zorla açtınız, ancak içerideki tuzak tetiklendi. Macera burada sona eriyor.`,
            choices: [],
            isEnding: true
        },
        '16': {
            id: '16',
            title: 'Taş Levha Sırrı',
            content: `Levhadaki dili çözüyorsunuz ve kaybolmuş bir medeniyetin hazinesine dair ipuçları buluyorsunuz.`,
            choices: [],
            isEnding: true
        },
        '17': {
            id: '17',
            title: 'Gölgeyle Karşılaşma',
            content: `Gölgeyi takip ettiniz ve eski bir büyücünün izini buldunuz. Macera yeni bir göreve dönüşüyor.`,
            choices: [],
            isEnding: true
        },
        '18': {
            id: '18',
            title: 'Hazine',
            content: `Hazinenin içindesiniz. Altın ve değerli taşlar etrafı kaplıyor. Büyük bir seçim yapmanız gerekiyor.`,
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
    content: `Mars'ta ilk geceniz. Kırmızı toz fırtınası yaklaşmakta. Kapsülünüzün penceresinden dışarı bakıyorsunuz.`,
    choices: [
      { id: '1', text: 'Dışarı çık ve araştır', nextChapterId: '2' },
      { id: '2', text: 'Kapsülde kal ve durumu gözlemle', nextChapterId: '3' }
    ]
  },
  '2': {
    id: '2',
    title: 'Yabancı Sinyal',
    content: `Dışarı çıkınca bilinmeyen bir sinyal alıyorsunuz. Tuhaf ve ritmik bir mesaj gibi.`,
    choices: [
      { id: '1', text: 'Sinyali takip et', nextChapterId: '4' },
      { id: '2', text: 'Sinyali görmezden gel ve kampına dön', nextChapterId: '5' }
    ]
  },
  '3': {
    id: '3',
    title: 'Kapsül Güvenli',
    content: `Kapsülünüz güvenli. Fırtına yaklaşıyor, dışarısı kırmızı bir gölgeye bürünüyor.`,
    choices: [
      { id: '1', text: 'Fırtınadan sonra dışarı çık', nextChapterId: '4' },
      { id: '2', text: 'Kapsülde dinlen ve verileri incele', nextChapterId: '5' }
    ]
  },
  '4': {
    id: '4',
    title: 'Kayıp Koloni',
    content: `Sinyali takip ederek terk edilmiş bir koloni buluyorsunuz. Boş kapsüller ve bilinmeyen yazıtlar dikkat çekiyor.`,
    choices: [
      { id: '1', text: 'Koloniyi incele', nextChapterId: '6' },
      { id: '2', text: 'Güvenli bölgeye dön', nextChapterId: '5' }
    ]
  },
  '5': {
    id: '5',
    title: 'Yeni Başlangıç',
    content: `Mars'ta yeni bir kamp kuruyorsunuz. Çadırlar yerleştirildi, cihazlar aktif. Bölgeyi keşfetmeye başlıyorsunuz.`,
    choices: [
      { id: '1', text: 'Yakındaki kraterleri keşfet', nextChapterId: '7' },
      { id: '2', text: 'Kampın etrafında güvenlik turu yap', nextChapterId: '8' }
    ]
  },
  '6': {
    id: '6',
    title: 'Koloninin Sırları',
    content: `Koloniyi inceliyorsunuz. Bir mesaj var: "Bizi takip etmeyin. Tehlike yaklaşıyor."`,
    choices: [
      { id: '1', text: 'Mesajı dikkate al ve uzaklaş', nextChapterId: '5' },
      { id: '2', text: 'Tehlikeyi göze al ve ileri git', nextChapterId: '9' }
    ]
  },
  '7': {
    id: '7',
    title: 'Krater Keşfi',
    content: `Kraterlerin içinde tuhaf mineral oluşumları ve eski yapılar görüyorsunuz.`,
    choices: [
      { id: '1', text: 'Kraterin derinliklerine in', nextChapterId: '10' },
      { id: '2', text: 'Kamp alanına geri dön', nextChapterId: '5' }
    ]
  },
  '8': {
    id: '8',
    title: 'Güvenlik Turu',
    content: `Kampın çevresini kontrol ediyorsunuz. Sinyal bozuklukları ve ışık parlamaları fark ediyorsunuz.`,
    choices: [
      { id: '1', text: 'Parlamaları takip et', nextChapterId: '9' },
      { id: '2', text: 'Kampı güvenli tut', nextChapterId: '5' }
    ]
  },
  '9': {
    id: '9',
    title: 'Bilinmeyen Kaynak',
    content: `Sinyalin kaynağı eski bir koloninin yer altı laboratuvarı. Gizemli bir enerji hissediyorsunuz.`,
    choices: [
      { id: '1', text: 'Laboratuvarı incele', nextChapterId: '11' },
      { id: '2', text: 'Hemen geri dön ve bilgi topla', nextChapterId: '5' }
    ]
  },
  '10': {
    id: '10',
    title: 'Kraterin Derinlikleri',
    content: `Kraterin derinliklerinde eski bir uzay aracı kalıntısı buluyorsunuz.`,
    choices: [
      { id: '1', text: 'Enerji çekirdeklerini al', nextChapterId: '12' },
      { id: '2', text: 'Sadece kayıt cihazlarını al', nextChapterId: '13' }
    ]
  },
  '11': {
    id: '11',
    title: 'Laboratuvar Sırrı',
    content: `Laboratuvarı inceliyorsunuz. Cihazlar çalışıyor ve Mars'ta kayıp bir teknolojinin izlerini gösteriyor.`,
    choices: [],
    isEnding: true
  },
  '12': {
    id: '12',
    title: 'Enerji Çekirdeği',
    content: `Enerji çekirdeğini aldınız. Mars kolonisi için büyük bir güç kaynağı olabilir.`,
    choices: [],
    isEnding: true
  },
  '13': {
    id: '13',
    title: 'Kayıt Cihazları',
    content: `Kayıt cihazlarını aldınız. Mars'ın eski kolonisi hakkında önemli bilgiler içeriyor.`,
    choices: [],
    isEnding: true
  }
}
  }];

export default sampleStories;
