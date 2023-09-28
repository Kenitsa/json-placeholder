import { expect } from '@jest/globals';
import { TodoList } from "../interfaces/todoList";
export class GenericAssertions {

    /**
     * Verify that the title length is longer than 20 characters and correct id
     * @param item - todoItem response body
     * @param index - index of item in todoList
     */
    static toHaveCorrectTitleLength(item: TodoList, index: number) {
        const {id, title} = item;
        try {
            expect(id).toBe(index);
            expect(title.length).toBeGreaterThan(20);
        } catch (error) {
            throw new Error(`Expected title of todo #${index} to have length more than 20, but got ${title.length}`);
        }
    }

    /**
     * Verify HTTP status
     * @param response - actual status code
     * @param status - expected status code
     */
    static toHaveHttpStatus(status: number, response: number) {
        try {
            expect(response).toBe(status);
        } catch (error) {
            throw new Error(`Expected status code to be ${status}, but got ${response}.`);
        }
    }
}
