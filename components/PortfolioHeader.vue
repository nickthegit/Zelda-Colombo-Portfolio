<template>
  <header>
    <nav id="main-nav">
      <ul>
        <li class="brand">
          <nuxt-link to="/">ZELDA COLOMBO</nuxt-link>
        </li>
        <!-- TODO scroll to position -->
        <li v-for="navItem in navItems" :key="navItem._id">
          <button @click="navigate(navItem.target)">{{ navItem.name }}</button>
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
        <nuxt-link to="/">ZELDA COLOMBO</nuxt-link>
      </div>
      <button class="hamburger" @click="toggleNav">===</button>
      <ul v-if="navOpen">
        <li
          v-for="navItem in navItems"
          :key="navItem._id"
          @click="navOpen = false"
        >
          <button @click="navigate(navItem.target)">{{ navItem.name }}</button>
        </li>
      </ul>
      <button v-if="navOpen" class="modeBtn btn" @click="changeTheme">
        <toggle-icon :mode="$colorMode.preference" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    lmS: {
      type: Object,
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
          target: '#about',
          _id: 'LnqYw7SwwFTJmTDhLE',
        },
        {
          name: 'Work',
          link: '/work',
          target: '#work',
          _id: 'eOaVAhg9p6',
        },
        {
          name: 'Contact',
          link: '/contact',
          target: '#contact',
          _id: 'cY6p8Bbl',
        },
      ],
    }
  },
  mounted() {},
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
    navigate(target) {
      this.$locoScroll.scrollTo(target)
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
    position: absolute;
    left: 0;
    background: salmon;
    z-index: 6;
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
