import { useState } from 'react';
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

export default function Page() {
    const [selectedProductId, setSelectedProductId] = useState(null);

    return (
        <>
            <h1 className="text-3xl bg-yellow-400 font-bold text-center" >Kishor Kumar Paroi</h1>
            <div className="flex m-2">
                <ProductList setSelectedProductId={setSelectedProductId} />
                {selectedProductId && <ProductDetails id={selectedProductId} />}
            </div>
        </>
    )
}