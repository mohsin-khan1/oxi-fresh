**Oxi-Fresh Test**

**Library used in testing app:**

1. Used bootstrap for Styling.
1. Used Jwt for token generate.

**Fonts used in testing app:**

1. **Noto sans:** used for headings.
1. **Poppins:** used for body.

**How user can use this app:**

Step one: User must be registered.

Step two: User have to login first then he can access the app.

Step three: Database must be created in mysql, as named by “oxi-fresh”.

Step four: Use migration command to create tables in database “php artisan migrate”.

Step five: To add dummy data in database user have to run “php artisan db:seed”.

**Description:**

1. In this app, we have a token-based authentication system. 
1. If the token has been expired then the user will redirect towards the login page.
1. In subscribing tab user can select single or multiple company emails such as newsletter, products, updates, etc by simple check/uncheck.
1. Once the user selects the emails and clicks on subscribe button it will generate and send the confirmation email to the user.
1. The user received the link of the subscription tab in the email, where the user can unsubscribe the unwanted email if the user wants.



