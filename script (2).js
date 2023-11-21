const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");


menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

const tutor = document.getElementById("Tutorials");

// Menambahkan event listener untuk mendeteksi klik pada ikon menu
menuIcon.addEventListener("click", function() {
    // Kode yang ingin dijalankan ketika ikon menu diklik
    console.log("tutor clicked!");
    // Tambahkan logika atau tindakan lain yang diperlukan di sini
});

