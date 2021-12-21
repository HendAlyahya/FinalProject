# FinalProject (Personall Shoper)

## Description
A site that provides you with personal shoppers to provide you with the latest fashion.

*DATABASE*** has been developed as a part of the final project in [mongooseDB](' 'mongodb+srv://HendFawaz:fawaz9080-@cluster0.8fojf.mongodb.net/Project?retryWrites=true&w=majority'')

## User Stories
**Signup:** As a user I can sign up Register and view my profile and the products I have
- **Login:** As a user I can login to the personalShoper and can i see profile shopers and order 
- **Logout:** As a user I can logout from the personalShoper so no one else can use it
 **Edit User** As a user I can edit my profile and add products or delete

 ## Backlog

- Add profile

 Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions        | Behavior                                                     |
| ---------------- | -------------------- | ------------------ | ------------------------------------------------------------ |
| `/`              | HomePage             | public `<Route>`   |  HomePage   

| `/signup`        | SignupPage           | public `<Route>`   | Signup form, link to login, navigate to homepage after signup|

| `/login`         | LoginPage            | public `<Route>`   | Login form, navigate to homepage after login                 |

| `/Shoper/:Id`      | Shoper             | public `<Route>`   | Add, Delete and Edit a City                                  |


| `/PlaceDetails/:countryId/:cityId/:placeId` | PlaceDetailsPage | public`<Route>` | Details of a Places                      |

