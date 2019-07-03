#Installation
npm i react-chartjs-2

#Front End
Import whichever type of chart you want to use from the above installed package.
I'd recommend using state to handle holding info on each chart. 

You must have the specific properties on the data object (i.e. datasets,labels). 
Right now I have the data hard-coded into but you can update state. Something to keep in mind of when you setState with the a nested array within an object within an array it doesn't take in the actual values for the deeper stuff. So you will need to make a copy of each individual piece of that nested variable and then push those values onto it. 