
document.addEventListener("DOMContentLoaded", function () {

    // tải lại trang, lưu trạng thái button theme
    let savedTheme = localStorage.getItem("theme");
    let html = document.documentElement;
    let themeToggle = document.getElementById("theme"); // Lấy phần tử nút toggle
    if (savedTheme) {
        document.documentElement.setAttribute("data-bs-theme", savedTheme);
        themeToggle.checked = savedTheme === "dark"; // Cập nhật trạng thái checked
    }

    // kích hoạt trạng thái nav khi ở 1 trang tương tự
    let currentPath = window.location.pathname; // Lấy đường dẫn trang hiện tại
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});

// thu phóng thanh nav khi nhấn nút
document.getElementById("closeMenu").addEventListener("click", function () {
    let icon = document.getElementById("icon");
    let leftPane = document.getElementById('leftNav');
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times", "rotate");
        leftPane.classList.remove('hidden');
    } else {
        icon.classList.remove("fa-times", "rotate");
        icon.classList.add("fa-bars");
        
        leftPane.classList.add('hidden');
    }
});

// đổi trạng thái theme khi nhấn nút
function toggleTheme() {
    let html = document.documentElement;
    let themeToggle = document.getElementById("theme");

    if (html.getAttribute("data-bs-theme") === "light") {
        html.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.checked = true;
    } else {
        html.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.checked = false;
    }
}

document.getElementById("cover-sub-info").addEventListener("click", function () {
    document.getElementById("cover-sub-info").style.display = "none";
    document.getElementById("sub-info").style.display = "none";
});

document.getElementById("nameUser").addEventListener("click", function () {
    document.getElementById("cover-sub-info").style.display = "block";
    document.getElementById("sub-info").style.display = "block";
});