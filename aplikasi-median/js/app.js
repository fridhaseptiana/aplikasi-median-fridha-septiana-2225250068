
const soalLatihan = [
    {
        data: [9, 3, 7, 1, 5],
        jawaban: 5,
        penjelasan: "Data setelah diurutkan adalah 1, 3, 5, 7, 9. Karena ada 5 data, median adalah nilai ketiga, yaitu 5."
    },
    {
        data: [8, 2, 6, 4],
        jawaban: 5,
        penjelasan: "Data setelah diurutkan adalah 2, 4, 6, 8. Median = (4 + 6) / 2 = 5."
    },
    {
        data: [12, 5, 9, 3, 7],
        jawaban: 7,
        penjelasan: "Data setelah diurutkan adalah 3, 5, 7, 9, 12. Nilai tengahnya adalah 7."
    },
    {
        data: [10, 4, 8, 2, 6, 12],
        jawaban: 7,
        penjelasan: "Data setelah diurutkan adalah 2, 4, 6, 8, 10, 12. Median = (6 + 8) / 2 = 7."
    },
    {
        data: [15, 10, 20, 5, 25, 30, 35],
        jawaban: 20,
        penjelasan: "Data setelah diurutkan adalah 5, 10, 15, 20, 25, 30, 35. Nilai tengahnya adalah 20."
    }
];

function tampilkanHalaman(halaman) {
    const konten = document.getElementById("konten");

    if (halaman === "beranda") {
        konten.innerHTML = `
            <h2>Selamat Datang di Belajar Median!</h2>
            <p>Selamat datang di media pembelajaran statistika tentang median atau nilai tengah.</p>
            <p>Melalui aplikasi ini, kamu akan mempelajari pengertian median, cara mengurutkan data, menentukan median pada data ganjil dan genap, serta mengerjakan latihan soal.</p>
            <h3>Apa yang akan kamu pelajari?</h3>
            <ul>
                <li>Memahami pengertian median.</li>
                <li>Mengurutkan data dari terkecil ke terbesar.</li>
                <li>Menentukan median pada data ganjil.</li>
                <li>Menentukan median pada data genap.</li>
                <li>Mengerjakan lima latihan soal.</li>
            </ul>
            <p>Yuk, mulai belajar median!</p>
        `;
    }

    else if (halaman === "materi") {
        konten.innerHTML = `
            <h2>Materi Pembelajaran: Median</h2>

            <h3>1. Pengertian Median</h3>
            <p>Median adalah nilai tengah dari sekumpulan data yang telah diurutkan terlebih dahulu dari nilai terkecil hingga nilai terbesar.</p>
            <p>Median merupakan salah satu ukuran pemusatan data dalam statistika. Median digunakan untuk menunjukkan nilai yang berada di tengah suatu kumpulan data.</p>

            <h3>2. Langkah-Langkah Menentukan Median</h3>
            <p><strong>Langkah 1:</strong> Tuliskan seluruh data yang diketahui.</p>
            <p><strong>Langkah 2:</strong> Urutkan data mulai dari nilai terkecil hingga terbesar.</p>
            <p><strong>Langkah 3:</strong> Hitung banyaknya data.</p>
            <p><strong>Langkah 4:</strong> Tentukan apakah banyak data ganjil atau genap.</p>
            <p><strong>Langkah 5:</strong> Tentukan nilai tengah sesuai jenis datanya.</p>

            <h3>3. Median pada Data Berjumlah Ganjil</h3>
            <p>Jika banyak data ganjil, median merupakan satu nilai yang tepat berada di tengah setelah data diurutkan.</p>
            <p>Rumus letak median:</p>
            <p><strong>Me = data ke-(n + 1) / 2</strong></p>

            <p><strong>Contoh:</strong> Tentukan median dari data 7, 3, 9, 5, 1.</p>
            <p>Langkah 1: Urutkan data menjadi 1, 3, 5, 7, 9.</p>
            <p>Langkah 2: Banyak data adalah 5, sehingga termasuk data ganjil.</p>
            <p>Langkah 3: Letak median = (5 + 1) / 2 = 3.</p>
            <p>Langkah 4: Data ke-3 adalah 5.</p>
            <p><strong>Jadi, median = 5.</strong></p>

            <h3>4. Median pada Data Berjumlah Genap</h3>
            <p>Jika banyak data genap, median diperoleh dengan menghitung rata-rata dari dua nilai yang berada tepat di tengah setelah data diurutkan.</p>
            <p>Rumus median:</p>
            <p><strong>Me = (data ke-n/2 + data ke-(n/2 + 1)) / 2</strong></p>

            <p><strong>Contoh:</strong> Tentukan median dari data 8, 2, 6, 4.</p>
            <p>Langkah 1: Urutkan data menjadi 2, 4, 6, 8.</p>
            <p>Langkah 2: Banyak data adalah 4, sehingga termasuk data genap.</p>
            <p>Langkah 3: Dua nilai tengah adalah 4 dan 6.</p>
            <p>Langkah 4: Median = (4 + 6) / 2 = 5.</p>
            <p><strong>Jadi, median = 5.</strong></p>

            <h3>5. Hal yang Perlu Diperhatikan</h3>
            <ul>
                <li>Data harus diurutkan terlebih dahulu.</li>
                <li>Data ganjil memiliki satu nilai tengah.</li>
                <li>Data genap memiliki dua nilai tengah yang dirata-ratakan.</li>
                <li>Jangan menentukan median berdasarkan posisi data sebelum diurutkan.</li>
            </ul>
        `;
    }

    else if (halaman === "latihan") {
        let isiSoal = "";

        soalLatihan.forEach((soal, index) => {
            isiSoal += `
                <div class="soal">
                    <h3>Soal ${index + 1}</h3>
                    <p>Tentukan median dari data berikut:</p>
                    <p class="data-soal">${soal.data.join(", ")}</p>
                    <label for="jawaban${index}">Jawaban:</label>
                    <input type="number" id="jawaban${index}" placeholder="Masukkan median">
                    <p id="hasil${index}"></p>
                </div>
            `;
        });

        konten.innerHTML = `
            <h2>Latihan Soal Median</h2>
            <p>Kerjakan lima soal berikut. Urutkan data terlebih dahulu sebelum menentukan median.</p>
            ${isiSoal}
            <button onclick="periksaSemuaJawaban()">Periksa Semua Jawaban</button>
            <div id="nilaiAkhir"></div>
        `;
    }
}

function periksaSemuaJawaban() {
    let jumlahBenar = 0;
    let semuaTerisi = true;

    for (let i = 0; i < soalLatihan.length; i++) {
        const jawaban = document.getElementById(`jawaban${i}`).value;

        if (jawaban.trim() === "") {
            semuaTerisi = false;
            break;
        }
    }

    if (!semuaTerisi) {
        document.getElementById("nilaiAkhir").innerHTML =
            "<p>Silakan isi semua jawaban terlebih dahulu.</p>";
        return;
    }

    soalLatihan.forEach((soal, index) => {
        const jawaban = Number(
            document.getElementById(`jawaban${index}`).value
        );

        const hasil = document.getElementById(`hasil${index}`);

        if (jawaban === soal.jawaban) {
            jumlahBenar++;
            hasil.innerHTML =
                "Benar! " + soal.penjelasan;
            hasil.style.color = "green";
        } else {
            hasil.innerHTML =
                "Belum tepat. Jawaban yang benar adalah " +
                soal.jawaban + ". " + soal.penjelasan;
            hasil.style.color = "red";
        }
    });

    const skor = (jumlahBenar / soalLatihan.length) * 100;

    document.getElementById("nilaiAkhir").innerHTML = `
        <h3>Hasil Latihan</h3>
        <p>Jawaban benar: ${jumlahBenar} dari 5 soal.</p>
        <p>Skor kamu: ${skor}</p>
        <p>${skor === 100 ? "Hebat! Semua jawaban benar!" : "Tetap semangat belajar dan coba lagi!"}</p>
    `;
}

