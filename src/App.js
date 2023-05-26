'use client'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './App.css'
function App() {
  const writing = [
    {
      id: 1,
      title: 'Hera (Baş Tanrıça ve Evlilik Tanrıçası)',
      contents:
        'Hera Yunan mitolojisinde “evliliğin, kadının ve bereketin tanrıçası” olarak bilinir. Hera’nın doğum sırasında kadınları ve evlilik süresince de evlikleri koruduğuna inanılır. Argon’da tanrıça olan Zeus’un eşi Hera’nın sembolü ise tavuskuşu ve nardır.',
      img: 'https://www.tarihiolaylar.com/dvsthumb.php?src=/img/galeri/galeri_hera-jpg_844418587_1432645710.jpg&w=740',
    },
    {
      id: 2,
      title: 'Dionysos (Şarap Tanrısı)',
      contents:
        'Dionysos, Nysa Dağı’nda “şarap tanrısı” olarak bilinir. Şarabın sarhoşluk yapan etkisinin dışında onun yararlarını anlatır. Zeus’un Semele’den olan oğludur. Sembolü ise üzüm ve asmadır.',
      img: 'https://www.tarihiolaylar.com/dvsthumb.php?src=/img/galeri/galeri_dy-jpg_127007944_1433589595.jpg&w=740',
    },
    {
      id: 3,
      title: 'Hermes (Tanrıların Habercisi Olan Tanrı)',
      contents:
        'Hemes, Yunan mitolojisinde Zeus’un hem habercisi hem de oğludur. Bu nedenle “tanrıların habercisi” olarak kabul edilir. Aynı zamanda kurnazlığı ve hızıyla bilinir. Sembolü olan altın değneğini hep yanında taşır.',
      img: 'https://www.tarihiolaylar.com/dvsthumb.php?src=/img/galeri/galeri_hermes-jpg_492153407_1432646487.jpg&w=740',
    },
  ]

  const [index, setIndex] = useState(0)

  const handleNextClick = () => {
    setIndex((pre) => (pre + 1) % writing.length)
  }

  const handlePrevClick = () => {
    setIndex((pre) => (pre === 0 ? writing.length - 1 : pre - 1))
  }

  return (
    <div className='container'>
      <button onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <div className='container-item'>
        <h2>{writing[index].title}</h2>
        <p>{writing[index].contents}</p>
        <img src={writing[index].img} alt='' />
      </div>
      <button onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  )
}

export default App
