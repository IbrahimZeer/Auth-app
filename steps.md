# Steps of Structure

### setup nextjs
```
npxcreate-next-app@latest
```
to use next framework in this projects

---
### setup shadcn/ui
```
npx shadcn-ui@latest init
```
it for collections of re-usable components that i can copy and past in my project

---
### Create Home Page with routing
inside `localhost/3000` i created HomePage it has
- Title of Project
- simple Paragraph
- Login Button

---

### Create Simple Layout of Auth Directory
it helps me to be all auth pages are One Theme

---

### Create Login Page
it's route is `http://localhost:3000/auth/login` , for now it only has a Title

---

### Add card from shadcn/ui
`npx shadcn-ui@latest add card`

---

### install some UI Design
```
 npm i react-icons
 npx shadcn-ui@latest add form
 npx shadcn-ui@latest add input
```
***any UI downloaded will be inside components/ui***

---

## Pages and helpers 
### components/auth
- back-btn (to create Back button)
- card-wrapper (Home page and all content)
- header (Sign up page)
- login-btn (Create login Button)
- login-form (Create Login Button form)
- social (login using Google and Github accounts)
### components
- form-success (to get Success message if all right)
- form-err (to get Error message if something went wrong)
### schemas
- index.ts (to use zod lib , help us to create Schemas like create message)

