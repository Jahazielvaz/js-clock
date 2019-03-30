DESCRIPTION: This is just a simple customized clock that gives you the time.

REQUIREMENTS:
1- Round traditional clock shape
2- 3 hands that each move according to the assigned metric. One moves every


THINGS I'VE LEARNED
- the variable.style.attribute = "value" doesn't work if the element you're targeting is being called via getElementsByClassName. I think this might because, even if you're calling only one of them, it sees them as plural, and I guess it doesn't like plural? I'm still trying to figure this one out.


CURRENT PROBLEMS I'M TRYING TO DEAL WITH
- The amount of css code I need to be done in js is substantial, and I don't fully know how to set multiple attributes using the js inline way of changing the css.

- Solution number 2 which is to swap out the css class all together, poses a different problem. The problem is I also need to dynamically change the level of degrees the rotation increases by 6deg every second. The problem here is that as far as I know, I can't set it dynamically from css itself, I need to change it from within the js, and the only way that I know you can change it within js, is using the inline style.
