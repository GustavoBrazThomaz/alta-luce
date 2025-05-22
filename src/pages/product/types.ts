export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  sizes: Size[];
  colors: Color[];
}

export interface Size {
  size: string;
  disabled: boolean;
}

export interface Color {
  name: string;
  hex: string;
  disabled: boolean;
}

export type AddressFromCep = {
  logradouro: string;
  bairro: string;
};
