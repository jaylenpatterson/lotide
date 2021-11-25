const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

students.sort((a, b) => ((a.name > b.name) ? 1
: (a.name === b.name) ? b.age - a.age : 0))
 



console.log(students)
