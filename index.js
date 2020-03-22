function takeANumber(line,name) {
  var message=""
  for (let i=0; i<line.length; i++) {
    if (line[i]===name) {
      message=`Welcome, ${name}. You are number ${i+1} in line.`
    }
  }
  return message
}
