## Setup Steps for Running and Checking the Assignment

1. Clone the repository:

   ```sh
   git clone https://github.com/kcac619/Wisflux-Internship-.git
   ```

2. Install dependencies (if any):
   ```sh
   npm install
   ```
3. Create and switch to the 'native-js' branch:
   ```sh
   git checkout -b lodash-js
   ```
4. Open the project in your preferred code editor and review the solutions implemented using native JavaScript functions.

5. To check the solutions, you can run the JavaScript file using Node.js:
   ```sh
   node index.js
   ```
   OR
   ```sh
   npm start
   ```

```
const members = [
{name: 'Aman Makhija', age: 20},
{name: 'Himanshu Jangid', age: 40},
{name: 'Vijay Sahu', age: 41},
{name: 'Rakesh Srivastava', age: 17},
{name: 'Chandraprakash Sharma'},
{name: 'Kartik Dhwan', age: 45},
{name: 'Hardik Dhawan', age: 51}
];
```

## Assignment Questions

1. Get array of first names of everyone
2. Make everyone's last names in UPPERCASE in given array of objects
3. Get entries where age is between 41-60
4. Get average age
5. Get Person with maximum age
6. Divide persons in three groups, result should look like

```
   {
   'young': [],
   'old': [],
   'noage': []
   }
```

Less than 35yrs is young, above 35 is old

7. add a new member to same members array instance at index 2
8. extract first and second element using destructing
9. Create a new array instance adding a new member at index 0,
   and keeping existing afterwards
10. Extract properties of object using destructuring
11. Rename extracted property of object while destructing
12. Destructure any property of an object and use spread operator
    to get remaining properties in an object
13. Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step
14. Use reduce function on array and object
