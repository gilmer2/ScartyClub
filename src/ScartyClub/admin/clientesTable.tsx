import { useQuery } from '@tanstack/react-query';
import { clientService } from '../../service/client.service';

const ClientTable = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      const response = await clientService();
      return response.data;
    }
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Ciudad</th>
            <th>Estado</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((client) => (
            <tr key={client._id}>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.mobilePhone}</td>
              <td>{client.address}</td>
              <td>{client.email}</td>
              <td>{client.city}</td>
              <td>{client.state}</td>
              <td>{client.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
