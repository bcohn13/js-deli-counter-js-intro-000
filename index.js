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

function currentLine(line) {
  var line_stat={}
  for (let i=0; i<line.length; i++) {

    line_stat[i]=line[i]
  }
}
