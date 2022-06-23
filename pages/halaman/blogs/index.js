import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'

export default function blogs(props) {
  const {dataUsers} = props
  // console.log(dataUsers)
  const router = useRouter()

  return (
    <Layout title={`blog`}>
      <p className="title">blog page</p>

      <ul>
      {dataUsers.map(user => (
          <li key={user.id} className="item">
            <p>id : {user.id}</p>
            <p>name : {user.name}</p>
            <button onClick={() => router.push(`/halaman/blogs/${user.id}`)}>Baca selengkapnya</button>
          </li>
        ))
      }
      </ul>
      
    </Layout>
  )
}

//  getStaticProps akan menyediakan data yang dibutuhkan client sebelum halaman dirender pada client
// -. dengan fungsi getStaticProps pemanggilan api tidak akan terlihat pada client side saat di inspect.
// karna pemanggilan ini sebenarnya sudah dilakukan disisi server. sehingga client hanya akan mendapatkan data html saja
// -. kelemahan dari getStaticProps adalah saat data bersifat dinamis kita perlu mendefinisikan bahwa data tersebut dapat berubah kapan saja sehingga kita perlu merefresh agar server melakukan build ulang di aplikasi kita

// -. getStaticProps ini cocok untuk data yang tidak sering berubah
export async function getStaticProps () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const dataUsers = await res.json()
  return {
    props : {
      dataUsers : dataUsers.slice(0,10)
    }
  }
}