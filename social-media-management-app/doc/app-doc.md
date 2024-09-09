Uygulamada istenildiği gibi kullanıcı girişi yapıldıktan sonra kullanıcıların sosyal medya linklerini yönetebilecekleri bir platform oluşturulmuştur.Uygulamaya ayağa kaldırıldığında kullanıcı giriş sayfası açılmaktadır. Giriş yapılmadan sosyal medya bilgilerine ulaşılamamaktadır. Kullanıcı giriş yaptıktan sonra sosyal medya bilgileri listelenmektedir. Bu liste üzerinde sosyal medya linki, sosyal medya adı ve sosyal medya açıklaması bulunmaktadır. Kullanıcı bu bilgileri güncelleyebilir ve silebilir. Aynı zamanda yeni sosyal medya hesabı ekleyebilir. Uygulamadan çıkmak isteyen kullanıcın logout yapması yeterlidir. Uygulama atomic design prensiplerine uygun tasarlanmıştır. Tasarım figma üzerinden birebir responsive olarak tasarlanmıştır. İstenildiği üzere custom directive ve pipe yapıları eklenmiştir. Uyguklama guard yapısıyla kullanıcı girişi kontrolü sağlanmıştır. API’ler nodejs expressjs kullanarak kodlanmış ve uygulamaya eklenmiştir. Veri tabanı olarak mongoDB kullanılmıştır. Oluşturulan API’ler postman collection olarak uygulamaya eklenmiştir. 

Uygulama ayağa kaldırılırken npm install sonrası ng serve kodlarıyla çalıştırılabilir.  
Backend için ise npm install sonrası npm start olarak çalıştırılabilir.

**Geliştirilenler:**

1. **Ana Sayfa**  
* Kullanıcıların mevcut sosyal medya bilgileri nodeJS kullanarak yazılan Rest API üzerinden ana sayfa üzerine listelendi.  
* Ana sayfa UI tasarımları figma üzerinden birebir ve responsive olarak koda döküldü.  
2. **Link Ekleme ve Güncelleme**  
* Yeni sosyal medya bilgileri ekleme ve mevcut linki güncellemek için butonlar eklendi.  
* Bu butonlar ile açılan modal component içerisinde form linki kaydetme veya iptal etme seçenekleri ile eklendi.  
3. **Atomic Design Kullanımı**  
* Uygulama atomic design prensiplerine uygun olarak tasarlanmıştır.  
4. **Directive ve Pipe Kullanımı**  
* Yeni sosyal medya linki oluşturulurken url bilgisine eğer yoksa .com eklentisinin eklenmesini sağlayan directive eklendi.  
* Sosyal medya linkleri ve açıklama bilgilerinin belirli uzunluktan sonra gösterilmesinin kontrolünü sağlayan pipe eklendi.  
5. **Guard Kullanımı**  
* Kullanıcı giriş yapmadan anasayfaya gidemez.  
6. **API Entegrasyonu**  
* NodeJS ile Restful API oluşturuldu.  
* Veriler kalıcı olarak MongoDB üzerinde saklanır.  
* API’ler postman collection olarak projeye eklendi.