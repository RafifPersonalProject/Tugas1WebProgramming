import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col gap-3 h-screen'>
        <div>
          <p className='text-xl font-semibold'>Tugas 1 Mata Kuliah Web Programming - MSIM4309</p>
        </div>
        <div className='flex justify-center max-w-[480px] mt-10'>
          <div className='flex flex-col gap-2 w-[320px] justify-start items-start'>
            <p>Nama</p>
            <p>NIM</p>
            <p>Jenis Kelamin</p>
            <p>Program Studi</p>
            <p>Fakultas</p>
          </div>
          <div className='flex flex-col gap-2 w-[320px] items-start justify-between'>
            <p>: Raihanudin Rafif</p>
            <p>: 043340244</p>
            <p>: Laki - Laki</p>
            <p>: Sistem Informasi</p>
            <p>: Sains dan Teknologi (FST)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
