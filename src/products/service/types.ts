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
    offset:number;
    limit:number;
}
