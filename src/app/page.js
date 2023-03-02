import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h1>sorteo facil</h1>
      <input type="text" placeholder='ingrese un nombre' />
      <button>Sortear</button>
    </main>
  )
}
