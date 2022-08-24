<template>
  <header>
    <nav id="main-nav">
      <ul>
        <li class="brand">
          <button v-if="isHome" @click="homeScrollTo(0)">
            ZELDA COLOMBO — WIP
          </button>
          <nuxt-link v-else to="/">ZELDA COLOMBO — WIP</nuxt-link>
        </li>
        <li
          v-for="navItem in navItems"
          :key="navItem._id"
          :class="navItem.target === $store.state.homeNavItem ? 'active' : ''"
        >
          <button v-if="isHome" @click="homeScrollTo(navItem.sectionNumber)">
            {{ navItem.name }}
          </button>
          <nuxt-link v-else :to="`/#${navItem.target}`">{{
            navItem.name
          }}</nuxt-link>
        </li>
        <li>
          <button class="btn" @click="changeTheme">
            <toggle-icon :mode="$colorMode.preference" />
          </button>
        </li>
      </ul>
    </nav>
    <nav id="mobile-nav">
      <div class="brand" @click="navOpen = false">
        <button v-if="isHome" @click="homeScrollTo(0)">
          ZELDA COLOMBO — WIP
        </button>
        <nuxt-link v-else to="/">ZELDA COLOMBO — WIP</nuxt-link>
      </div>
      <button class="hamburger" @click="toggleNav">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 17">
          <path
            fill="#fff"
            d="M45.79 0c-1.96 0-3.858.683-5.372 1.93a8.506 8.506 0 0 0-2.933 4.912 8.527 8.527 0 0 0 .837 5.665 8.481 8.481 0 0 0 4.228 3.846 8.441 8.441 0 0 0 5.7.281 8.472 8.472 0 0 0 4.583-3.41 8.524 8.524 0 0 0-1.05-10.733A8.467 8.467 0 0 0 45.79 0Zm0 10.768a2.25 2.25 0 0 1-1.432-.513 2.266 2.266 0 0 1-.56-2.817 2.249 2.249 0 0 1 3.866-.192 2.27 2.27 0 0 1-1.011 3.35 2.246 2.246 0 0 1-.863.172ZM27.128 0a8.45 8.45 0 0 0-5.372 1.93 8.506 8.506 0 0 0-2.933 4.912 8.527 8.527 0 0 0 .837 5.665 8.48 8.48 0 0 0 4.228 3.846 8.441 8.441 0 0 0 5.7.281 8.472 8.472 0 0 0 4.583-3.41 8.523 8.523 0 0 0-1.05-10.733A8.469 8.469 0 0 0 27.128 0Zm0 10.768a2.25 2.25 0 0 1-1.432-.513 2.266 2.266 0 0 1-.56-2.817 2.249 2.249 0 0 1 3.866-.192 2.27 2.27 0 0 1-.28 2.86 2.25 2.25 0 0 1-1.594.657v.005ZM8.468 0C6.508 0 4.61.683 3.096 1.93A8.506 8.506 0 0 0 .163 6.842 8.527 8.527 0 0 0 1 12.507a8.48 8.48 0 0 0 4.228 3.846 8.441 8.441 0 0 0 5.7.281 8.472 8.472 0 0 0 4.583-3.41 8.524 8.524 0 0 0-1.05-10.733A8.466 8.466 0 0 0 8.467 0Zm0 10.768a2.251 2.251 0 0 1-1.432-.513 2.266 2.266 0 0 1-.56-2.817 2.249 2.249 0 0 1 3.866-.192 2.27 2.27 0 0 1-1.011 3.35 2.242 2.242 0 0 1-.863.172Z"
          />
        </svg>
      </button>
      <ul v-if="navOpen">
        <li
          v-for="navItem in navItems"
          :key="navItem._id"
          :class="navItem.target === $store.state.homeNavItem ? 'active' : ''"
          @click="navOpen = false"
        >
          <button v-if="isHome" @click="homeScrollTo(navItem.sectionNumber)">
            {{ navItem.name }}
          </button>
          <nuxt-link v-else :to="`/#${navItem.target}`">{{
            navItem.name
          }}</nuxt-link>
        </li>
      </ul>
      <button v-if="navOpen" class="modeBtn btn" @click="changeTheme">
        <toggle-icon :mode="$colorMode.preference" />
      </button>
    </nav>
  </header>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
    homeScrollTo: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      navOpen: false,
      navItems: [
        {
          name: 'About',
          link: '/about',
          target: 'about',
          _id: 'LnqYw7SwwFTJmTDhLE',
          sectionNumber: 1,
        },
        {
          name: 'Work',
          link: '/work',
          target: 'work',
          _id: 'eOaVAhg9p6',
          sectionNumber: 3,
        },
        {
          name: 'Contact',
          link: '/contact',
          target: 'contact',
          _id: 'cY6p8Bbl',
          sectionNumber: 13,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.$route.name)
  },
  methods: {
    changeTheme() {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
    toggleNav() {
      this.navOpen = !this.navOpen
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: var(--genSpacing) 40px;
  z-index: 99;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 400;
  text-transform: uppercase;
  font-size: 20px;
  @media only screen and (max-width: 720px) {
    padding: var(--genSpacing);
  }
}
nav,
ul {
  width: 100%;
}
a {
  text-decoration: none;
}
li {
  &.active {
    a,
    button {
      color: var(--primaryColor);
    }
  }
}
button {
  background: transparent;
  text-transform: uppercase;
  font-size: 20px;
}
.btn {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#main-nav {
  display: block;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
}
#mobile-nav {
  position: relative;
  display: none;
  .brand {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    width: 100%;
    text-align: center;
  }
  .hamburger {
    width: 50px;
    height: 20px;
    position: absolute;
    left: 0;
    z-index: 6;
    svg {
      width: 100%;
      path {
        fill: var(--foregroundColor);
      }
    }
  }
  ul {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--backgroundColor);
    padding: calc(var(--headerHeight) + var(--genSpacing)) var(--genSpacing);
    z-index: 1;
    text-align: center;
    li {
      margin-bottom: 20px;
    }
  }
  .modeBtn {
    position: fixed;
    bottom: var(--genSpacing);
    right: var(--genSpacing);
    z-index: 4;
  }
  @media only screen and (max-width: 720px) {
    display: block;
  }
}
</style>
