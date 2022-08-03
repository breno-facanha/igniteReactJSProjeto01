import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post  
          author="Breno Façanha" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa, quidem placeat eos aliquam sed cupiditate exercitationem illum a odio nihil nam corrupti ducimus dolorem repellat fugit repudiandae commodi soluta?"
        />
        <Post 
          author="Samara Vasconcelos" 
          content="Novo post ..."
        />
      </main>
    </div>
    </>
  )
}


