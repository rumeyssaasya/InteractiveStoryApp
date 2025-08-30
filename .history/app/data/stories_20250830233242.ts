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
        content: `Laboratuvarın ortasında parıldayan metalik bir kubbenin önünde duruyorsunuz.\nProfesör Elara:
        - Dikkatli olun,
        - Zaman, hassas bir ipliktir. Küçük bir değişiklik bile büyük sonuçlar doğurabilir.\n\nMakinenin içine adım atıyorsunuz ve kapı yavaşça kapanıyor. Işıklar yanıp sönüyor ve aniden kendinizi farklı bir zamanda buluyorsunuz.`,
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
        - İyi misiniz? Kıyafetleriniz çok garip. Siz kimsiniz?\n\n
        O srada etrafınızdaki değişiklikleri fark ediyorsunuz. At arabaları, gaz lambaları ve dumanlı fabrikalar...`, 
        choices: [
            { id: '1', text: 'Çocuğa zaman yolcusu olduğunu söyle', nextChapterId: '4' }, 
            { id: '2', text: 'Sadece kaybolduğunu söyle', nextChapterId: '5' }] },
      '3': { 
        id: '3', 
        title: 'Antik Mısır', 
        content: `Gözlerinizi açtığınızda piramitlerin gölgesinde bir pazar yerindesiniz...`,
         choices: [
            { id: '1', text: 'Rahip ile konuş', nextChapterId: '6' }, 
            { id: '2', text: 'Kalabalığa karış ve kaç', nextChapterId: '7' }] },
      '4': { 
        id: '4', 
        title: 'Zamanın İfşası', 
        content: `Çocuk büyük bir şaşkınlıkla size bakıyor. Dalga geçtiğinizi düşünerek gülüyor. `, 
        choices: [
            { id: '1', text: 'Çocuğa dalga geçmediğini anlatmaya çalış.', nextChapterId: '11' }, 
            { id: '2', text: 'Çocuğu umursamadan ilerlemeye devam et', nextChapterId: '12' }] },
        
      '5': { 
        id: '5', 
        title: 'Kayıp Yolcu', 
        content: `Kaybolduğunuzu söylüyorsunuz...`, 
        choices: [], isEnding: true },
      '6': { 
        id: '6', 
        title: 'Tanrıların Sırrı', 
        content: `Rahip sizi kutsal bir odaya götürüyor...`, 
        choices: [
            { id: '1', text: 'Teklifi kabul et', nextChapterId: '8' }, 
            { id: '2', text: 'Reddet ve kaç', nextChapterId: '5' }] },
      '7': { 
        id: '7', 
        title: 'Son', 
        content: `Zaman makinesine geri dönmeyi başardınız...`, 
        choices: [], isEnding: true },
      '8': { 
        id: '8', 
        title: 'Tanrıların Gücü', 
        content: `Teklifi kabul ettiniz ve tanrıların gücüne sahip oldunuz...`, 
        choices: [
            { id: '1', text: 'Gücü dünyayı kurtarmak için kullan', nextChapterId: '9' }, 
            { id: '2', text: 'Gücü reddet ve normale dön', nextChapterId: '7' }] },
      '9': { 
        id: '9', 
        title: 'Kurtarıcı', 
        content: `Zamanın gücünü kullanarak dünyayı büyük bir felaketten kurtardınız...`, 
        choices: [], isEnding: true },
      '10': { 
        id: '10', 
        title: 'Gizli Gelecek', 
        content: `Zaman makinesinden çıkarken geleceğe dair bir ipucu buluyorsunuz...`, 
        choices: [
            { id: '1', text: 'İpuçlarını takip et', nextChapterId: '9' }, 
            { id: '2', text: 'Makineyi geri bırak', nextChapterId: '7' }] },
       '11': { 
        id: '11', 
        title: 'Zamanın İfşası',  
        content: `Çocuğa bak gelecekte zaman`, 
        choices: [
            { id: '', text: '', nextChapterId: '8' },
            { id: '', text: '', nextChapterId: '5' }] },
        
       '12': {
        id: '12',
        title: 'Sisli Sokakların Sırrı',
        content: `Çocuğu geride bırakıp Londra sokaklarında ilerliyorsunuz. Sis kalın ve ağır; gaz lambalarının ışığı neredeyse görünmüyor. 
        Bir anda dar bir sokakta gizemli bir silüet görüyorsunuz; üzerindeki uzun pelerin rüzgarda dalgalanıyor. Silüet size doğru konuşuyor:
        - Zaman yolcusu, buraya tesadüfen mi geldin yoksa bir görev mi var?
        Soru, zihninizde yankılanıyor. Ne yapacaksınız?`,
        choices: [
            { id: '1', text: 'Silüeti takip et', nextChapterId: '13' },
            { id: '2', text: 'Uzaklaş ve kendi yoluna devam et', nextChapterId: '14' }
        ]
        },

        '13': {
        id: '13',
        title: 'Gizli Toplantı',
        content: `Silüeti takip ediyorsunuz ve gizli bir toplantı odasına geliyorsunuz. Oda, mekanik cihazlarla dolu ve duvarlarda zamanla ilgili semboller var.
        Silüet size bakarak:
        - Burada geçmişin sırlarını koruyoruz, ama her zaman tehlikeler var. Görevin kabul edersen, tarihin akışını değiştirebilirsin.
        Bu teklif büyük bir risk ve aynı zamanda büyük bir güç içeriyor. Ne yapacaksınız?`,
        choices: [
            { id: '1', text: 'Teklifi kabul et ve göreve başla', nextChapterId: '15' },
            { id: '2', text: 'Reddet ve Londra’ya geri dön', nextChapterId: '14' }
        ]
        },

        '14': {
        id: '14',
        title: 'Sisli Kaçış',
        content: `Londra sokaklarından uzaklaşıyorsunuz, sis hala ağır. Ancak arkanızdan gelen ayak sesleri sizi tedirgin ediyor. 
        Bir anda fark ediyorsunuz ki, sizi izleyenler sadece sıradan insanlar değil, zamanın bekçileri. Kaçışınız zorlu olacak.`,
        choices: [
            { id: '1', text: 'Saklan ve bekle', nextChapterId: '16' },
            { id: '2', text: 'Hızlıca şehrin çıkışına koş', nextChapterId: '17' }
        ]
        },

        '15': {
        id: '15',
        title: 'Zamanın Görevi',
        content: `Görevi kabul ettiniz. Size verilen mekanik cihaz, zamanı kısa süreliğine değiştirebilme gücü sağlıyor. 
        İlk hedefiniz, Londra’da büyük bir yangını önlemek. Ancak bunun için geçmişin kritik noktalarını değiştirmeniz gerekiyor. Her adım bir risktir; yanlış bir hareket tarihin akışını tamamen bozabilir.
        Karar zamanı geldi.`,
        choices: [
            { id: '1', text: 'Yangını önlemek için müdahale et', nextChapterId: '18' },
            { id: '2', text: 'Yangına müdahale etme ve gözlemle', nextChapterId: '19' }
        ]
        },

        '16': {
        id: '16',
        title: 'Gölgedeki Bekleyiş',
        content: `Saklanıyorsunuz. Zamanın bekçileri sokaktan geçip gidiyor. Bu sessizlik, size düşünme fırsatı veriyor. 
        Bu sırada kendi geçmişinize dair unutulmuş anlar zihninizde canlanıyor. Zaman yolculuğunun gerçek anlamını sorguluyorsunuz. 
        Belki de tarih sadece izlenmeli, müdahale edilmemeli.`,
        choices: [
            { id: '1', text: 'Dönüş için zaman makinesine geri dön', nextChapterId: '7' },
            { id: '2', text: 'Beklemeye devam et ve izlemeye devam et', nextChapterId: '20' }
        ]
        },

        '17': {
        id: '17',
        title: 'Kaçışın Bedeli',
        content: `Şehrin çıkışına koşarken, birden gök gürültüsü gibi bir patlama duyuyorsunuz. Zamanın bekçileri bir geçidi kapatıyor ve sizin yönünüzü değiştiriyor. 
        Kaçışınız sadece fiziksel değil, aynı zamanda zamanın akışını etkileyecek bir sınav haline geliyor. Her adımınız tarih ile oynuyor.`,
        choices: [
            { id: '1', text: 'Yeni yolu keşfet', nextChapterId: '21' },
            { id: '2', text: 'Durdur ve geri dön', nextChapterId: '7' }
        ]
        },

        '18': {
        id: '18',
        title: 'Yangını Önlemek',
        content: `Zamanı değiştirerek yangını önlemeyi başarıyorsunuz. Ancak ufak bir değişiklik bile şehrin başka bir bölgesinde zincirleme sonuçlar doğuruyor. 
        İnsanlar farklı şekillerde etkileniyor, kader değişiyor ve siz sorumluluğun ağırlığını hissediyorsunuz. Zamanın gücü ne kadar kontrollü kullanılabilir?`,
        choices: [
            { id: '1', text: 'Değişiklikleri düzeltmeye çalış', nextChapterId: '22' },
            { id: '2', text: 'Yeni durumu kabul et', nextChapterId: '23' }
        ]
        },

        '19': {
        id: '19',
        title: 'Gözlemci Yolcu',
        content: `Yangına müdahale etmeyip izlemeyi seçtiniz. Gözlemlediğinizde, insanların özverisi ve küçük müdahaleleriyle yangının doğal olarak önlendiğini görüyorsunuz. 
        Bazen tarihin akışına müdahale etmek yerine gözlemlemek daha büyük dersler sunar. Ancak vicdanınız bu seçimden memnun mu?`,
        choices: [
            { id: '1', text: 'Dön ve Prof. Elara’ya rapor ver', nextChapterId: '10' },
            { id: '2', text: 'Zamanın akışını daha fazla gözlemle', nextChapterId: '20' }
        ]
        },

        '20': {
        id: '20',
        title: 'Sessiz Öğrenme',
        content: `Bekleyiş sırasında geçmişin farklı dönemlerini zihninizde gözden geçiriyorsunuz. 
        Zaman yolculuğu sadece fiziksel bir hareket değil, aynı zamanda öğrenme ve deneyim kazanma yolculuğu. 
        Kendi kararlarınızın anlamını kavrıyor ve geleceğe dair planlar yapıyorsunuz.`,
        choices: [
            { id: '1', text: 'Zaman makinesine dön', nextChapterId: '7' },
            { id: '2', text: 'Yeni bir görev için hazırlan', nextChapterId: '15' }
        ]
        },

        '21': {
        id: '21',
        title: 'Yeni Yol',
        content: `Bekçilerin kapattığı geçit sizi bilinmeyen bir Londra bölgesine yönlendiriyor. Bu bölge tamamen farklı: sokaklar daha dar, insanlar daha gizemli ve mekanik cihazlar her yerde. 
        Belki de burada zamanın sırları tamamen farklıdır ve burası size tarihin yeni yüzünü gösterecek.`,
        choices: [
            { id: '1', text: 'Keşfe devam et', nextChapterId: '15' },
            { id: '2', text: 'Geri dönmek için alternatif yol ara', nextChapterId: '7' }
        ]
        },

        '22': {
        id: '22',
        title: 'Zamanın Onarımı',
        content: `Değişiklikleri düzeltmeye karar verdiniz. Mekanik cihazın yardımıyla küçük müdahaleler yapıyorsunuz. 
        Her düzeltme, yeni bir sonucu beraberinde getiriyor. Zamanın ağırlığı omuzlarınızda hissediliyor. Artık bir kurtarıcı mı yoksa sadece izleyen biri misiniz?`,
        choices: [
            { id: '1', text: 'Dünyayı kurtarmaya devam et', nextChapterId: '9' },
            { id: '2', text: 'Normal hayata dön', nextChapterId: '7' }
        ]
        },

        '23': {
        id: '23',
        title: 'Yeni Düzen',
        content: `Değişiklikleri kabul ettiniz. Şehir farklı bir şekilde gelişti, insanlar farklı yollar seçti. Siz artık tarihin bir parçasısınız. 
        Ancak, geçmişe dair bilinmeyen etkiler hala var ve gelecekte yeni kararlar vermeniz gerekecek.`,
        choices: [
            { id: '1', text: 'Yeni görevler için hazırlık yap', nextChapterId: '15' },
            { id: '2', text: 'Zaman makinesine dön ve bekle', nextChapterId: '7' }
        ]
        },  
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
      '1': { id: '1', title: 'Sisli Giriş', content: `Yoğun sisin içinde ormana adım atıyorsun...`, choices: [{ id: '1', text: 'Sağdaki patikadan git', nextChapterId: '2' }, { id: '2', text: 'Soldaki patikadan git', nextChapterId: '3' }] },
      '2': { id: '2', title: 'Nehrin Kenarı', content: `Bir nehir kenarına ulaşıyorsun...`, choices: [{ id: '1', text: 'Köprüden geç', nextChapterId: '4' }, { id: '2', text: 'Nehrin kıyısında ilerle', nextChapterId: '5' }] },
      '3': { id: '3', title: 'Eski Tapınak', content: `Ağaçların arasında gizlenmiş eski bir tapınak buluyorsun...`, choices: [{ id: '1', text: 'Tapınağa gir', nextChapterId: '6' }, { id: '2', text: 'Geri dön', nextChapterId: '2' }] },
      '4': { id: '4', title: 'Köprü Çöktü', content: `Köprünün ortasına vardığında tahtalar kırılıyor...`, choices: [], isEnding: true },
      '5': { id: '5', title: 'Kurtuluş', content: `Nehir boyunca ilerledikten sonra bir çıkış buluyorsun...`, choices: [], isEnding: true },
      '6': { id: '6', title: 'Tapınağın Sırrı', content: `Tapınağın içinde eski yazıtlar buluyorsun...`, choices: [], isEnding: true }
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
