
# Arcan work project (AWP3)

Project i was tasked with for the technical interview for arcan 
Stack: mongodb, spring boot, angular

# Installation

Run the docker compose
```sh
docker-compose up --build
```
if everthing went fine you should see this string in the logs:
```
spring-boot-app    | 2024-03-11T08:03:04.466Z  INFO 1 --- ['}-mongo1:27017] org.mongodb.driver.cluster               : Monitor thread successfully connected to server with description ServerDescription{address=mongo1:27017, type=STANDALONE, state=CONNECTED, ok=true, minWireVersion=0, maxWireVersion=21, maxDocumentSize=16777216, logicalSessionTimeoutMinutes=30, roundTripTimeNanos=32304667}
```

Once the containers are running import the necessary data using the shell script `import_data.sh`
```sh
sh import_data.sh
```

Now you can see the web app at: http://localhost:4200/

Use `purge_data.sh` to delete all the data from the database

# Pages
- Cochanges: it shows which pairs tend to change more often at the given day
- File relationship: Given a file and a date it returns how coupled is the given file to others file, only results grater than 0.0 are showed
- Pair cochanges: Given 2 files it displays how many changes have been made and how the co-change probability has changed over time

# Notes on Results/Charts

- **Rendering Charts**: Some charts may not render if provided with invalid inputs or if the data (`cumulative_cochanges` or `cumulative_cochanges_p`) equals 0. Ensure that the inputs match the expected format and data range.
- **Autocomplete Feature**: Text fields come with an autocomplete feature. For a richer data display, consider searching for POM files, such as `arcan-cli/pom.xml`, which tend to have more associated data.
- **Viewing Experience**: Charts are responsive and scale with the viewport. For optimal viewing, maximizing your browser window is recommended.
