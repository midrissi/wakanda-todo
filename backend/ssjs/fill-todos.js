for(let i = 0; i <1000; i++){
  new ds.Todo({
    done: false,
    description: "Todo " + i
  }).save();
}