document.addEventListener("DOMContentLoaded", function () {
    // 📌 MENÜ AÇ/KAPA BUTONU (DÜZELTİLDİ)
    const menu = document.getElementById("side-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    if (menu && menuToggle) {  // Menü ve buton varsa çalıştır
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }

    // 📌 FOTOĞRAFLAR & PROJELER – KAYDIRINCA GÖRÜNME EFEKTİ (SİNEMATİK)
    function revealOnScroll() {
        let elements = document.querySelectorAll(".project-item");
        let windowHeight = window.innerHeight;

        elements.forEach((element, index) => {
            let elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) { 
                setTimeout(() => {
                    element.classList.add("show");
                }, index * 250); // Her öğeye 250ms gecikme ekle (sırayla gelsin)
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Sayfa yüklendiğinde de çalıştır

    // 📌 DİĞER GİZLİ ELEMENTLERİN KAYDIRILINCA GÖRÜNME EFEKTİ
    let hiddenElements = document.querySelectorAll(".hidden");

    function checkScroll() {
        let windowHeight = window.innerHeight;
        hiddenElements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 

    // 📌 PROJELER & FOTOĞRAFLAR – TIKLAMA/DOKUNMA EFEKTİ (PC + MOBİL)
    let projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach((item) => {
        item.addEventListener("mousedown", function () { // Bilgisayarda tıklama
            item.classList.add("active");
        });

        item.addEventListener("mouseup", function () { // Tıklamayı bırakınca eski haline dönsün
            item.classList.remove("active");
        });

        item.addEventListener("touchstart", function () { // Telefonda dokunma
            item.classList.add("active");
        });

        item.addEventListener("touchend", function () { // Parmağı çekince eski haline dönsün
            item.classList.remove("active");
        });
    });
});