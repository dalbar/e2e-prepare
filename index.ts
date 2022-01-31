type NonEmptyArray<T> = {
    0: T
} & Array<T>

/**
 * Returns a random item from the array
 *
 * @param array an array that is not empty
 * @returns a random item from the array
 */
const any = <T>(array: NonEmptyArray<T>): T => array[Math.floor(Math.random() * array.length)];

const message = any(['Hello', 'Nice to see you.', 'Howdy']);

console.log(message);