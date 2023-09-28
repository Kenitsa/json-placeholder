import { describe, test } from '@jest/globals';

import { GenericAssertions } from '../src/generic-assertions';
import { TodoListApiHelper } from '../src/helper';

describe('Json Placeholder > Todos', () => {
  for (let index = 1; index <= 20; index++) {
    test(`${index} todo should have title longer than 20 characters`, async () => {
      const response = await TodoListApiHelper.getTodoByIndex(index);
      GenericAssertions.toHaveHttpStatus(200, response.status);
      GenericAssertions.toHaveCorrectTitleLength(response.data, index);
    });
  }
});
