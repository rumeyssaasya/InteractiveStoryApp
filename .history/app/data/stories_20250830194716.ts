import { Story } from '../types';

export const sampleStories: Story[] = [
  {
    id: '1',
    title: 'Zaman Yolcusu',
    description: 'Bir zaman makinesi ile geçmişe yolculuk',
    author: 'Ahmet Yılmaz',
    coverImage: 'https://picsum.photos/seed/time/400/200',
    firstChapterId: '1',
    chapters: {
      '1': {
        id: '1',
        title: 'Başlangıç',
        content: `Laboratuvarın ortasında parıldayan metalik bir kubbenin önünde duruyorsunuz. Profesör Elara, "Dikkatli olun," diyor. "Zaman, hassas bir ipliktir. Küçük bir değişiklik bile büyük sonuçlar doğurabilir."\n\nMakinenin içine adım atıyorsunuz ve kapı yavaşça kapanıyor. Işıklar yanıp sönüyor ve aniden kendinizi farklı bir zamanda buluyorsunuz.`,
        choices: [
          {
            id: '1',
            text: '19. yüzyıl Londrasına git',
            nextChapterId: '2'
          },
          {
            id: '2',
            text: 'Antik Mısır\'a git',
            nextChapterId: '3'
          }
        ]
      },
      '2': {
        id: '2',
        title: 'Endüstri Devrimi Londrası',
        content: `Sisli bir Londra sokağında buluyorsunuz kendinizi. Fabrika dumanları gökyüzünü karartmış. Yanınızda duran çocuk size garip garip bakıyor. "Bayım, iyi misiniz? Kıyafetleriniz çok tuhaf," diyor.`,
        choices: [
          {
            id: '1',
            text: 'Çocuğa zaman yolcusu olduğunu söyle',
            nextChapterId: '4'
          },
          {
            id: '2',
            text: 'Sadece kaybolduğunu söyle',
            nextChapterId: '5'
          }
        ]
      },
      '7': {
        id: '7',
        title: 'Son',
        content: `Zaman makinesine geri dönmeyi başardınız. Profesör Elara sizi gülümseyerek karşılıyor. "Harika bir iş çıkardınız!" Artık evdesiniz, ama bir zaman yolcusu olarak hayatınız sonsuza kadar değişti.`,
        choices: [],
        isEnding: true
      }
    }
  }
];

export default sampleStories;