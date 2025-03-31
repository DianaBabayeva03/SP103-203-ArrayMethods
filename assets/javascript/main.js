// Array 1.
// Aşağıda transactions array-i verilmişdir. Hər bir əməliyyat obyekt kimi saxlanılır 
// və amount (məbləğ) müsbət və ya mənfi ola bilər.
// Əvvəlcə, yalnız müsbət məbləğləri seçin (filter).
// Sonra bu məbləğləri 10% artımla qaytaran yeni bir array yaradın (map).
// Nəhayət, bütün artırılmış məbləğlərin cəmini hesablayın (reduce).
const transactions = [
    { id: 1, amount: -500 },
    { id: 2, amount: 1500 },
    { id: 3, amount: -200 },
    { id: 4, amount: 3000 },
    { id: 5, amount: 1200 }
];
  
// // const positiveTransactions = transactions.filter((transaction) => {
// //     if(transaction.amount > 0) {
// //         console.log(transaction);
// //     }
// // })

// // const faizTransactionn = transactions.map((transaction) => {
// //     if(transaction.amount > 0){
// //         console.log(transaction.amount * 1.1);
// //     }
// // })

// const faizTransaction = transactions
//     .filter(transaction => transaction.amount > 0)
//     .map(transaction => transaction.amount * 1.1);
// console.log("10 fazile neticesi:", faizTransaction);

// const cemTranscation = faizTransaction.reduce((cem, amount) => cem +amount, 0)
// console.log("10 fazile tapilmish neticelerin cemi:", cemTranscation);

// Array 2.
// Aşağıdakı users array-i verilmişdir.
// find metodundan istifadə edərək emaili alice@example.com olan istifadəçini tapın.
// some metodundan istifadə edərək yaşı 40-dan yuxarı olan birinin olub-olmadığını yoxlayın.
// every metodundan istifadə edərək bütün istifadəçilərin aktiv olub-olmadığını yoxlayın.
const users = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com", isActive: true },
  { id: 2, name: "Bob", age: 32, email: "bob@example.com", isActive: false },
  { id: 3, name: "Charlie", age: 45, email: "charlie@example.com", isActive: true },
  { id: 4, name: "David", age: 29, email: "david@example.com", isActive: true }
];

// const findUser = users.filter((user) => {
//     if(user.email === "alice@example.com"){
//         console.log(user);
//     }
// })
// const findUsers = users.filter( user => user.email == "alice@example.com")
// console.log(findUsers);


// const someUser = users.some((user) => {
//     if (user.age > 40) {
//         console.log(user);
//     }
// })
// const someUsers = users.some ( user => user.age > 40)
// console.log(someUsers);


// const everyUser = users.every((user) => {
//     if (user.isActive == true) {
//         console.log(user);
//     }
// })
// const everyUsers = users.every(user => user.isActive)
// console.log(everyUsers);


// Array 3. Müştəri Əməliyyatları
const customers = [
  { id: 1, name: "Elvin", purchases: [100, 250, 320], isActive: true },
  { id: 2, name: "Nigar", purchases: [50, 200], isActive: false },
  { id: 3, name: "Rəşad", purchases: [500, 1000, 150], isActive: true },
  { id: 4, name: "Aytac", purchases: [700], isActive: true },
  { id: 5, name: "Samir", purchases: [], isActive: false },
  { id: 5, name: "Samira", purchases: [], isActive: false }

];
// // map metodundan istifadə edərək, hər bir müştərinin ümumi xərclədiyi məbləği (purchases array-indəki ədədlərin cəmi) qaytaran yeni bir array yaradın.
// const sumPurchases = customers.map(customer => ({
//     name : customer.name,
//     total: customer.purchases.reduce((sum, purchases) => sum + purchases, 0)
// }))
// console.log(sumPurchases);

// // filter metodundan istifadə edərək, yalnız aktiv müştəriləri (isActive: true) olan yeni bir array yaradın.
// const filteredCustomers = customers.filter(customer => customer.isActive == true)
// console.log(filteredCustomers);

// // reduce metodundan istifadə edərək, bütün müştərilərin ümumi xərclədiyi pulu hesablayın.
// const totalSum = customers.reduce((sum, customer) => sum + customer.purchases
//     .reduce((total, purchases) => total + purchases,0), 0 )
// console.log(totalSum);

// // some metodundan istifadə edərək, heç olmasa bir müştərinin xərclərinin 1000-dən çox olub-olmadığını yoxlayın.
// const someCustomers = customers.some(customer => customer.purchases
//     .reduce((sum, purchases) => sum + purchases, 0)> 1000)
// console.log(someCustomers);

// // find metodundan istifadə edərək, xərcləri olmayan ilk müştərini tapın.
// const findCustomers = customers.find(customer => customer.purchases == 0)
// console.log(findCustomers);



// Array 4. Tələbələrin İmtahan Nəticələri
const students = [
  { name: "Zaur", scores: { math: 85, physics: 78, chemistry: 92 } },
  { name: "Leyla", scores: { math: 95, physics: 88, chemistry: 80 } },
  { name: "Murad", scores: { math: 55, physics: 62, chemistry: 47 } },
  { name: "Aysel", scores: { math: 74, physics: 81, chemistry: 90 } }
];
// // map metodundan istifadə edərək, hər bir tələbənin orta balını (math, physics, chemistry üçün) hesablayıb yeni array qaytarın.
// const mapStudents = students.map((student) => ({
//     name: student.name,
//     uomg: (student.scores.math + student.scores.physics + student.scores.chemistry) / 3
// }))
// console.log(mapStudents);


// // filter metodundan istifadə edərək, yalnız bütün fənlərdən 80-dən yuxarı bal toplayan tələbələri qaytaran array yaradın.
// const filteredStudents = students.filter(student => student.scores.math> 80 && student.scores.physics> 80 && student.scores.chemistry> 80)
// console.log(filteredStudents);


// // every metodundan istifadə edərək, bütün tələbələrin riyaziyyat balının 50-dən yuxarı olub-olmadığını yoxlayın.
// const everyStudents = students.every( student => student.scores.math> 50)
// console.log(everyStudents);


// // find metodundan istifadə edərək, riyaziyyatdan ən aşağı bal toplamış tələbəni tapın.
// const findStudents = students.find(student => student.scores.math > 50)
// console.log(findStudents);


// // reduce metodundan istifadə edərək, bütün tələbələrin fizika fənnindən topladığı ümumi balı hesablayın.
// const reduceStudents = students.reduce((sum, student) => sum+ student.scores.physics, 0 )
// console.log(reduceStudents);