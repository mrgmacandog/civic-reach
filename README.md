# Civic Reach

https://civic-reach.herokuapp.com

Civic Reach is a web application that serves as a platform for nonprofit and government organizations to post events, volunteer opportunities, and donation needs. This then allows concerned members of the community to easily find out how they can help their own communities all in one place.

---

## Setup - Local Use
1. Install all package dependencies using `npm install`.
2. Set up the database with `/models/schema.sql`.
3. Modify `/config/config.json` to include your MySQL username and password.
4. Get an API key from [OpenCage Data](https://opencagedata.com/api).
5. Create a `.env` file that includes your OpenCage Geocoding API key without any quotes. It should look like the following:
    ```
    # OpenCage Geocoding API key

    OCD_API_KEY=your-api-key
    ```
6. Run server with `npm start`

---

## Implementation 

### Node
- Running JavaScript on the backend
- Ability to use code from other packages

### Express
- Framework for setting up a server
- Routing
- Initiate listening of server
- Decode POST method body

### HTML Routes

| HTTP Method | Route | Return Type | Purpose |
| ----------- | ----- | ----------- | ------- |
| GET | / | HTML page | Direct to home page of the app with all events and needs |
| GET | /zip/:zip | HTML page | Direct to page with events and needs in a certain zip code  |
| GET | /login | HTML page | Direct to login page |
| GET | /registration | HTML page | Direct to registration page |
| GET | /dashboard/org/:id | HTML page | Direct to the dashboard of a certain organization |
| GET | /postevent | HTML page | Direct to post event page |
| GET | /postneed | HTML page | Direct to post need page |
| GET | * | HTML page | Direct to 404 page |
| GET | /get-zip/:coords | HTML Page | Redirect to /zip/:zip based on current location coordinates |

### API Routes

| HTTP Method | Route | Return Type | Purpose |
| ----------- | ----- | ----------- | ------- |
| GET | /api/orgs | JSON | Get all organizations |
| POST | /api/orgs | JSON | Add a new organization |
| PUT | /api/orgs/:id | JSON | Modify a specific organization |
| DELETE | /api/orgs/:id | JSON | Delete a specific organization |
| GET | /api/orgs/:orgId/events | JSON | Get all events from a specific organization |
| POST | /api/events | JSON | Add a new event |
| PUT | /api/events/:id | JSON | Modify a specific event |
| DELETE | /api/events/:id | JSON | Delete a specific event |
| GET | /api/orgs/:orgId/needs | JSON | Get all needs from a specific organization |
| POST | /api/needs | JSON | Add a new need |
| PUT | /api/needs/:id | JSON | Modify a specific need |
| DELETE | /api/needs/:id | JSON | Delete a specific need |

### MySQL
- Database with three tables
    - Organizations
    - Events
    - Needs

### Sequelize
- ORM for MySQL database

### OpenCage Data
- Reverse geocoder
- Get zip code from coordinates

### Handlebars
- HTML templating

### Bootstrap
- Layout
- Form
- Custom CSS

### jQuery
- Access DOM elements
- Use `.ajax` method to call API

### Heroku
- Deployment

### Travis CI
- Continuos integration with testing

### ESLint
- Code linter

---

## Package Dependencies
| Package | Purpose |
| ------- | ------- |
| [dotenv](https://www.npmjs.com/package/dotenv) | Loads environment variables from a .env file into process.env |
| [express](https://www.npmjs.com/package/express) | Node.js framework for creating a server |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars) | Handlebars view engine for Express |
| [jquery-validation](https://www.npmjs.com/package/jquery-validation) | Provides validation for forms |
| [mysql2](https://www.npmjs.com/package/mysql2) | MySQL client required by sequelize  |
| [opencage-api-client](https://www.npmjs.com/package/opencage-api-client) | OpenCage Data API client |
| [sequelize](https://www.npmjs.com/package/sequelize) | ORM for database |

---

## Future Features:
- Real authentication system for organizations
- Ability to update organization’s info, events, and needs
- Filter events and needs by type
- Display a map of organizations and events
- Include information about the stance local governments hold on issues people are concerned about
