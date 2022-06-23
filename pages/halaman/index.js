/* 
- ketika mengakses http://localhost:3000/halaman maka file index.js akan menjadi file root untuk url tersebut
- jika tidak ada file ini maka yang muncul hanyalah file not fount atau page not found*/

import Layout from "../../components/Layout";

export default function index() {
  return (
    <Layout title={`halaman root`}>
      <p>ini adalah halaman root dari url http://localhost:3000/halaman</p>
      <p>ini adalah halaman baru</p>
    </Layout>
  )
}
