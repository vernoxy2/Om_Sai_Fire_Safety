import React from 'react'
import PrimaryTitle from '../../../components/PrimaryTitle'

const FireDoors = () => {
  return (
    <section>
        <div className='container space-y-16'>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"fire"}
              normalText={"doors"}
              titleClassName="text-start lg:max-w-lg "
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>
              Fire doors block <span className='font-bold'>fire and smoke, ensuring building safety</span> effectively.
            </p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default FireDoors
