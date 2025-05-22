import { useEffect, useState } from "react";
import { InputMask } from "@react-input/mask";
import type { AddressFromCep } from "../types";
import { getCep } from "../product.service";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export function ShippingAvailability() {
  const [userCep, setUserCep] = useState<string>();
  const [address, setAddress] = useState<AddressFromCep>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchCep(cep: string | undefined) {
    if (!cep) return;
    setIsLoading(true);
    try {
      setAddress(await getCep(cep));
      Cookies.set("userCep", cep, { expires: 1 / 24 });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function resetCep() {
    setAddress(undefined);
    Cookies.remove("userCep");
  }

  useEffect(() => {
    fetchCep(Cookies.get("userCep"));
  }, []);

  if (isLoading) <p>Consultando...</p>;

  if (address)
    return (
      <div>
        <p>
          {address.logradouro} - {address.bairro}
        </p>
        <p className="flex items-center gap-2 ">Frete grátis</p>
        <p className="flex items-center gap-2 ">
          Tempo de entrega - Chegará amanhã
        </p>

        <button
          className="hover:underline text-gray-400 hover:text-black cursor-pointer font-serif"
          onClick={resetCep}
          type="button"
        >
          Fazer uma nova consulta
        </button>
      </div>
    );

  return (
    <div className="space-y-4">
      <p className="font-serif">Calcular frete e prazo</p>
      <div className="flex gap-4">
        <InputMask
          mask="_____-___"
          replacement={{ _: /\d/ }}
          value={userCep}
          onChange={(e) => setUserCep(e.target.value)}
          placeholder="00000-000"
          id="cep"
          className="border border-gray-100 focus:border-gray-300 outline-gray-300 p-2 rounded"
        />

        <button
          onClick={() => fetchCep(userCep)}
          type="button"
          className="border border-gray-100 hover:border-gray-300 cursor-pointer px-4 rounded"
        >
          Consultar
        </button>
      </div>
    </div>
  );
}
