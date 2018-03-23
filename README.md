# Medical History

To build and start project you need MongoDB on localhost with a default port or you can use
`docker-compose` to start container with MongoDB server

```bash
docker-compose up
```

Then install dependencies, build and start project server run

```bash
npm i
npm start
```

After that the user interface will be accessible by following url http://localhost:3000

To get the info about specific record use the following url http://localhost:3000/api/v1/record?ssn=811228-9874

## TODO

- [ ] Ensure MongoDB indexes
- [ ] Unit-tests 
