import { MouseEventHandler } from "react";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface IProductProps {
  product: IProduct;
}

export interface ISetProduct {
  setProduct(productName: string): void;
}

export interface IGetSearchProduct {
  getSearchProduct(searchProduct: string): void;
}

export interface IErrorMessage {
  error: string;
}

export interface IGetElemOnPage {
  getElemOnPage(countElem: string): void;
}

export interface IBtn {
  children: string;
  onClick: MouseEventHandler;
}

export interface IGetChangeLimit {
  getChangeLimit(limit: string): void;
}

export default interface IPagination {
  loading: boolean;
  pagination(p: number): void;
  totalPages: number;
  page: number;
}