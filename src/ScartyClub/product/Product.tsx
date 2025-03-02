import { useQuery } from "@tanstack/react-query";
import CustomCard from "../components/CustomCard";
import { getProduct } from "../../service/product.service";

export const Product = () => {

    const {data} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const result = await getProduct();
            return result.data;
        }
    })

    return (
        <div className="row">
            {
                data?.filter((product) => product.stock > 0).map((product) => (
                    <CustomCard
                        title={product.name}
                        idProduct={product._id}
                        cantidad={product.stock}
                        precio={product.price}
                        imageUrl={product.image} 
                    />
                ))
            }
        </div>
    );
}