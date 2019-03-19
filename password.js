
  var args = process.argv

  function generatePassword(lengths) {
    var length = lengths,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log( retVal)
}

for (var i = 1; i <= args[3]; i++) generatePassword(args[2])
