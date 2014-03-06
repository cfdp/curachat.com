# curachat.com
Static product presentation website for Curachat a chat tool for counseling.

See the website live at [curachat.com](http://curachat.com).

### Where can I edit the text
Hidden away in ```source/text``` folder. The text files is in either Markdown or html format.

### How to run server or compile & deploy Curachat locally
*npm, node.js, grunt.js, bower & harp.js is required.*

1.  -  Fetch all required bower components ```bower install```

2.  -  Concatenate bower js files ```grunt```

3.  
    -  Run localhost server ```harp server source``` 
    -  Compile and Deploy
        -  Compile source to www  ```harp compile source www```
        -  Deploy www to curachat.com  ```. deploy.sh```