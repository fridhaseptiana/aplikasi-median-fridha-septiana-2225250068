
/* =========================================
   BELAJAR MEDIAN - FLOATING AI CHATBOT
   ========================================= */

function buatTampilanChatbot() {
    if (document.getElementById("floatingChatbot")) return;

    const chatbot = document.createElement("div");
    chatbot.id = "floatingChatbot";

    chatbot.innerHTML = `
        <button id="tombolChatbot" type="button" aria-label="Buka AI Tutor">
            🤖
        </button>

        <section id="kotakChatbot" class="kotak-chatbot">
            <header class="header-chatbot">
                <div>
                    <strong>AI Tutor Belajar Median</strong>
                    <small>Teman belajar matematika kamu</small>
                </div>
                <button id="tutupChatbot" type="button" aria-label="Tutup">×</button>
            </header>

            <div id="pesanChatbot" class="pesan-chatbot">
                <div class="pesan-ai">
                    Hai! 👋 Aku AI Tutor Belajar Median.
                    Yuk, belajar bersama. Apa yang ingin kamu pahami hari ini?
                </div>
            </div>

            <form id="formChatbot" class="form-chatbot">
                <input
                    id="inputChatbot"
                    type="text"
                    placeholder="Tulis pertanyaanmu..."
                    autocomplete="off"
                    required
                >
                <button type="submit">Kirim</button>
            </form>
        </section>
    `;

    document.body.appendChild(chatbot);

    document.getElementById("tombolChatbot").onclick = () => {
        document.getElementById("kotakChatbot").classList.toggle("aktif");
    };

    document.getElementById("tutupChatbot").onclick = () => {
        document.getElementById("kotakChatbot").classList.remove("aktif");
    };

    document.getElementById("formChatbot").onsubmit = (event) => {
        event.preventDefault();
        kirimPesanChatbot();
    };
}

function tambahPesanChatbot(teks, jenis) {
    const area = document.getElementById("pesanChatbot");
    const pesan = document.createElement("div");

    pesan.className = jenis === "siswa" ? "pesan-siswa" : "pesan-ai";
    pesan.textContent = teks;

    area.appendChild(pesan);
    area.scrollTop = area.scrollHeight;

    return pesan;
}


async function kirimPesanChatbot() {
    const input = document.getElementById("inputChatbot");
    const pertanyaan = input.value.trim();

    if (!pertanyaan) return;

    tambahPesanChatbot(pertanyaan, "siswa");
    input.value = "";

    const pesanLoading = tambahPesanChatbot(
        "Sedang berpikir... 🌷",
        "ai"
    );

    try {
        const APP_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbwe1JbBA3XW7dnTioNUh7W5M4I1-_2OeXH6yr1sgUDoru3bjUTvMK3Gnv7PM_BzHamg4w/exec";

        const response = await fetch(APP_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [{
                        text: `Kamu adalah AI Tutor dalam aplikasi Belajar Median untuk siswa SMP. 
                        Jawab menggunakan bahasa Indonesia yang ramah, sederhana, 
                        sabar, dan mudah dipahami. Fokus pada materi statistika 
                        khususnya median. Berikan contoh jika diperlukan.`
                    }]
                },
                contents: [{
                    role: "user",
                    parts: [{
                        text: pertanyaan
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            })
        });

        const data = await response.json();

        if (!data.sukses) {
            throw new Error(
                data.pesan || "AI Tutor gagal memberikan jawaban."
            );
        }

        pesanLoading.textContent = data.jawaban;

    } catch (error) {
        pesanLoading.textContent =
            "Terjadi kesalahan: " + error.message;
    }
}

document.addEventListener("DOMContentLoaded", buatTampilanChatbot);
