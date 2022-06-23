import Layout from "../../components/Layout";

export default function todos(props) {
  const {todos} = props

  return (
    <Layout title={`todos`}>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <p>id : {todo.id}</p>
            <p>title : {todo.title}</p>
            <p>completed : {todo.completed.toString()}</p>
            <hr />
          </div>
        ))
      }
    </Layout>
  )
}

/*
- pages yang dihasilkan oleh getServerSideProps hanya berupa file js namun sebelumnya tetap disiapkan di server dahulu. 
tidak seperti metode fetching yang lainnya dimana sudah menghasilkan file html yang telah jadi langsung dari server.

- metode ini cocok untuk halaman yang memiliki data yang dinamis atau sering berubah ubah di databasenya
*/ 

export async function getServerSideProps () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const todos = await res.json()


  return {
    props : {
      todos : todos.slice(0,5)
    }
  }
}