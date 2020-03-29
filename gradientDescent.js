// let sample = [[1,1], [2,2], [3,3]]

// no condition check for sample data,
// give the sample data in [[x1, y1], ......[xm, ym]]
let sample = [[15,7],[4,10],[12,9],[12,9],[12,9],[22,3],[25,0],[21,3],[25,0],[23,2],[23,2],[21,3],
[21,3],[25,0],[23,2],[21,3],[25,0],[23,2],[21,3],[25,0],[24,1],[21,3],[25,0],[25,0],[24,1],[25,0],
[21,3]]

// initial value is set to zero
let thetaZero = 0;
let thetaOne = 0;

// kept lower to avoid over shooting
let alphaRate = 0.001
let diff = []
let diffSum = 0
let diffSumForThetaOne = 0
// the algorithm stops if the gradient descent has been converged.
let precision = 0.00001
prevStepSize = 1
for (let i = 0; i<250000; i++) {
  // compares the absolute value of previous and current loop theta zero values
  if (prevStepSize > precision) {
    diffSum = 0
    diffSumForThetaOne = 0
    for(let j = 0; j<sample.length; j++) {
      diff[j] = Number(thetaZero) + (Number(thetaOne) * sample[j][0]) - sample[j][1]
      diffSum += diff[j]
      diffSumForThetaOne += (diff[j] *sample[j][0])
    }
    tempZero = thetaZero - (alphaRate/sample.length*(diffSum))
    tempOne = thetaOne - (alphaRate/sample.length*(diffSumForThetaOne))
    // to know the program is running
    console.log(tempZero, tempOne, Math.abs(thetaZero - tempZero) > precision)
  
    prevStepSize = Math.abs(thetaZero - tempZero)
    thetaZero = tempZero
    thetaOne = tempOne
  } else {
    break
  }
}

console.log(thetaZero, 'thetaZero')
console.log(thetaOne, 'thetaOne')
