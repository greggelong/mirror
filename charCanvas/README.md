# ham
## hanzi art maker

This is a test for a mirror activity at an art school. 

I have reduced it to 20 pix across and 32 down to get a the pattern for a 

I tried to change the way it writes to the screen but I forgot it got the 

image as video was captured not an image

Here I have an online version in javaScript using p5.js DOM

and pixel array. 

I if the mouse is clicked (or screen touched on mobile)

the video capture from the camera is drawn to the canvas

in gray scale. (The video feed is sized at 50 by 50 pxls)

Then I use the pixel array function to loop through each of the pixels

and get a gray value from 0, 255.

I then map that value to an array of Chinese characters from famous 

Chinese idioms that most students of chinese recognize.

 ['善', '随', '俗', '若', '水', '乡', '上', '入', '。', '。']

low gray values are darker so they are mapped to characters with more strokes

hight gray values are lighter so they are mapped to character with less strokes.

This is more or less the same idea used in ascii art.

live at:

https://greggelong.github.io/ham/

You must allow the use of the camera.

Then click the screen to take a picture.

Two small guide images are below the text area.

the current shot appears in the text area,

and all shots are appended at the bottom of the page.

they are text not jpg. so you can just copy and paste text. maybe 

(insert into an email for some old school fun!)

the hanzi art image it creates is 50 by 50 characters. 

on some mobile devices the small screen will wrap the lines and destroy the illusion.

the current shot is in the text area, will smaller font to help with mobile display

## further development of an idea
## thousand charater text

- [ ] create a 32 by 32 image that has 1024 total characters
- [ ] make a 2 dimensional list of  characters from the 千字文 Thousand Character essay
- [ ] create the image using many more characters of equivalent stroke count making a more meaningful image
- [ ] then use those images as a guide to create real ink and paper calligraphy




