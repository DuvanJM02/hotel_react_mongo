import axios from 'axios';
import { Avatar, Button, Card, Spinner } from 'flowbite-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHotel from '../hooks/useHotel';

export default function Comments(comentarios) {
    const { id } = useParams();
    const { getHotel } = useHotel();

    useEffect(() => {
        console.log(comentarios);
    }, [comentarios]);
    
    async function handleLike(comment_id){
        await axios.post(`https://bkhoteles.juanflow04flore.repl.co/publicaciones/${ id }/comentario/${ comment_id }/like`).then(function (response) {
            // manejar respuesta exitosa
            console.log(response);
            getHotel(id);
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
    }

    async function handleDislike(comment_id){
        await axios.post(`https://bkhoteles.juanflow04flore.repl.co/publicaciones/${ id }/comentario/${ comment_id }/dislike`).then(function (response) {
            // manejar respuesta exitosa
            console.log(response);
            getHotel(id);
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
    }

    return (
        <Card className="max-w-full mt-5 max-h-[500px] overflow-y-scroll">
            <div className="mb-4 flex justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Últimos comentarios</h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                    comentarios
                    ?
                        comentarios.data.map((comentario) => (
                            <li key={comentario['_id']} className="py-3 sm:py-4">
                                <div className="flex space-x-4">
                                    <div className="shrink-0">
                                        <Avatar placeholderInitials={ comentario.nombre[0].toUpperCase() } rounded />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-500">{ comentario.nombre }</p>
                                        <p className="text-gray-900 pt-1">
                                            { comentario.comentario }
                                        </p>
                                        <p className='text-sm mt-2'>{ comentario.fecha }</p>
                                    </div>
                                </div>
                                <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                                    <Button.Group>
                                        <Button color="gray" onClick={ () => handleLike(comentario['_id']) }>
                                            <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                            { comentario.likes }
                                        </Button>
                                        <Button color="gray" onClick={ () => handleDislike(comentario['_id']) }>
                                            <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                            { comentario.dislikes }
                                        </Button>
                                    </Button.Group>
                                </div>
                            </li>
                        ))
                    :
                    <div className="w-full h-screen flex justify-center items-center break-word col-span-12 sm:col-span-12 md:col-span-12">
                        <Spinner color="success" aria-label="Success spinner example" size="xl"/>
                    </div>
                }
                </ul>
            </div>
        </Card>
    );
}
