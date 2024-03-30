import React from 'react'

const Card = () => {
  return (
    <div className='bg-[#FFFEFE] rounded-md p-[2rem] mb-4'>
        <div className="flex justify-between">
          <li className="list-none"><h1 className='text-xl'>Saumya Rai</h1></li>
          <li className="list-none"><button className='bg-[#8BF082] px-4 py-2 rounded-lg'>Send Help</button></li>
        </div>
        <div>
          <h2>
            Car Accident <span className='bg-[#F86F6F] px-2 py-1 rounded-lg'> just now </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut optio tempore debitis incidunt quaerat natus eius recusandae, eaque facere quam, esse blanditiis quisquam, aliquam corporis ea id veritatis doloremque.
          </p>
        </div>

      </div>
  )
}

export default Card
