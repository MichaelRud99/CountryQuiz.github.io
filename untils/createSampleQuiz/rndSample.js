const rndSample = (regionArr, iteration, answer = "") => {
   let sampleQuiz = [];
   const max = regionArr.length - 1;
   const rndInt = Math.floor(Math.random() * max);

   console.log(answer,regionArr[rndInt].name.common);

   for (let i = 0; i < iteration; i++) {
      if (answer === regionArr[rndInt]) {
         rndInt = rndInt + 1;
      }
      if (rndInt === max) {
         rndInt = i;
      }
      if (rndInt != max) {
         rndInt = rndInt + 1;
      }
      sampleQuiz.push(regionArr[rndInt]);
   }
   return sampleQuiz;
};

export default rndSample;
