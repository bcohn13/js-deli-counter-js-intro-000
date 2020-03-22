function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var customer=line.splice(0,1)
    return `Currently serving ${customer}.`


}
  else {
    return "There is nobody waiting to be served!"

  }

}
