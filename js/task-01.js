const liItemRef = document.querySelectorAll(".item");
console.log(liItemRef);

console.log(`Number of categories: ${liItemRef.length}`);

// console.log(`Category: ${liItemRef[0].firstElementChild.textContent}`);
// console.log(`Elements: ${liItemRef[0].lastElementChild.childElementCount}`);

// console.log(`Category: ${liItemRef[1].firstElementChild.textContent}`);
// console.log(`Elements: ${liItemRef[1].lastElementChild.childElementCount}`);

// console.log(`Category: ${liItemRef[2].firstElementChild.textContent}`);
// console.log(`Elements: ${liItemRef[2].lastElementChild.childElementCount}`);

const element = [...liItemRef].map((item) => {
  const titleContent = item.firstElementChild.textContent;
  const elementCount = item.lastElementChild.childElementCount;
  return console.log(`Category: ${titleContent} \n Elements: ${elementCount}`);
});
