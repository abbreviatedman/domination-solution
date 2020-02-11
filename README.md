# DOMination


### Part One - Side Effect Query Functions

These functions won't `return` anything, just make changes to the current DOM. They also won't take in any complex objects, just strings, and you'll need to query the dom to find what you need to change. Remember that variables with strings in them can be used _exactly the same_ as the strings themselves!

1. Write a function that takes in a string representing an id and a string representing a url. The function should set the image with that ID to have that url as its image source.
2. Now use that function to set the three images in the Image Area section to show three other images of your choice. You'll need three separate calls to your function!
3. Now write a function that puts a line through the text of the first `<li>` in the Arguments `<ul>`. (Look up "first child" if you don't know what query to use!). Since it always makes the same query, and changes it in the same way, this function requires no parameters!
4. Now use it! The first list item should get what's known as a "strikethrough" style.
5. Write a function that always removes the last `<li>` from the Arguments `<ul>`  (try looking up "last child" and "remove node").
6. Now use it to remove the last two items from that list. You'll need to call it twice!


### Part Two - Side Effect Node Element Functions

These functions will take in an HTML Element, complete with all the sub-variables and and sub-sub-variables that come with it. They then manipulate that element according to the specifications below. They still don't `return` anything, so don't worry about that yet!

1. Write a function that takes in a node element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element and pass it into your function. (Note that a <ul> doesn't HAVE to have an `<li>` as its only children! Though ideally it should...) You'll know you've succeeded when the image shows up under at the end of Arguments.
3. Write a function that takes in an image element and makes its height 30 pixels.
4. Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it ino that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
8. Try using it to change the size of some text! Up to you what.


### Part Three - Pure Functions Returning Node Elements

These functions will all take in parameters and use them to make and return node elements. They don't do _anything_ to the DOM. So to test them, we'll have to use our earlier side-effect-having functions.

1. Write function that takes in text and returns a new `<li>` with that text as its `innerText`.
2. Test it by placing the return value in a variable and passing it to your append function from Step 1 of Part 2.
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., '3' should give you an `<h3>`) with that text in it.
4. Test it by placing the return value in a variable and passing it to your append function from Step 1 of Part 2.
