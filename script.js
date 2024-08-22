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
                <p class="txtcontent">IT Club smk trimulia telah membuat beberapa project, salah satunya yang sudah kami kerjakan sejauh ini yaitu line follower dari team presenter IT Club pada acara perkenalan eskul yang dilakukan oleh sekolah.</p>
                <div class="doubleprjk">
                    <div class="prjkcontent">
                        <img src="assets/anggotacvr.jpeg" alt="Team Presenter IT Club">
                    </div>
                </div>
                `;
            break;
        case 'member':
            contentDiv.innerHTML = `
                <head>
                    <title>Anggota</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">Daftar Anggota</span>IT Club</h1>
                <p class="txtcontent">Dibawah ini merupakan beberapa anggota yang terdaftar pada IT Club Trimulia.<p>
                <div class="listanggota"> 
                    <div class="imgcontainerlead">
                        <img src="assets/solihin.jpeg" alt="photo anggota">
                        <div class="photoname">Solihin, S.T.</div>
                    </div>
                    <div class="imgcontainer">
                        <img src="assets/MuhammadIrsyad.jpeg" alt="photo anggota">
                        <div class="photoname">Muhammad Irsyadtillah</div>
                    </div>
                    <div class="imgcontainer">
                        <img src="assets/MRidhoR.jpeg" alt="photo anggota">
                        <div class="photoname">Muhammad Ridho</div>
                    </div>
                    <div class="imgcontainer">
                        <img src="" alt="photo anggota">
                        <div class="photoname"> </div>
                    </div>
                    <div class="imgcontainer">
                        <img src="" alt="photo anggota">
                        <div class="photoname"> </div>
                    </div>
                </div>
                `;
            break;
        case 'project': 
            contentDiv.innerHTML = `
                <head>
                    <title>Projek</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">Projek</span>IT Club</h1>
                <p class="txtcontent">IT Club TRIMULIA menyediakan beberapa projek yang akan dijadikan acuan untuk pembelajaran, pada dasarnya sebuah projek akan mengambil waktu paling sedikit yaitu 1 bulan. <br> 
                Dibawah ini merupakan beberapa projek yang kami sediakan yaitu:</p>
                <div class="prjkicon">
                    <div class="containerProject">    
                        <a href="#wdev"><img src="assets/webdev.png" class="prjk"></a>
                        <div class="projectHover"> Web Dev </div>
                    </div>
                    <div class="containerProject">
                    <a href="#arduino"><img src="assets/IoT.png" class="prjk"></a>
                        <div class="ProjectHover"> IoT </div>
                    </div>                
                </div>
                    `;
            break;
        case 'contact':
            contentDiv.innerHTML = `
                <head>
                    <title>Kontak</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">Kontak</span>IT Club</h1>
                <a href="Submissionform.html" target="_blank"><button>Join Here!</button></a>
                `;
            break;
        case 'wdev':
            contentDiv.innerHTML = `
                <head>
                    <title>WebDev</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">Website</span><span style="color: navy;">Development</span></h1>
                <p class="txtcontent">Eskul IT Club di Trimulia menyediakan proyek pengembang website, yaitu membuat website sendiri dengan menggunakan bantuan google sites untuk permulaan. Untuk langkah pertama dalam projek ini para peserta eskul IT Club dapat membuka link google sites melalui <a href="https://sites.google.com/u/0/new?hl=id&pli=1&authuser=0" target="_blank">menekan huruf ini supaya dapat dialihkan ke website Google Sites.</a></p>
                <br>
                <p class="txtcontent">Setelah mengklik link yang berada diatas peserta IT Club diharuskan untuk login menggunakan akun google baik pribadi ataupun akun google duplikat (akun kerja dan lain lain)supaya dapat menyimpan progress yang akan dibuat nanti.</P>
                <h1 class="hedprsub">Membuka Google Sites</h1>
                <br>
                <div class="doubleprjk">
                    <div class="prjkcontent">    
                        <img src="assets/prjk/webdev/1.jpeg" alt="halaman awal google sites">
                    </div>
                </div>
                <br>
                <p class="txtcontent">Jika para peserta sudah berhasil masuk dan login ke Google Sites maka akan muncul tampilan berikut. Untuk melanjutkan pembuatan website peserta dapat mengklik "Situs Kosong" yang memiliki gambar ikon tambah yang berada pada Google Sites.</p>
                <br>
                <h1 class="hedprsub">Membuat dan Mengedit Google Sites</h1>
                <div class="doubleprjk">
                    <div class="prjkcontent">    
                        <img src="assets/prjk/webdev/2.jpeg" alt="halaman pengeditan website">
                    </div>
                </div>
                <br>
                <p class="txtcontent">Setelah mengklik opsi "Situs Kosong" seperti yang dikatakan di langkah sebelumnya maka tampilan diatas akan terbuka, dalam tampilan ini kita sudah bisa bebas membuat atau mengedit situs seperti yang kita inginkan. Peserta eskul IT Club juga dapat menggunakan template yang ada untuk mempercepat pembuatan/pengeditan website namun tidak disarankan untuk melakukan hal demikian dikarenakan menjelajah ilmu baru akan lebih mudah masuk dan disimpan didalam otak jika kita meng explore lebih jauh.</p>
                <p class="txtcontent">Jika dirasa sudah cukup maka klik tombol "Publikasikan" pada tombol dikanan atas yang berwarna biru (harap untuk mengisi atau mengedit website dulu agar bisa di publikasikan) supaya website kita bisa di publish dan dapat kita bagikan ke semua orang</p>
                <br>
                <h1 class="hedprsub">Mempublikasikan Website</h1>
                <br>
                <div class="doubleprjk">
                    <div class="prjkcontent">    
                        <img src="assets/prjk/webdev/3.jpeg" alt="proses publikasi website">
                    </div>
                </div>
                <br>
                <p class="txtcontent">Setelah langkah publikasi selesai maka website sudah siap dipakai, tombol publikasi sekarang memiliki 2 opsi yaitu mempublikasi seperti langkah sebelumnya (yang biasa digunakan untuk mengupdate website jika terdapat perubahan) dan icon yang menunjukan arah kebawah. Untuk melihat website dan membagikan website yang sudah kita bagikan klik tombol kedua (yang menunjuk arah bawah) untuk mengambil link yang ada.</p>
                <div class="prjkicon">
                <img src="assets/prjk/webdev/liltrip.jpeg" alt="opsi publikasikan">
                </div>
                <p class="txtcontent">Tampilan diatas akan muncul setelah kita mengklik opsi kedua dari "Publikasikan" yang mirip seperti ikon yang menunjuk kebawah, pada tampilan itu klik bagian "Lihat situs yang dipublikasikan" agar dapat dipindahkan ke website yang sudah kita buat/edit sebelumnya. Jika sudah dipindahkan ke website yang dipublikasikan, silahkan salin link yang ada dan bagikan ke teman atau kerabat anda. dengan begini proses pembuatan website dengan Google Sites telah selesai.</p>
                <p class="txtcontent">Selamat menikmati website yang sudah kalian buat dengan ini kami berharap anda telah memahami dasar dasar menggunakan Google Sites, jika anda masih bingung atau membutuhkan penjelasan lebih lanjut maka anda juga bisa menonton video yang sudah disiapkan dibawah ini.</p>
                <br>
                <iframe width="500" height="250" src="https://www.youtube.com/embed/4yrDF4JaZzI" text-align="center"></iframe>
                `;
            break;
        case 'arduino':
            contentDiv.innerHTML = `
                <head>
                    <title>Arduino</title>
                </head>
                <h1 class="hedpr"><span style="color: red;">IoT</span><span style="color: navy;">(Internet Of Things)</span></h1>
                <p class="txtcontent">Mohon maaf materi untuk project ini sedang disiapkan oleh creator, kami memohon atas kesabaran yang anda berikan.</p>`;
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
