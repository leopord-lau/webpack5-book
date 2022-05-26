module.exports = {
  // 同步
  // entry: () => {
  //   return '../src/index.js'
  // }
  // entry: () => {
  //   return ['../src/index.js', '../src/main.js']
  // }
  // entry: () => {
  //   return {
  //     page1: '../src/index.js',
  //     page2: '../src/main.js'
  //   }
  // }

  // 异步
  entry: () => {
    return new Promise((resolve) => {
      resolve({
        page1: '../src/index.js',
        page2: '../src/main.js'
      })
    })
  }
};