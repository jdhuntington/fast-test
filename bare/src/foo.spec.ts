import baretest from 'baretest';
import * as assert from 'assert';
import { Summer} from './sum';

const test = baretest("Summer");

test('1 + 2', () => {
  const subject = new Summer(1,2);
  assert.equal(subject.result(), 3);
})

test('3 + 4', () => {
  const subject = new Summer(3,5);
  assert.equal(subject.result(), 7);
});

test.run();