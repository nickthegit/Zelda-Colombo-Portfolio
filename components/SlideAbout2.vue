<template>
  <section>
    <article class="about-heading">
      <h3>Web Design</h3>
      <h3>Digital Experience</h3>
      <h3>Graphic Design</h3>
      <h3>Creative Concepting</h3>
      <p>
        Wireframes, User interface/experience, Website design, Graphic design,
        Brand Identity system, Editorial design, Retail & Brand activation,
        concept research.
      </p>
      <a href="/ZC_CV.pdf" download class="cv-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 83">
          <path
            fill="#5607FF"
            d="M16.17 65.95h3.124c-.083 2.2-.791 3.967-2.125 5.3-1.333 1.333-3.066 2-5.2 2-1 0-1.958-.183-2.875-.55-.9-.367-1.7-.917-2.4-1.65-.683-.733-1.233-1.642-1.65-2.725-.4-1.1-.6-2.375-.6-3.825 0-1.45.192-2.717.575-3.8.4-1.1.934-2.017 1.6-2.75a6.592 6.592 0 0 1 2.4-1.65c.917-.367 1.9-.55 2.95-.55 2.084 0 3.775.642 5.075 1.925 1.317 1.283 2.067 3.133 2.25 5.55h-3.35c-.133-1.583-.575-2.725-1.325-3.425-.75-.717-1.675-1.075-2.775-1.075-1.3 0-2.341.483-3.125 1.45-.783.95-1.175 2.392-1.175 4.325 0 1.933.392 3.383 1.175 4.35.8.95 1.842 1.425 3.125 1.425 1.1 0 1.967-.317 2.6-.95.65-.65 1.225-1.775 1.725-3.375ZM23.81 56l4.1 11.325L31.985 56h3.15L29.31 73h-2.8l-5.85-17h3.15Z"
          />
          <g clip-path="url(#a)">
            <path
              fill="#5607FF"
              d="M39 11 27.857 0H0v44h39V11Zm-13.928 2.75v-11l11.143 11H25.072Z"
            />
          </g>
          <defs>
            <clipPath id="a"><path fill="#fff" d="M0 0h39v44H0z" /></clipPath>
          </defs>
        </svg>
      </a>
    </article>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)
export default {
  data() {
    return {
      animationA2: null,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: var(--headerHeight) var(--genSpacing);
  }
}
h3 {
  width: 100%;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 600;
  text-align: left;
  font-size: var(--m);
  white-space: nowrap;
  hyphens: auto;
  // word-break: break-all;
  overflow-wrap: break-word;
  // letter-spacing: -0.14vmin;
  // line-height: 13.5vmin;
  @media screen and (max-width: 600px) {
    // margin-bottom: var(--genSpacing);
  }
}
p {
  width: 100%;
  max-width: 55%;
  margin-top: 6vmin;
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 400;
  text-align: left;
  font-size: var(--p);
  // letter-spacing: -0.05vmin;
  // line-height: 5vmin;
  white-space: normal;
  @media screen and (max-width: 600px) {
    margin-top: var(--genSpacing);
    max-width: 90%;
  }
}
.cv-icon {
  right: 40px;
  bottom: 40px;
  position: absolute;
  width: 40px;
  height: 85px;
  display: block;
  svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 600px) {
    bottom: 120px;
  }
}
</style>
