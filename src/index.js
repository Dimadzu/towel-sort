
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr=[];
  for(let j = 0; j < matrix.length; j++) {
     if(j%2===0){
      for(let n = 0; n < matrix[j].length; n++) {
          if(matrix[j][n]!==undefined){
          newArr.push(matrix[j][n]);}
      } 
  } else if (!j%2===0) {
      for(let n = matrix[j].length; n>=0; n--){
          if(matrix[j][n]!==undefined){
           newArr.push(matrix[j][n]);}
       }
  }
  }


return newArr;
}