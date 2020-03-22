function takeANumber(line,name) {
  for (let i=0; i<line.length; i++) {
    if (line[i]===name) {
      return `Welcome, ${name}. You are number ${i+1} in line.`
    }
  }
}
