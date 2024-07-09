import React from "react";
import "./CustomCard.css";
import { InvalidateQueryFilters, useMutation,useQuery, useQueryClient  } from "@tanstack/react-query";
import { UpdateClient } from "../../types/client";
import { addPointClient, findOnClient } from "../../service/client.service";
import { getEmailFromLocalStorage } from "../../utils/authUtils";

interface ProductCardProps {
  title: string;
  cantidad: number;
  point: number;
  imageUrl: string;
}

const CustomCard: React.FC<ProductCardProps> = ({
  title,
  cantidad,
  point,
  imageUrl,
}) => {

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

  const hanbleClick =  async () => {
    const newpoint = data?.points as number + point;
    await sumPoint.mutate({ id: data?._id as string, data: { points: newpoint } });
    console.log('puntos sumados')
  }

  return (
    <div className="col-2">
        <div className="col-10">
            <h2>{title}</h2>
        </div>
        <img className="col-12" src={imageUrl} alt={title} />
        <div className="bg-danger d-flex">
            <p className="mr-auto p-2">{cantidad}</p>
            <p className="p-2">{point}</p>
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
