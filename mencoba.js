class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }
  infokapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
}

class KapalPenumpang extends Kapal {
  // ...
}
class KapalKargo extends Kapal {
  // ...
}
class KapalPesiar extends Kapal {
  // ...
}
class KapalMewah extends KapalPesiar {
  // ...
}
class KapalFerry extends KapalPenumpang {
  // ...
}
class KapalTanker extends Kapal {
  // ...
}
class KapalKolektif extends Kapal {
  // ...
}
class KapalPesawat extends Kapal {
  // ...
}
class KapalBuru extends Kapal {
  // ...
}

function tampilkanInfoTransportasi(transportasi) {
  console.log(transportasi.infokapal());
}

const kapalFerry = new KapalFerry("Milik Linda Apriyani", 240, 32, 600, 400);
const kapalKargo = new KapalKargo(
  "Kargo Maersk Triple E Class",
  400,
  59,
  100000
);
const kapalPesiar = new KapalPesiar("Norwegian Bliss", 333, 41, [
  "Kolam Renang",
  "Restoran dan Bar",
]);
const kapalMewah = new KapalMewah(
  "Oceania Riviera",
  245,
  32,
  ["Spa", "Restoran Mewah"],
  20000
);
const kapalTanker = new KapalTanker("Tanker Pertamina", 300, 50, 150000);
const kapalKolektif = new KapalKolektif("Kolektif Bahari", 200, 30, 100);
const kapalPesawat = new KapalPesawat("Kapal Pesawat Jumbo", 350, 45, 200);
const kapalBuru = new KapalBuru("Kapal Buru Laut", 150, 25, "Ikan Tuna");

const transportasiList = [
  kapalFerry,
  kapalKargo,
  kapalPesiar,
  kapalMewah,
  kapalTanker,
  kapalKolektif,
  kapalPesawat,
  kapalBuru,
];

transportasiList.forEach(tampilkanInfoTransportasi);
