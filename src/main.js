const modal = document.querySelector(".modal");

function closeModal() {
	modal.style.display = "none";
}

function showModal() {
	modal.style.display = "flex";
}

// Mobile Event
// Đóng/Mở Mobile Menu
let header = document.getElementById("header");

let mobileMenu = document.querySelector(".mobile-menu-btn");

mobileMenu.addEventListener("click", (e) => {
	header.classList.toggle("show-menu-mobile");
	sub_menu.classList.remove("show_sub_menu");
});

// Tự động đóng khi chọn Menu
let nav = document.querySelector("#nav");

nav.addEventListener("click", (e) => {
	header.classList.remove("show-menu-mobile");
});

let sub_menu_btn = document.querySelector(".sub_menu");
let sub_menu = document.querySelector(".sub_nav");

sub_menu_btn.addEventListener("click", (e) => {
	e.stopPropagation();
	e.preventDefault();

	sub_menu.classList.toggle("show_sub_menu");
});
