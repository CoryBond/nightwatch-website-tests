# Nightwatch.js Website Tests (forked by Cory Bond)

I made this fork to quickly test something out. Basically I had a testing env in another project which had firefox v89 installed and I was getting `window.TestingLibraryDom is undefined` for the testing library I wanted to use. I wanted to see if this error only exists for the particular version of firefox I was using so I ran this library on firefox 94.0.1 in this repo... and unfortunately I continue to see the same errors. Seems related to https://github.com/testing-library/nightwatch-testing-library/issues/31 though that github issue was closed (might need reopening to fix this.)

Output of what you can expect can be found in ./Error_Output.PNG file in the root folder.