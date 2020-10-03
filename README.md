# nosql

for this assignment we had to use mongoDB and connect it to heroku as well as use node and express to create a fitness app tracker.

For this app i used express in my routes folder in api.js to create the routes for when the user selects a workout type or input a workout as well as is search for a previous one.

In workout.js in my models folder i set up a schema to track the data of someones workout. They can enter the name, type, duration, weight, reps & sets or distance dependong on what they had done.

I originally tried to connect my mongodb atalas within my serve.js file and i did not realize it was also in seeds.js. I added it there as well but im unsure whether i should change my server.js back to how it was prior.

I also had issued hosting it with heroku but was told that was due to how my directory was set up so I attempted to fix that too.
