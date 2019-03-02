// code solution here
// console.log(process.process.process.argv)


var generatePassword = function generatePassword(length, charset) {
    var length = length || 8,
        charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        password = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    return password
}


var length = 10,
    number = 1

if (!process.argv[2] || !process.argv[3]) {
    console.log('Please provide an argument, e.g., 5 or 5 10')
    process.exit(1)
}
if (process.argv[2]) {
    length = parseInt(process.argv[2], 10)
}
if (process.argv[3]) {
    number = parseInt(process.argv[3], 10)
}

for (var i = 1; i <= number; i++) {
    console.log(generatePassword(length))
}

process.exit(0)