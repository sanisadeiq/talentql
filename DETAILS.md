# Starting the app

1. CD into the root of the app and run node index.js to run the app

# How Does it work

1. The application receives a dob timestamp as part of the /howold get request eg '/howold?dob=558975584'
2. The system will then receive the dob param as part of the request params and pass it to a function that calculates the age as at of the current time that the request is sent.
3. When an invalid timestamp is sent, the system
