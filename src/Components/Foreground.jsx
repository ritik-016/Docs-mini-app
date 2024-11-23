import React, { useRef, useState} from 'react'
import Card from './Card'

function Foreground() {
  
  const ref = useRef(null);

  const data = [
    {
      desc: "This is my first practice project of React.js",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green"},
    },
    {
      desc: "This is my first practice project of React.js",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false  , tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "This is my first practice project of React.js",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "Green"},
    },
  ];

  return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
          {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
          ))}
        </div>
  )
}

export default Foreground