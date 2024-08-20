document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.navburgir');
    const navLinks = document.querySelector('.navburr');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function() {
    // Load the correct page based on the current URL hash when the page loads
    handleHashChange();
    
    // Add an event listener to detect hash changes
    window.addEventListener("hashchange", handleHashChange);
});

function handleHashChange() {
    // Get the current hash without the '#' character
    const hash = window.location.hash.substring(1);
    
    // Call the function to update the content based on the hash
    showPage(hash || 'home'); // Default to 'home' if no hash is present
}

function showPage(page) {
    const contentDiv = document.getElementById('content');
    
    switch(page) {
        case 'home':
            contentDiv.innerHTML = `
                <head>
                    <title>Home</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">IT CLUB</span><span style"color: black;">SMK TRIMULIA JAKARTA</span></h1>
                <img src="assets/logo.jpeg" alt="Logo IT Club Trimulia" class="photocvr">
                <p class="txtcontent">IT Club Trimulia didirikan pada tahun 2023 dengan tujuan untuk membekali siswa-siswi dengan keterampilan teknologi yang relevan dengan perkembangan zaman. Di bawah bimbingan Bapak Solihin, eskul ini berupaya menciptakan lingkungan belajar yang menyenangkan dan inspiratif. Melalui berbagai kegiatan yang diselenggarakan, siswa-siswi tidak hanya memperoleh pengetahuan baru, tetapi juga dapat mengembangkan soft skills seperti problem-solving, teamwork, dan kreativitas.</p>
                <h2>Siapa Pencipta IT Club Trimulia?</h2>
                <div class="pencipta">
                    <img src="assets/solihin.jpeg" alt="Pencipta IT Club" class="solihin">
                    <div class="solihininfo">
                    <h2>Solihin, S.T.</h2>
                    <p>Guru SMK TRIMULIA JAKARTA pada mapel keamanan jaringan serta operational system serta termasuk dari salah satu IT Team atau teknisi.</p>
                    <p>Guru pembimbing eskul IT Club yang dibangun oleh beliau sendiri dengan jumlah anggota kurang lebih 40 orang</p>
                    <a href="mailto:solihin@smktrimulia.sch.id">solihin@smktrimulia.sch.id</a>
                    </div>
                </div>
                <p class="txtcontent">IT Club telah merancang beberapa projek sebagai bahan acuan yang akan ditetapkan untuk bahan pembelajaran pada eskul, beberapa projek yang ditetapkan yaitu:</p>
                <ul>
                    <li class="txtcontent">Perancangan website menggunakan Google Sites</li>
                    <li class="txtcontent">Pembuatan logo untuk kebutuhan pribadi</li>
                    <li class="txtcontent">Pembuatan projek simple menggunakan arduino Uno</li>
                    <li class="txtcontent">Pembuatan website menggunakan front-end language</li>
                </ul>
                `;
            break;
        case 'member':
            contentDiv.innerHTML = `
                <head>
                    <title>Anggota</title>
                </head>
                <h1>About Us</h1>
                <p>This is the about page content.</p>`;
            break;
        case 'project':
            contentDiv.innerHTML = `
                <head>
                    <title>Projek</title>
                </head>
                <h1><span style="color: red">Projek</span><span style="color: yellow">IT Club</span></h1>
                <p>IT Club TRIMULIA menyediakan beberapa projek yang akan dijadikan acuan untuk pembelajaran, pada dasarnya sebuah projek akan mengambil waktu paling sedikit yaitu 1 bulan. <br> 
                Dibawah ini merupakan beberapa projek yang kami sediakan yaitu:</p>
                <a href="#wdev"><img src="Assets/testdongs.png" class="prjk"></a>
                <a href="#arduino"><img src="Assets/tes.png" class="prjk"></a>`;
            break;
        case 'contact':
            contentDiv.innerHTML = `
                <head>
                    <title>Kontak</title>
                </head>
                <h1>Contact Us</h1>
                <p>This is the contact page content. Include a contact form or details here.</p>`;
            break;
        case 'wdev':
            contentDiv.innerHTML = `
                <head>
                    <title>WebDev</title>
                </head>
                <h1>Website Development</h1>
                <p>Eskul IT Club di Trimulia menyediakan proyek pengembang website, yaitu membuat website sendiri dengan menggunakan bantuan google sites untuk permulaan.</p>`;
            break;
        case 'arduino':
            contentDiv.innerHTML = `
                <head>
                    <title>Arduino</title>
                </head>
                <h1>IoT (Internet Of Things)</h1>
                <p>Eskul IT Club di Trimulia menyediakan proyek pengembang website, yaitu membuat website sendiri dengan menggunakan bantuan google sites untuk permulaan.</p>`;
            break;
        default:
            contentDiv.innerHTML = `
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>`;
            break;
    }

    // Update the URL hash without causing the page to jump
    window.history.pushState(null, null, `#${page}`);
}
