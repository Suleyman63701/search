# zero-seo
A seo project being coded from the ground up in order to avoid thousand-package-based mental illnesses.

Description:

Here is a site that pings the pageSpeed API and returns a value
ensure you have node.js installed, and use npm to run
you may have to do npm install on the directory, but unsue
connect at localhost:3000

Explanation:

The first thing to understand are routes, which are /asdasfedf/ additions
after the url. The functions that manage the routes are found in index.js

you see the router.get('/' function) function.  when a user navigates to
localhost:3000 the site will "run" that function, which then uses res.render
res.render calls over to 'index'.hbs.  
index.hbs contains a sort of modified layout/html kinda thing which is used
by the program to generate the webpage.  

index.hbs has a forum which submits to the /tests/submit route, 
which goes back to the index.js file.  See the function there.
The /test/submit route then calls pageInsights which you can see required at the 
top of the page.  If you to to that file you will see the functions/callback system
that passes the value into the 'results' hbs view.

If you look at results.hbs, you will see the page that displays the info.
notice the {{ adsfasdf }} sections in the hbf file those sections.  These
are "empty temp variables" that are replaced by what is passed to them
by the render function, see the second-argument of the array.

This explanation will be revised, right now it's super simple. 
