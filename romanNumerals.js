// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:
// Decimal
// Roman
// 1
// I
// 5
// V
// 10
// X
// 50
// L
// 100
// C
// 500
// D
// 1,000
// M
// For example:
// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:
// toRoman(99)
// 'LXXXXVIIII'

// function romanNumerals(number){
//     let romanNumerals = []
//     if(number / 1000 >= 1){
//         let m = Math.floor(number/1000)
//         for(let i=0; i < m; i++){
//             romanNumerals.push('M')
//         }
//         number = number -(m * 1000)
//     }
//     if(number / 500 >= 1){
//         let d = Math.floor(number/500)
//         for(let i=0; i < d; i++){
//             romanNumerals.push('D')
//         }
//         number = number -(d * 500)
//     }
//     if(number / 100 >= 1){
//         let c = Math.floor(number/100)
//         for(let i=0; i < c; i++){
//             romanNumerals.push('C')
//         }
//         number = number -(c * 100)
//     }
//     if(number / 50 >= 1){
//         let l = Math.floor(number/50)
//         for(let i=0; i < l; i++){
//             romanNumerals.push('L')
//         }
//         number = number -(l * 50)
//     }
//     if(number / 10 >= 1){
//         let x = Math.floor(number/10)
//         for(let i=0; i < x; i++){
//             romanNumerals.push('X')
//         }
//         number = number -(x * 10)
//     }
//     if(number / 5 >= 1){
//         let v = Math.floor(number/5)
//         for(let i=0; i < v; i++){
//             romanNumerals.push('V')
//         }
//         number = number -(v * 5)
//     }
//     if(number / 1 >= 1){
//         let ones = Math.floor(number/1)
//         for(let i=0; i < ones; i++){
//             romanNumerals.push('I')
//         }
//         number = number-(ones)
//     }

//     romanNumerals = String(romanNumerals.join(''))
//     return console.log(romanNumerals)
// }
// romanNumerals(267)
// romanNumerals(99)


function romanNumerals(number){
    let romanNums = ['M', 'D', 'C', 'L', 'X', 'V', 'I' ]
    let romanVals= [1000, 500, 100, 50, 10, 5, 1]
    romanNumeral=[]
    
    for(let i = 0; i < romanNums.length; i++){
        if(number / romanVals[i] >=1){
            let characters = Math.floor(number / romanVals[i])
            for(let j =0; j < characters; j++){
                romanNumeral.push(romanNums[i])
            }
            number -= (characters * romanVals[i])
        }
    }
    romanNumeral = String(romanNumeral.join(''))
    return console.log(romanNumeral)
}
romanNumerals(267)
romanNumerals(99)