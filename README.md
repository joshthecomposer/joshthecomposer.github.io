# Custom Exercise Timer!
This was a personal project, I needed an exercise timer for jump-rope interval training. Why not make one?

### Objectives:
* Allow user to input the exercise interval in seconds, the rest interval in seconds, and the number of sets.
* Implement an audio beep that plays on the last 3 seconds of a given countdown.
* Try to use vanilla JavaScript just for the extra practice in the syntax.
* Make sure the timer can pause, and resume flawlessly.
* Don't allow the user to input a nonzero or negative number into the exercise field.
* If user puts nothing (equal to `NaN`) or anything less than 0 in the sets field, the app will default to 1 set of exercise.
* App resets after completion (Currently just by auto-reloading the page. I may revisit this later).

### Challenges I Overcame:
One particularly challenging thing for me was the issue of allowing the user to pause and resume while keeping track of where the timer currently is. I also had to simultaneously keep track of what the initial state should be after every interval. I learned a lot about scope through this process, and I have a much more solid understanding of how to approach scope and function calls. I will take the skills I honed and refactor the code to have the variables declared within their functions, so that I can make more general variable names and make the code easier to read.

Another challenge was learning how to animate with JavaScript, but I feel like I have a decent grasp of it now.

### Please let me know of any suggestions, I am always here to learn!