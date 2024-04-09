// import axios from 'axios';
// import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';


export default function AddProduct() {
    const [state, setState] = useState({
        title: '',
        description: '',
        price: 0,
        rating: 5,
        thumbnail: '',
    })
    return (
        <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
            <h2 className=' '>Add a Product </h2>
        </div>
    )
}