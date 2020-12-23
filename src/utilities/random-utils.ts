// @ts-nocheck // no typescript in case these utils are copied to a vanilla js project

/**
 * generates a pseudorandom string of given length
 * @param length
 */
export const generateRandomString = (length = 5) => {
  return Array(length)
    .fill(0)
    .map((x) => Math.random().toString(36).charAt(2))
    .join('');
};

/**
 * returns a copy of the original array, randomized using the Durstenfeld algorithm
 * https://stackoverflow.com/a/12646864
 * @param array
 */
export const shuffleArray = (originalArray) => {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
