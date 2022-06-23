import { useEffect } from "react"
import {useRouter} from 'next/router'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      console.log(`fungsi ini akan dijalankan setelah dua detik`)
      // setelah dua detik akan mengembalikan user ke halaman utama
      router.push(`/`)
    }, 2000)
  },[])

  return (
    <div>
        <h1>sayang sekali</h1>
        <h1>halaman yang anda cari tidak ditemukan</h1>
        <h1>anda akan otomatis dikembalikan ke home setelah dua detik</h1>
    </div>
  )
}
