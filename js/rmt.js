
/* =========================================================
   BELAJAR MEDIAN
   AKTIVITAS RIGOROUS MATHEMATICAL THINKING (RMT)
   Untuk Siswa SMP
   Tahapan: Input - Elaboration - Output
   ========================================================= */

// =========================================================
// 1. MENAMPILKAN AKTIVITAS RMT
// =========================================================

function tampilkanAktivitasRMT() {

    const konten = document.getElementById("konten");

    konten.innerHTML = `

        <section class="halaman-rmt">

            <div class="rmt-header">
                <span class="label-rmt">PEMBELAJARAN BERBASIS RMT</span>

                <h2>🌷 Aktivitas Pembelajaran Median</h2>

                <p>
                    Ayo belajar memahami median melalui kegiatan
                    mengamati data, mengolah informasi, menemukan
                    nilai tengah, dan menyampaikan kesimpulan.
                </p>
            </div>

            <!-- PENGENALAN TAHAPAN RMT -->

            <div class="kartu-rmt pengenalan-rmt">

                <h3>🧠 Mengenal Tiga Tahap Berpikir RMT</h3>

                <p>
                    Dalam kegiatan ini, kamu tidak hanya diminta
                    mencari jawaban, tetapi juga belajar memahami
                    informasi, mengembangkan cara penyelesaian,
                    dan menjelaskan hasil pemikiranmu.
                </p>

                <div class="ringkasan-rmt">
                    <strong>🌱 1. Input – Memahami Informasi</strong>
                    <p>
                        Amati permasalahan dengan teliti.
                        Temukan informasi yang diketahui,
                        pahami pertanyaan, dan tentukan apa
                        yang perlu dicari.
                    </p>
                    <p><em>Pertanyaan panduan: Informasi apa yang aku miliki?</em></p>
                </div>

                <div class="ringkasan-rmt">
                    <strong>🌿 2. Elaboration – Mengolah Informasi</strong>
                    <p>
                        Hubungkan informasi yang ditemukan.
                        Urutkan data, pilih cara penyelesaian,
                        lakukan perhitungan, dan berikan alasan
                        mengapa langkah tersebut digunakan.
                    </p>
                    <p><em>Pertanyaan panduan: Bagaimana cara menyelesaikannya?</em></p>
                </div>

                <div class="ringkasan-rmt">
                    <strong>🌸 3. Output – Menyampaikan Hasil</strong>
                    <p>
                        Sampaikan hasil perhitungan dengan jelas.
                        Jelaskan maknanya sesuai permasalahan
                        dan buat kesimpulan berdasarkan hasil
                        yang diperoleh.
                    </p>
                    <p><em>Pertanyaan panduan: Apa arti hasil yang aku peroleh?</em></p>
                </div>

                <p class="kesimpulan-materi">
                    Ingat, setiap tahap saling berhubungan.
                    Kerjakan secara berurutan agar proses
                    berpikirmu semakin terarah.
                </p>

            </div>

            <!-- TUJUAN PEMBELAJARAN -->

           
            <!-- TUJUAN PEMBELAJARAN -->

            <div class="kartu-rmt tujuan-rmt">

                <h3>🎯 Tujuan Pembelajaran</h3>

                <p>
                    Setelah mengikuti aktivitas pembelajaran ini,
                    kamu diharapkan mampu:
                </p>

                <ol>
                    <li>
                        Mengidentifikasi informasi yang diketahui
                        dan ditanyakan dalam permasalahan median.
                    </li>
                    <li>
                        Menjelaskan alasan data harus diurutkan
                        sebelum menentukan median.
                    </li>
                    <li>
                        Menentukan banyak data dan posisi median
                        dengan tepat.
                    </li>
                    <li>
                        Menggunakan konsep dan prosedur median
                        untuk menyelesaikan permasalahan.
                    </li>
                    <li>
                        Menjelaskan alasan matematis dari
                        langkah dan hasil perhitungan.
                    </li>
                    <li>
                        Menafsirkan hasil median sesuai konteks
                        permasalahan dan menyampaikan kesimpulan.
                    </li>
                </ol>

            </div>


            
            <!-- PETUNJUK -->

            <div class="kartu-rmt petunjuk-rmt">

                <h3>📌 Petunjuk Pengerjaan</h3>

                <p>
                    Ikuti langkah-langkah berikut agar kamu
                    dapat menyelesaikan aktivitas dengan baik.
                </p>

                <ol>
                    <li>
                        Bacalah cerita permasalahan dan amati
                        seluruh data nilai yang diberikan.
                    </li>
                    <li>
                        Kerjakan tahap <strong>Input</strong>
                        dengan menemukan informasi yang diketahui
                        dan hal yang ditanyakan.
                    </li>
                    <li>
                        Lanjutkan ke tahap <strong>Elaboration</strong>
                        dengan mengurutkan data, menentukan posisi
                        median, dan melakukan perhitungan.
                    </li>
                    <li>
                        Selesaikan tahap <strong>Output</strong>
                        dengan menjelaskan hasil dan menuliskan
                        kesimpulan.
                    </li>
                    <li>
                        Isilah seluruh 15 pertanyaan menggunakan
                        kalimat dan langkah penyelesaianmu sendiri.
                    </li>
                    <li>
                        Periksa kembali jawaban sebelum menekan
                        tombol <strong>Simpan Jawaban</strong>.
                    </li>
                </ol>

                <div class="refleksi-tahap">
                    <strong>💡 Tips Belajar</strong>
                    <p>
                        Jangan terburu-buru mencari hasil akhir.
                        Utamakan memahami masalah dan menjelaskan
                        alasan dari setiap langkah penyelesaian.
                    </p>
                </div>

            </div>


            
            <!-- KONTEKS PERMASALAHAN -->

            <div class="kartu-rmt konteks-rmt">

                <span class="label-rmt">AYO AMATI PERMASALAHAN!</span>

                <h3>📚 Menganalisis Nilai Kuis Matematika</h3>

                <p>
                    Pada akhir pembelajaran, seorang guru matematika
                    mengadakan kuis untuk mengetahui pemahaman siswa
                    terhadap materi yang telah dipelajari.
                </p>

                <p>
                    Tujuh siswa mengikuti kuis tersebut. Setelah
                    memeriksa seluruh pekerjaan, guru memperoleh
                    data nilai sebagai berikut:
                </p>

                <div class="data-median">
                    <span>65</span>
                    <span>80</span>
                    <span>70</span>
                    <span>90</span>
                    <span>75</span>
                    <span>85</span>
                    <span>70</span>
                </div>

                <div class="refleksi-tahap">
                    <strong>🔎 Amati informasi berikut!</strong>
                    <ul>
                        <li>Terdapat tujuh siswa yang mengikuti kuis.</li>
                        <li>Setiap angka menunjukkan nilai kuis seorang siswa.</li>
                        <li>Nilai-nilai tersebut belum disusun berdasarkan urutan.</li>
                    </ul>
                </div>

                <p>
                    Guru ingin mengetahui nilai tengah dari seluruh
                    nilai tersebut. Nilai tengah dapat membantu guru
                    memahami gambaran posisi nilai siswa setelah
                    seluruh data diurutkan.
                </p>

                <div class="pertanyaan-utama">
                    <strong>🤔 Permasalahan utama</strong>
                    <p>
                        Bagaimana cara menentukan median dari tujuh
                        nilai kuis tersebut? Berapakah nilai mediannya?
                        Apa arti nilai median bagi hasil kuis siswa?
                    </p>
                </div>

                <p>
                    Untuk menjawab permasalahan tersebut, lakukan
                    aktivitas melalui tiga tahap RMT, yaitu Input,
                    Elaboration, dan Output.
                </p>

            </div>

            
            <!-- TAHAP INPUT -->

            <div class="kartu-rmt tahap-input">

                <div class="judul-tahap">
                    <span class="nomor-tahap">01</span>

                    <div>
                        <span class="label-rmt">TAHAP PERTAMA</span>
                        <h3>🌱 Input (Memahami Informasi)</h3>
                    </div>
                </div>

                <p>
                    Pada tahap Input, kamu perlu memahami situasi
                    dalam soal sebelum mulai menghitung. Bacalah
                    permasalahan dengan teliti, kemudian temukan
                    informasi yang tersedia dan hal yang ingin dicari.
                </p>

                <div class="tujuan-tahap">
                    <strong>Fokus kegiatan:</strong>
                    mengidentifikasi informasi, mengenali data,
                    dan memahami pertanyaan.
                </div>

                <div class="refleksi-tahap">
                    <strong>💡 Panduan berpikir</strong>
                    <p>
                        Coba tanyakan kepada dirimu sendiri:
                    </p>
                    <ul>
                        <li>Apa yang diketahui dari soal?</li>
                        <li>Apa yang diminta untuk dicari?</li>
                        <li>Informasi apa yang dapat digunakan untuk menyelesaikannya?</li>
                    </ul>
                </div>

                <h4>A. Mengenali informasi</h4>

                <label for="jawabanInput1">
                    1. Ada berapa siswa yang mengikuti kuis matematika?
                </label>

                <input
                    type="text"
                    id="jawabanInput1"
                    placeholder="Tuliskan jumlah siswa..."
                >

                <label for="jawabanInput2">
                    2. Tuliskan semua nilai kuis yang diketahui
                    berdasarkan permasalahan!
                </label>

                <textarea
                    id="jawabanInput2"
                    placeholder="Tuliskan seluruh nilai kuis..."
                ></textarea>

                <label for="jawabanInput3">
                    3. Apa yang ingin diketahui oleh guru
                    dari kumpulan nilai kuis tersebut?
                </label>

                <textarea
                    id="jawabanInput3"
                    placeholder="Tuliskan hal yang ditanyakan..."
                ></textarea>

                <h4>B. Memahami masalah</h4>

                <label for="jawabanInput4">
                    4. Mengapa nilai-nilai kuis perlu diurutkan
                    dari yang terkecil hingga terbesar sebelum
                    menentukan median?
                </label>

                <textarea
                    id="jawabanInput4"
                    placeholder="Jelaskan alasanmu..."
                ></textarea>

                <div class="refleksi-tahap">
                    <strong>🧠 Tantangan berpikir</strong>
                    <p>
                        Bayangkan jika nilai-nilai tersebut tidak
                        diurutkan. Apakah kamu dapat langsung
                        mengetahui nilai yang berada tepat di tengah?
                        Jelaskan alasanmu!
                    </p>
                </div>

            </div>


            
            <!-- TAHAP ELABORATION -->

            <div class="kartu-rmt tahap-elaboration">

                <div class="judul-tahap">
                    <span class="nomor-tahap">02</span>

                    <div>
                        <span class="label-rmt">TAHAP KEDUA</span>
                        <h3>🌿 Elaboration (Mengolah Informasi)</h3>
                    </div>
                </div>

                <p>
                    Pada tahap Elaboration, kamu mulai mengolah
                    informasi yang telah ditemukan. Gunakan
                    pengetahuan tentang pengurutan data dan median
                    untuk menyusun strategi penyelesaian.
                </p>

                <div class="tujuan-tahap">
                    <strong>Fokus kegiatan:</strong>
                    mengurutkan data, mengenali banyak data,
                    menentukan posisi median, menghitung,
                    dan menjelaskan alasan matematis.
                </div>

                <div class="refleksi-tahap">
                    <strong>💡 Panduan berpikir</strong>
                    <ul>
                        <li>Bagaimana cara menyusun data secara berurutan?</li>
                        <li>Bagaimana menentukan posisi nilai tengah?</li>
                        <li>Mengapa rumus tersebut sesuai dengan banyak data?</li>
                        <li>Bagaimana membuktikan bahwa hasilmu benar?</li>
                    </ul>
                </div>

                <h4>A. Mengurutkan data</h4>

                <p>
                    Susun seluruh nilai kuis mulai dari nilai
                    terkecil sampai nilai terbesar. Perhatikan
                    bahwa setiap nilai harus tetap dihitung,
                    termasuk nilai yang sama.
                </p>

                <label for="jawabanElaborasi1">
                    1. Urutkan nilai kuis dari yang terkecil
                    hingga terbesar!
                </label>

                <textarea
                    id="jawabanElaborasi1"
                    placeholder="Contoh format: 10, 20, 30, ..."
                ></textarea>

                <label for="jawabanElaborasi2">
                    2. Ada berapa banyak data nilai kuis?
                    Apakah jumlahnya ganjil atau genap?
                    Jelaskan alasanmu!
                </label>

                <textarea
                    id="jawabanElaborasi2"
                    placeholder="Tuliskan jumlah data dan alasanmu..."
                ></textarea>

                <h4>B. Menentukan posisi median</h4>

                <p>
                    Setelah data diurutkan, tentukan posisi
                    nilai tengahnya. Untuk jumlah data ganjil,
                    posisi median dapat ditentukan menggunakan
                    rumus berikut:
                </p>

                <div class="refleksi-tahap">
                    <strong>Rumus posisi median:</strong>
                    <p>
                        Posisi median = (n + 1) / 2
                    </p>
                    <p>
                        Keterangan: n adalah banyaknya data.
                    </p>
                </div>

                <label for="jawabanElaborasi3">
                    3. Tuliskan rumus yang digunakan untuk
                    menentukan posisi median dan jelaskan
                    arti simbol n!
                </label>

                <textarea
                    id="jawabanElaborasi3"
                    placeholder="Tuliskan rumus dan penjelasannya..."
                ></textarea>

                <label for="jawabanElaborasi4">
                    4. Berada pada urutan ke berapakah median
                    dari data nilai kuis tersebut? Tunjukkan
                    perhitungannya!
                </label>

                <textarea
                    id="jawabanElaborasi4"
                    placeholder="Tuliskan langkah menentukan posisi median..."
                ></textarea>

                <h4>C. Menghitung median</h4>

                <p>
                    Gunakan data yang sudah diurutkan dan posisi
                    median yang telah kamu temukan untuk
                    menentukan nilai tengahnya.
                </p>

                <label for="jawabanElaborasi5">
                    5. Hitunglah median dari tujuh nilai kuis
                    tersebut. Tuliskan langkah-langkah
                    perhitunganmu!
                </label>

                <textarea
                    id="jawabanElaborasi5"
                    placeholder="Tuliskan proses perhitungan median..."
                ></textarea>

                <h4>D. Memberikan alasan matematis</h4>

                <p>
                    Hasil perhitungan perlu disertai alasan.
                    Perhatikan letak nilai yang kamu pilih
                    dalam urutan data.
                </p>

                <label for="jawabanElaborasi6">
                    6. Mengapa nilai yang kamu pilih merupakan
                    median? Jelaskan berdasarkan posisi nilai
                    tersebut terhadap seluruh data!
                </label>

                <textarea
                    id="jawabanElaborasi6"
                    placeholder="Jelaskan alasan matematis berdasarkan urutan data..."
                ></textarea>

                <div class="refleksi-tahap">
                    <strong>🧠 Tantangan berpikir</strong>
                    <p>
                        Jika jumlah data berubah menjadi delapan,
                        apakah posisi median masih dapat ditentukan
                        dengan cara yang sama? Apa yang harus
                        dilakukan jika terdapat dua nilai di tengah?
                    </p>
                </div>

            </div>

            
            <!-- TAHAP OUTPUT -->

            <div class="kartu-rmt tahap-output">

                <div class="judul-tahap">
                    <span class="nomor-tahap">03</span>

                    <div>
                        <span class="label-rmt">TAHAP KETIGA</span>
                        <h3>🌸 Output (Menyampaikan Hasil)</h3>
                    </div>
                </div>

                <p>
                    Pada tahap Output, kamu akan menyampaikan
                    hasil dari proses berpikir dan perhitungan
                    yang telah dilakukan. Tidak cukup hanya
                    memperoleh jawaban, kamu juga perlu
                    menjelaskan arti hasil tersebut.
                </p>

                <div class="tujuan-tahap">
                    <strong>Fokus kegiatan:</strong>
                    mengomunikasikan hasil, menafsirkan makna
                    median, menyusun kesimpulan, dan merefleksikan
                    proses pembelajaran.
                </div>

                <div class="refleksi-tahap">
                    <strong>💡 Panduan berpikir</strong>
                    <ul>
                        <li>Berapa nilai median yang diperoleh?</li>
                        <li>Bagaimana proses mendapatkan nilai tersebut?</li>
                        <li>Apa arti median dalam permasalahan kuis?</li>
                        <li>Apa kesimpulan yang dapat diambil?</li>
                    </ul>
                </div>

                <h4>A. Menyampaikan hasil perhitungan</h4>

                <label for="jawabanOutput1">
                    1. Berapakah median dari tujuh nilai kuis tersebut?
                </label>

                <input
                    type="text"
                    id="jawabanOutput1"
                    placeholder="Masukkan nilai median..."
                >

                <label for="jawabanOutput2">
                    2. Jelaskan secara runtut bagaimana kamu
                    memperoleh nilai median tersebut, mulai
                    dari mengurutkan data hingga menentukan
                    nilai tengah!
                </label>

                <textarea
                    id="jawabanOutput2"
                    placeholder="Jelaskan langkah penyelesaianmu..."
                ></textarea>

                <h4>B. Menafsirkan hasil</h4>

                <label for="jawabanOutput3">
                    3. Apa arti nilai median yang kamu peroleh
                    bagi hasil kuis ketujuh siswa? Jelaskan
                    menggunakan konteks permasalahan!
                </label>

                <textarea
                    id="jawabanOutput3"
                    placeholder="Jelaskan makna median dalam permasalahan..."
                ></textarea>

                <h4>C. Mengomunikasikan kesimpulan</h4>

                <label for="jawabanOutput4">
                    4. Tuliskan kesimpulan berdasarkan hasil
                    pengamatan, proses perhitungan, dan
                    penafsiran median yang telah kamu lakukan!
                </label>

                <textarea
                    id="jawabanOutput4"
                    placeholder="Tuliskan kesimpulan secara lengkap..."
                ></textarea>

                <h4>D. Refleksi pembelajaran</h4>

                <label for="jawabanOutput5">
                    5. Apa pengetahuan baru yang kamu peroleh?
                    Bagian mana yang paling mudah atau paling
                    menantang ketika menentukan median?
                    Jelaskan alasanmu!
                </label>

                <textarea
                    id="jawabanOutput5"
                    placeholder="Ceritakan pengalaman dan pemahamanmu..."
                ></textarea>

                <div class="refleksi-tahap">
                    <strong>🧠 Tantangan berpikir</strong>
                    <p>
                        Menurutmu, mengapa dalam menyelesaikan
                        masalah matematika kita perlu menjelaskan
                        makna hasil perhitungan, bukan hanya
                        menuliskan angka jawabannya?
                    </p>
                </div>

            </div>


            
            <!-- RANGKUMAN RMT -->

            <div class="kartu-rmt rangkuman-rmt">

                <h3>🌷 Rangkuman Aktivitas RMT</h3>

                <p>
                    Hebat! Kamu telah mempelajari cara menentukan
                    median melalui tiga tahap berpikir RMT.
                    Berikut rangkuman proses yang telah kamu lakukan.
                </p>

                <div class="ringkasan-rmt">
                    <strong>🌱 1. Input – Memahami Informasi</strong>
                    <p>
                        Kamu mengidentifikasi jumlah siswa,
                        mengenali nilai-nilai kuis, dan memahami
                        informasi yang ditanyakan dalam masalah.
                    </p>
                </div>

                <div class="ringkasan-rmt">
                    <strong>🌿 2. Elaboration – Mengolah Informasi</strong>
                    <p>
                        Kamu mengurutkan data, menentukan banyak
                        data, mencari posisi median, melakukan
                        perhitungan, dan memberikan alasan matematis.
                    </p>
                </div>

                <div class="ringkasan-rmt">
                    <strong>🌸 3. Output – Menyampaikan Hasil</strong>
                    <p>
                        Kamu menyampaikan hasil perhitungan,
                        menjelaskan makna median, membuat
                        kesimpulan, dan merefleksikan pembelajaran.
                    </p>
                </div>

                <div class="refleksi-tahap">
                    <strong>📖 Ingat Konsep Penting!</strong>
                    <p>
                        Median adalah nilai tengah dari sekumpulan
                        data yang telah diurutkan dari yang terkecil
                        hingga terbesar.
                    </p>
                    <p>
                        Untuk data berjumlah ganjil, posisi median
                        ditentukan dengan rumus (n + 1) / 2.
                    </p>
                    <p>
                        Untuk data berjumlah genap, median diperoleh
                        dari rata-rata dua nilai yang berada di tengah.
                    </p>
                </div>

                <div class="pertanyaan-utama">
                    <strong>🎉 Pesan untukmu</strong>
                    <p>
                        Belajar matematika bukan hanya tentang
                        menemukan jawaban yang benar, tetapi juga
                        memahami masalah, menjelaskan proses,
                        dan menggunakan hasil untuk menarik
                        kesimpulan.
                    </p>
                </div>

            </div>


           
            <!-- TOMBOL AKSI -->

            <div class="aksi-rmt">

                <p>
                    Pastikan seluruh pertanyaan pada tahap
                    Input, Elaboration, dan Output telah kamu
                    jawab sebelum menyimpan hasil pekerjaanmu.
                </p>

                <button
                    type="button"
                    onclick="simpanJawabanRMT()"
                    class="tombol-simpan-rmt"
                >
                    💾 Simpan Jawaban
                </button>

                <button
                    type="button"
                    onclick="hapusJawabanRMT()"
                    class="tombol-reset-rmt"
                >
                    ↻ Hapus Jawaban
                </button>

                <p>
                    Jawaban yang disimpan dapat dibuka kembali
                    ketika kamu mengakses halaman aktivitas RMT.
                </p>

            </div>

            <div id="hasilRMT" aria-live="polite"></div>


            <div id="hasilRMT"></div>

        </section>
    `;

    muatJawabanRMT();

}


// =========================================================
// 2. DAFTAR ID JAWABAN
// =========================================================

function ambilDaftarIdRMT() {

    return [
        "jawabanInput1",
        "jawabanInput2",
        "jawabanInput3",
        "jawabanInput4",

        "jawabanElaborasi1",
        "jawabanElaborasi2",
        "jawabanElaborasi3",
        "jawabanElaborasi4",
        "jawabanElaborasi5",
        "jawabanElaborasi6",

        "jawabanOutput1",
        "jawabanOutput2",
        "jawabanOutput3",
        "jawabanOutput4",
        "jawabanOutput5"
    ];

}


// =========================================================
// 3. MENYIMPAN JAWABAN
// =========================================================


function simpanJawabanRMT() {

    const daftarId = ambilDaftarIdRMT();
    const semuaJawaban = {};

    const kelompokTahap = {
        "Input": daftarId.filter(id => id.startsWith("jawabanInput")),
        "Elaboration": daftarId.filter(id => id.startsWith("jawabanElaborasi")),
        "Output": daftarId.filter(id => id.startsWith("jawabanOutput"))
    };

    const pertanyaanKosong = [];

    daftarId.forEach(function(id) {

        const elemen = document.getElementById(id);

        if (!elemen) return;

        const jawaban = elemen.value.trim();

        semuaJawaban[id] = jawaban;

        if (jawaban === "") {
            pertanyaanKosong.push(id);
        }

    });

    const hasil = document.getElementById("hasilRMT");

    const jumlahInputKosong = kelompokTahap.Input.filter(
        id => pertanyaanKosong.includes(id)
    ).length;

    const jumlahElaborasiKosong = kelompokTahap.Elaboration.filter(
        id => pertanyaanKosong.includes(id)
    ).length;

    const jumlahOutputKosong = kelompokTahap.Output.filter(
        id => pertanyaanKosong.includes(id)
    ).length;

    if (pertanyaanKosong.length > 0) {

        hasil.innerHTML = `
            <div class="pesan-rmt pesan-peringatan">

                <h3>⚠️ Jawaban Belum Lengkap</h3>

                <p>
                    Masih ada ${pertanyaanKosong.length}
                    pertanyaan yang belum kamu jawab.
                </p>

                <ul>
                    <li>Input: ${jumlahInputKosong} pertanyaan kosong.</li>
                    <li>Elaboration: ${jumlahElaborasiKosong} pertanyaan kosong.</li>
                    <li>Output: ${jumlahOutputKosong} pertanyaan kosong.</li>
                </ul>

                <p>
                    Lengkapi seluruh jawaban terlebih dahulu,
                    kemudian tekan tombol Simpan Jawaban kembali.
                </p>

            </div>
        `;

        return;

    }

    try {

        localStorage.setItem(
            "jawabanAktivitasRMT",
            JSON.stringify(semuaJawaban)
        );

        hasil.innerHTML = `
            <div class="pesan-rmt pesan-berhasil">

                <h3>🎉 Jawaban Berhasil Disimpan!</h3>

                <p>
                    Hebat! Kamu telah mengisi seluruh
                    15 pertanyaan dalam aktivitas RMT.
                </p>

                <ul>
                    <li>Tahap Input: selesai.</li>
                    <li>Tahap Elaboration: selesai.</li>
                    <li>Tahap Output: selesai.</li>
                </ul>

                <p>
                    Jawabanmu telah tersimpan.
                    Kamu dapat membukanya kembali ketika
                    mengakses aktivitas RMT.
                </p>

            </div>
        `;

    } catch (error) {

        hasil.innerHTML = `
            <div class="pesan-rmt pesan-peringatan">
                <h3>⚠️ Penyimpanan Gagal</h3>
                <p>
                    Browser belum dapat menyimpan jawabanmu.
                    Periksa pengaturan penyimpanan browser
                    atau coba kembali.
                </p>
            </div>
        `;

    }

}


// =========================================================
// 4. MEMUAT JAWABAN TERSIMPAN
// =========================================================


function muatJawabanRMT() {

    let dataTersimpan;

    try {

        dataTersimpan = JSON.parse(
            localStorage.getItem("jawabanAktivitasRMT")
        );

    } catch (error) {

        dataTersimpan = null;

    }

    if (!dataTersimpan || typeof dataTersimpan !== "object") {
        return;
    }

    const daftarId = ambilDaftarIdRMT();

    let jumlahTerisi = 0;

    daftarId.forEach(function(id) {

        const elemen = document.getElementById(id);

        if (
            elemen &&
            typeof dataTersimpan[id] === "string"
        ) {

            elemen.value = dataTersimpan[id];

            if (dataTersimpan[id].trim() !== "") {
                jumlahTerisi++;
            }

        }

    });

    const hasil = document.getElementById("hasilRMT");

    if (jumlahTerisi === 0) return;

    hasil.innerHTML = `
        <div class="pesan-rmt pesan-berhasil">

            <h3>📌 Jawaban Berhasil Dimuat!</h3>

            <p>
                Kamu memiliki ${jumlahTerisi} dari 15
                jawaban yang sudah tersimpan.
            </p>

            <p>
                Silakan lanjutkan aktivitas dari bagian
                yang belum selesai atau periksa kembali
                jawaban yang sudah kamu kerjakan.
            </p>

        </div>
    `;

}


// =========================================================
// 5. MENGHAPUS JAWABAN
// =========================================================


function hapusJawabanRMT() {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus seluruh jawaban aktivitas RMT yang tersimpan?"
    );

    if (!konfirmasi) return;

    const daftarId = ambilDaftarIdRMT();

    daftarId.forEach(function(id) {

        const elemen = document.getElementById(id);

        if (elemen) {
            elemen.value = "";
        }

    });

    try {

        localStorage.removeItem("jawabanAktivitasRMT");

        const hasil = document.getElementById("hasilRMT");

        hasil.innerHTML = `
            <div class="pesan-rmt pesan-berhasil">

                <h3>🗑️ Jawaban Berhasil Dihapus!</h3>

                <p>
                    Seluruh jawaban pada tahap Input,
                    Elaboration, dan Output telah dikosongkan.
                </p>

                <p>
                    Sekarang kamu dapat mengerjakan kembali
                    aktivitas RMT dari awal.
                </p>

            </div>
        `;

    } catch (error) {

        const hasil = document.getElementById("hasilRMT");

        hasil.innerHTML = `
            <div class="pesan-rmt pesan-peringatan">

                <h3>⚠️ Penghapusan Tidak Berhasil</h3>

                <p>
                    Terjadi kendala saat menghapus
                    penyimpanan jawaban. Silakan coba kembali.
                </p>

            </div>
        `;

    }

}
