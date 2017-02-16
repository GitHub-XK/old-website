---
layout: post
title: 'Energy storage as heat '
date: '2016-07-22T14:41:00.001-07:00'
author: kim holder
tags:
modified_time: '2016-07-22T15:06:19.184-07:00'
thumbnail: https://4.bp.blogspot.com/-5iD5BUY79PU/V5KVBgiZAWI/AAAAAAAAWJc/iFmg3sW6aysdLTmMMzMN6YYSlMI5a1YRQCK4B/s72-c/2016020807284356b843ab3b8e4.png
blogger_id: tag:blogger.com,1999:blog-2741304674651227490.post-4879431221963525867
blogger_orig_url: http://moonwards1.blogspot.com/2016/07/energy-storage-as-heat.html
---

(Originally posted on site forum, Feb 2nd, 2016.)

There are 2 new images today on the main page. The solar furnace has been updated to something i am finally happy with, at least at this stage of concept development. The dome has been completely chucked out in favor of an even larger sunken gallery. Right now the model is only a hole in the ground, but i have big plans and will work on that model this week. Also in the text for the numbers i mention the crane is about to be replaced with a model on rails. Let me explain.

After mulling a bit the scale necessary to store energy for overnight use with the Potential Energy Storage System i'd very roughly postulated, it seems like something that would take a long time to develop to the point where it could play a significant role. I could be wrong about that as i am still a long way from taking the time to learn calculus the way i want to - i have to stick to working on the website and its content - and so the needed calculations are beyond me. And maybe the proper approach simply hasn't occurred to me. Maybe lowering absolutely gigantic weights very slowly on really sturdy rails would make the task more manageable. Meaning i also have to learn a lot of physics... At any rate i am indebted to Sigvart for giving me a better handle on the scale involved here. So now i'm all keen on storing heat energy that steam turbines can tap day and night for a smoother energy supply that requires less construction. Well, at least i think it would... The first missions would still rely on nuclear power, the cost and mass of a few plants sufficient to power the early days has no competition, they win hands down. But getting to the point where such plants can be built on the Moon, or even fueled on the Moon, is a complicated endeavor. So something is needed to bridge the gap between when more nuclear plants to power the growing colony is too expensive, and when the colony is capable of producing such plants itself. An alternative to nuclear has also got to be a good idea.

The core of everything proposed so far is that the strong constant sunlight on the Moon is the best power source for everything, and figuring out how to use it directly to make stuff and do stuff is the best way to go. So let me lean on that again. What if a gigantic tank of fused magnesia was filled with regolith (and enough of a gas to facilitate heat transmission through it, because without it regolith has really low thermal conductivity). And what if there was a whole network of pipes through that tank - iron ones i guess, it is the easiest metal to purify from the regolith by far. And those pipes carried a working fluid, i guess some salt that stays liquid through the appropriate temperature range, it would be nice if that could come all from the Moon but probably it would need to be imported. Then you make a nice long mirrored parabolic trough and send a set of those pipes down its focal point and back to the giant tank, heating up that regolith nice and hot, over 1000 degrees C maybe. On the other side of the tank you have a series of steam-driven turbines. They have their own circuits through the tank, in which water turns to steam, comes back, turns the turbines, and then goes to radiators to lower their temperature low enough to condense to water, and thence get circulated back into the hot tank.

The pluses i see in this is that as long as the main heat mass, the giant hot tank, was kept above 100 degrees C, your steam turbines could run all the time. They run at lower power output at the lower temperatures at the end of the long cold night and perhaps with a hit on efficiency due to having to operate over a wide range of temperatures and heat gradients, but they run. And maybe the power density you can expect in this concept is good. The vacuum works in your favor, slowing heat loss so thatmuch more of it can be directed to the turbines than if such a system was used on Earth. Just envelope the main tank in many reflective layers, same as there is on the tanks connect to the solar furnace, and suspend it above the ground on legs as small as possible while still structurally sound. The vast majority of this system can be fabricated right on the Moon without a lot of infrastructure. There needs to be a way of purifying magnesia to make the tank out of a material that can handle the temperature range. A way to do that has to be found for other reasons too, because there is certainly plenty of magnesia to be had and it would be very useful. I think maybe heating regolith to well over the temperature at which crystals start to form in it, and whipping it around in a centrifuge to separate it into its constituent layers might be enough, but i don't know. The molten salt needs to be imported, seems to me the rest can be 3d printed or cast from materials not that hard to get on the Moon at an early stage of industrial development.

Scale? Beats me. The big, big thing about this is that over the night all plants will die if they don't have a light source at least a few hours a day that is pretty intense. Energy can be saved on that by narrowing the light frequency to the bands most useful to plants. I have to go check numbers on that, but let me guesstimate again, for now (cuz it's getting late and i have to do stuff and want to post this before tomorrow, later i can make improvements. Shall we say 300 W/m2 for say 6 hours out of every 24 for good health? That seems pretty reasonable, it could maybe be cut down a lot more if you are just giving them enough to get them through the night and you choose the right plants and the right wavelengths of light. Let's go even with 500 W/m2 to account for inefficiency in the lights and so on. For a garden of 1000 m2 that you light in patches for 6 hours each, rotating through them all night long, you need 125 kW of power, all the time, just for that. So how big a system would be needed for that?

Any takers on that calculation?

PS - initially this was going to be about why i decided to put the crane on rails. One reason is that this system is long and the crane would be useful in building it. But there are other things planned for that crane. I'll get to that tomorrow. The sunken gallery will be extended with it too (probably saw that one coming though). And there was other stuff - scaling up the MIPs, and installing other infrastructure.

***Reply from Sigvart Brendberg:***

> That is brilliant Kim!
>
> "Any takers on that calculation?"
>
> Yes.
>
> First, we need to establish the energy storage needed. For a power consumption of over 150 KW, we need about 200 GJ of storage. I am going to use that number for reference for future calculation, if there are no dramatic changes in the required power supply. This is for a up-and-running base, and of course it has lot smaller requirements in the beginning.
>
> The energy efficiency of converting the stored heat into electricity is not that great, about 10%. We therefore need about 2 TJ of storage. At a temperature difference of a 1000 degrees, we obtain a bit less than 300 tons of rock, at a specific heat capacity of 700 J/kg*K (basalt-ish). This number is scalable, in case you want another temperature. (For instance 600 tons for a temperature difference of 500 degrees).
>
> That is quite a bit, but regolith is (literary!) cheap as dirt.
>
> You are going to need radiators! A heat source is not enough to produce energy, you need a temperature difference. For complicated calculus reasons the optimal operational temperature for the radiators is 64/81 of the temperature of the heat source. Or, it is optimal for radiator mass at least, you have a better energy efficiency with larger radiators and a lower temperature.
>
> In case you are interested, a realistic energy efficiency of the conversion is given by the endoreversible heat engine efficiency: n = 1 - sqrt(Tc/Th) , where Th is the temperature inside the regolith heat storage system, and tc is the temperature of the radiators.
>
> This is a typical trade-off situation, determined by how much of the radiators that can be manufactured locally.
>
> The storage efficiency is more complicated, so I am going to do the numbers later. Seems like it follows the square-cube law, so the heat loss decreases with size.

Ah yes, radiators. I mentioned them briefly but didn't give them much thought.

So, metals production. Some amount of iron production can be had simply by passing big magnets through a large enough quantity of regolith, especially if it is of the right kind. One of the advantages of Lalande Crater is that any type of regolith you wish should be available close by. Otherwise, molten metal oxide electrolysis, which would produce puddles of whatever metals are present in the regolith feedstock as it split the oxygen off oxide molecules. Choosing the right feedstock would mean the resulting alloy could be mostly iron and titanium, from ilmenite. That sounds pretty good.

My understanding is that what you want is to make the radiators as light as possible, so they heat quickly and that way they radiate heat faster. Perhaps the approach would be to roll out the hot iron or iron/titanium alloy into sheets as thin as possible, and then have a 3d printer that uses a metal powder feed sinter a network of pipes onto that.

In early days you can just import them, they are pretty light and last a long time. Probably better to go with a design that can be repaired, even if they are less efficient. Space is one thing there is no lack of.

> *Response from Sigvart:*
>
> An attempt to sum up the findings so far:
>
> One of the major problems with a lunar base is the energy storage during the 14 days long lunar night. Two of the proposed solutions to this problem is the Potential Energy Storage System (PESS) and the Thermal Energy Storage System (TESS).
>
> First off, the PESS has one unique feature; No energy loss during storage. Rocks just hang there, without radiating away or anything. Any loss is during the transformation to and from electric energy. Overall efficiency is about 50% but may be considerably different from that.
>
> One interesting aspect is the storage efficiency of 0.5 kWh per ton per 100 m (compensated for energy losses). Even if we have a short distance with a massive weight, or a long distance with a modest weight, the required cable mass Is going to be the same. The properties of the basalt ropes would be really interesting in that way.
>
> Another thing about the PESS Is that it requires high grade energy in order to fill the energy reservoir. Electricity and electric motors seems the most likely option, although a direct mechanical transfer is possible to imagine.
>
> The TESS is a much more dynamical system, with almost no linear properties. The main advantage of the TESS is perhaps the low grade energy it requires, heat. At a work-in-progress efficiency rating of 10%, heating the reservoir with solar power gives about the same gain as solar cells, but only requiring mirrors. Another important option is that you can simply add a nuclear reactor to the system, making an efficient way of storing the power from it.
>
> ###High temperature end energy loss:
>
> The storage stack, design whatsoever, is going to lose heat through two major processes. One is, if parts of its surface are adjacent to vacuum, black body radiation, governed by the Stefan-Boltzmann law, radiating energy proportional to the forth power of the absolute surface temperature. The other process is conduction through the walls of the storage stack, into the surrounding medium. This increases linearly with temperature. (Well, not really linearly, that is if the regolith instantly conducts the heat away, which is not going to happen. The surroundings are going to heat up, cancelling some of the temperature gradient. The actual mechanics are complicated, and strongly dependent on the exact design).
>
> That means that the core temperature is going to increase during the charging, until it reaches a point where the heat source (mirrors, reactors) has an equal production as the heat loss from the stack. The TESS is now “topping off”. During this scenario, it is more efficient to cap the temperature a little lower (because it essentially loses the same amount of energy as it receives), and instead let the turbines run. The energy produced can be used to charge a long term system, like the PESS.
>
> ###Low temperature end energy loss:
>
> The system must have a temperature gradient in order to produce energy. That means that one end of it must remain relatively cool. Cooling is provided either by radiators, or by pipelines in the regolith. In that later case, the surrounding material would heat up with a too high energy consumption, reducing the overall efficiency.
>
> Efficiency at different high-end temperatures, low-end temperature fixed to 300 degrees Kelvin. Efficiency along the y-axis, temperature in Kelvin along the x-axis:
>
> <figure><img  src="https://www.moonwards.com/img/heat-graph1.png" /></figure>
>
> The temperature of both extremes during normal operation is going to look something like this. Temperature along the y-axis, time along the x-axis. (days since sunset)
>
> <figure><img  src="https://www.moonwards.com/img/heat-graph2.png" /></figure>
>
> ((edited slightly for grammar and spelling. Thanks, Sigvart - kim))

There is a lot worth pondering here. For brevity and clarity, i'm going to put my thoughts in bullet points and lists

**Weight fabrication:**

*   The longer the vertical drop, the more energy can be gotten from the same mass. As i can't think of a way to make weights that don't require a lot of fabrication, that seems important.
*   Even if i could, at a bulk density of 1.6 g/cm3 with no wasted space, it takes a hectare of weights 10 m high to store the equivalent of 100 kW of continuous energy for 1 lunar night. Getting those weights to and from the line to be lowered and raised quickly becomes a challenge. If weights could be made mostly of solid ilmenite the same volume would store close to 300 kW all night.
*   I have a lot of cable anxiety. That is partly why i proposed the chain design in this post. The connection between links can be improved to have a much higher cross-sectional area, they fold together for storage with virtually no wasted space, and need very little extra infrastructure to get them to and from the line.
*   Direct mechanical energy in PESS: I had thought about spring-loading the stack of weights in storage in that chain-link design, to save a little on the energy involved in transferring them from storage to their monthly descent and ascent.

Integrating the nuclear reactors: Oh hey, yeah! They have to be hooked up to steam turbines anyhow. Dear god, i never accounted for that in mass of the nuclear power plant. Doh! When it is time to make 3d models of these systems, i'll need to make a very basic model of it for review by others so people can adjust things easily.

**Configuration of Hot Tank:**

*   I'm thinking cube shapes for the tanks. It has a higher surface area to volume ratio than spheres or cylinders, but as the system expands, new cubical tanks could be added on the walls of the first, best limiting the surface area of the whole set of tanks.
*   I wonder how much reflective insulation can help with radiative heat loss.
*   To limit the contact area between the hot tanks and the ground, they need to be on posts
*   Basalt starts to melt at around 1300 K, and is completely melted at around 1750 K. The phase changes through that temperature range must affect efficiency.
*   This probably doesn't help much with being specific about efficiencies, but i thought it was worth mentioning as general design principles

**Low temperature energy loss**
I don't understand the point about using subterranean rock as a cooling medium draining too much energy. I do know that thermodynamics is extremely complicated and can just accept that, since i can't do the calculations myself and it may be quite hard to explain. If there is any need for nighttime heating, that would still be a valuable option. I have tried a little to look into how to fabricate radiators on the Moon, but i get stuck. There are too many factors i know nothing about. 3d metal sintering doesn't convince me though, unless there is a way to create metal powder. Getting the metal? I'm comfortable with that. Making metal powder? I have no idea.

*Response from Sigvart:*

OK, using your specifications, I have done a crude size estimate of the storage cube. It turns out that the "^4" in the Stefan-Boltzmann equation is much more important than the loss of efficiency at a lower temperature gradient.

**Initial approach:**
For 150 kW of power during the lunar night, we need 200 GJ of storage. At ~30% conversion efficiency of the thermal system, we need 670 GJ of energy storage. For safety margins, and for the fact that we can not drain the tank down to 0 K, I call that 1 TJ for an estimate.

The specific heat capacity of basalt is 840 J/kg K. That means 750 tons of basalt is required for 800 K storage. The basalt densities vary a bit, but I call it 2 tons/m³.
That becomes a 9x9x9 cube.

As the cube stands on posts I assume a total surface area of close to 500 m².
The radiation numbers are not pretty. The cube is in the beginning radiating heat away at over 10 MW.

**After optimization:**

For a high end temperature optimization, the over all efficiency is best at 430 without any insulation. Still, it radiates away 3.6 MW at the beginning of the night.

Here, aluminium foil can do miracles. A reflective layer of it a few cm away from the cube reflects 92% of the radiation back. 8% is absorbed, and half of that is re-emitted back to the storage cube. Heat loss at sunset down to 150 kW.

Adding one more layer of foil outside that again means halving the heat loss. However, that is going to be much better if the inner layer has a black coating on the outside. We are then down to 20 kW (the leak is of course also decreasing with the temperature, so it drops during the lunar night). That should be acceptable.

Conclusion: The storage cube is about 18x18x18 metres, and has a starting temperature of about 450 K (180 degrees C) at sunset.
