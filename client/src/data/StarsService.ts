import Star from "@/model/Star";
import {AxiosResponse} from "axios";
import {axiosInstance} from "@/main";

export class StarsService {
    static async getList(): Promise<Star[]> {
        const response: AxiosResponse<Star[]> = await axiosInstance.get("/stars");
        return response.data;
    }

    static async getStarById(id: number): Promise<Star> {
        const response = await axiosInstance.get(`/stars/${id}`);
        return response.data;
    }

    static async createStar(star: Star): Promise<Star> {
        const response: AxiosResponse<Star> = await axiosInstance.post("/stars", star);
        return response.data;
    }
}