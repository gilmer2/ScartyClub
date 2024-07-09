import React from "react";
import "./CustomCard.css";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  title: string;
  cantidad: number;
  point: string | number;
  imageUrl: string;
}

const CustomCard: React.FC<ProductCardProps> = ({
  title,
  cantidad,
  point,
  imageUrl,
}) => {
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
                <NavLink to='' className='btn btn-warning'>
                    comprar
                </NavLink>
            </p>
        </div>
    </div>
  );
};

export default CustomCard;
