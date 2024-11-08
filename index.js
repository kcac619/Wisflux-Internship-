import _ from "lodash";
import members from "./data.js";

// 1. Get array of first names of everyone
const firstNames = _.map(members, (member) =>
  _.first(_.split(member.name, " "))
);
console.log("\n\n 1. First Names: ", firstNames, "\n");

// 2. Make everyone's last names in UPPERCASE
const lastNames = _.map(members, (member) => {
  const nameParts = _.split(member.name, " ");
  const lastName = _.last(nameParts);
  return {
    ...member,
    name: _.replace(member.name, lastName, _.toUpper(lastName)),
  };
});
console.log("2. Last Names in UPPERCASE: ", lastNames, "\n");

// 3. Get entries where age is between 41-60
const membersBetween41And60 = _.filter(members, (member) =>
  _.inRange(member.age, 41, 61)
);
console.log("3. Members between 41-60: ", membersBetween41And60, "\n");

// 4. Get average age
const validAges = _.map(_.filter(members, "age"), "age");
const averageAge = _.round(_.mean(validAges), 3);
console.log("4. Average Age: ", averageAge, "\n");

// 5. Get Person with maximum age
const maxAgePerson = _.maxBy(members, "age");
console.log("5. Person with Maximum Age: ", maxAgePerson, "\n");

// 6. Divide persons in three groups using groupBy
const personsGroup = _.groupBy(members, (member) => {
  if (!member.age) return "noage";
  return member.age < 35 ? "young" : "old";
});

console.log("6. Persons Group: ", personsGroup, "\n");

// 7. Add a new member at index 2
const newMember = { name: "Kunal Chhatwani", age: 21 };
const membersWithNewMember = [
  ..._.slice(members, 0, 2),
  newMember,
  ..._.slice(members, 2),
];
console.log("7. New Member Added: ", membersWithNewMember, "\n");

// 8. Extract first and second element using destructuring
const [first, second] = members;
console.log("8. First and Second Element: ", first, second, "\n");

// 9. Create a new array instance adding new member at index 0
const anotherMember = { name: "Yatan Kulshreshtha", age: 21 };
const newMembers = _.concat([anotherMember], members);
console.log("9. New Members Array: ", newMembers, "\n");

// 10. Extract properties of object using destructuring
const { name, age } = members[0];
console.log("10. Destructured properties:", { name, age }, "\n");

// 11. Rename extracted property of object while destructuring
const { name: nameOfSecond, age: ageOfSecond } = members[1];
console.log("11. Renamed properties:", { nameOfSecond, ageOfSecond }, "\n");

// 12. Destructure property and use spread for remaining
const { name: destructuredName, ...otherProperties } = members[3];
console.log(
  "12. Destructured name and other properties:",
  {
    destructuredName,
    otherProperties,
  },
  "\n"
);

// 13. Create new object by copying and override property
const newObjectWithUpdatedAge = { ...members[3], age: 22 };
//  _.assign({}, members[3], { age: 22 });
console.log(
  "13. New object with overridden age:",
  newObjectWithUpdatedAge,
  "\n"
);

// 14. Use reduce function on array and object
const totalAge = _.reduce(members, (sum, member) => sum + (member.age || 0), 0);
console.log("14. Sum of all ages:", totalAge);
