import { Carousel } from "flowbite-react";
// import { useParams } from "react-router-dom";

export default function Hotel() {
    // const { id } = useParams();
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 1
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 3
                    </div>
                </Carousel>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white py-5">
                Noteworthy technology acquisitions 2021
            </h1>
            <div className="info flex gap-5">
                <div className="views flex">
                    <img src="https://www.svgrepo.com/show/521139/eye-show.svg" className="w-5" alt="" />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">500 visualizaciones</p>
                </div>
            </div>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt magni, dignissimos odit laudantium tempore quas minima architecto aliquid quisquam corporis totam optio natus delectus eius accusantium corrupti reprehenderit praesentium!</p>
            <div className="people">
            </div>
        </>    
    );
}