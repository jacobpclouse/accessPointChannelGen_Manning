# accessPointChannelGen_Manning
A simple script to assist in determining access point channels for Manning Hall (9 locations, 3 channels, 3 floors)

This program will assist in mapping AP channel settings on a building with 4 floors
It assumes:
- 4 floors
- 6 positions for APs per floor (2 width, 3 length)
- 3 possible non-overlapping channels 
- APs will be situated in the same spot on each floor 

There is a pattern here, add the one to the previous channel frequency (EXCEPT if it is 3, then add it again and go back to 1)
Elements 0, 1, 2 in each array will make up East side,
Elements 3, 4, 5 in each array will make up West side

IDEA: you can input how many floors there are. The basement and 4th floor should be the same, the 2nd and 5th, etc
    For larger patterns, you would have to use mathematics and couldn't use the starter arrays that I used
