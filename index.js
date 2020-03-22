function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line[0]}.`
    line.shift()
    return line
}
  else {
    return "There is nobody waiting to be served!"
    return line
  }

}
