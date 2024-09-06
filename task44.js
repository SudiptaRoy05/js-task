var expect = function(val) {
    return {
        toBe: (arg1) => {
            if (val === arg1) {
                return true;
            } else {
                return "Not Equal";
            }
        },
        notToBe: (arg2) => {
            if (val !== arg2) {
                return true;
            } else {
                return "Equal";
            }
        }
    };
};

// Example usage:
console.log(expect(5).toBe(5));     // true
console.log(expect(5).notToBe(6)); // Throws an "Equal" error
