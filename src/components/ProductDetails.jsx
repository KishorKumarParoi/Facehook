import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const retrieveProduct = async ({ queryKey }) => {
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}/${queryKey[1]}`)
    return response.data;
}

export default function ProductDetails({ id }) {
    const { data: product, error, isLoading } = useQuery({
        queryKey: ["products", id],
        queryFn: retrieveProduct,
    })

    console.log(product, error, isLoading);

    if (isLoading) return <div>Fetching Product...</div>
    if (error) return <div>An Error Occured : {error.message}</div>

    return (
        <>
            <div className='w-1/5'>
                <h2 className='text-3xl my-2'>ProductDetails</h2>
                <div className="flex flex-col items-center m-2 border p-2 rounded-lg">
                    <img
                        className="object-cover h-64 w-96 rounded-full"
                        src={product.thumbnail}
                        alt={product.title} />
                    <p className="text-xl my-3">{product.title}</p>
                    <p className="text-xl my-3 p-2">{product.description}</p>
                    <p className="text-xl my-3">Price : ${product.price}</p>
                    <p className="text-xl my-3">Rating : {product.rating}/5</p>
                </div>
            </div>
        </>
    )
}