import { describe, test } from '@jest/globals';

import { GenericAssertions } from '../src/generic-assertions';
import { TodoListApiHelper } from '../src/helper';

const numberOfTodos: number = 20;

describe('Json Placeholder > Todos', () => {
  Array.from({ length: numberOfTodos }, (_, index) => index + 1).forEach((index) => {
    test(`${index} todo should have title longer than 20 characters`, async () => {
      const response = await TodoListApiHelper.getTodoByIndex(index);
      GenericAssertions.toHaveHttpStatus(200, response.status);
      GenericAssertions.toHaveCorrectTitleLength(response.data, index);
    });
  });
});
