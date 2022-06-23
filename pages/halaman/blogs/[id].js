/* file yang diberi nama menggunakan kurung array, contoh saat kita mengakses url http://localhost:3000/halaman/blog/id
maka data didalamnya dapat kita tampilkan secara dinamis

- kita dapat mengakses prop id, prop id berada didalam fungsi useRouter didalam properti query
*/ 

import Link from 'next/link'
import {useRouter} from 'next/router'

export default function detailBlog(props) {
  // const {id}  = useRouter().query
  // console.log(useRouter().query)
  // console.log(props)
  const {user} = props

  return (
    <div>
        <ul>
          <li>ini adalah detail users dengan id {user.id}</li>
          <li>name : {user.name}</li>
          <li>email : {user.email}</li>
          <li>phone : {user.phone}</li>
          <li>website : {user.website}</li>
        </ul>

        <Link href={`http://localhost:3000/halaman/blogs`}>  Kembali</Link>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()

  const paths = users.map(post => ({
    params : {
      id : post.id.toString()
    }
  }))

  return {
    paths,

    // fallback true, proses render akan terus menunggu hingga fetching selesai meskipun terdapat error pada url
    // fallback false, akan mengalihkan page ke 404 jika terjadi masalah pada fetching sehingga lebih aman
    fallback : false
  } 
    
}


export async function getStaticProps(context) {
  const {id} = context.params

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await res.json()

  return {
    props : {
      user
    }
  }
}