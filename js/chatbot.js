
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
        const API_KEY = "MASUKKAN_API_KEY_GEMINI";
        const MODEL = "gemini-3.5-flash-lite";

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Kamu adalah AI Tutor dalam aplikasi Belajar Median untuk siswa SMP. Jawab dengan bahasa Indonesia yang ramah, sederhana, dan mudah dipahami. Pertanyaan: ${pertanyaan}`
                        }]
                    }]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Gemini gagal merespons.");
        }

        const jawaban =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Maaf, AI Tutor belum bisa memberikan jawaban.";

        pesanLoading.textContent = jawaban;

    } catch (error) {
        pesanLoading.textContent =
            "Terjadi kesalahan: " + error.message;
    }
}


document.addEventListener("DOMContentLoaded", buatTampilanChatbot);
