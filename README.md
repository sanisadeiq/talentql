[![Codacy Badge](https://app.codacy.com/project/badge/Grade/90e1261bd7814c16a2f818e850856d6b)](https://www.codacy.com/gh/sanisadeiq/talentql/dashboard?utm_source=github.com&utm_medium=referral&utm_content=sanisadeiq/talentql&utm_campaign=Badge_Grade)

# Backend Assessment

Build and deploy a very simple API that does the following

1.  Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`

2.  Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller

See full details and instructions in this [Google Doc](https://docs.google.com/document/d/1ma5vKz0j34gwI9WYrZddMM1ENlQddGOVFJ5qdSq2QlQ)

# How Does it work

1. The application receives a dob timestamp as part of the /howold get request eg '/howold?dob=558975584'
2. The system will then receive the dob param as part of the request params and pass it to a function that calculates the age as at of the current time that the request is sent.
3. When an invalid timestamp is sent, the system
