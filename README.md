## About The Project

This is a simple project to show my knowledge and adaptability to new technologies and frameworks.
This project is a simple CRUD-like that uses Node.js Apollo server along with GraphQL and MongoDB to serve as an API to fetch/insert/update/delete songs list. Front end is a React application that uses Apollo client that is being used to fetch and manage the remote data with GraphQL from our back end.

### BE Built With

- Apollo Server 
- GraphQL
- MongoDB

### FE Built With

- Apollo Client
- React
- React-redux
- GraphQL
- MUI

## Getting Started

### Prerequisites

1. Clone the repo
   ```sh
   git clone https://github.com/kristiyan-stefanov-bulgaria/Techpods-task.git
   ```
3. Install NPM packages inside BE folder
   ```sh
   cd BE
   npm install
   ```
3. Run BE server
   ```sh
   npm run start:dev
   ```
.env is preconfigured and provided in the repo with demo account.

4. Install NPM packaged in the root directory
```sh
cd ../
npm install
```

5. Run the app
```sh
npm run start
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Back End
    - [x] Get Apollo Server up and running
    - [x] Connect MongoDB as our DB
    - [x] Create GraphQL queries and mutations
        - [x] Add new song
        - [x] Update an existing song
        - [x] Delete a song
        - [x] Get all songs
        - [x] Get a single song by ID
        - [x] Get a filtered list by different and mixed criteria
- [ ] Front End
    - [x] Create a create-react-app up and running
    - [x] Integrate Apollo Client
    - [x] Integrate React redux and create store and reducers
    - [x] Implement the queries and mutations to do CRUD operations
    - [x] Fetch all songs and display them
    - [x] Implement edit functionality
    - [x] Implement sorting up and down functionality
    - [x] Implement delete functionality
    - [x] Implement Filter by artist / genre / tags (can be a mix of them)
    - [ ] Pagination
- [x] Design
 - [x] Implement mobile design
 - [x] Implement tablet design
 - [x] Implement desktop design
 
 
## Side notes
 This was a project that was certainly not as easy as I initially thought and I spent quite some time trying to implement stuff I'm not even sure would've been the correct approach in the first place. One such example is the Ordering and Filtering implementation. Currently it's done using Redux state containers, and constant refetching of both all songs and if there are any active filters - filtered ones. I tried avoiding that by using directly the internal cache of Apollo Client, so that we don't have to refetch the data, but after many hours and varying success I dropped that idea.
 
I don't know if my code is production ready, since I've never seen such production-ready project that I could compare to. I also used no boilerplates other than create-react-app so I could understand how different technologies are implemented.

A few improvements I would do is port the project to Next.js and Typescript.

There are certain parts of the code that NEEDS to be refactored for sure. I've made some cuts due to the deadline and partly because of exhaustion from learning all those new and exciting technologies.

I would appreciate some feedback on what I should improve on.

<p align="right">(<a href="#top">back to top</a>)</p>
