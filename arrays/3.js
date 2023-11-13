function addAndRemove(commandsArr) {
  let num = 1;
  let result = [];
  function add() {
    return result.push(num);
  }
  function remove() {
    return result.pop();
  }
  let isFull = false;
  

  for (const command of commandsArr) {
    
    if (command === 'add') {
        isFull = true;
      add();
    } else if (command === 'remove') {
      if (isFull) {
        remove();
        if(result.length <= 0) {
            isFull = false;
        }
      }
    }
    num++;
  }

  if(isFull) {
    for (const res of result) {
        console.log(res);
        
    }
  } else {
    console.log('Empty');
  }
}
addAndRemove(['add', 'add', 'add', 'add']);
