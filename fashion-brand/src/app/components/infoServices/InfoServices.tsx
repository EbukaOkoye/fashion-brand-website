import React from 'react';
import { services } from './data';

function InfoServices() {
    return (
        <React.Fragment>
            <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 place-items-center p-4'>
                {services?.map((service, index) => (
                    <div className='flex gap-4 items-center'>
                        <span className='text-xl text-wineRed'><service.icon /></span>
                        <div>
                            <h2 className='text-base lg:text-lg font-semibold text-wineRed'>{service?.header}</h2>
                            <p className='text-xs lg:text-base font-light text-beige'>{service?.small}</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default InfoServices