import { Destination } from "types/hotelTypes";
import apiClient from "./apiClient";


interface HotelServiceInterface {
    getDestinations: () => Promise<Destination[]>;
    getPropertyTypes: () => Promise<any[]>;
    getPopularPlaces: () => Promise<any[]>;
}

const hotelService: HotelServiceInterface = {
    getDestinations: async () => {
        const response = await apiClient.get("/destinations");
        if (response.status == 200) {
            return response.data;
        }
    },
    getPropertyTypes: async () => {
        const response = await apiClient.get("/property_types");
        if (response.status == 200) {
            return response.data;
        }
    },
    getPopularPlaces: async () => {
        const response = await apiClient.get("/popular_places");
        if (response.status == 200) {
            return response.data;
        }
    }
}

export default hotelService;