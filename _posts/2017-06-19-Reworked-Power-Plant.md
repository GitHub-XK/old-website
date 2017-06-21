---
layout: post
comments: true
title: Reworked Power Plant
date: 2017-06-19
tags:
url: 2017/06/19/Reworked-Power-Plant.html
identifier: 2017-06-19
---

Six weeks ago i posted about a new draft of the solar thermal power plant designed for Cernan's Promise. Oh how it has changed since then. The process of improving that model has been an important test case of how to elicit input on a design, and work through improving it, with online collaborators. Once again, it was done mostly by consultation in our [chat room](https://chat.stackexchange.com/rooms/37071/moonwards) on space.stackexchange. The conversation there goes on for pages and pages, supplemented by sketches and links. end-excerpt

<figure>
<img src="https://www.moonwards.com/img/NewTESS-Stirlings.jpg" alt="the Stirling engines, parabolic mirrors, heat storage tank, radiators, and plumbing of the solar thermal power plant for the Moon">
<figcaption>A typical solar thermal power plant for use on the Moon. With all the usual parts we know so well.</figcaption>
</figure>

We thought this through as well as we could with the tools we have available. MolbOrg was a big help during this phase. Sigvart framed several of the initial requirements of the plant when we started it a few months ago. Very roughly what you are looking at would turn sunlight into a megawatt of electricity that would be constant day and night. Constant power day and night, from a power plant that can be built almost entirely on-site using local materials (by this stage in the colony's development) is key technology. Nuclear reactors get the equatorial colony to this point. The initial base at the pole can simply use solar panels, and the presence of that base supports this development. That big complicated thing in the image above is something you have to be able to build if you want to actually live on the Moon in decent comfort. Fortunately, while it is quite large, it isn't very complicated. The first one will be a challenge to get working. After that, they are modular pieces, none of the parts are hard to fabricate, the materials needed are plentiful, and refining them is relatively straight-forward.

<figure>
<img src="https://www.moonwards.com/img/NewTESS-MirrorsCrater.jpg" alt="Parabolic mirrors focusing sunlight on a pipe of molten salt, then pumped to a heat store">
<figcaption>A parabolic mirror unit showing the pipe it rotates around and all the support structure.</figcaption>
</figure>

Above is one of the parabolic mirror units. The mirror is 40 meters wide across the curved part and 20 meters long. It can be made in sections that get assembled, of polished aluminum with a honeycomb backing for stiffness. If possible, a vapor-deposited layer of aluminum on a quartz substrate would be even better. This mirror has to focus all the sunlight that falls on it onto the very narrow iron pipe that runs along its focal point. That pipe is only 6 cm in diameter. (It is barely visible as a thin blue line running between the support towers, surrounded on its outward side by a half-tube radiant barrier of reflective foil layers.) A precisely shaped mirror that won't deform after a few day/night thermal cycles is important. Quartz barely changes size at all with changes in temperature, so it would be helpful<sup class="note tooltip" data-tooltip-content="#quartz-pipes">{?}</sup>.

The axis of the mirrors runs north-south and they turn 180&deg; from dawn to dusk. Thanks to the fact the Moon has only a very slight tilt toward the sun and this colony is on the equator, with only slight adjustment the mirror stays focused on the pipe year-round. Depending on how quickly the heat carrier fluid runs through the pipe, how big the heat storage tank is, and how quickly the generators are pumping heat back out, the temperature of that pipe at the focal point can be adjusted. For the moment it has been set as operating at 1156 K. That is the boiling point of sodium, which is being used as the heat carrier. When the sodium returns to the huge heat storage tank and dumps its heat there, it liquifies again.

A counterweight is used to place the center of mass of the whole rotating part along the focal point of the mirrors. This way, it is easy to turn the mirrors, and the pipes can remain stationary.

<figure>
<img src="https://www.moonwards.com/img/NewTESS-tankGuts.jpg" alt="All the pipes of the central lava tank and the outer stone mass, and pumps and radiator">
<figcaption>The pipe configuration needs to distribute heat in the best way for overnight functioning of the generators.</figcaption>
</figure>

This tangle of pipes is the taxing part of this scheme. The yellow ones are coming in from the mirrors (of which there are eight in this particular model). They are shown connecting to large pumps right now. We had also considered using liquid aluminum as a heat carrier, in which case there would be no phase change and it would have to be pumped at a rate of about 10 kg a second through each pipe. Hopefully now they can mostly be eliminated - but in case they can't they are still there. (These models are ongoing works in progress, continually improved, so situations like this crop up regularly.) Then all the fluid mixes in the light blue donut shape and exchanges heat with the gray pipes that loop down through each section of the red tank. The red pipes coming in from the bottom come from the hot end of the Stirling engines generating electricity from all of this. They carry nitrogen gas to the large set of orange pipes that spiral around the red tank. During the day, the gas flows first to the inner edge of those spirals, such that when it is coldest, it is flowing around the walls of the red tank. Then the gas spirals outwards, running around that tank several times before returning to the Stirling engines. When night falls, the flow is reversed (which will involve a bit of pumping) and the gas starts at the outer edge of the orange spirals and moves inwards towards the tank before returning. There are many levels of these orange spirals which all flow into the large red pipes, in this way the entire height of the red tank has pipes spaced 50 cm apart running around its walls, carrying the nitrogen working fluid.

Manufacturing and maintaining so many pipes isn't easy, but a couple of things help. First, the orange pipes run through solid cast stone, so really they are voids in the stone, not pipes per se. Casting that stone is a lot of work but also simple work that uses almost entirely focused sunlight to do the job, so that can go pretty fast. Second, all the other pipes can be iron (though it might be nice if the bits actually getting hit with the intense sun were quartz, maybe). Iron is by far the easiest metal to refine on the Moon. Also, with some digging around, remnants of meteors might be found in the central mountains of some craters, and if the asteroid was metal there might be pure iron deposits. And even better, asteroid mining is part of this whole plan anyhow, and a metal asteroid brought into orbit would have plenty of pure, elemental iron.

<figure>
<img src="https://www.moonwards.com/img/NewTESS-tankMass.jpg" alt="The stone mass and surrounding powder regolith that help store heat and insulate">
<figcaption>The dark grey is solid stone, except for the orange pipes from the last image. The light grey area is powder regolith insulation.</figcaption>
</figure>

Here are our nested tanks. The red one is filled with regolith selected for low calcium content and enriched as much as possible with sodium and potassium. That causes its melting point to lower. Basalt lava goes through a very complex crystallization process when it freezes, the end result being that it slowly thickens as it cools, crystallizing and recrystallizing in stages until it is finally solid. By concentrating as much of the freezing process as possible in the low end of the temperature range in which it freezes, the heat released by the freezing process can be used to help the generators continue to produce just as much power through the long cold night as they do during the day.

The dark grey one is the stone with the spirals in it. The spirals are there so that the stone is a supplemental heat store that regulates how heat drains from the system to optimize heat flow. By spiralling outwards during the day, heat is shifted from the red tank to the stone before continuing on to the Stirling engines. (The stone is made of minerals with high melting points that are easily purified out of the regolith, and could be mostly acquired from the slag of other processes. It can easily take the heat.) By spiralling inwards during the night, the heat of the stone is taken first from its outer perimeter. Only once the outer perimeter has cooled is the heat taken more from regions closer to the red tank. Balance the geometry and mass correctly, and the desired temperature can be maintained through the night.

The light grey material is loose powder regolith. By filling an outer tank with that in a nice thick layer, the amount of heat that reaches the very outer skin of the whole thing is minimized.  

<figure>
<img src="https://www.moonwards.com/img/NewTESS-Rad.jpg" alt="the large radiator units that dissipate heat from the cold end of the generators. The black radiator panels rotate to remain parallel to the sun's rays all day, and the boat shape they are inside protects them from heat from the ground while reflecting their radiated heat skywards.">
<figcaption>The radiator units rotate so that the sun doesn't fall on the panels. The insulation underneath them protects them from the heat from the ground.</figcaption>
</figure>

This image shows the radiator units that cool the cold end of the Stirling engines. (I'm not going to really talk about the Stirling engines much. Large Stirling engines like this can be pretty efficient, and the parts are relatively simple shapes much easier to fabricate on the Moon than, for instance, turbine blades. That's why they were chosen. If you'd like to know more about them googling them brings up tons of stuff.) The radiators are the black and brown panels in the middle of the grey boat shapes. They turn through the day to keep the radiating surfaces parallel to the rays of the sun, so that almost no sun touches their surfaces. The boat-like things are made of foil layers that stop the heat reflecting off the ground from touching the radiators either, while reflecting the heat coming off them into the sky. The pipes that go from the cold end of each generator, to a heat exchanger tank, and then to each radiator unit, are visible mostly at the bottom. Each radiator also has a heat exchanger underneath. The radiators work by using heat pipes. When i make up the SketchFab version of this i'll talk a bit more about that.

These things are all pretty large. The red tank is 14 m across, the stone around it is 24 m across. The radiator panels are 21 m wide and the boats 44 m long. A number of small details have also been modeled but are too small to see. The radiator panels have a corrugated surface and many individual heat pipes weave through them. All the pipes have been sized and run where they need to go, as their overall length is a relevant number.

<figure>
<img src="https://www.moonwards.com/img/NewTESS-Above.jpg" alt="All the reflective surfaces on things, from the parabolic mirrors, to the cowl over the top of the pipes though the mirrors, to the outer skin of the heat storage tank, to the radiant barrier under the radiators">
<figcaption>Plenty to reflect upon</figcaption>
</figure>

Another thing there is a lot of, is reflective surfaces. The mirrors reflect with aluminum, for everything else, silver is used. Only just enough to reflect well is needed, and actually on some surfaces there is no reason it needs to be glossy - not on the tank or the stuff around the pipes, or on the outside of the radiant barrier boats. (I'll fix that, for now the use of the traditional coppery tone of radiant barrier foil on satellites and such is at least pretty.)

So, a large fraction of this construction is pipes, and reflective surfaces. Really simple stuff. All the structural components are pretty simple too. The minerals that go into the lava tank and the stone around it need to be processed, but not very much. Many parts of the Stirling engines, the pumps, and the radiator panels could be 3d printed by sintering metal powders, or cast. Casting or blowing of glass for other things would also be useful, especially if the glass was made of fused quartz.

If we are right about what you see here, there are ways to make big things on the Moon using local materials and simple processes. After the solar panels and the nuclear reactors of the early days, this is the sort of thing that has to happen if we are going to live on the Moon. This is the kind of scale and methodology we need to think through.

We can't discuss our long-range future without mapping out things like this. Without it, there is no way to get across the sheer scale and scope of endeavors that will happen in just a few decades, one way or another. If the public doesn't appreciate how vast the changes afoot are, we will go into this blind. We have the tools now to work together, and move forward with our eyes open. For the first time in history we have what it takes to collaborate in huge numbers across the whole world. What you are looking at is an attempt to spark that. The opportunity is huge. The future will be forged by whoever executes plans with this kind of vision. The greater the number of people involved in that, the better for all of us.

<div class="tooltip_templates">
<p id="quartz-pipes">Sapphire is even better in this regard, and is tougher than quartz in other respects as well. The mineral it is made from, alumina, is also plentiful on the Moon. It would take more energy to isolate, and crystal growth is more complex. When we talk about Lalande City, we will contemplate these things.</p>
</div>
