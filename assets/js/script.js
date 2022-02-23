// Navbar Animation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Youtube Embed
/*This script was developed by Codegena.com
ALL RIGHTS RESERVED
*/
var i, c, y, v, s, n;
var im = new Array();
v = document.getElementsByClassName("youtube");

for (n = 0; n < v.length; n++) {
  im[n] = v[n].hasAttribute("src") ? v[n].getAttribute("src") : "http://i.ytimg.com/vi/" + v[n].id + "/hqdefault.jpg";
}

for (n = 0; n < v.length; n++) {
  y = v[n];
  i = document.createElement("img");
  i.setAttribute("src", im[n]);
  i.setAttribute("class", "thumb");
  c = document.createElement("div");
  c.setAttribute("class", "play");
  y.appendChild(i);
  y.appendChild(c);
  y.onclick = function() {
    var t = document.createElement("iframe");
    t.setAttribute("src", "https://www.youtube.com/embed/" + this.id + param(this));
    t.style.width = this.style.width;
    t.style.height = this.style.height;
    this.parentNode.replaceChild(t, this);
  }
};
function param(x){
  if (x.getAttribute("data-params") !== null) {
      return x.getAttribute("data-params");
    } else {
      return "?autoplay=1";
     
    }
}

// Checkout
$(document).on("click", ".send", function () {
  /* Inputan Formulir */
  var input_name = $("#name").val(),
    input_email = $("#email").val(),
    input_phone = $("#phone").val(),
    input_product = $("#product").val(),
    input_description = $("#description").val();

  /* Pengaturan Whatsapp */
  var walink = "https://web.whatsapp.com/send",
    phone = "6285777601960",
    text = "Halo saya ingin memesan ",
    text_yes = "Pesanan Anda berhasil terkirim.",
    text_no = "Isilah formulir terlebih dahulu.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if (input_name != "" && input_phone != "" && input_product != "") {
    /* Whatsapp URL */
    var checkout_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      text +
      "%0A%0A" +
      "*Nama* : " +
      input_name +
      "%0A" +
      "*Alamat Email* : " +
      input_email +
      "%0A" +
      "*Nomor Kontak / Whatsapp* : " +
      input_phone +
      "%0A" +
      "*Produk* : " +
      input_product +
      "%0A" +
      "*Catatan* : " +
      input_description +
      "%0A";

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<div class="alert alert-success">' + text_yes + "</div>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<div class="alert alert-danger">' + text_no + "</div>";
  }
});



