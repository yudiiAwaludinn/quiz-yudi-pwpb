const d = document;
let restoPay = d.getElementById("resto-pay");
let cash = d.getElementById("cash");

// Container pembayaran
const RestoPay = d.querySelector(".container-metode-pembayaran");
const Cash = d.querySelector(".container-metode-cash")
// let saldo = d.getElementById("saldo-resto-pay").value; // saldo resto pay
// console.log(localStorage.getItem("total"));

let checkedResto = false;
RestoPay.addEventListener("click", () => {
  checkedResto = !checkedResto;
  restoPay.checked =checkedResto;
});

let checkedCash = false;
Cash.addEventListener("click", () => { 
  checkedCash = !checkedCash;
  cash.checked = checkedCash;
});

let saldo = d.getElementById("saldo-resto-pay").value; //saldo resto
console.log(localStorage.getItem("total"));

const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

let desc = localStorage.getItem("pesanan");
let nama = localStorage.getItem("nama");
info.innerHTML = `anda telah memesan ${nama}: ${desc}`;
let data = localStorage.getItem("total");
let total = (document.getElementById("total").innerHTML = formatUang(
  parseInt(data)
));
let saldo_u = 100000;

const saldo_user = (document.getElementById("saldo").innerHTML =
  formatUang(saldo_u));
  
const bayar = () => {

   // Cek apakah memilih metode resto-pay
  let restoPay = d.getElementById("resto-pay").checked;
  let cash = d.getElementById("cash").checked
  console.log(restoPay, cash);

  if (!restoPay && !cash) {
    alert("Plih metode pembayaran terlebih dahulu !");
  } else {
    if (restoPay === true) {
      if (saldo_u < data) {
        konfirmasi = confirm("Saldo Tidak Cukup ! apakah anda ingin topup?");
        if (konfirmasi == true) {
          topup = prompt("masukan nomina pecahan 10000");
          if (topup % 10000 == 0) {
            saldo_u + topup;
          }
        }
      } else {
        window.location.href = "succes.html";
      }
    } else if (cash === true) {
      window.location.href = "cashier.html";
    }
  }
};
