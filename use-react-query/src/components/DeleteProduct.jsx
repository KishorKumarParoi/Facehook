import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
}

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries(["products"]);
        },
        onMutate: (variables) => {
            return { greeting: 'Deleted' }
        }
    });

}

if (mutation.isLoading) {
    return <span>Submitting...</span>
}
if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>
}