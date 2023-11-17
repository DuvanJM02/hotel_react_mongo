import { Carousel, ListGroup, Spinner, Textarea } from "flowbite-react";
import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useHotel from "../hooks/useHotel";

export default function Hotel() {
    const { id } = useParams();
    const [comment, setComment] = useState('')
    const { hotel, getHotel } = useHotel();

    useEffect(() => {
        getHotel(id);
    }, [comment]);

    // async function getHotel() {
    //     await axios.get(`https://bkhoteles.juanflow04flore.repl.co/publicaciones/${ id }`)
    //     .then(function (response) {
    //         // manejar respuesta exitosa
    //         response.data.comentarios = response.data.comentarios.reverse();
    //         console.log( 'as' ,response.data);
    //         setHotel(response.data)
    //     })
    //     .catch(function (error) {
    //         // manejar error
    //         console.log(error);
    //     })
    // }  

    const saveComment = async (e) => {
        e.preventDefault();

        await axios.post(`https://bkhoteles.juanflow04flore.repl.co/publicaciones/${ id }/comentarios`, {
            nombre: localStorage.getItem('user'),
            comentario: comment
        }).then(function (response) {
            // manejar respuesta exitosa
            console.log(response);
            setComment('');
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
    }

    return (
        <>
            {
                hotel
                ?
                <div className="mx-auto">
                    <div className="grid grid-cols-12 gap-5 justify-center">
                        <div className="col-span-12 sm:col-span-6 md:col-span-8">
                            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                                <Carousel >
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
                                { hotel.hotel.nombre }
                            </h1>
                            <div className="info flex gap-5">
                                <div className="views flex">
                                    <img src="https://www.svgrepo.com/show/532540/location-pin-alt-1.svg" className="w-5" alt="" />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{ hotel.hotel.ubicacion }</p>
                                </div>
                                <div className="views flex">
                                    <img src="https://www.svgrepo.com/show/521139/eye-show.svg" className="w-5" alt="" />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{ hotel.vistas } visualizaciones</p>
                                </div>
                            </div>
                            <p className="my-5">
                                { hotel.hotel.resena }
                            </p>
                            <div className="flex justify-center">
                                <ListGroup className="w-full">
                                    <ListGroup.Item className="flex gap-5">
                                        <img src="https://www.svgrepo.com/show/509748/bed.svg" className="w-8" alt="" /> &nbsp; - &nbsp; 
                                        { hotel.hotel.habitaciones } &nbsp;
                                        <span>Habitaciones</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="flex justify-between" >
                                        <img src="https://www.svgrepo.com/show/428917/available-calendar-date.svg" className="w-8" alt="" /> &nbsp; - &nbsp; 
                                        { hotel.hotel.disponibles } &nbsp;
                                        <span>Disponibles</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="flex justify-between" >
                                        <img src="https://www.svgrepo.com/show/254763/room-key-hotel.svg" className="w-8" alt="" /> &nbsp; - &nbsp; 
                                        { hotel.hotel.reservas } &nbsp;
                                        <span>Reservados</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="max-w-full">
                                <div className="mb-2 block">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-5">Comentarios</h3>
                                </div>
                                <form onSubmit={ saveComment }>
                                    <Textarea id="comment" placeholder="Deja un comentario..." required rows={4} className="w-full" value={ comment } onChange={ 
                                        (e) => setComment(e.target.value)
                                    }/>
                                    <button type="submit" className="bg-green-600 p-3 font-medium text-white text-center rounded-lg my-4">Comentar</button>
                                </form>
                            </div>
                            <div id="comments">
                                <Comments data={ hotel.comentarios }/>
                            </div>
                        </div>
                    </div>
                </div> 
                :
                <div className="w-full h-screen flex justify-center items-center break-word col-span-12 sm:col-span-12 md:col-span-12">
                    <Spinner color="success" aria-label="Success spinner example" size="xl"/>
                </div>
            }
        </>    
    );
}