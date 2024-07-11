import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addPointClient } from "../../service/client.service";
import { UpdateClient } from "../../types/client";
import { toast } from "react-toastify";

interface Premio {
  _id: string;
  name: string;
  description: string;
  points: number;
  image: string;
}

interface PremioCardProps {
  idClient: string;
  premio: Premio;
  clientPoints: number;
}

const PremioCard: React.FC<PremioCardProps> = ({ premio, idClient, clientPoints }) => {

        
    const queryClient = useQueryClient()
    const resPoint = useMutation<void, string, { id: string, data: UpdateClient }>({
        mutationFn: async ({ id, data }) => {
          await addPointClient(id, data);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(['client'] as InvalidateQueryFilters);
        }
        
    })


    const handleClick = () => {
        if (clientPoints >= premio.points) {
            resPoint.mutate({
                id: idClient,
                data: {
                    points: clientPoints - premio.points
                }
            })
            toast.success("Premio obtenido " + premio.name)
        } else {
            toast.error("No tienes suficientes puntos")
        }
    };

  return (
    <div className="col-2" key={premio._id}>
      <div className="card">
        <img src={premio.image} className="card-img-top" alt={premio.name} />
        <div className="card-body">
          <h5 className="card-title">{premio.name}</h5>
          <p className="card-text">{premio.description}</p>
          <p className="card-text">Puntos: {premio.points}</p>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-primary"
          >
            Obtener
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremioCard;
