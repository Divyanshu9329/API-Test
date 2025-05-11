function filterData(input, filters) {
    const result = {};

    if (filters.includes("numbers")) {
        result.numbers = input.filter(item => /^[0-9]$/.test(item));
    }

    if (filters.includes("alphabets")) {
        result.alphabets = input.filter(item => /^[a-zA-Z]$/.test(item));
    }

    if (filters.includes("highest_lowercase_alphabet")) {
        const lowercase = input.filter(item => /^[a-z]$/.test(item));
        result.highest_lowercase_alphabet = lowercase.length
            ? [lowercase.reduce((a, b) => (a > b ? a : b))]
            : [];
    }

    return result;
}

module.exports = { filterData };
