# Login ans signup using html , tailwind CSS , and LocalStorage in js 

this project contains the login and signup part in a single page which is implimented by using HTML, Tailwind CSS , Javascript. User credentials are stored in the brower's local storage, and the login form checks if the user exists before allowing them access to the products(index.html) page.
If user is loggined in so they are autometically redicrected to the products page without needing to login again.


##Features
1. **Signup page** - Allow users to register with a unique email and password. If the email is
already registered, prompt the user to login instead.

2. **login page** - Authenticate users using their registered email and password

3. **User data in Local Storage** - user data name, email, password is stored securely in tha local Storage.

4. **Redirecting to Products Page** - aftre login successfully user redirect to products page (index.html)

5. **Cart page show all the cartItems** - whne user click on add to cart they products will store in local storage and then by local storage user can access the cart item in cart page. 



##File overview
### 1. `login.html`
This file contains the structure for both the login and signup forms, styled using Tailwind CSS. It includes:
- **Signup Form**: Hidden initially, the form shows up when a user clicks "Sign Up".
- **Login Form**: This form is visible by default and allows users to log in if they already have an account.

### 2. `login.js`
This JavaScript file contains the logic for handling user signup, login, and localStorage operations. It includes:
- **Signup Function**: Adds a new user to `localStorage` and checks if the email is unique.
- **Login Function**: Checks if the entered credentials match any stored user in `localStorage`. If successful, the user is redirected to the products page.
- **Redirection Logic**: If a user is already logged in, they are automatically redirected to the products page.

### 3. `index.html`
This is the page the user is redirected to after logging in. You can create this page with your product-related content.

### 4. `script.js`
here i added all funtionality related to products like sorting, filtering, displaying products with review of customers, add to cart, rating, cart items display etc

### 5, `cart.html`
showing all the cart item from local storage.

### 6. `cart.js`
here i displayed the cart item by taking cart from local storage.



## How It Works

1. **Signup Flow**:
    - The user clicks on the "Sign Up" link.
    - The signup form appears, and the user enters their email and password.
    - Upon submission, the script checks if the email is already used.
    - If the email is unique, the user is added to the `localStorage`, and they are prompted to log in.

2. **Login Flow**:
    - The user enters their email and password in the login form.
    - If the credentials are correct, the user is redirected to the products page.
    - If the user is already logged in (data exists in `localStorage`), they are automatically redirected to the products page when they visit the login page.

3. **LocalStorage**:
    - User data (email and password) is stored in the browser's `localStorage`.
    - This data persists even after refreshing the page or closing the browser, making it easy for the user to stay logged in until they clear their localStorage manually.


#   e v a a a a a  
 