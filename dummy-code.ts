export function processAndSumArray(numbers: number[]): number {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i] * 2; // Double even numbers before summing
        } else {
            sum += numbers[i]; // Sum odd numbers as they are
        }
		//let p =0;
        if (sum > 1000) {
            console.warn("Sum exceeded 1000, stopping early.");
            break; // Break the loop if sum goes beyond a threshold
        }
    }

    return sum;
}

export function transformAndAggregate(numbers: number[]): { sum: number, processed: number[] } {
    let sum = 0;
    let processed: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];

        if (value < 0) {
            value = Math.abs(value); // Convert negative numbers to positive
        } else if (value % 3 === 0) {
            value *= 1.5; // Increase multiples of 3 by 50%
        } else if (value % 5 === 0) {
            value /= 2; // Halve multiples of 5
        }

        processed.push(value);
        sum += value;

        if (sum > 500) {
            console.warn("Sum exceeded 500, terminating early.");
            break; // Stop early if sum goes beyond 500
        }
    }

    return { sum, processed };
}
