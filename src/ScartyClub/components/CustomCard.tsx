import React from "react";
import "./CustomCard.css";
import { InvalidateQueryFilters, useMutation,useQuery, useQueryClient  } from "@tanstack/react-query";
import { UpdateClient } from "../../types/client";
import { addPointClient, findOnClient } from "../../service/client.service";
import { getEmailFromLocalStorage } from "../../utils/authUtils";
import { updateProduct } from "../../service/product.service";
import { UpdateProduct } from "../../types/product";
import { toast } from "react-toastify";

interface ProductCardProps {
  title: string;
  idProduct: string;
  cantidad: number;
  precio: number;
  imageUrl: string;
}

const CustomCard: React.FC<ProductCardProps> = ({
  title,
  idProduct,
  cantidad,
  precio,
  imageUrl,
}) => {
  if (title.length > 10) {
    title = title.slice(0, 10) + "...";
  }
  let puntos = 0;
  if (precio > 100) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    puntos = Math.floor(precio / 100) * 5;
  } 

  const email = getEmailFromLocalStorage();

  const { data } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const result = await findOnClient(email as string);
      return result.data;
    }
  })
  const queryClient = useQueryClient();

  const sumPoint = useMutation<void, string, { id: string, data: UpdateClient }>({
    mutationFn: async ({ id, data }) => {
      await addPointClient(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['client'] as InvalidateQueryFilters);
    }
    
  })

  const restarStok = useMutation({
    mutationFn: async ({ id, data }: { id: string, data: UpdateProduct }) => {
      await updateProduct(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['product'] as InvalidateQueryFilters);
    }
  })

  const hanbleClick =  async () => {
    const newpoint = data?.points as number + puntos;
    await sumPoint.mutate({ id: data?._id as string, data: { points: newpoint } });
    const newStock = cantidad - 1;
    await restarStok.mutate({ id: idProduct, data: { stock: newStock } });
    toast.success("Producto comprado " + title);
    toast.success("Puntos obtenidos " + puntos);
  }

  return (
    <div className="col-2">
        <div className="col-10">
            <h2>{title}</h2>
        </div>
        <img className="col-12" src={imageUrl} alt={title} />
        <div className="bg-danger d-flex">
            <p className="mr-auto p-2">{cantidad}</p>
            <p className="p-2">{precio}</p>
            <p className="p-2">
                <button onClick={hanbleClick} className='btn btn-warning'>
                    comprar
                </button>
            </p>
        </div>
    </div>
  );
};

export default CustomCard;
