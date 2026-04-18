# textit

`texit`, karakterleri doğrudan yazmak yerine, hiyerarşik bir seçim süreciyle (karakter gruplarını daraltarak) oluşturmanıza olanak tanıyan deneysel ve interaktif bir metin yazma aracıdır.

## Proje Hakkında

Bu proje, geleneksel klavye girişinden farklı olarak, bir karar ağacı (decision tree) mantığıyla çalışan bir karakter seçme mekanizması sunar. Kullanıcılar, geniş karakter setlerini her adımda daha küçük gruplara bölerek ve her aşamada bir grubu seçerek nihai karakterlerine ulaşırlar. Bu yöntem, standart bir klavye kullanımından ziyade, bir tür "karakter navigasyonu" deneyimi sunar.

## Temel Özellikler

- **Hiyerarşik Karakter Seçimi:** Karakter setleri, her adımda ikiye bölünerek daha spesifik alt kümelere ayrılır.
- **İnteraktif Kullanıcı Deneyimi:** Tıklama tabanlı, görsel bir seçim süreci.
- **Geniş Karakter Yelpazesi:** Latin alfabesi (küçük/büyük harf), rakamlar ve çeşitli özel sembolleri destekler.
- **Dinamik Yenileme:** Seçim yapıldıkça karakter grupları anlık olarak güncellenir ve seçilen karakter ana metin alanına eklenir.
- **Sıfırlama Mekanizması:** Seçim sürecini tek bir dokunuşla en başa döndürme imkanı.

## Nasıl Çalışır?

Sistem, karakterleri iç içe geçmiş diziler (arrays) olarak tutar. Çalışma mantığı şu adımlardan oluşur:

1. **Başlangıç:** Uygulama, en geniş karakter kümesiyle başlar.
2. **Daraltma (Splitting):** Kullanıcı, `<` veya `>` butonlarını kullanarak veya ekrandaki karakter gruplarına tıklayarak mevcut karakter kümesini ikiye böler.
3. **Derinleşme:** Her seçim, kullanıcıyı daha küçük ve daha spesifik bir karakter grubuna yönlendirir.
4. **Karakter Tamamlama:** Eğer bir seçim sonucunda geriye tek bir karakter kalırsa, bu karakter otomatik olarak "metin alanı"na (possible_text) eklenir ve sistem bir sonraki karakter için başlangıç durumuna döner.
5. **Sıfırlama:** `-` butonu veya metin alanına tıklama yoluyla seçim süreci tamamen sıfırlanabilir.

## Teknik Detaylar

- **Teknoloji Yığını:** Saf HTML5 ve JavaScript (Vanilla JS). Herhangi bir harici kütüphane bağımlılığı yoktur.
- **Algoritma:** Karakter gruplarının bölünmesi için `div_active_texit` fonksiyonu üzerinden dinamik bir dizi bölme mantığı kullanılır.
- **Yapı:** Veri yapısı, karakterlerin hiyerarşik olarak gruplandığı iç içe geçmiş dizilerden oluşur.

## Kurulum ve Kullanım

Herhangi bir kurulum gerektirmez. `index.html` dosyasını herhangi bir modern web tarayıcısıyla açarak uygulamayı hemen kullanmaya başlayabilirsiniz.
