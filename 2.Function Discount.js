// Buatlah sebuah function sederhana untuk menghitung potongan harga, biaya yang harus dibayar, dan total kembalian pada sistem voucher DumbWays Klontong , ketentuan : 
// Voucher : 
// DumbWaysJos, potongan 21,1%, minimal uang belanja 50000, Maksimal diskon 20000
// DumbWaysMantap, potongan 30%, minimal uang belanja 80000, maksimal diskon 40000

// Clue : maka jika function dijalankan:
// hitungVoucher(DumbWaysJos, 100000)
// 	output :     -	Uang yang harus dibayar : 80000
// Diskon : 20000
// Kembalian  : 20000

function looping() {
    let DumbWaysJos = document.getElementById("price").value;
    let DumbWaysMantap = document.getElementById("price2").value;

    if (DumbWaysJos >= 50000) {
        discount = DumbWaysJos*(21.1/100);
    } else if (DumbWaysJos >= 0 && DumbWaysJos <= 50000 ) {
        discount = 0;
    } 
    if (discount >= 20000 ) {
        discount = 20000;
    }

    paid = DumbWaysJos-discount
    refund = DumbWaysJos-paid

    if (DumbWaysMantap >= 80000) {
        discount1 = DumbWaysMantap*(30/100);
    } else if (DumbWaysMantap >= 0 && DumbWaysMantap <= 80000 ) {
        discount1 = 0;
    } 
    if (discount1 >= 40000 ) {
        discount1 = 40000;
    }

    paid1 = DumbWaysMantap-discount1
    refund1 = DumbWaysMantap-paid1

    document.getElementById("outputdiscount").innerHTML = (discount);
    document.getElementById("outputpaid").textContent = (paid);
    document.getElementById("outputrefund").textContent = (refund);
    document.getElementById("outputdiscount1").innerHTML = (discount1);
    document.getElementById("outputpaid1").textContent = (paid1);
    document.getElementById("outputrefund1").textContent = (refund1);

}