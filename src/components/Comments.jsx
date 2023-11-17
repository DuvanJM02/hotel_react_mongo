import { Avatar, Button, Card } from 'flowbite-react';
import { useState } from 'react';

export default function Comments() {
    const [like, setLike] = useState();
    const [dislike, setDislike] = useState();
    
    function handleLike(){
        
    }

    function handleDislike(){

    }

    return (
        <Card className="max-w-full mt-5 h- overflow-y-scroll">
            <div className="mb-4 flex justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Últimos comentarios</h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                    <div className="flex space-x-4">
                        <div className="shrink-0">
                            <Avatar placeholderInitials={ "Hola"[0].toUpperCase() } rounded />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                            <p className=" text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a iusto corporis rerum. Iure cum eos veniam non maxime provident. Exercitationem ullam distinctio vero omnis fugit quidem ea in aut?</p>
                            <p className='text-sm mt-2'>{ Date() }</p>
                        </div>
                    </div>
                    <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                        <Button.Group>
                            <Button color="gray" onClick={ handleLike }>
                                <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                123
                            </Button>
                            <Button color="gray" onClick={ handleDislike }>
                                <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                2
                            </Button>
                        </Button.Group>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex space-x-4">
                        <div className="shrink-0">
                            <Avatar placeholderInitials={ "Hola"[0].toUpperCase() } rounded />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                            <p className=" text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a iusto corporis rerum. Iure cum eos veniam non maxime provident. Exercitationem ullam distinctio vero omnis fugit quidem ea in aut?</p>
                            <p className='text-sm mt-2'>{ Date() }</p>
                        </div>
                    </div>
                    <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                        <Button.Group>
                            <Button color="gray" onClick={ handleLike }>
                                <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                123
                            </Button>
                            <Button color="gray" onClick={ handleDislike }>
                                <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                2
                            </Button>
                        </Button.Group>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex space-x-4">
                        <div className="shrink-0">
                        <Avatar placeholderInitials={ "Hola"[0].toUpperCase() } rounded />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                            <p className=" text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a iusto corporis rerum. Iure cum eos veniam non maxime provident. Exercitationem ullam distinctio vero omnis fugit quidem ea in aut?</p>
                            <p className='text-sm mt-2'>{ Date() }</p>
                        </div>
                    </div>
                    <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                        <Button.Group>
                            <Button color="gray" onClick={ handleLike }>
                                <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                123
                            </Button>
                            <Button color="gray" onClick={ handleDislike }>
                                <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                2
                            </Button>
                        </Button.Group>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex space-x-4">
                        <div className="shrink-0">
                        <Avatar placeholderInitials={ "Hola"[0].toUpperCase() } rounded />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                            <p className=" text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a iusto corporis rerum. Iure cum eos veniam non maxime provident. Exercitationem ullam distinctio vero omnis fugit quidem ea in aut?</p>
                            <p className='text-sm mt-2'>{ Date() }</p>
                        </div>
                    </div>
                    <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                        <Button.Group>
                            <Button color="gray" onClick={ handleLike }>
                                <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                123
                            </Button>
                            <Button color="gray" onClick={ handleDislike }>
                                <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                2
                            </Button>
                        </Button.Group>
                    </div>
                </li>
                <li className="pb-0 pt-3 sm:pt-4">
                    <div className="flex space-x-4">
                        <div className="shrink-0">
                        <Avatar placeholderInitials={ "Hola"[0].toUpperCase() } rounded />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                            <p className=" text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a iusto corporis rerum. Iure cum eos veniam non maxime provident. Exercitationem ullam distinctio vero omnis fugit quidem ea in aut?</p>
                            <p className='text-sm mt-2'>{ Date() }</p>
                        </div>
                    </div>
                    <div className="mt-3 ml-12 inline-flex text-base font-semibold text-gray-900 dark:text-white">
                        <Button.Group>
                            <Button color="gray" onClick={ handleLike }>
                                <img src="https://www.svgrepo.com/show/521167/like-right.svg" className='w-5' alt="" />
                                123
                            </Button>
                            <Button color="gray" onClick={ handleDislike }>
                                <img src="https://www.svgrepo.com/show/521123/dislike-left.svg" className='w-5' alt="" />
                                2
                            </Button>
                        </Button.Group>
                    </div>
                </li>
                </ul>
            </div>
        </Card>
    );
}
