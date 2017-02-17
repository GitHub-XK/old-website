---
layout: post
title: Health Tips on the Moon - Part 3
date: '2016-08-17T18:42:00.001-07:00'
author: kim holder
tags:
modified_time: '2016-09-27T07:28:31.994-07:00'
thumbnail: https://3.bp.blogspot.com/-gcGTy98WgQY/V7UCIgHxVKI/AAAAAAAAWPg/sJJCNJE_JN8-y-Si1OSPJ7UUSHQJddaZwCK4B/s72-c/solid-W-window-wall.jpg
blogger_id: tag:blogger.com,1999:blog-2741304674651227490.post-2632294516377304025
blogger_orig_url: http://moonwards1.blogspot.com/2016/08/health-tips-on-moon-part-3.html
---

It is time to speak of radiation on the Moon. First i am going to explain it a bit, and point out things a lot of people don't know. One, we can only make decent guesses how much radiation there is on the Moon. Two, we don't know what it will do to people. Three, a bit of shielding makes it much worse, not better.

One - We have no direct measurements of radiation levels on the Moon's surface, and modeling that environment with software is extraordinarily complex. <a href="http://www.sciencedirect.com/science/article/pii/S0032063312002085">This paper</a> based on modeling found galactic cosmic radiation (GCR) fluctuates between 0.38 Sv/yr at solar minimum and 0.11 Sv/yr during solar maximum. (The solar wind scatters GCR particles that enter the solar system, and when it is stronger less penetrate to the inner solar system.) The <a href="http://www.universetoday.com/107093/how-much-radiation-would-you-get-during-a-mars-mission/#">Curiosity rover measured </a>0.66 Sv/yr in deep space on its way to Mars, 0.23 Sv/yr on the Martian surface in 2013, when solar activity was about half way between its minimum and maximum. The Moon is different than Mars because it has no atmosphere, but taking all those figures, using an average of 0.25 Sv/yr overall is probably within, say, 50% of the truth.

Two - Again using a lot of modeling and statistics, the estimate is that 0.5 Sv/yr increases an astronaut's <a href="https://en.wikipedia.org/wiki/Spaceflight_radiation_carcinogenesis">chances of cancer</a> by about 3% to 5%. In order to not increase those chances beyond that amount, radiation dose for a whole career is not to exceed 1 to 4 Sv, depending largely on the age and gender of the astronaut. There isn't enough data to consider other possible health risks due to radiation exposure, and even the figures used are a guesstimate. Actual effects could be much less or much more, they could vary a lot from person to person, and other factors like diet and exercise could change these probabilities greatly.

Three - Alright, so if there was no shielding, the estimates we have say that radiation levels would be acceptable for 4 to as much as 16 years. The trouble is, as soon as you put material between a person and the sky, the radiation gets worse - a lot worse - before it starts getting better when the shielding is thick enough. This is because of shrapnel. Cosmic rays are particles, mostly protons, but also the nuclei of a variety of atoms, moving at large fractions of the speed of light. What happens when these particles pass through matter is very complicated. Basically, they pass right through matter until they happen to hit an atomic nucleus. When they do, they smash that nucleus to pieces. The bits smashed apart have enough energy to smash another nucleus once they happen to hit one, and that can happen again, and again, until the energy is dispersed enough that the cascade stops. Because matter is almost entirely empty space, it is sheerly a matter of chance how far through a material these collisions happen. But if the material shielding you isn't thick enough for these cascades to have stopped before they reach you, the shrapnel multiplies the radiation damage you are getting. A recent graph in <a href="https://www.youtube.com/watch?v=DI41N-eC7VA&amp;feature=youtu.be&amp;t=2393">this video</a> shows the radiation dose peaking at 8 times what it is without shielding, and that peak happens when you have about a meter of loose regolith between you and the sky. The dose doesn't drop below what an unshielded person would get until 4 m of regolith is in the way.

Okay... that was a big preamble, but in order to think clearly about this stuff, you have to know these things. The habitats designed for Cernan's Promise have projected radiation levels well below even 0.05 Sv/yr, which is the <a href="http://www.nrc.gov/about-nrc/radiation/health-effects/info.html">maximum dose for radiation workers</a>. If you were to spend a lot of your time in certain spots that get higher exposure, you would exceed that dose, but you'd have to do that for hours a day. So, a conservative approach has been taken. And yet people will be able to look up and see the sky directly, and in the dugout, enough sunlight will enter directly to have a leafy garden.

<figure><img  src="https://www.moonwards.com/img/dugout-mark-2.jpg" /></figure>

I cheated a little by indicating where the sky is in this model by making it sky blue, which is clearly wrong. It would be black and starry, but on many days, you would be able to see the Earth through those gaps, which, if you ask me, makes up for that completely. And there would really be that sense of soft sunlight. What this is, is a series of tall narrow arches, with glass in between. As this colony is on the equator, because the Moon isn't tilted like the Earth is, sunlight would come in all day, every day. It would be a bit indirect because there is a slight angle, but the arches are faced with aluminum foil on their vertical faces so still lots comes in. (Hopefully that aluminum would be mirror smooth, to give a funky infinite mirror reflection effect when you look up into the gap between the arches.) Those are planters behind the figures, and they would be full up with all different plants. (LEDs get them through the night, but that is a different post.)

Sigvart wrote a small <a href="https://github.com/briligg/moonwards/blob/gh-pages/js/dugout.js">program to estimate the radiation dose in this space</a>. It generates random rays coming in, tracks the thickness of material each ray passes through, and compares that to the curve shown in the video linked above for radiation levels through different thicknesses of material. That shows that there at the bottom where the figures are the dose is about 0.015 Sv/yr, if you spent all your time there. A third of what radiation workers are permitted on Earth. So, even with variations due to different geometry in different spots, this garden space is super safe. We could space the beams more widely to get more light and save on material - but the heat that comes with it takes some management, so i have left it like this for now.

Below is the window at the west end of the hall connected to the dugout.

<figure><img  src="https://www.moonwards.com/img/dugout-mark-2b.jpg" /></figure>

In this case, the grey bar you can see outside reflects in the sky above. The area that directly shows the sky is small, mostly what is visible is Lalande Crater. Again this setup is very conservative. Even the green figure would see little enough of the sky even if the bar wasn't there that it would be pretty safe to stand there for hours every day looking out. But, that bar reflects in the Earth, which i have created views of wherever possible. It has mirrors on it angled so it does so, always, but they haven't been created in the model yet. And also, there is a narrow case where even that amount of sky would be dangerous if that bar wasn't there.

When solar particle events occur, ionizing radiation skyrockets for up to a few days. A few hours in that kind of radiation could kill a person. In this structure, if you aren't in the dugout, you are safe. If it should be the unlucky case that the sun was just about to set when it decided to flare on you, it would shine through that window and anything those rays struck would get a serious dose of radiation. But, if that should happen in this design, that bar would be in the way.<

Stuff in the dugout would get a dose if the sun is high when this happens, during most of the year. But there is no need to be in the dugout. The crew would be alerted of the imminent arrival of the ionizing particles by the surge in x-rays that precedes it. The arches and the glass between would stop virtually all the x-rays and a lot of the gamma rays that happen in bursts before such events. They would have a few hours to get the plants into the hall and anything else that might be damaged by the solar storm, then they would hunker down there until it passes.

So, we're good here. And we can see outside, for real. I'm telling you, this would be a nice place to live.