--- START OF FILE script.js ---
document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas Search Bar (Contoh: Log query pencarian ke konsol)
    const searchForm = document.querySelector('.content-wrapper .search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form default
            const searchInput = searchForm.querySelector('input[type="text"]');
            if (searchInput) {
                const searchQuery = searchInput.value;
                console.log('Query Pencarian:', searchQuery);
                // Dalam aplikasi nyata, Anda akan menangani query pencarian di sini,
                // seperti mengirimkannya ke server atau memfilter konten di halaman.
                alert('Mencari: ' + searchQuery + '\n(Fungsi ini hanya untuk demonstrasi)');
            }
        });
    }

    // --- Pengalih Tema (Contoh: Toggle kelas pada body) ---
    // Tambahkan tombol ke HTML Anda untuk memicu ini (misalnya, di header atau menu)
    // Contoh HTML: <button id="theme-toggle">Alihkan Tema Terang</button>

    const themeToggle = document.getElementById('theme-toggle'); // Diasumsikan Anda menambahkan tombol dengan ID ini
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            // Anda perlu mendefinisikan '.light-theme' di CSS Anda untuk menangani style tema terang.
            // Contohnya:
            /*
            body.light-theme {
                background-color: #f5f5f5;
                color: #333;
            }
            .light-theme .content-wrapper {
                background-color: #fff;
                color: #555;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            }
            .light-theme h1, .light-theme h2, .light-theme h3, .light-theme h4 {
                color: #007bff;
            }
            .light-theme .search-bar {
                background-color: #e8f0fe;
                border-color: #bbd2f0;
                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            }
            .light-theme .search-bar:hover, .light-theme .search-bar:focus-within {
                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
                border-color: #8ab4f8;
                background-color: #f0f4ff;
            }
            .light-theme .search-bar input[type="text"] {
                color: #333;
            }
            .light-theme .search-bar input::placeholder {
                color: #999;
            }
            .light-theme .search-bar span {
                color: #999;
            }
            .light-theme .search-bar span:hover {
                color: #666;
            }
            .light-theme footer {
                background-color: #f0f0f0;
                color: #777;
                box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
            }
            .light-theme .menu-link {
                background-color: #f8f9fa;
                color: #495057;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            }
            .light-theme .menu-link:hover {
                background-color: #e2e6ea;
                color: #0056b3;
                border-color: #0056b3;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
            .light-theme .menu-link i {
                color: #0056b3;
            }
            .light-theme table {
                background-color: #f9f9f9;
                color: #444;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            }
            .light-theme th {
                background-color: #e9ecef;
                color: #343a40;
            }
            .light-theme tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            .light-theme .conversation-card,
            .light-theme .section,
            .light-theme .remember-section,
            .light-theme .contact-section {
                background-color: #f8f9fa;
                color: #444;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            }
            .light-theme .conversation-card:hover,
            .light-theme .section:hover,
            .light-theme .remember-section:hover,
            .light-theme .contact-section:hover {
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            .light-theme .conversation-card h4,
            .light-theme .section h2,
            .light-theme .remember-section h2,
            .light-theme .contact-section h2 {
                color: #007bff;
            }
            .light-theme .conversation-card .card-subtitle,
            .light-theme .remember-list li .note {
                color: #777;
            }
            .light-theme .conversation-card p,
            .light-theme .section .content,
            .light-theme .remember-list li,
            .light-theme .contact-list li a {
                color: #555;
            }
            .light-theme .remember-list li .example {
                background-color: #f0f0f0;
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
            }
            .light-theme .remember-list li .example b {
                color: #333;
            }
            .light-theme .remember-list li .important {
                color: #ffc107; // Contoh: Kuning yang sedikit berbeda untuk tema terang
            }
            .light-theme .section .content i,
            .light-theme .remember-section h2 i,
            .light-theme .contact-section h2 i,
            .light-theme h2#kemas-akun i,
            .light-theme h2#percakapan i,
            .light-theme h3#bangun-kepercayaan i,
            .light-theme h3#percakapan-santai i,
            .light-theme h3#strategi-pelanggan i,
            .light-theme h3#strategi-menembak i,
            .light-theme h4#konten-harian i,
            .light-theme h2#perlu-diingat i,
            .light-theme h2#kontak-kami i,
            .light-theme .menu-link i {
                color: #007bff;
            }
            */
        });
    }

    // --- Contoh: Penyorotan Link Menu Aktif Sederhana (Pemeriksaan URL Sederhana) ---
    const menuLinks = document.querySelectorAll('.menu-link'); // Diasumsikan link menu Anda memiliki kelas ini
    const currentPath = window.location.pathname; // Dapatkan path halaman saat ini

    menuLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname; // Dapatkan path dari href link
        if (currentPath === linkPath) {
            link.classList.add('active-menu-link'); // Tambahkan kelas 'active-menu-link' ke link aktif
        }
    });
    // Anda perlu mendefinisikan kelas '.active-menu-link' di CSS Anda untuk men-style link aktif.
    // Contoh CSS:
    /*
    .menu-link.active-menu-link {
        background-color: #00bcd4; // Atau warna status aktif yang berbeda
        color: white;
        font-weight: bold;
    }
    .menu-link.active-menu-link:hover { // Opsional: pertahankan efek hover konsisten atau sesuaikan
        background-color: #00a6b9;
        color: white;
        border-color: transparent;
    }
    .menu-link.active-menu-link i {
        color: white; // Sesuaikan warna ikon jika diperlukan
    }
    */
});