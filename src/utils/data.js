// File: data.js

import WeddingImage from "../assets/products/Wedding.jpg";
import CeremonyImage from "../assets/products/Ceremony.jpg";
import GraduationImage from "../assets/products/Graduation.jpg";
import PhotoshotImage from "../assets/products/Photoshot.jpg";
import PartyImage from "../assets/products/Party.jpg";
import EventImage from "../assets/products/Event.jpg";
import FilmImage from "../assets/products/Film.jpg";

const products = [
  { 
    id: 1, 
    name: "Wedding", 
    price: "Rp1.000.000", 
    image: WeddingImage,
    slug: "wedding",
    // --- Deskripsi BARU ---
    description: `
  <p>Abadikan momen sakral dan penuh cinta di hari pernikahan Anda bersama MAPStudio. 
  Paket Wedding kami dirancang khusus untuk memastikan setiap detail berharga terekam dengan sempurna, 
  mulai dari akad hingga resepsi.</p>

  <h3>Detail Layanan:</h3>
  <ul>
    <li>Dokumentasi foto dan video selama acara (akad + resepsi)</li>
    <li>Sesi pre-wedding (opsional) dengan konsep pilihan</li>
    <li>2 Fotografer & 1 Videografer profesional</li>
    <li>Editing premium dan color grading artistik</li>
    <li>Album foto eksklusif & softcopy seluruh hasil dokumentasi</li>
    <li>Konsultasi konsep dan lokasi gratis</li>
    <li>Estimasi durasi liputan: 6–8 jam</li>
    <li>Pilihan lokasi indoor maupun outdoor</li>
  </ul>

  <p>MAPStudio siap membantu Anda mewujudkan kenangan pernikahan yang elegan, hangat, dan tak terlupakan.</p>
`
  },
 {
  id: 2,
  name: "Ceremony",
  price: "Rp500.000",
  image: CeremonyImage,
  slug: "ceremony",
  description: `
    <p>Abadikan setiap momen sakral dan penuh makna dari acara adat atau upacara spesial Anda bersama MAPStudio.
    Paket <strong>Ceremony</strong> kami dirancang untuk menangkap suasana khidmat dan detail budaya yang berharga,
    mulai dari prosesi awal hingga akhir acara. Tim profesional kami siap memastikan dokumentasi berjalan lancar dan hasilnya mencerminkan keindahan tradisi yang Anda rayakan.</p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>Dokumentasi foto dan video selama acara (minimal 4 jam)</li>
      <li>1 Fotografer & 1 Videografer profesional</li>
      <li>Editing premium dengan tone warna alami dan artistik</li>
      <li>Softcopy seluruh hasil dokumentasi dalam resolusi tinggi</li>
      <li>Konsultasi konsep dan alur acara gratis sebelum pelaksanaan</li>
      <li>Pilihan lokasi indoor atau outdoor sesuai kebutuhan</li>
      <li>Estimasi durasi liputan: 4–6 jam</li>
    </ul>

    <p>
      MAPStudio berkomitmen menghadirkan hasil dokumentasi yang penuh makna, elegan, dan autentik, 
      agar setiap momen berharga dalam upacara Anda tersimpan dengan sempurna.
    </p>
  `
},

  { 
  id: 3, 
  name: "Graduation", 
  price: "Rp300.000", 
  image: GraduationImage,
  slug: "graduation",
  description: `
    <p>
      Rayakan momen kelulusan Anda dengan penuh kebanggaan bersama <strong>MAPStudio</strong>. 
      Kami hadir untuk mengabadikan setiap detik bersejarah di hari wisuda Anda, mulai dari prosesi hingga momen kebersamaan bersama keluarga dan sahabat. 
      Dengan sentuhan profesional dan gaya artistik, setiap hasil foto dan video akan mencerminkan kebahagiaan serta pencapaian luar biasa Anda.
    </p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>1 Fotografer profesional dengan gaya dokumenter & candid</li>
      <li>Durasi sesi hingga 3 jam (indoor atau outdoor)</li>
      <li>Editing premium dengan tone warna cerah & elegan</li>
      <li>10 foto terbaik melalui proses retouching detail</li>
      <li>Seluruh hasil dalam bentuk softcopy resolusi tinggi</li>
      <li>Konsultasi konsep outfit dan lokasi sebelum sesi pemotretan</li>
      <li>Gratis 1 cetak foto ukuran 12R (opsional)</li>
    </ul>

    <p>
      Abadikan perjalanan akademik Anda dengan hasil dokumentasi yang penuh makna. 
      <strong>MAPStudio</strong> memastikan setiap senyum, tawa, dan kebanggaan di hari kelulusan Anda tersimpan selamanya.
    </p>
  `
},

  { 
  id: 4, 
  name: "Photoshot", 
  price: "Rp250.000", 
  image: PhotoshotImage,
  slug: "photoshot",
  description: `
    <p>
      Tampilkan sisi terbaik dirimu dengan layanan <strong>Photoshot</strong> dari <strong>MAPStudio</strong>. 
      Cocok untuk kebutuhan pribadi, portofolio, konten media sosial, hingga sesi prewedding kasual. 
      Tim fotografer profesional kami akan membantu mengarahkan pose dan pencahayaan agar setiap hasil foto tampak alami dan memukau.
    </p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>1 Fotografer profesional dengan konsep sesuai permintaan</li>
      <li>Durasi sesi hingga 2 jam (indoor atau outdoor)</li>
      <li>Konsultasi konsep dan gaya berpakaian sebelum sesi</li>
      <li>Editing premium untuk seluruh foto terbaik</li>
      <li>5 foto pilihan dengan retouching detail</li>
      <li>Softcopy seluruh hasil foto dalam resolusi tinggi</li>
      <li>Pilihan lokasi: studio, taman, pantai, atau tempat ikonik pilihan Anda</li>
    </ul>

    <p>
      Wujudkan hasil foto yang estetik, profesional, dan penuh karakter. 
      Dengan <strong>MAPStudio</strong>, setiap jepretan akan menjadi karya yang merepresentasikan kepribadian dan gaya Anda.
    </p>
  `
},

  { 
  id: 5, 
  name: "Party", 
  price: "Rp250.000", 
  image: PartyImage,
  slug: "party",
  description: `
    <p>
      Rayakan momen bahagiamu bersama <strong>MAPStudio</strong>! 
      Layanan <strong>Party</strong> kami siap mendokumentasikan setiap detik keseruan pesta ulang tahun, anniversary, reuni, atau gathering santai. 
      Tim kami memastikan suasana hangat, tawa, dan keceriaanmu terekam sempurna dalam setiap foto dan video.
    </p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>1 Fotografer & 1 Videografer profesional</li>
      <li>Durasi liputan 3–5 jam</li>
      <li>Editing foto dan video dengan tone cerah & fun</li>
      <li>Softcopy seluruh hasil dokumentasi dalam resolusi tinggi</li>
      <li>5 foto pilihan dengan retouching premium</li>
      <li>Highlight video berdurasi 1 menit untuk media sosial</li>
      <li>Konsultasi konsep dekorasi dan pencahayaan gratis</li>
    </ul>

    <p>
      Jadikan pestamu lebih berkesan dengan dokumentasi profesional dari <strong>MAPStudio</strong>. 
      Setiap momen bahagia akan kami abadikan menjadi kenangan tak terlupakan yang siap dibagikan ke orang-orang terdekatmu.
    </p>
  `
},

  { 
  id: 6, 
  name: "Event", 
  price: "Rp200.000", 
  image: EventImage,
  slug: "event",
  description: `
    <p>
      Dokumentasikan setiap momen penting dalam acara profesional Anda bersama <strong>MAPStudio</strong>. 
      Paket <strong>Event</strong> kami dirancang khusus untuk kebutuhan dokumentasi seminar, workshop, konferensi, hingga acara perusahaan. 
      Dengan tim berpengalaman, kami pastikan setiap detail terekam dengan kualitas visual yang tajam dan profesional.
    </p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>1 Fotografer & 1 Videografer profesional</li>
      <li>Durasi liputan 4–6 jam</li>
      <li>Editing foto dan video dengan tone profesional</li>
      <li>Softcopy seluruh hasil foto dalam resolusi tinggi</li>
      <li>Video highlight berdurasi 1–2 menit</li>
      <li>Dokumentasi aktivitas peserta, suasana acara, dan sesi penting</li>
      <li>Konsultasi rundown dan kebutuhan dokumentasi sebelum acara</li>
    </ul>

    <p>
      Dengan <strong>MAPStudio</strong>, hasil dokumentasi Anda siap digunakan untuk laporan kegiatan, publikasi media, hingga portofolio profesional perusahaan. 
      Kami berkomitmen memberikan hasil berkualitas tinggi yang mencerminkan citra positif acara Anda.
    </p>
  `
},

  { 
  id: 7, 
  name: "Project Film", 
  price: "Rp400.000", 
  image: FilmImage,
  slug: "project-film",
  description: `
    <p>
      Wujudkan ide kreatif Anda menjadi karya visual yang memukau bersama <strong>MAPStudio</strong>. 
      Paket <strong>Project Film</strong> kami dirancang untuk kebutuhan produksi film pendek, dokumenter, video promosi, 
      atau konten kreatif lainnya dengan kualitas sinematik.
    </p>

    <h3>Detail Layanan:</h3>
    <ul>
      <li>Pra-produksi: konsep cerita, naskah, storyboard, dan perencanaan teknis</li>
      <li>Produksi: pengambilan gambar dengan peralatan profesional</li>
      <li>Pasca-produksi: editing, color grading, dan sound design</li>
      <li>Tim lengkap: sutradara, kameramen, dan editor berpengalaman</li>
      <li>Durasi proyek menyesuaikan kebutuhan (short film / video promosi)</li>
      <li>File akhir dalam format Full HD / 4K</li>
      <li>Konsultasi kreatif gratis sebelum produksi</li>
    </ul>

    <p>
      Bersama <strong>MAPStudio</strong>, setiap ide Anda akan dikemas secara profesional dan artistik. 
      Kami membantu Anda menciptakan film yang tidak hanya menarik secara visual, tetapi juga kuat dalam penyampaian pesan dan emosi.
    </p>
  `
}
];

export default products;
