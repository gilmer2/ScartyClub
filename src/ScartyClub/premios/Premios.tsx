import { useQuery } from "@tanstack/react-query"
import { getPremios } from "../../service/premios.service"
import { findOnClient } from "../../service/client.service"
import { getEmailFromLocalStorage } from "../../utils/authUtils"
import PremioCard from "../components/PremioCard"

export const Premios = () => {
    const {data} = useQuery({
        queryKey: ['premios'],
        queryFn: async () => {
            const resp = await getPremios()
            return resp.data
        }
    })
    const email = getEmailFromLocalStorage();
    const { data: client } = useQuery({
      queryKey: ["client"],
      queryFn: async () => {
        const result = await findOnClient(email as string);
        return result.data;
      },
    });

    return (
        <div>
            <h1>Premios</h1>
            <div className="row">
                {data?.map((premio) => (
                    <PremioCard
                        premio={premio}
                        idClient={client?._id as string}
                        key={premio._id}
                        clientPoints={client?.points as number}
                    />
                ))}
            </div>
        </div>
    )
}