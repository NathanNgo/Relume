export function twosum(numbers: number[], target: number):  number[] {
    const matches = {}

    for (let index = 0; index < numbers.length; index++) {
        // Check if exist in matches
        const value = numbers[index]
        const difference = target - value

        if (difference in matches) {
            return [matches[difference], index]
        }

        // Hash value, store index.
        matches[value] = index
    }

    throw Error("None found")
}