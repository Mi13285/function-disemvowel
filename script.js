function disemvowel(str) {
  let newStr = "",
    i;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    newStr += str[i];
  }
  return newStr;
}
console.log(disemvowel("This website is for losers LOL!"));
