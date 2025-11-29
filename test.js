let step = 1;

// ====================
// 10 STEP DATA
// ====================
const questions = [
  {
    q: "Apa jenis pekerjaan yang paling nyaman untuk kamu jalani?",
    opt: [
      "Pakai logika & analisis",
      "Pakai kreativitas",
      "Pakai komunikasi & interaksi",
      "Pakai aturan & dokumen",
      "Pakai koordinasi & manajemen"
    ]
  },
  {
    q: "Bagaimana cara kamu paling mudah memahami sesuatu?",
    opt: [
      "Lewat angka, grafik, data",
      "Lewat visual & warna",
      "Lewat penjelasan lisan",
      "Lewat teks dan aturan",
      "Lewat praktik langsung"
    ]
  },
  {
    q: "Masalah seperti apa yang paling kamu suka untuk diselesaikan?",
    opt: [
      "Mengolah data",
      "Membuat sesuatu lebih menarik",
      "Menangani urusan dengan orang",
      "Mengecek aturan & regulasi",
      "Mengatur workflow & jadwal"
    ]
  },
  {
    q: "Di situasi seperti apa kamu paling betah bekerja?",
    opt: [
      "Fokus sendiri di laptop",
      "Ngobrol dan diskusi",
      "Mikirin ide baru",
      "Membaca dokumen & detail",
      "Mengatur orang / koordinasi"
    ]
  },
  {
    q: "Hasil kerja seperti apa yang paling kamu suka lihat?",
    opt: [
      "Akurat & rapi",
      "Estetik & menarik",
      "Jelas & informatif",
      "Sesuai aturan",
      "Tersusun rapi secara project"
    ]
  },
  {
    q: "Bidang apa yang paling ingin kamu eksplor lebih jauh?",
    opt: [
      "Teknologi",
      "Kreatif",
      "Bisnis",
      "Hukum",
      "Komunikasi",
      "Pendidikan"
    ]
  },
  {
    q: "Peran apa yang biasanya kamu ambil saat kerja kelompok?",
    opt: [
      "Pengolah data / teknis",
      "Pembuat desain / presentasi",
      "Penyampai materi",
      "Pemeriksa aturan / detail",
      "Pengatur timeline / alur kerja"
    ]
  },
  {
    q: "Kamu paling nyaman bekerja dengan apa?",
    opt: [
      "Angka dan data",
      "Visual dan desain",
      "Orang dan komunikasi materi",
      "Dokumen dan aturan",
      "Struktur dan rencana"
    ]
  },
  {
    q: "Apa yang biasanya membuat kamu lebih bersemangat?",
    opt: [
      "Belajar hal teknis",
      "Membuat sesuatu lebih cantik",
      "Bertemu orang baru",
      "Memahami aturan",
      "Mengembangkan ide bisnis",
      "Mengatur event atau project"
    ]
  },
  {
    q: "Aktivitas mana yang paling terasa “kamu banget”?",
    opt: [
      "Mengolah dan membaca data",
      "Mencari celah atau menjaga keamanan sistem",
      "Menyelidiki jejak digital untuk menemukan bukti",
      "Memahami aturan, dokumen, atau regulasi",
      "Merancang atau mengembangkan ide bisnis",
      "Membuat desain visual atau materi kreatif",
      "Mengelola konten dan aktivitas sosial media",
      "Berinteraksi dan membangun komunikasi dengan publik",
      "Mengatur alur kerja dan memastikan semua berjalan rapi",
      "Mendukung kebutuhan dan dinamika anggota tim",
      "Membuat website atau fitur digital",
      "Mendesain tampilan dan pengalaman pengguna",
      "Membuat materi, modul, atau konten edukasi",
      "Menganalisis tren, data, atau informasi pasar"
    ]
  }
];


// ==============================
// GET ELEMENT
// ==============================
const stepTitle = document.querySelector(".step-title");
const questionText = document.querySelector(".question");
const choiceList = document.querySelector(".choice-list");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");
const sidebarSteps = document.querySelectorAll(".steps-list li");

const nextBtn = document.querySelector(".next-btn");
const backQuestionBtn = document.querySelector(".backquestion-btn");
const divisionLink = document.querySelector(".division-link");


// ==============================
// LOAD STEP
// ==============================
function loadStep() {
    const data = questions[step - 1];

    // Judul step dan pertanyaan
    stepTitle.innerText = "STEP " + step;
    questionText.innerText = data.q;

    // Pilihan jawaban
    choiceList.innerHTML = "";
    data.opt.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("choice");
        btn.innerText = opt;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".choice").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
        });

        choiceList.appendChild(btn);
    });

    // Progress
    const percent = step * 10;
    progressFill.style.width = percent + "%";
    progressText.innerText = percent + "%";

    // Sidebar
    sidebarSteps.forEach((li, i) => {
        li.classList.toggle("active", i + 1 === step);
    });

    // visibility/opacity
    backQuestionBtn.style.visibility = step > 1 ? "visible" : "hidden";
    backQuestionBtn.style.display = 'block';

    // Step 10 → tombol berubah menjadi "Selesai"
    nextBtn.innerText = (step === 10) ? "Selesai" : "Lanjut";
}


// ==============================
// NEXT BTN
// ==============================
nextBtn.addEventListener("click", () => {
    if (step < 10) {
        step++;
        loadStep();
    } else {
        // Step 10 → langsung ke hasil
        window.location.href = "hasil.html";
    }
});


// ==============================
// BACK BTN
// ==============================
backQuestionBtn.addEventListener("click", () => {
    if (step > 1) {
        step--;
        loadStep();
    }
});


// ==============================
// FIRST LOAD
// ==============================
loadStep();
