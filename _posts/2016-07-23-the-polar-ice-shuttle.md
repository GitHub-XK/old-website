---
layout: post
title: The Polar Ice Shuttle
date: '2016-07-23T11:30:00.001-07:00'
author: kim holder
tags:
modified_time: '2016-07-23T11:46:53.943-07:00'
thumbnail: https://3.bp.blogspot.com/-lk6IXuK0KDk/V5O2uigjX-I/AAAAAAAAWMQ/8pwh8S4vKKg3wZjz4u_z8KDWjjMmAdL3QCK4B/s72-c/2016031918322456ed9b38efcde.png
blogger_id: tag:blogger.com,1999:blog-2741304674651227490.post-3873926165857867203
blogger_orig_url: http://moonwards1.blogspot.com/2016/07/the-polar-ice-shuttle.html
---

(Originally posted on site forum Mar 19th, 2016.)

*by Sigvart Brendberg:*

The location of the Cernan's Promise lunar base has several important benefits, however, access to lunar volatiles is unfortunately not one of them. Therefore, there is a need for transporting ice from the poles to the equator. Currently, the most realistic way to do that is a reusable shuttle, performing a suborbital hop. The optimal trajectory, as described by Hop David [here](http://hopsblog-hop.blogspot.mx/2015/08/lunar-pogo-hopper.html), has a Delta-v cost for take-off and landing at 3131 m/s. (from now on set to 3200 m/s for a little margin).

###LH2/LOX

The propellant for the shuttle should be derived from the mines ice, as it has to be independent of imported resources (which would make it a net loss). For a pure chemical system, LH2/LOX is what we have. Most modern upper stages has a total-to-dry-mass ratio around 12, so a ratio of 10 for our shuttle should work as a reasonable assumption. For the Isp of a LH2/LOX system, ~455s, the required one-way mass ratio is 2.05 . That means that the shuttle should be able to transport a payload of 28 % of its launch mass. Further optimizations are however possible, most notably the fact that oxygen can be produced locally at Cernan's Promise, so the important part of the shuttle payload is hydrogen. Even the oxygen for the return trip can be refuelled there. Thus, assuming a fuel to oxidizer ratio of 4.5, it is able to deliver 37% of its launch mass in hydrogen, in total supplying the base with 330% of its launch mass in water. (Not a typo!)

###Nuclear/LH2

Nuclear rocket engines are ready, in fact, they have been ready for over 40 years! I chose to use the RD-0410 prototype engine for reference: \<engine Isp="910s" thrust="35.3kN" mass="2000kg" src="Soviet Union"\> I assume technological progression can easily squeeze 50kN out of that prototype. If we want a trust to weight ratio of 1.5 on the shuttle, the total mass should be 20 tons, with a dry mass of approximately 3800 kg. Payload mass: 43%, water: 380%.

###Nuclear/LH2/LOX

What the nuclear engine mostly suffers from, that makes it not that much more payload efficient over all, is that its relatively low thrust gives it a poor total-to-dry-mass ratio. Introducing LOX to the exhaust gives an almost three times higher thrust, while reducing the Isp to 650s. That should bring the total to dry mass ratio back to around 10. If it uses the LOX for the whole trip to the base, that gives a payload ratio of 46%, but high thrust is not required for the whole duration of the burn, so shifting to the high gear for about half of it gives 50% ! In the end, 450% water.

> *My reply:*
>
> I really like the thinking of transporting just the hydrogen. I worry a little that oxygen production will be slow enough that it will take a long time to produce enough to combine it with all the hydrogen to produce water.
>
> The paper i've used for very roughly estimating the characteristics of the solar furnace is [this one](http://www.uapress.arizona.edu/onlinebks/ResourcesNearEarthSpace/resources08.pdf) by Constance Senior, written in 1991. Since here the relevant topic is how long it would take to produce the oxygen to make water out of the delivered hydrogen, i went looking for something else and found a pretty great paper, which will also be part of a new solar furnace post - [this one](http://www.dtic.mil/dtic/tr/fulltext/u2/a443950.pdf) by John Matchett, written in 2006. 71 pages of pyrolysis goodies.
>
> <figure><img  src="https://www.moonwards.com/img/vacuum-pyrolysis-summary.png" /></figure>
>
> The sample size was very small, under 40 grams. The applicable test is really only the last one, which used regolith simulant. 10% of that vaporized away in a little under an hour. The size of the lens relative to the sample was maybe a bit bigger than the mirror on the solar furnace, but the solar furnace will probably manage a higher energy flux, maintain a better focus, and will be operating in a vacuum where less heat is transported away. So i'm going to call it even and ignore various differences in terms of scale and setup for the sake of coming up with starting-point numbers. And again, a number of differences besides this will be discussed in a solar furnace post.
>
> The tank on the solar furnace holds about 1.5 m3, but it will be hard to fill it completely to the top. I'm going to call it 1.3 m3. It will be loose regolith, which has a bulk density of about 1.3 g/cm3 - might be able to pack in more mass by putting in mostly chunks instead of powder, but we'll go with that. So that's 1.7 t per charge. At the bottom page 15 of the pdf of the Senior paper, she estimates yields of 0.02 to 0.2 g of oxygen per gram of soil. She postulated a very different design, and didn't have the benefit of experimental results from a prototype, instead using extrapolations of results from related experiments. I'm going to pick a figure in the middle of 0.1 g O2 / g of regolith. I'll also say that we evaporate away half of the charge before emptying the tank and refilling it. So that would mean we get 10% of 0.85 t of regolith out as O2, which is 85 kg. If the figure of 10% of the charge vaporizing in an hour held true, that would only take 5 hours. To account for the tasks of processing, maintenance, and put in a healthy margin for error, i'll say 10 hours. At that rate, working around the clock (which will be standard), over one lunar day we could do that 34 times, which is a total of 2890 kg of O2, and i'll round that down to 2.8 tons of O2.
>
> If i take my understanding of your terms (danger!), then 50% payload for nuclear using hydrolox fuel is half of 20 tons, so 10 tons. Some of that is going to be pressure cylinders to hold the hydrogen, probably a few of them, because of the way they need to be processed on either end. Those cylinders need to handle long-term storage in the lunar environment - several days at least. I'm going to say they account for 1 ton of the payload. So that's 9 tons of H2, which needs 72 tons of O2 to convert it all to water. At 2.8 tons per month, it would take 26 months to produce enough oxygen. And also we need to have the oxygen ready to refuel the shuttle, so that's another 3400 kg of O2 (i think).

*Sigvart:*

Just a little comment on the shuttle calculations.

That "maximum total mass" is just because of the limited thrust of the nuclear engine I used as an example. That number is really just used to find an acceptable number for the total-to-dry mass ratio for the all nuclear system. Of course, the shuttle can be made large (or smaller). What matters are the percentages at the end. The results should be (roughly) scalable.

For the nuclear/LH2/LOX, the thrust limitations can pretty much be ignored.

However, the great differences does not seem to lay in the propulsion system design, as producing the required oxygen at Cernan's Promise is boosting the payload 800% ! (+ a little more for not having to transport the oxygen for the return trip.)

I am really looking forward to see what throughput the solar furnace ends up with, but I suspect that the limiting production rate would be the electrolysis at the poles anyway. (To be determined though).

Another consideration that may have an impact on the design is that event though hydrogen has a much better Isp than water, there may be benefits of using water for the first km/s or so: Despite the lover Isp, it is way denser, so for some substitution, the Delta-v actually increases due to the much better mass ratio (using the same tank space). Secondly, for the same reactor power, water has a higher thrust than hydrogen (inversely proportional to Isp). That extra thrust allows for a larger launch mass, and therefore also a smaller part of that mass being the propulsion system. (Better total-to-dry mass ratio). On top of that, straight water requires less processing to produce, of course.

> Oh - a potential solution: reduction of ilmenite by hydrogen to produce water, iron, and titanium dioxide. [FeTiO3 + H2 \> Fe + TiO2 + H2O] (http://pubs.acs.org/doi/abs/10.1021/ie00057a005?journalCode=iecred)
>
> [Resources of Near Earth Space](http://www.uapress.arizona.edu/onlinebks/ResourcesNearEarthSpace/resources07.pdf)
>
> Gotta go do something else, but i wanted to get that down.
