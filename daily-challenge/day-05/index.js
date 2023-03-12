// 批改作業
function correctTest(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.round(Math.random()*100);
      if(score >= 60) {
        resolve({
          name,
          score
        })
      } else {
        reject("您已達退學門檻")
      }
    }, 2000)
  })
}
// 檢查獎勵
function checkReward(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.score >= 90) {
        resolve(`${data.name} 獲得電影票`);
      } else if (data.score >= 60 && data.score < 90) {
        resolve(`${data.name} 獲得嘉獎`);
      } else {
        reject(`您沒有獎品`)
      }
    }, 2000)
  })
}

// correctTest("小明")
//   .then(data => checkReward(data))
//   .then(reward => console.log(reward))
//   .catch(error => console.log(error))

const init = async function() {
  try {
    const data = await correctTest("小明")
    const reward = await checkReward(data)
    console.log(reward)
  } catch (error) {
    console.log(error)
  }
  
}

init();