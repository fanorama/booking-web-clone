export interface Destination {
    id: number;
    name: string;
    image: string;
    description?: string;
    properties_count?: number;
}

export interface Hotel {
    id: number;
    name: string;
    destination: Destination;
    full_address: string;
    description: string;
    images: string[];
    rating: number;
    reviews_count: number;
    facilities: string[];
}

export interface RoomType {
    id: number;
    name: string;
    description: string;
    images: string[];
    facilities: string[];
    price: number;
    promos: string[];
}

export interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    created_at: string;
}

export interface Facility {
    id: number;
    name: string;
    icon?: string;
}