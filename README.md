## Proje Yapısı ve İşleyişi

Proje tek ekrandan oluşmaktadır. Ekranın en üstünde, bir satırda kaç sütun olacağını ayarlayabileceğimiz 3 buton bulunmaktadır.
Hemen altında listemiz bulunmaktadır ve data çekimi esnasında güzel bir görünüm için `react-native-skeleton-placeholder` kullanılmıştır.
Listenin altında da sayfalama sistemini oluşturan footer yapımız bulunmaktadır.

Veri çekme ve depolama için bir `custom hook` yazılmıştır.
Eğer daha önce ilgili sayfa verisi çekilmiş ise veri çekilmeden `react-native-async-storage` üzerinden veri okunmaktadır.
Uygulama kapandığında da verinin kalması için `redux-persist` kullanılmıştır.
Global state management için `react-redux` ve `redux-toolkit` kullanılmıştır.
ApiUrl ve benzeri verilerin güvenli bir şekilde depolanması için `.env` dosyası oluşturulmuştur. Bunun için de `react-native-dotenv` kütüphanesi entegre edilmiştir.

Her bir Home Screen bilşeninin `birim testleri` yazılmıştır ve custom hook için de `birim testler` yazılmıştır.
Aynı zamanda bileşen, JS ve Native hatalar için `react-native-exception-handler` ve `react-native-error-boundary` kütüphaneleri entegre edilmiştir.

## Adım 1: Uygulama Paketlerini İndirin

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### iOS İçin

Podları indirin

```bash
cd ios

pod install or npx pod install
```

## Adım 2: Metro' yu Çalıştırın

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Adım 3: Uygulamayı Çalıştırın

### Android İçin

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### iOS İçin

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Projenin güvenlik zafiyetleri ve kod güvenliği için önlemler

### API Anahtarları ve Hassas Bilgilerin Güvenliği:

Hassas bilgilerin uygulama kodunda doğrudan depolanması yerine, bu tür bilgilerin güvenli bir şekilde saklanmasını sağlayan araçlar veya hizmetler kullanılmalıdır. Örneğin, iOS için Keychain Services veya Android için Güvenli Paylaşılan Tercihler gibi platform spesifik çözümler kullanılabilir.

### Depolama Güvenliği:

Hassas kullanıcı verilerinin depolanması gerekiyorsa, güvenli depolama seçenekleri kullanılmalıdır. Örneğin, React Native projelerinde Async Storage kullanılıyorsa, bu depolama yöntemi sadece hassas olmayan veriler için tercih edilmelidir.

### Kimlik Doğrulama ve Yetkilendirme:

Güçlü kimlik doğrulama protokolleri ve yetkilendirme yöntemleri kullanılmalıdır. OAuth2 gibi güvenilir kimlik doğrulama protokolleri tercih edilmelidir. Ayrıca, PKCE gibi ek güvenlik katmanları da uygulanmalıdır.

### Ağ Güvenliği:

Tüm ağ trafiğinin SSL/TLS ile şifrelenmesi sağlanmalıdır. Ayrıca, SSL pinning gibi ek güvenlik önlemleri de uygulanabilir.

### Kod Güvenliği:

Kod incelemesi, güvenlik denetimleri ve düzenli güvenlik kontrolleri gibi önlemler alınarak, kod güvenliği sağlanabilir. Ayrıca, güvenli yazılım geliştirme prensiplerine uygun olarak kodlama yapılmalı ve yaygın güvenlik açıklarını önlemek için en iyi uygulamalar takip edilmelidir.
