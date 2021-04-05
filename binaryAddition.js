const a = [1,1,0,0,1];
const b = [0,1,1,0,0];

function addBinaries(a, b) {
    let i = a.length - 1;
    const binaryNumber = [];
    let carry = 0;

    while (i >= 0) {
        let sum = +a[i] + +b[i] + carry;

        if (sum > 1) {
            sum = sum % 2;
            carry = 1;
        } else {
            carry = 0;
        }

        binaryNumber.push(sum);
        i--;
    }

    if (carry) {
        binaryNumber.push(carry);
    }

    return binaryNumber;
}

console.log(addBinaries(a, b));