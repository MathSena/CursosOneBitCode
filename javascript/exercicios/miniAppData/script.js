let dateOfBorn = prompt('Digite a data de seu nascimento (DD/MM/YYYY)')
let today = moment()

let convertDate = moment(dateOfBorn, 'DD/MM/YYYY')

let dateDiff = today - convertDate

let chosenOption = prompt(
  'Escolha como gostaria que o tempo fosse exibido\n1 - Segundos\n2 -Minutos\n3 - Horas\n4 - Dias'
)

if (chosenOption == '1') {
  let secondsOfBorn = Math.round(dateDiff / 1000)
  alert('Tempo de vida ' + secondsOfBorn + ' Segundos')
} else if (chosenOption == '2') {
  let minutesOfBorn = Math.round(dateDiff / 1000 / 60)
  alert('Tempo de vida ' + minutesOfBorn + ' Minutos')
} else if (chosenOption == '3') {
  let hoursOfBorn = Math.round(dateDiff / 1000 / 3600)
  alert('Tempo de vida ' + hoursOfBorn + ' Horas')
} else if (chosenOption == '4') {
  let daysOfBorn = Math.round(dateDiff / 1000 / 60 / 24)
  alert('Tempo de vida ' + daysOfBorn + ' Dias')
} else {
  alert('Opção inválida')
}
