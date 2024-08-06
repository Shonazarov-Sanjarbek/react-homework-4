import React, { useState } from 'react'

const Header = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [price, setPrice] = useState("")
    const [comment, setComment] = useState("")

    const handleCreate = (e) => {
        e.preventDefault()
        let object = {
            id: new Date().getTime(),
            text,
            price,
            comment,
        }
        setData( (preve) => [...preve, object] )
        setText("")
        setPrice("")
        setComment("")
    }
    console.log(data);
    
    
  return (
    <div className='flex justify-center items-center w-full h-lvh flex-col bg-blue-500 gap-10'>
        <form onSubmit={handleCreate} className='w-96  items-center justify-center flex flex-col gap-3'>
      <input placeholder='the name of the book' clas className='bg-gray-200 w-full h-10 rounded-md p-2' required value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <input placeholder='comment' clas className='bg-gray-200 w-full h-10 rounded-md p-2' required value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
      <input placeholder='price' clas className='bg-gray-200 w-full h-10 rounded-md p-2' required value={comment} onChange={(e) => setComment(e.target.value)} type="number" />
      <button className='w-full h-10 bg-yellow-500'> Create </button>
        </form>    
      <div className='flex gap-3 flex-wrap'>
        {
            data?.map((item) => (
                <div className='p-4 shadow-md bg-slate-100 rounded-xl w-80 text-center' key={item.id}>
                    <p>
                        {item.text}
                    </p>
                    <p>
                        {item.comment}
                    </p>
                    <p>
                        {item.price}
                    </p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Header
