// ['A', 'A', 'A', 'a', 'A', 'A', 'B', 'B', 'B', 'NG', 'D', 'D'] => '3A1a2A3B1NG2D'

// '3A1a2A3B1NG2D' => ['A', 'A', 'A', 'a', 'A', 'A', 'B', 'B', 'B', 'NG', 'D', 'D']

// ['red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'green', 'yellow']

// 1 + 2 = 3 

//MASALA-1
let a = 3
let b = 5

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

//MASALA-2

const sorted = (arr) => {
    let sortedArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            sortedArr.push(arr[i])
        }
    }

    return sortedArr
}

console.log(sorted([1, 1, 1, 2, 2, 1, 1, 4, 2, 8, 8]))




Masala - 3

function arr_thing(arr) {
    if (!arr) return '';

    const output = [];

    let end = 0;

    output.push([1, arr[0]]);
    for (let i = 1; i < arr.length; ++i) {
        if (output[end][1] != arr[i]) {
            output.push([1, arr[i]]);
            ++end;
        } else {
            ++output[end][0];
        }
    }

    return output.map(v => v.join('')).join('');
}

const arr = ['A', 'A', 'A', 'a', 'A', 'A', 'B', 'B', 'B', 'NG', 'D', 'D', 'b', 'b', 'b'];

console.log(arr_thing(arr));


//Masala-4

