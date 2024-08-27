// Кол-во побед после смены выбора
let changedChoiceWon = 0

// Кол-во побед без изменения выбора
let notchangedChoiceWon = 0

const doors = [0, 1, 2]

for (let i = 0; i < 10_000; i++) {
  // Выбор индекса автомобиля
  const autoIndex = Math.floor(Math.random() * doors.length)

  // Выбор игрока
  const userChoise = Math.floor(Math.random() * doors.length)

  // Выбор ведущего, который не должен быть равен нашему индексу и индексу приза
  const montyOpen = doors.find((door) => door !== autoIndex && door !== userChoise)

  // Меняем выбор двери
  const changedUserChoise = doors.find(
    (door) => door !== userChoise && door !== montyOpen
  )

  // Если дверь с автомобилем совпадает с новой выбранной дверью,
  // то прибавляем к количеству побед после смены выбора
  if (autoIndex === changedUserChoise) {
    changedChoiceWon++
  }

  // Если дверь с автомобилем совпадает с первым выбором двери,
  // то прибавляем к количеству побед без изменения выбора
  if (autoIndex === userChoise) {
    notchangedChoiceWon++
  }
}
console.log(`Количество побед после изменения выбора: ${changedChoiceWon}`)
console.log(`Количество побед без изменения выбора: ${notchangedChoiceWon}`)

if (changedChoiceWon > notchangedChoiceWon) {
  console.log('Шансы выигрыша при смене выбора выше')
} else {
  console.log('Шансы выигрыша без  изменения выбора выше')
}
