Learn more or give us feedback
import name from 'random-name';
import { v4 as id } from 'uuid';

const initialState = [
  {
    id: id(),
    person: name.first(),
    reason: 'Lorem ipsum dolor sit amet, ipsum amet 1',
    forgiven: false
  },
  {
    id: id(),
    person: name.first(),
    reason: 'Lorem ipsum dolor sit amet, ipsum amet 2',
    forgiven: false
  },
  {
    id: id(),
    person: name.first(),
    reason: 'Lorem ipsum dolor sit amet, ipsum amet 3',
    forgiven: false
  },
  {
    id: id(),
    person: name.first(),
    reason: 'Lorem ipsum dolor sit amet, ipsum amet 4',
    forgiven: true
  },
  {
    id: id(),
    person: name.first(),
    reason: 'Lorem ipsum dolor sit amet, ipsum amet 5',
    forgiven: false
  }
];

export default initialState;