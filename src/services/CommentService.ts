import {
   IAnimePicture,
   IAnimePicturesResponse,
} from "../types/jikanMoe/jikan";

import { API_ENDPOINTS } from "../API/api-endpoints";
import { IComment } from "../types/comment";
import { $public_server } from "../API/api";

export class CommentService {
   static async getComments(): Promise<IComment[]> {
      const response = await $public_server.get<IComment[]>("/comments.json");
      return response.data;
   }
}
