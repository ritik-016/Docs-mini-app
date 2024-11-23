import React from 'react';
import { FaFileInvoice } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 0.8, opacity:0.5}} dragElastic={.1} dragTransition={{ bounceStiffness: 100, bounceDamping:20 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-5 py-10 overflow-hidden'>
        <FaFileInvoice />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-8 h-8 rounded-full flex items-center justify-between'>
            {data.close ? <IoClose /> : <MdOutlineFileDownload size="1.5em" color='#fff' />}
          </span>
          </div>
          
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagTitle === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-md'>{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
    </motion.div>
  )
}

export default Card