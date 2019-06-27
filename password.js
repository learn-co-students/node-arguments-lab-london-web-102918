function generatePassword(length) {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0, n = characters.length; i < length; ++i) {
    password += characters.charAt(Math.floor(Math.random() * n));
    }
  return password;
}

let pwLength = process.argv[2];
let amount = process.argv[3];

for (let i = 0; i < amount; i++) {
  console.log(generatePassword(pwLength));
}
