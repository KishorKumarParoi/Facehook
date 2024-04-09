import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const retrieveProducts = async ({ queryKey }) => {
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}?_page=${queryKey[1].page}&_per_page=6`);
    console.log(response);
    return response.data;
}

export default function ProductList({ setSelectedProductId }) {
    const [page, setPage] = useState(1);

    const { data: products, error, isLoading } = useQuery({
        queryKey: ["products", { page }],
        queryFn: retrieveProducts,
        // refetchInterval: 1000,
    });


    if (isLoading) return <div>Fetching Products...</div>
    if (error) return <div>An Error Occured : ${error.message}</div>


    return (
        <div className='flex flex-col justify-center items-center w-3/5 '>
            <h2 className='text-3xl my-2'>ProductList</h2>
            <ul className='flex flex-wrap justify-center items-center'>
                {
                    products.data && products.data.map((product) => (
                        <li
                            key={product.id}
                            className="flex flex-col items-center m-2 border rounded-sm"
                        >
                            <img
                                className="object-cover h-64 w-96 rounded-sm"
                                src={product.thumbnail}
                                alt={product.title} />
                            <p className="text-xl my-3">{product.title}</p>
                            <button className='bg-yellow-400 p-2 rounded-lg mb-2 ' onClick={() => setSelectedProductId(product.id)}>Show Preview</button>
                        </li>
                    ))
                }
            </ul>

            <div className='flex'>
                {
                    products.prev && (
                        <button
                            className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm'
                            onClick={() => setPage(products.prev)} > Prev </button>
                    )
                }
                {
                    products.next && (
                        <button
                            className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm'
                            onClick={() => setPage(products.next)} > Next </button>
                    )
                }

            </div>
        </div>
    )
}