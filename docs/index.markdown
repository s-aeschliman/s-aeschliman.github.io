---

layout: home
title: 
order: 1
carousels:
  - images:
    - image: /assets/images/grand_ronde.jpg
      alt: Grande Ronde River. Fujica STX-2 + Fujinon 50 mm f/1.9 + Portra 400, June 2023 
    - image: /assets/images/anthro.jpg
      alt: Museo Nacional de Antropología, CDMX. Fujica STX-2 + Fujinon 50 mm f/1.9 + Portra 400, March 2023
    - image: /assets/images/wash.jpg
      alt: Mt. Washington over Big Lake and burnt forest. Fujica STX-2 + Fujinon 50 mm f/1.9 + Portra 400, July 2023
    - image: assets/images/duomo.jpg
      alt: Florence at sunset. Fujica STX-2 + Fujinon 50 mm f/1.9 + Porta 400, August 2023
    - image: /assets/images/florence.jpg
      alt: Arno river at dusk. Fujica STX-2 + Fujinon 50 mm f/1.9 + Porta 400, August 2023
    - image: /assets/images/gold_beach.jpg
      alt: Gold Beach, OR. Fuji XT-3 + XF 10-25 mm f/4, June 2021 

---

<div class="above_img_banner">

  <div class="pic"><img src="assets/images/me.png" alt="" width="334" height="184"></div>

  <div class="intro" style="text-align: right">You've somehow arrived at the website of Spencer Aeschliman (me). I study travel behavior and the impacts of transit policy. Here you'll find details about my ongoing projects, publications, photography, the odd blog post, and other random things that interest me, if that interests you. Welcome! <br> <br> {%- include social_minimal.html -%}</div>
</div>

{% include carousel.html height="50" unit="%" duration="1000" number="1" %}


<style>

.above_img_banner{
  position: relative;
}

.pic{
  display: inline-block;
}

.intro {
  width: 500px;
  display: inline-block;
  float: right;
  font-size: 14px;
  vertical-align: bottom;
  position: absolute;
  bottom: 0;
  right: 0;
}

</style>