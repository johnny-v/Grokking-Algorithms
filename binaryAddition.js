const a = ['11001', '11011'];
const b = ['01100', '00011'];

function addBinaries(a, b) {
    const result = [];

    for (let j = 0; j < a.length; j++) {
        let i = a[j].length - 1;
        let binaryNumber = '';
        let carry = 0;

        while (i >= 0) {
            let sum = +a[j][i] + +b[j][i] + carry;

            if (sum > 1) {
                sum = sum % 2;
                carry = 1;
            } else {
                carry = 0;
            }

            binaryNumber += sum;
            i--;
        }

        if (carry) {
            binaryNumber = result + carry;
        }

        result.push(binaryNumber);
    }

    return result;
}

console.log(addBinaries(a, b));