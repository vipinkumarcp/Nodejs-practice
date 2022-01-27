
//sync is removed for sync function
const {readFile, writeFile} = require('fs')


// () => {} is callback function 
readFile('../content/subfolder/first.txt', 'utf-8', (err, result) => {

    if(err){
        console.log(err)
        return
    }

   const first = result;
   readFile('../content/subfolder/second.txt','utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
        '../content/subfolder/result-async.txt',
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err)
            return
          }
          console.log('done with this task')
        }
      )
    })
  })
  console.log('starting next task')
//////////////////////////////
