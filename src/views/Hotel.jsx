import { Carousel, Label, Textarea, Button } from "flowbite-react";
import Comments from "../components/Comments";
import { useState } from "react";
// import { useParams } from "react-router-dom";

export default function Hotel() {
    // const { id } = useParams();
    const [comment, setComment] = useState()

    function saveComment(e){
        e.preventDefault();
    }

    return (
        <>
            <div className="mx-auto">
                <div className="grid grid-cols-12 gap-5 justify-center">
                    <div className="col-span-12 md:col-span-8">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                                <div className="flex items-center h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <div className="flex items-center h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <div className="flex items-center h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" />
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
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="max-w-full">
                            <div className="mb-2 block">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-5">Comentarios</h3>
                            </div>
                            <form onSubmit={ saveComment }>
                                <Textarea id="comment" placeholder="Deja un comentario..." required rows={4} className="w-full" value={ comment } onChange={ 
                                    (e) => e.target.value
                                 }/>
                                <button type="submit" className="bg-green-600 p-3 font-medium text-white text-center rounded-lg my-4">Comentar</button>
                            </form>
                        </div>
                        <div id="comments">
                            <Comments/>
                        </div>
                    </div>
                </div>
            </div> 
        </>    
    );
}