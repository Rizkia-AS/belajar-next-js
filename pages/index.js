import Head from 'next/head'


import Image from 'next/image'
/*
- gambar yang dihasilkan oleh component Image akan lebih optimal dibandingkan dari tag img
- gambar yang dihasilkan oleh component Image juga dapat menggunakan lazy load dimana gambar yang dirender pertama kali saat
halaman di refresh hanyalah gambar yang tampak pada layar saja, gambar yang tidak tampak tidak akan di render dulu atau
di load sebelum tampak pada layar */ 

import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <>
    <Layout title={`Home page`}>
      <h1 className={styles['title-homepage']}>ini adalah project next js</h1>

      <Image src='/sebuah-gambar.jpg' width={200} height={300}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae id quis magnam alias.</p>
      <p>In odit facere ipsum tenetur hic, possimus explicabo quidem temporibus inventore aliquid dignissimos, veniam dolorum.</p>
      <p>Nihil libero, omnis at harum qui fugit eaque tenetur provident dignissimos, ullam veniam atque explicabo?</p>
      <p>Nesciunt neque quidem assumenda molestias sequi soluta, quos, accusantium repellat eveniet dolorum at, dolores quasi.</p>
      <p>Dignissimos maxime perferendis mollitia, perspiciatis fugit, cumque pariatur est harum ullam, quisquam at porro tempore.</p>
      <p>Provident expedita eligendi recusandae obcaecati assumenda animi modi quaerat officia iusto sint. Eveniet, nisi tempore.</p>
      <p>Temporibus possimus aut hic aliquid atque labore at libero nam quisquam, impedit, nesciunt ratione odit?</p>
      <p>Non optio in quisquam, commodi ratione officiis et neque beatae dicta, voluptatibus est asperiores explicabo.</p>
      <p>Soluta, eligendi, eos fugiat repellat in a quam molestiae provident at, iste illo sapiente optio.</p>
      <p>Placeat modi excepturi incidunt fugit vero. At laudantium itaque dolorum minima saepe quia a ipsa.</p>
      <p>Maxime beatae molestiae amet distinctio, inventore provident accusantium vitae qui laborum fugiat saepe ullam eius.</p>
      <p>Accusantium inventore vero nostrum earum enim itaque nulla reiciendis illum. Ducimus eum nihil quae saepe.</p>
      <p>Quo perspiciatis laudantium fuga illum maiores dolores, eum autem minus, reprehenderit quod accusantium recusandae fugiat!</p>
      <p>Itaque quibusdam tempore nihil et iusto in nesciunt ut aliquam similique. Fuga ducimus minima deleniti?</p>
      <p>Ipsa doloribus quo, voluptate obcaecati beatae molestias mollitia? Animi molestiae laborum sed cumque qui debitis?</p>
      <p>Pariatur sed adipisci voluptates fugit, eos tempore facere quaerat placeat ratione architecto, natus ad nesciunt.</p>
      <p>Dicta illo itaque sequi laborum consectetur exercitationem est nemo repudiandae nobis! Error quisquam magni beatae.</p>
      <p>Accusamus nostrum quos corporis neque magnam aspernatur quaerat placeat, voluptate ullam? Deleniti assumenda tenetur facere.</p>
      <p>Enim, quaerat modi excepturi velit, provident earum unde at placeat, quia vero corporis maxime cum!</p>
      <p>Mollitia officia soluta vero, nostrum harum fuga deserunt quae ut atque tenetur accusantium magni quidem.</p>

      <Image src='/Apel.png' width={300} height={300}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae id quis magnam alias.</p>
      <p>In odit facere ipsum tenetur hic, possimus explicabo quidem temporibus inventore aliquid dignissimos, veniam dolorum.</p>
      <p>Nihil libero, omnis at harum qui fugit eaque tenetur provident dignissimos, ullam veniam atque explicabo?</p>
      <p>Nesciunt neque quidem assumenda molestias sequi soluta, quos, accusantium repellat eveniet dolorum at, dolores quasi.</p>
      <p>Dignissimos maxime perferendis mollitia, perspiciatis fugit, cumque pariatur est harum ullam, quisquam at porro tempore.</p>
      <p>Provident expedita eligendi recusandae obcaecati assumenda animi modi quaerat officia iusto sint. Eveniet, nisi tempore.</p>
      <p>Temporibus possimus aut hic aliquid atque labore at libero nam quisquam, impedit, nesciunt ratione odit?</p>
      <p>Non optio in quisquam, commodi ratione officiis et neque beatae dicta, voluptatibus est asperiores explicabo.</p>
      <p>Soluta, eligendi, eos fugiat repellat in a quam molestiae provident at, iste illo sapiente optio.</p>
      <p>Placeat modi excepturi incidunt fugit vero. At laudantium itaque dolorum minima saepe quia a ipsa.</p>
      <p>Maxime beatae molestiae amet distinctio, inventore provident accusantium vitae qui laborum fugiat saepe ullam eius.</p>
      <p>Accusantium inventore vero nostrum earum enim itaque nulla reiciendis illum. Ducimus eum nihil quae saepe.</p>
      <p>Quo perspiciatis laudantium fuga illum maiores dolores, eum autem minus, reprehenderit quod accusantium recusandae fugiat!</p>
      <p>Itaque quibusdam tempore nihil et iusto in nesciunt ut aliquam similique. Fuga ducimus minima deleniti?</p>
      <p>Ipsa doloribus quo, voluptate obcaecati beatae molestias mollitia? Animi molestiae laborum sed cumque qui debitis?</p>
      <p>Pariatur sed adipisci voluptates fugit, eos tempore facere quaerat placeat ratione architecto, natus ad nesciunt.</p>
      <p>Dicta illo itaque sequi laborum consectetur exercitationem est nemo repudiandae nobis! Error quisquam magni beatae.</p>
      <p>Accusamus nostrum quos corporis neque magnam aspernatur quaerat placeat, voluptate ullam? Deleniti assumenda tenetur facere.</p>
      <p>Enim, quaerat modi excepturi velit, provident earum unde at placeat, quia vero corporis maxime cum!</p>
      <p>Mollitia officia soluta vero, nostrum harum fuga deserunt quae ut atque tenetur accusantium magni quidem.</p>

      <Image src='/Bayam.png' width={300} height={300}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae id quis magnam alias.</p>
      <p>In odit facere ipsum tenetur hic, possimus explicabo quidem temporibus inventore aliquid dignissimos, veniam dolorum.</p>
      <p>Nihil libero, omnis at harum qui fugit eaque tenetur provident dignissimos, ullam veniam atque explicabo?</p>
      <p>Nesciunt neque quidem assumenda molestias sequi soluta, quos, accusantium repellat eveniet dolorum at, dolores quasi.</p>
      <p>Dignissimos maxime perferendis mollitia, perspiciatis fugit, cumque pariatur est harum ullam, quisquam at porro tempore.</p>
      <p>Provident expedita eligendi recusandae obcaecati assumenda animi modi quaerat officia iusto sint. Eveniet, nisi tempore.</p>
      <p>Temporibus possimus aut hic aliquid atque labore at libero nam quisquam, impedit, nesciunt ratione odit?</p>
      <p>Non optio in quisquam, commodi ratione officiis et neque beatae dicta, voluptatibus est asperiores explicabo.</p>
      <p>Soluta, eligendi, eos fugiat repellat in a quam molestiae provident at, iste illo sapiente optio.</p>
      <p>Placeat modi excepturi incidunt fugit vero. At laudantium itaque dolorum minima saepe quia a ipsa.</p>
      <p>Maxime beatae molestiae amet distinctio, inventore provident accusantium vitae qui laborum fugiat saepe ullam eius.</p>
      <p>Accusantium inventore vero nostrum earum enim itaque nulla reiciendis illum. Ducimus eum nihil quae saepe.</p>
      <p>Quo perspiciatis laudantium fuga illum maiores dolores, eum autem minus, reprehenderit quod accusantium recusandae fugiat!</p>
      <p>Itaque quibusdam tempore nihil et iusto in nesciunt ut aliquam similique. Fuga ducimus minima deleniti?</p>
      <p>Ipsa doloribus quo, voluptate obcaecati beatae molestias mollitia? Animi molestiae laborum sed cumque qui debitis?</p>
      <p>Pariatur sed adipisci voluptates fugit, eos tempore facere quaerat placeat ratione architecto, natus ad nesciunt.</p>
      <p>Dicta illo itaque sequi laborum consectetur exercitationem est nemo repudiandae nobis! Error quisquam magni beatae.</p>
      <p>Accusamus nostrum quos corporis neque magnam aspernatur quaerat placeat, voluptate ullam? Deleniti assumenda tenetur facere.</p>
      <p>Enim, quaerat modi excepturi velit, provident earum unde at placeat, quia vero corporis maxime cum!</p>
      <p>Mollitia officia soluta vero, nostrum harum fuga deserunt quae ut atque tenetur accusantium magni quidem.</p>


      <Image src='/Brokoli.png' width={300} height={300}/>
    </Layout>
    </>
  )
}
