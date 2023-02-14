"use strict"

// Objects



// let stu1 = {
//     name: "Konul",
//     surname: "Ibrahimova",
//     email: "konul@gmail.com",
//     phones: [230, 5754532],
//     education: {
//         names: ["Programing", "Digital Marketing"]
//     }
// }

// stu1.address = "Neftciler";

// console.log(stu1.address);

// console.log(stu1.name);

// for (const key in stu1) {
//     console.log(`${key}: ${stu1[key]}`);
// }

// let user = {};

// user.name = "Pervin";

// console.log(user.name);

// for (const item of stu1.phones) {
//     console.log(item);
// }

// console.log(stu1.education.names);

// let stu1 = {
//     id: 1,
//     name: "Eli",
//     surname: "Talibov",
//     address: "Xetai"
// }
// let stu2 = {
//     id: 2,
//     name: "Elekber",
//     surname: "Hesenov",
//     address: "Bayil"
// }
// let stu3 = {
//     id: 3,
//     name: "Mirze",
//     surname: "Bashirzade",
//     address: "Bulbule"
// }

// let stu4 = {
//     id: 4,
//     name: "Shaiq",
//     surname: "Kazimov",
//     address: "Sedmoy"
// }

// let group = {
//     name: "P135",
//     capacity: 4,
//     students: [],
//     addStudent: function (student) {
//         let isStudentExists = this.students.find(s => s.id == student.id);
        
//         if (isStudentExists != undefined) {
//             console.log("This student already exists");
//             return;
//         }

//         if (this.capacity == this.students.length) {
//             console.log("Group already filled");
//             return;
//         }

//         this.students.push(student);
//     },

//     updateStudent: function (student) {
//         let isStudentExists = this.students.find(s => s.id == student.id);

//         if (isStudentExists != undefined) {
//             isStudentExists.address = student.address;
//         }
//     },

//     getStudents: function () {
//         // for (const student of this.students) {
//         //     console.log(`${student.name} ${student.surname} ${student.address}`);
//         // }

//         return this.students;
//     }
// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);

// console.log(group.getStudents());
// console.log(group.students.length);

// getStudentDatas(group.getStudents());

// function getStudentDatas(array) {
//     for (const item of array) {
//         console.log(`${item.name} ${item.surname} ${item.address}`);
//     }
// }

// let updatedStudent = {
//     id: 4,
//     address: "Ehmedli"
// }

// group.updateStudent(updatedStudent);

// getStudentDatas(group.getStudents());




// let user = {
//     name: "Elcan",
//     company: {
//         name: "Code Academy",
//         rooms: [
//             {
//                 name: "Yupiter",
//                 capacity: 15,
//                 computers: ["HP", "Apple", "Acer"]
//             },

//             {
//                 name: "Saturn",
//                 capacity: 10,
//                 computers: []
//             }
//         ]
//     }
// }

// function getRoomComputers(user) {
//     let computers = [];

//     for (const room of user.company.rooms) {
//         if (room.name == "Yupiter") {
//             computers = room.computers;
//         }
//     }

//     computers.forEach(computer => {
//         console.log(computer);
//     });
// }

// getRoomComputers(user);









// Class



