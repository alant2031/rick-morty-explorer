<template>
  <section>
  <div class="about-us">
    <h2>Rick and Morty Explorer App</h2>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Quem manda na minha terra sou euzis!Per aumento de cachacis, eu reclamis.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
  </div>
  <div class="image-wrapper">
    <img src="https://ic.c4assets.com/brands/rick-and-morty/25061866-e35b-405b-9cb4-cb71748e9592.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}" />
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>

html,
body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #F9FAFB;
}

section {
  max-width: 80rem;
  background: linear-gradient(to right, #4C1D95 30%,  #8B5CF6);
  color: white;
  line-height: 1.5;
}

@media (min-width: 600px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  .about-us {
    padding: 3vw 0 3vh 3vw;
  }
  
  .image-wrapper {
    filter: hue-rotate(20deg);
    clip-path: polygon(0% 100%, 50% 0%, 100% 0%, 100% 100%);
  }
}
.about-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  
}
.about-us  h2 {
  font-weight: 600;
  white-space: nowrap;
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: .5rem;
}

.about-us p {
  font-size: clamp(1rem, 1.5vw, 3rem);
}

.image-wrapper {
  height: 100%;
  width: 100%;
  clip-path: polygon(0%, 0%, 0% 0%);

}
.image-wrapper img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right center;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>