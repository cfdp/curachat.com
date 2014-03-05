#!/bin/bash
scp -pr www/* curachat@rufra.pil.dk:docs;
echo "Success! Your project was deployed to curachat.com without a hitch.";