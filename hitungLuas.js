// Dita Annisa Diningtyas | Kelas Front End | Hari 9 

//objek untuk menyimpan informasi lingkaran
const lingkaran = {
    radius: null,
    luas: null,
    hitungLuas: function() {
        this.luas = Math.PI * this.radius * this.radius;
    }
};

//fungsi untuk menghitung luas lingkaran berdasarkan jari-jari
function hitungLuas() {
    //ambil nilai jari-jari dari input
    let radiusInput = document.getElementById("radius").value; 

    //konversi input ke angka 
    lingkaran.radius = parseFloat(radiusInput);

    //cek jika input angka valid
    if (isNaN(lingkaran.radius) || lingkaran.radius <= 0) {
        document.getElementById("result").innerText = "Tolong input nilai jari-jari yang valid.";
        return;
    }

    //hitung luas lingkaran 
    lingkaran.hitungLuas();

    //menampilkan hasil perhitungan
    document.getElementById("result").innerText = `Luas lingkaran dengan jari-jari ${lingkaran.radius} adalah ${lingkaran.luas.toFixed(2)}`;
}
