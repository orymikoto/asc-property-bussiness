export type T_Property = {
  harga: Number;
  gambar: String | null;
  nama_property: String;
  alamat: String;
  fasilitas: {
    tempat_tidur: Number;
    kamar_mandi: Number;
    parkir_kendaraan: Number | null;
  };
};

export type T_Comment = {
  komentar: String;
  foto_profil: String | null;
  nama: String;
  pekerjaan: String;
};
