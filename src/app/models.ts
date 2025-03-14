
export interface CategoryNode {
    url: string;
    label: string;
    parent: string | null;
    children: CategoryNode[],
}

export interface ProductItem {
    url: string;
    title: string;
    category: string;
    children: CategoryNode[],
    photoSrc: string,
    photoAlt: string,
    code: string,
    price: number,
    currency: "EUR" | "USD",
}
export interface CartItem {
    url: string;
    title: string;
    category: string;
    children: CategoryNode[],
    photoSrc: string,
    photoAlt: string,
    code: string,
    price: number,
    currency: "EUR" | "USD",
    quantity: number;
}
  