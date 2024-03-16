export type T_Property = {
  harga: Number;
  gambar?: string;
  nama_property: string;
  alamat: string;
  fasilitas: {
    tempat_tidur: Number;
    kamar_mandi: Number;
    parkir_kendaraan?: Number;
  };
};

export type T_Comment = {
  komentar: string;
  foto_profil?: string;
  nama: string;
  pekerjaan: string;
};
