import CustomCard from "../components/CustomCard";

export const Product = () => {
    const product = {
        title: 'Producto Ejemplo',
        description: 'Esta es la descripción del producto.',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/300'
    };
    return (
        <div>
            <CustomCard
                title={product.title}
                cantidad={10}
                point={5}
                imageUrl={product.imageUrl} 
            />
        </div>
    );
}