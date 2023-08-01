//https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train

function numberToString(num) {

    return num.toString()

}

console.log(numberToString(67))


// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {

    const convertHours = h * 60 * 60 * 1000;
    const convertMinutes = m * 60 * 1000;
    const convertSeconds = s * 1000;

    return convertHours + convertMinutes + convertSeconds;

}


//  https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

let findNeedle = haystack => haystack
    .map((x, i) => x === 'needle' ? "found the needle at position " + i : 0).filter(x => x != 0).join('')



//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);



// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {

    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

}


//Yangisi


// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {

    let positiveNums = 0;

    let negativeNums = 0;

    if (input === null || input.length === 0) {

        return [];

    } else {

        input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);

    }

    return [positiveNums, negativeNums];

}



// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

let simpleMultiplication = number => number % 2 == 0 ? number * 8 : number * 9



// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

let hero = (bullets, dragons) => bullets >= dragons * 2 ? true : false



// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript

let checkForFactor = (base, factor) => base % factor == 0 ? true : false


// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr) {
    return arr.filter((v, i) => !(i % 2));
}


// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name) {
    return "Hello, " + name + " how are you doing today?"
}


//   https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {

    var score = (s1 + s2 + s3) / 3;

    if (score >= 90 && score <= 100) {

        return 'A';

    } else if (score >= 80 && score < 90) {

        return 'B';

    } else if (score >= 70 && score < 80) {

        return 'C';

    } else if (score >= 60 && score < 70) {

        return 'D';

    } else {

        return 'F';

    }
}



// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {

    let newString = ''

    for (let i = 0; i < n; i++) {

        newString += s

    }

    return newString

}


// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {

    let lights = {
        "green": 1
        , "yellow": 2,
        "red": 3
    }


    let result = Object.entries(lights)

    let number = ((lights[current]) + 1) % 4


    if (number == 0) {

        return "green"

    }

    let light = result.filter((x, i) => x[1] == number ? x[0] : false).join("").split(",")[0]


    return light

}


// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {

    let x = number % 2;

    if (x === 0) {

        return "Even";

    } else {

        return "Odd";

    };

}


// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {

    let z = []

    for (var i = 1; i <= n; i++) {

        z.push(x * i);

    }

    return z

}


// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0) {

        return false;

    } else {

        return true;

    }
}


// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true)
            count++;

    }

    return count

}


// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {

    let arr = Array.from(String(n), Number);

    arr.reverse();

    return arr;

}

console.log(digitize(35231))



// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

let cockroachSpeed = (s) => Math.floor(s * 100000 / 60 / 60)



// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {

    return s.split('!').join('');

}


// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {

    let bmi = weight / height ** 2

    console.log(weight)
    console.log(height)
    console.log(bmi)

    if (bmi <= 18.5) {

        return "Underweight"

    } else if (bmi <= 25) {

        return "Normal"

    } else if (bmi <= 30) {

        return "Overweight"

    } else {

        return "Obese"

    }

}




// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {

    let powers = []

    for (let i = 0; i <= n; i++) {

        powers.push(2 ** i)

    }

    return powers;

}



// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

let enough = (cap, on, wait) => cap - on >= wait ? 0 : wait + on - cap



// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade(exam, projects) {
    if (projects > 10) { return 100 }
    if (exam > 90) { return 100 }

    if (exam > 90 && projects >= 10) {
        return 100
    }
    if (exam > 75 && projects >= 5) {
        return 90
    }
    if (exam > 50 && projects >= 2) {
        return 75
    }
    else { return 0 }
}