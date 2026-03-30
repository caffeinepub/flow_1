import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    rating: number;
    price: number;
    aiScore: number;
}
export interface EditorFeature {
    title: string;
    icon: string;
    description: string;
}
export interface backendInterface {
    getAllEditorFeatures(): Promise<Array<EditorFeature>>;
    getAllProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
}
