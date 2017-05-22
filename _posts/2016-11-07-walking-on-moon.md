---
layout: post
comments: true
title: Walking on the Moon
date: 2016-11-07
author: kim holder
tags:
modified_time: '2016-12-20T13:17:19.147-08:00'
thumbnail: https://1.bp.blogspot.com/-G2fDv3xrMO0/WBkDyt8DxKI/AAAAAAAAWUE/EUe0ot6c2X4LJ2P8r_KPChDxQjTazkzXwCK4B/s72-c/LalandeLOLA.jpg
blogger_id: tag:blogger.com,1999:blog-2741304674651227490.post-2178644973514489727
blogger_orig_url: http://moonwards1.blogspot.com/2016/11/walking-on-moon.html
url: 2016/11/07/walking-on-moon.html
identifier: 2016-11-07
---

I have spent a lot of time in and around Lalande Crater on the various maps of the Moon. I have my favorite spots. I've developed an inordinate fondness for it as clearly one of the handsomest craters. I have burning questions about what is really there. So, when i decided it was time to make a 3d model of it using LRO imagery and topographical data, it isn't surprising this activity stretched to over a month.

I highly recommend the modelling of craters as a pleasant pass time. If you enjoy maps and scale models, you will find it rewarding. end-excerpt We have a whole Moon covered with craters for which such models do not exist, so you can also enjoy the fact the result is a first and might be useful to someone. Really. There are very few such things in existence, and what there is isn't very detailed. [NASA](https://nasa3d.arc.nasa.gov/search/lunar) (of course) has the best collection, but the size of the smallest details in their models is still on the order of 100 meters (300 feet). Also, all the listed models at the link have been stretched vertically for dramatic contrast, which makes me shudder. Cosmetic fixes like that aren't necessary if you lovingly detail a smaller feature by using photos for reference, instead of modelling areas a hundred kilometers across using only topographical data. LRO photos have resolutions as small as 50 cm per pixel (20 inches). With them you can show off the Moon's actual rugged terrain, as it really is. But, it takes time.


The LOLA laser altimeter on the Lunar Reconnaissance Orbiter is an exquisitely accurate instrument - attached to a probe moving at orbital speed that has no way to precisely calculate its position. Thus, the fact is LOLA topographical data is very coarse and full of artifacts. Step one is correcting those.

<figure><img href="https://www.moonwards.com/img/LalandeLOLA.jpg"></figure>

No, there aren't actually any ruler-straight lines cutting through this crater, or any pancake-flat mesas on its rim. In fact the LOLA data was only good for establishing some base-line reference points at key spots where one could be confident the data was accurate. It is mostly useful for large scale stuff. I was grateful a friend had passed it along to me though. I undid the imaginary mountains and gullies by hand until a very rough but basically accurate shape was created.

Step two is to download some of the [wealth of LRO close-ups](http://wms.lroc.asu.edu/lroc/) of the lunar surface and stitch together an image you will lay over the 3d model. This step can take a long time if you are fussy. The LRO has taken images of Lalande from different orbits over time, and the changes in altitude changed the perspective in the shots. There is more foreshortening in the shots taken from closer, which leads to a difference in apparent location of objects of a couple of hundred meters in many places. In movies, 'vertigo shots' use this by moving a camera on a dolly towards the subject while zooming out at the same rate. Here is an example i especially like:

<iframe allowfullscreen=""  data-thumbnail-src="https://i.ytimg.com/vi/MWRncNMEhLw/0.jpg" frameborder="0" height="266" src="https://www.youtube.com/embed/MWRncNMEhLw?feature=player_embedded" width="320"></iframe>

Once i appreciated this, there ensued many days of painstaking warping of the shots taken from closer to mold them to the perspective in the shots taken from farther away. The seams between sections are not perfect, but they are as good as i could make them in a time frame that made any kind of sense at all. The Blender 3d program can be used exquisitely to perform this task, once one figures out how, which in my case took quite a while. If i were to give a tutorial to others on how to do it, i could convey a polished version of the process, the one i developed over many days of frustration, and then those others could quietly enjoy repeating the process on other craters while perhaps listening to an audio-book or chatting. I, instead, struggled most of the time to understand why things weren't working and trying to sort a bunch of different versions each with many layers. Now, after it's all done, i've gone back and admired the nearly perfect alignment of images on the [Quickmap LRO collage](http://bit.ly/2ftCyZs) of Lalande Crater. They must have a program that takes all the LRO data associated with each image file and uses that to correct their proportions and project them onto a virtual globe. Lucky sods. There are still misalignments - my manual alignment is about as good. It took me three weeks, but if i did it again i could do a better job in maybe 3 or 4 days. If you, dear reader, undertook to build your own crater model, you might prefer to simply set up Quickmap with the image layer of the desired crater that has the least shadows, and take grid of a couple hundred screenshots of the result in the top resolution, and then patch those together. It would be about the same amount of work but at least it requires a lot less concentration, so you could enjoy a nice podcast while you work, or some such. Oh, by the way - don't attempt this unless you have a computer built for heavy graphics work. It took mine 15 minutes on many occasions to complete a command, and it is built for this kind of thing.

Step 3 is to take the final image and use it to refine the rough LOLA model. This is where you will really appreciate having your highly detailed and accurate image to work from. You can paste it onto the surface of the rough 3d model and line it up in good registration with it, then sculpt straight up and down where the image indicates rises and slopes. A supplementary reference from the side is really useful here. The [Apollo photographs](http://www.lpi.usra.edu/resources/apollo/) from orbit are pure gold at this stage. This one a friend found for me is one of my all-time favorite pictures:

<figure><img src="https://www.moonwards.com/img/Apollo16-fromSouth-allLalande.jpg"></figure>

For now i have recreated only the main contours of Lalande. I look forward to quietly adding detail when i have time, or when i feel a need to ruminate for a while. All sorts of things are happening within it. Why do a series of domes well up across the crater floor? What about these things that look like burst bubbles as large as one of those domes - is that an indication the domes could be hollow? (Edit Dec 6: Paul Spudis thinks that is highly unlikely, and that the blister shapes found on the floors of young craters are probably caused by large chunks of ejecta protruding from the surface of the melt.) This thing looks like an old lava vent - could that be what it is? That long sinuous crease in the floor, leading away from a large secondary crater - why did that form? Could there be a lava tube underneath the surface there? There are large areas of scree on the steep upper crater slopes - will there be lots of clean chunks of bedrock in those fields? Why is the northern spur of the central mountain so covered in boulders, and in particular on its western slopes? Walking around in the 3d model stimulates speculation...

<figure><img  src="https://www.moonwards.com/img/LalandeMontage.jpg"></figure>

So now i need to update the 3d model on the website, which right now is an old, less accurate model. The crater walls are very steep near the rim, it took me a while to get that right, and still it is only done for the patch below the site of the colony. And then i can move on to putting in sketches of all the infrastructure planned for further out, to have a general overview of the project. Which should be much more fun. I did a short fly-through video of part of that model, there will be better ones later when i get the hang of it more.

<iframe data-thumbnail-src="https://i.ytimg.com/vi/VgkwPsfmAig/0.jpg" frameborder="0" height="266" src="https://www.youtube.com/embed/VgkwPsfmAig?feature=player_embedded" width="320"></iframe>

I have promised myself i will spend no more than 2 weeks completing the rough draft that will go on this 3d map i've spent a month building. I am very prone to fiddling and fussing. It is time to start spitting things out so a broader dialogue can be started about how things should be and what we should work on. But it is nice to know i can put in my little stick-figure buildings and installations on a beautiful and accurate model of Lalande crater. It just makes me feel better about the whole thing. :)

P.S. The final image i created was 40,000 pixels square. Here is a tiny version of it:

<figure><img src="https://www.moonwards.com/img/LalandeMasterImage-800.jpg"></figure>

(Edited Nov 8 to properly give kudos to Quickmap.)
