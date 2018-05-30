This app is made with React - Redux in the frontend and TypeScript - TypeORM in the backend

## Quickstart:
1. clone this repo
2. cd into /server
3. run yarn install
4. run tsc or tsc -w
5. run node . or nodemon .
6. cd into /client
7. run yarn install
8. run yarn start to start the app
9. (for tests) 
    - run yarn add jest
    - run yarn test
10. happy hacking! 👌

### This is a student-evaluation app, a multiple page app meant to help teachers to manage classes, students profiles and evaluations. 

The app contains the following:

• Teachers can see a list of current classes, identifiable by their Batch number, start date, and end date.
• Teachers can create a new class by giving it a Batch number, start date, and end date.
• Teachers can add, edit, remove students in a class. To add a student they need to provide: 
  1) their full name, 2) (a link to) their profile picture.
• Teachers can click on a class, after which they see a list of all the students by their name and
  photo, and the last colour code given to them. Thus, teachers can grade their students through a color system of GREEN, YELLOW, and RED. 
  GREEN meaning all good and on track, YELLOW meaning slightly off-track, and RED meaning that the student needs extra attention. 
  Above the students grid, there's a bar showing the percentage (%) of students evaluated GREEN, YELLOW, and RED.
• When clicking on a student's name, Teachers can click on GREEN, YELLOW, or RED, fill in
  the date (defaults to today), and a remark. 
• Teachers can edit a student's profile and evaluations.
• ALGORITHM PART! From the class view teachers can click a button “ASK A QUESTION”. 
  It shows the name of a random student to ask a question. Not entirely random though: 
  RED students get ~53% of the questions, YELLOW students ~28%, and GREEN students ~19%.


### To do:
- Refactor code
- Implement more material-ui
- Finish some additional functionality



