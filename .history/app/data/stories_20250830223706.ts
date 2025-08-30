import { Story } from '../types/index';

export const sampleStories: Story[] = [
  {
    id: '1',
    title: 'Zaman Yolcusu',
    description: 'Bir zaman makinesi ile geçmişe yolculuk',
    author: 'Anonim',
    genre: 'Bilim Kurgu',
    coverImage: 'https://picsum.photos/seed/time/400/200',
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
        content: `Çocuğa gerçeği söylüyorsunuz...`, 
        choices: [], isEnding: true },
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
            { id: '2', text: 'Makineyi geri bırak', nextChapterId: '7' }] }
    }
  },

  {
    id: '2',
    title: 'Kayıp Orman',
    description: 'Sisli bir ormanda kaybolmuş bir gezginin hikâyesi',
    author: 'Anonim',
    genre: 'Macera', // Yeni alan
    coverImage: 'https://picsum.photos/seed/forest/400/200',
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
    coverImage: 'https://picsum.photos/seed/mars/400/200',
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
    coverImage: 'https://picsum.photos/seed/city/400/200',
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
    coverImage: 'https://picsum.photos/seed/spacetravel/400/200',
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
