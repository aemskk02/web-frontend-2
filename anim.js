// Ambil elemen navbar
const navbar = document.getElementById('navbar');

// Variabel untuk menyimpan posisi scroll sebelumnya
let prevScrollpos = window.pageYOffset;

// Fungsi untuk menampilkan/menyembunyikan navbar saat scroll
function showHideNavbar() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // Scroll ke atas, tampilkan navbar
        navbar.classList.remove('navbar-hidden');
    } else {
        // Scroll ke bawah, sembunyikan navbar
        navbar.classList.add('navbar-hidden');
    }
    prevScrollpos = currentScrollPos;
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', showHideNavbar);
