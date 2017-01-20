import { List } from 'immutable';

export default function repeat(n, value) {
    const array = [];

    for (let i = 0; i < n; i += 1) {
        array.push(value);
    }

    return List(array);
}
