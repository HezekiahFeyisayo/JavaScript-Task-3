function checkData(max = 100) {
    let range = [...Array(max).keys()].map(n => n + 1)
    let output = [];
    range.forEach((number) => {
        let input = ''
        if (number % 2 === 0) {
            input = 'yu'
        }
        if (number % 3 === 0) {
            input += input ? '-gi' : 'gi'
        }
        if (number % 5 === 0) {
            input += input ? '-oh' : 'oh'
        }
        if (!input) {
            input = number
        }
        output.push(input)
    });
    return output
};
checkData(100);
checkData(50);