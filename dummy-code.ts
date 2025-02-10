export function processAndSumArray(numbers: number[]): number {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i] * 2; // Double even numbers before summing
        } else {
            sum += numbers[i]; // Sum odd numbers as they are
        }
		//let t =0;
        if (sum > 11000) {
            console.warn("Sum exceeded 1000, stopping early.");
            break;  }
    }

    return sum;
}
