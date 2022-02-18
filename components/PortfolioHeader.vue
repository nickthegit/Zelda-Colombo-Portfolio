<template>
  <header>
    <nav id="main-nav">
      <ul>
        <li class="brand">
          <nuxt-link to="/">ZELDA COLOMBO</nuxt-link>
        </li>
        <li v-for="navItem in navItems" :key="navItem._id">
          <nuxt-link :to="navItem.link">{{ navItem.name }}</nuxt-link>
        </li>
        <li>
          <button @click="changeTheme">
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
          <nuxt-link :to="navItem.link">{{ navItem.name }}</nuxt-link>
        </li>
      </ul>
      <button v-if="navOpen" class="modeBtn" @click="changeTheme">
        <toggle-icon :mode="$colorMode.preference" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navItems: [
        {
          name: 'About',
          link: '/about',
          _id: 'LnqYw7SwwFTJmTDhLE',
        },
        {
          name: 'Work',
          link: '/work',
          _id: 'eOaVAhg9p6',
        },
        {
          name: 'Contact',
          link: '/contact',
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
  width: 40px;
  background: transparent;
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
