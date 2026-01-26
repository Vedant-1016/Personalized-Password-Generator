const { TemplateContext } = require("next/dist/shared/lib/app-router-context.shared-runtime");

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

  return shuffle_string(result);
}

function shuffle_string(str){
  const arr = str.split("");
  for(let i = arr.length - 1; i>0;i--){
    const j = Math.floor(Math.random() * (i+1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

  }
  return arr.join("");
}
const baseword = process.argv[2];
if(!baseword){
  console.log("Please provide a baseword as a command line argument.");
  process.exit(1);
}
const password = generate_pswd(baseword);
console.log(password); 
// used to print generated password to console for testing