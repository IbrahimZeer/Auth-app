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
### Create actions Directory
- login.ts (to handle Login process , for now to validate Fields)
- register.ts (to handle Register process , for now to validate Fields)
### Adding register page inside app/auth
it same as what login page do 

### adding register-form inside components/auth
it same as what login page do 


***Update on Schemas Directory to be have register***

---

## Use Database and Prisma setup
**Note : The Neon website is used to host my Database , using postgresQl**

- `npx prisma init` (to setup prisma will create prisma Directory and .env file)
- inside .env file putting Database details needed to run
- inside prisma Directory , schema.prisma file putting Database details needed to run and write tables we need (entities)
- `npx prisma generate` (to generate our prisma directory with neon host)
- `npx prisma push` (to push our tables to Database host)
- inside `action/register`
  - Define data needed to register (name , email , password)
  - hashing password using `bcrypt` library
  - check email is exist or not
  - create user in database if not
- create `data` directory , user.ts file
  - check if user already exist using Email
  - check if user already exist using ID

---

## Middleware & Login
**Note:** ***this Section is Server Side***

- create `routes.ts` file (to write API to help me inside middleware file)
- create `auth` to start use middleware
  - URL used [Auth.js](https://authjs.dev/guides/upgrade-to-v5?authentication-method=middleware)
- create `auth.config` to help `auth` file , inside file there details to understand
- create `middleware` file to manage routes and handle how Application will work
- create inside `app` , `(protected)/settings` Directory and `page` file (this file to create setting page , it will open after user signIn for now)

---

## Callbacks

- inside `auth` file we add Callback into NextAuth
  - async session
  - async JWT
  - async signIn (for later)
- create new file it's name is `next-auth.d.ts` this file to use Role with another way because simple way didn't work 
- inside `schema.prisma` added role with enum UserRole to add as Column inside DB

---

## SignIn and Register using Github and Google

- inside `auth.config` add Google and Github inside Providers
- inside `auth` add pages inside NextAuth
- inside `.env` added 
  - GITHUB_CLIENT_ID (i take this ID form Github -> settings -> Developers settings -> OAuth -> new OAuth App)
    - add Application Name
    - Homepage URL (in my case it is http://localhost:3000/)
    - Authorization callback URL (in my case i take it from http://localhost:3000/api/auth/providers )
      - then copy callbackUrl of github
    - after this we will get Client ID 
  - GITHUB_CLIENT_SECRET
    - after we do last step we can press on generate Secret
  - Google_CLIENT_ID ([FromThisLink](https://console.cloud.google.com/))
    - select a project
    - new project 
    - project name -> create -> API's and Services -> OAuth -> External
      - app name 
      - your email
      - logo (optional)
      - Developer contact info
    -  API's and Services -> Credentials
       -  replace data as we do with Github 
  - Google_CLIENT_SECRET
- inside `social` add onClick function to use it with
  - provider then use DEFAULT_LOGIN_REDIRECT form `routes` file
  - with Button of Google and Github with assigned google for Google , github for Github buttons
- Create error-card to Design error message
- Create error page to Display error message
- inside `Login-form` 
  - import useSearchParams
  - get error and use condition Logic to handle the Error
  - add error message i handled to FormError message
- inside `routes.ts` add error path to the authRoutes

---

## Send Email
Using [this link](https://resend.com/) i create the sender mail

- download resend `npm i resend`
- Create model inside `schema.prisma` it's name is VerificationToken
- Create `tokens.ts` inside `lib` Directory to generate Verification Token
- Create `mail.ts` inside `lib` Directory to handle email will send
- create `verification-token.ts` inside `data` Directory to take token and check if email already has a token
- inside `login-form` add `success` to `setSuccess`
- inside `auth` add signIn callback to check if email already exists or verified or not 
- inside `action/register` add send email verification also inside `action/login`
- add Resend api key inside `.env` file