import members from "./data.js";
// console.log(members);

// const members = [    --CLEAN THIS LATER
//   { name: "Aman Makhija", age: 20 },
//   { name: "Himanshu Jangid", age: 40 },
//   { name: "Vijay Sahu", age: 41 },
//   { name: "Rakesh Srivastava", age: 17 },
//   { name: "Chandraprakash Sharma" },
//   { name: "Kartik Dhwan", age: 45 },
//   { name: "Hardik Dhawan", age: 51 },
// ];

//1.Get array of first names of everyone

const firstNames = members.map((member) => {
  return member.name.split(" ")[0];
});
console.log("\n\n 1. First Names: ", firstNames, "\n");

//2. Make everyone's last names in UPPERCASE in given array of objects

const lastNames = members.map((member) => {
  const lastName = member.name.split(" ")[1];

  return {
    ...member,
    name: member.name.replace(lastName, lastName.toUpperCase()),
  };
});
console.log("2. Last Names in UPPERCASE: ", lastNames, "\n");

//3. Get entries where age is between 41-60

const membersBetween41And60 = members.filter((member) => {
  return member.age >= 41 && member.age <= 60;
});

console.log("3. Members between 41-60: ", membersBetween41And60, "\n");

//4. Get average age

const averageAge =
  members.reduce((acc, member) => {
    return acc + member.age ? member.age : 0;
  }, 0) / members.length;

console.log("4. Average Age: ", averageAge, "\n");

//5. Get Person with maximum age

const maxAgePerson = members.reduce(
  (acc, member) => (acc.age > member.age ? acc : member),
  members[0]
);
console.log("5. Person with Maximum Age: ", maxAgePerson, "\n");

// 6. Divide persons in three groups, result should look like
//    {    'young': [], 'old': [],  'noage': [] }
//    Less than 35yrs is young, above 35 is old

const personsGroup = members.reduce(
  (acc, member) => {
    if (member.age < 35) {
      acc.young.push(member);
    } else if (member.age > 35) {
      acc.old.push(member);
    } else {
      acc.noage.push(member);
    }
    return acc;
  },
  { young: [], old: [], noage: [] }
);
console.log("6. Persons Group: ", personsGroup, "\n");

//7. add a new member to same members array instance at index 2
const newMember = { name: "Kunal Chhatwani", age: 21 };
members.splice(2, 0, newMember);
console.log("7. New Member Added: ", members, "\n");

//8. extract first and second element using destructing
const [first, second] = members;
console.log("8. First and Second Element: ", first, second, "\n");

//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const anotherMember = { name: "Yatan Kulshreshtha", age: 21 };
const newMembers = [anotherMember, ...members];
console.log("9. New Members Array: ", newMembers, "\n");

//10. Extract properties of object using destructuring

const { name, age } = members[0];
console.log(
  "10. Using Destructuring extracted properties from object (first element of members array), name : ",
  name,
  ", age : ",
  age,
  "\n"
);

// 11. Rename extracted property of object while destructing
const { name: nameOfSecond, age: ageOfSecond } = members[1];
console.log(
  "11. Renamed properties of the object while destructuring, nameOfSecond :",
  nameOfSecond,
  " , ageOfSecond",
  ageOfSecond,
  "\n"
);

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

const { name: destructredName, ...otherproperties } = members[3];
console.log("12. destructuredName :", destructredName);
console.log("otherproperties in an object", otherproperties, "\n");

//13. Create a new object by copying using spread operator, override
// one of the properties to assign a new value in the same step

const newObjectWithUpdatedAge = {
  ...members[3],
  age: 22,
};
console.log(
  "13. New object with overriden age :",
  newObjectWithUpdatedAge,
  "\n"
);

//14. Use reduce function on array and object
const reducedMembersArray = members.reduce(
  (acc, member) => {
    return { ...acc, age: acc.age + (member.age ? member.age : 0) };
  },
  { name: "default", age: 0 }
);

console.log(
  "14. Used reduce() on members array to calculate sum of all ages: ",
  reducedMembersArray.age
);
