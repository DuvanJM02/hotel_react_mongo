import { Card } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function CardHotel(){
    return (
        <>
            <div className="w-full break-word col-span-12 sm:col-span-6 md:col-span-3">
                <Card className="w-full" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <NavLink className="bg-green-600 p-3 font-medium text-white text-center rounded-full" to="/1">Ver hotel</NavLink>
                </Card>
            </div>
        </>    
    );
}