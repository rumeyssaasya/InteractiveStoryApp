# KararKutusu

KararKutusu, interaktif hikayeler sunan bir mobil uygulamadır. Kullanıcılar hikayeleri okuyabilir, seçimler yapabilir ve ilerlemeleri kaydedebilir. Redux Toolkit ile state yönetimi yapılır ve AsyncStorage ile ilerleme persist edilir.

## Teknolojiler

- React Native (Expo)  
- TypeScript  
- Redux Toolkit  
- AsyncStorage  
- Expo Router  
- TailwindCSS (NativeWind ile)  

---

## Kurulum

1. Depoyu klonlayın:
```bash
git clone <repo-link>
```

2. Proje dizinine gidin:
```bash
cd decisionBox
```

3. Gerekli paketleri yükleme:
```bash
npm install
```
4. Nativewind, Tailwindcss Yükleme
-https://www.nativewind.dev/docs/getting-started/installation
-Videodan yardım alabilirsiniz.
https://www.youtube.com/watch?v=FyCaPXpvyNM

5.Paket bağımlılıkları (örnek):
```bash
npm install react react-native expo #Temel bağımlılıklar (React, React Native, Expo)
npm install @reduxjs/toolkit react-redux #Redux Toolkit ve React-Redux
npm install @react-native-async-storage/async-storage #AsyncStorage
npm install expo-router expo-status-bar expo-splash-screen #Expo Router ve diğer Expo modülleri
```

6. Çalıştırma
Expo CLI ile projeyi başlatın:
```bash
npx expo start
# veya
npm start
```
Açılan terminalde QR kodu tarayarak gerçek cihazda veya simülatörde çalıştırabilirsiniz.

Kullanım
Ana sayfada hikayeler listelenecektir.

Bir hikaye seçin → StoryReader sayfası açılır.

Her chapter’da seçim yapabilirsiniz → seçimler Redux store ve AsyncStorage’a kaydedilir.

Uygulamayı kapatıp tekrar açtığınızda ilerlemeniz ve son açtığınız sayfa korunur.

Test
---
- Redux store kontrolü:
var

- StoryReader seçimleri:

Her chapter’da seçim yaptıktan sonra bir sonraki chapter doğru mu yükleniyor?
<img src="![WhatsApp Görsel 2025-08-31 saat 03 08 00_015f14aa](https://github.com/user-attachments/assets/8649e7ef-6fa9-451c-9f2a-726303636ae6) alt="Açıklama" width="300" height="200">

Seçimler AsyncStorage’a kaydediliyor mu?
 ![WhatsApp Görsel 2025-08-31 saat 03 08 00_f2ae8c3e](https://github.com/user-attachments/assets/62b9211f-a33f-4e07-9644-2c78bdb51d40)

Uygulama yeniden başlatınca son açılan sayfa (lastRoute) doğru yükleniyor mu?
 Evet

Kullanıcı ilerlemesi korunuyor mu?
Evet
![WhatsApp Görsel 2025-08-31 saat 03 08 00_f2ae8c3e](https://github.com/user-attachments/assets/5ea3cab9-36b4-40c4-b880-40323a2887c6)


Tablar arasında geçiş yapılırken hata alınıyor mu?
 Hayır
![WhatsApp Görsel 2025-08-31 saat 03 07 59_7c1a6462](https://github.com/user-attachments/assets/ece88acf-734d-4193-ba5b-4108327f97a1)
![WhatsApp Görsel 2025-08-31 saat 03 08 00_f2ae8c3e](https://github.com/user-attachments/assets/a1e20ff0-3deb-420c-bfd3-ed660655a654)
![WhatsApp Görsel 2025-08-31 saat 03 08 00_fa319063](https://github.com/user-attachments/assets/a463269e-b193-4dcd-9fb1-c84cc53a381a)

Proje Yapısı
app/

store/ → Redux store ve slice’lar

data/ → stories.ts

story/ → story sayfaları ([id].tsx, endPage.tsx)

tabs/ → tab layout ve sayfalar

_layout.tsx → root layout ve provider

components/ui/ → UI bileşenleri

types/ → TypeScript tipleri

assets/ → resim, ikon ve görseller

Özellikler
Story seçimleri ve chapter geçişleri

Redux Toolkit ile state yönetimi

AsyncStorage ile ilerleme persist

Sade ve sezgisel kullanıcı arayüzü

Tablar arasında hızlı geçiş ve son rota hatırlama
