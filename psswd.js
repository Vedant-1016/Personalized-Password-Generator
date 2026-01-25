function generate_pswd(baseword){
    // TODO: randomize case
  // TODO: add a number
  // TODO: add a symbol
  // TODO: return password
  let result = "";
  for (let i=0 ; i<baseword.length; i++){
    const char = baseword[i];
    if (Math.random() > 0.5) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
const digits = "0123456789";
  const randomIndex = Math.floor(Math.random() * digits.length);
  const randomDigit = digits[randomIndex];

  result += randomDigit;

  const symbols = "!@#_$";
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  result += randomSymbol;

  return result;
}
const password = generate_pswd("nebula");
console.log(password);