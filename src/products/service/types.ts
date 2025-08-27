export interface ProductResponse {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}

export interface Category {
    id:    number;
    name:  string;
    image: string;
    slug:  string;
}

export interface PaginationAttributes {
    offset:string;
    limit:string;
}
export interface FilterParameters {
    title?:string;
    category?:string;
}

export interface QueryParameters extends PaginationAttributes,FilterParameters {}


