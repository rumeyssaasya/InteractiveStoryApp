import { Story } from '../types/index';

export const sampleStories: Story[] = [
  {
    id: '1',
    title: 'Zaman Yolcusu',
    description: 'Bir zaman makinesi ile geçmişe yolculuk',
    author: 'Anonim',
    coverImage: 'https://picsum.photos/seed/time/400/200',
    firstChapterId: '1',
    chapters: {
      '1': {
        id: '1',
        title: 'Başlangıç',
        content: `Laboratuvarın ortasında parıldayan metalik bir kubbenin önünde duruyorsunuz. Profesör Elara, "Dikkatli olun," diyor. "Zaman, hassas bir ipliktir. Küçük bir değişiklik bile büyük sonuçlar doğurabilir."\n\nMakinenin içine adım atıyorsunuz ve kapı yavaşça kapanıyor. Işıklar yanıp sönüyor ve aniden kendinizi farklı bir zamanda buluyorsunuz.`,
        choices: [
          { id: '1', text: '19. yüzyıl Londrasına git', nextChapterId: '2' },
          { id: '2', text: "Antik Mısır'a git", nextChapterId: '3' }
        ]
      },
      '2': {
        id: '2',
        title: 'Endüstri Devrimi Londrası',
        content: `Sisli bir Londra sokağında buluyorsunuz kendinizi. Fabrika dumanları gökyüzünü karartmış. Yanınızda duran çocuk size garip garip bakıyor. "Bayım, iyi misiniz? Kıyafetleriniz çok tuhaf," diyor.`,
        choices: [
          { id: '1', text: 'Çocuğa zaman yolcusu olduğunu söyle', nextChapterId: '4' },
          { id: '2', text: 'Sadece kaybolduğunu söyle', nextChapterId: '5' }
        ]
      },
      '3': {
        id: '3',
        title: 'Antik Mısır',
        content: `Gözlerinizi açtığınızda piramitlerin gölgesinde bir pazar yerindesiniz. İnsanlar egzotik eşyalar satıyor. Bir rahip sizi fark ediyor ve yanınıza geliyor.`,
        choices: [
          { id: '1', text: 'Rahip ile konuş', nextChapterId: '6' },
          { id: '2', text: 'Kalabalığa karış ve kaç', nextChapterId: '7' }
        ]
      },
      '4': {
        id: '4',
        title: 'Zamanın İfşası',
        content: `Çocuğa gerçeği söylüyorsunuz. Çocuk birden panikle koşarak uzaklaşıyor. Birkaç dakika içinde Viktorya dönemi bilim insanları sizi buluyor. Onlara teknolojiyi anlattığınızda tarih akışı değişiyor.`,
        choices: [],
        isEnding: true
      },
      '5': {
        id: '5',
        title: 'Kayıp Yolcu',
        content: `Kaybolduğunuzu söylüyorsunuz. Çocuk size yardım etmeye çalışıyor ama siz çaresiz hissediyorsunuz. Bir süre sonra sisler arasında kayboluyorsunuz...`,
        choices: [],
        isEnding: true
      },
      '6': {
        id: '6',
        title: 'Tanrıların Sırrı',
        content: `Rahip sizi kutsal bir odaya götürüyor. "Senin gelişin kehanetlerde yazıyordu," diyor. Tarihin akışını değiştirecek bir güç teklif ediyor.`,
        choices: [
          { id: '1', text: 'Teklifi kabul et', nextChapterId: '8' }, // 7 yerine 8
          { id: '2', text: 'Reddet ve kaç', nextChapterId: '5' }
        ]
      },
      '7': {
        id: '7',
        title: 'Son',
        content: `Zaman makinesine geri dönmeyi başardınız. Profesör Elara sizi gülümseyerek karşılıyor. "Harika bir iş çıkardınız!" Artık evdesiniz, ama bir zaman yolcusu olarak hayatınız sonsuza kadar değişti.`,
        choices: [],
        isEnding: true
      },
      '8': {
        id: '8',
        title: 'Tanrıların Gücü',
        content: `Teklifi kabul ettiniz ve tanrıların gücüne sahip oldunuz. Zamanı kontrol edebiliyorsunuz ama bu güç büyük bir sorumluluk getiriyor.`,
        choices: [
          { id: '1', text: 'Gücü dünyayı kurtarmak için kullan', nextChapterId: '9' },
          { id: '2', text: 'Gücü reddet ve normale dön', nextChapterId: '7' }
        ]
      },
      '9': {
        id: '9',
        title: 'Kurtarıcı',
        content: `Zamanın gücünü kullanarak dünyayı büyük bir felaketten kurtardınız. Artık bir efsanesiniz.`,
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
    coverImage: 'https://picsum.photos/seed/forest/400/200',
    firstChapterId: '1',
    chapters: {
      '1': {
        id: '1',
        title: 'Sisli Giriş',
        content: `Yoğun sisin içinde ormana adım atıyorsun. Uzakta kurt ulumaları duyuluyor. Önünde iki patika var.`,
        choices: [
          { id: '1', text: 'Sağdaki patikadan git', nextChapterId: '2' },
          { id: '2', text: 'Soldaki patikadan git', nextChapterId: '3' }
        ]
      },
      '2': {
        id: '2',
        title: 'Nehrin Kenarı',
        content: `Bir nehir kenarına ulaşıyorsun. Suyun sesi huzur verici. Ama köprünün çürük olduğu belli.`,
        choices: [
          { id: '1', text: 'Köprüden geç', nextChapterId: '4' },
          { id: '2', text: 'Nehrin kıyısında ilerle', nextChapterId: '5' }
        ]
      },
      '3': {
        id: '3',
        title: 'Eski Tapınak',
        content: `Ağaçların arasında gizlenmiş eski bir tapınak buluyorsun. Kapısında semboller parlıyor.`,
        choices: [
          { id: '1', text: 'Tapınağa gir', nextChapterId: '6' },
          { id: '2', text: 'Geri dön', nextChapterId: '2' }
        ]
      },
      '4': {
        id: '4',
        title: 'Köprü Çöktü',
        content: `Köprünün ortasına vardığında tahtalar kırılıyor ve suya düşüyorsun. Akıntı seni sürüklüyor.`,
        choices: [],
        isEnding: true
      },
      '5': {
        id: '5',
        title: 'Kurtuluş',
        content: `Nehir boyunca ilerledikten sonra bir çıkış buluyorsun. Ormandan sağ salim çıktın.`,
        choices: [],
        isEnding: true
      },
      '6': {
        id: '6',
        title: 'Tapınağın Sırrı',
        content: `Tapınağın içinde eski yazıtlar buluyorsun. Bir anda ışık patlıyor ve farklı bir diyara geçiş yapıyorsun.`,
        choices: [],
        isEnding: true
      }
    }
  },
  {
    id: '3',
    title: 'Uzay Kolonisi',
    description: 'Mars’ta kurulan ilk kolonide yaşanan gizemli olaylar',
    author: 'Anonim',
    coverImage: 'https://picsum.photos/seed/mars/400/200',
    firstChapterId: '1',
    chapters: {
      '1': {
        id: '1',
        title: 'İlk Gün',
        content: `Mars kolonisinde ilk sabahına uyanıyorsun. Dışarıda kırmızı toz fırtınası var.`,
        choices: [
          { id: '1', text: 'Fırtınaya rağmen dışarı çık', nextChapterId: '2' },
          { id: '2', text: 'Kontrol merkezine git', nextChapterId: '3' }
        ]
      },
      '2': {
        id: '2',
        title: 'Kayıp Gezgin',
        content: `Dışarı çıktığında iletişim kayboluyor. Fırtınada yönünü kaybediyorsun.`,
        choices: [],
        isEnding: true
      },
      '3': {
        id: '3',
        title: 'Merkezde Kriz',
        content: `Kontrol merkezinde elektrikler gidiyor. Ekranda bilinmeyen bir sinyal beliriyor.`,
        choices: [
          { id: '1', text: 'Sinyali takip et', nextChapterId: '4' },
          { id: '2', text: 'Sistemi yeniden başlat', nextChapterId: '5' }
        ]
      },
      '4': {
        id: '4',
        title: 'Yabancı Mesaj',
        content: `Sinyali çözüyorsun. Mesaj bir uygarlığa ait! Koloninin kaderi değişecek.`,
        choices: [],
        isEnding: true
      },
      '5': {
        id: '5',
        title: 'Koloni Güvende',
        content: `Sistemi yeniden başlattın, elektrikler geri geldi. Kriz atlatıldı. Koloni yaşamaya devam ediyor.`,
        choices: [],
        isEnding: true
      }
    }
  }
];

export default sampleStories;
