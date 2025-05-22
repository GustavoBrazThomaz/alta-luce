import axios from "axios";
import type { AddressFromCep, Product } from "./types";
import { product } from "./constants";

export function getProducts(): Product {
  return product;
}

export async function getCep(cep: string): Promise<AddressFromCep> {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (data.erro) throw new Error("Cep não encontrado");
  return {
    logradouro: data.logradouro,
    bairro: data.bairro,
  };
}
