//Day15 od 100days challenge
//Brute-force approach with nested loops
function hasUnique(pages, k) {
  for (let i = 0; i <=  pages.length - k; i++) {
    let unique = true;
    const windowArr = [];
    for (let j = i; j < i + k; j++) {
      const page = pages[j];
      if (windowArr.indexOf(page) !== -1) {
        unique = false;
        break;
      }
      windowArr.push(page);
    }

    if (unique) {
      return true;
    }
  }
  return false;
}
console.log(hasUnique(["home", "about", "products", "home", "cart", "checkout"],3)); 
