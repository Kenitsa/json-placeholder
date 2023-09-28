import { axiosInstance } from '../axios.config';

export class TodoListApiHelper {
    static async getTodoByIndex(index: number) {
        try {
            return await axiosInstance.get(`/todos/${index}`);
        } catch (error) {
            throw error;
        }
    }
}
