import { twosum } from '../src/twosum';

describe("Tests for twosum", () => {
  test("Target is found by 3 and 4", () => {
    const result = twosum([1, 2, 3, 4], 7)
    expect(result).toEqual([2, 3])
  });

  test("Error when array is too small", () => {
    expect(() => twosum([1], 8)).toThrow(Error)
  })

  test("Error when empty array", () => {
    expect(() => twosum([], 0)).toThrow(Error)
  }) 
});