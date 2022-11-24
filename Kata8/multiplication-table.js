const multiPlication=function(n){
    let table = []
    for(let i = 1; i <= n; i++) {
        table.push(`${i} * ${n} = ${i*n}`)
      }
      return table.join('\n')
}
console.log(multiPlication(5))