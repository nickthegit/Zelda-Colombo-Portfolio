<template>
  <section>
    <article class="case-study-item">
      <div class="feature-image">
        <!-- <intersect @enter="videoIn" @leave="videoOut"> -->
        <observer class="observer" v-if="isVideo" @on-change="onChange">
          <!-- <div class="video"></div> -->
          <video
            :src="`https://res.cloudinary.com/jonserness/video/upload/f_auto,q_auto,w_1024/v1646320486/ZC/placeholder/video/${videoId}`"
            muted
            loop
            playsinline
            preload="auto"
            :poster="featureImg"
          ></video>
        </observer>
        <!-- </intersect> -->
        <img
          v-else
          :src="featureImg"
          :alt="`${name} feature image - designed by Zelda Colombo`"
        />
      </div>
      <h2>
        <a :href="link" target="_blank" rel="noopener noreferrer">
          <span v-if="client">{{ client }} — </span>{{ title
          }}<span v-if="hasLink" class="linkicon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g fill="#fff" clip-path="url(#a)">
                <path
                  d="M12.713 12.104a.916.916 0 0 0 .651-.268l8.68-8.687v4.49a.923.923 0 1 0 1.844 0V.923A.923.923 0 0 0 22.966 0h-6.713a.922.922 0 0 0 0 1.845h4.488L12 10.53a.923.923 0 0 0 .652 1.574h.062Z"
                />
                <path
                  d="M23.065 12.99a.922.922 0 0 0-.922.923v7.627a.603.603 0 0 1-.602.602H2.459a.602.602 0 0 1-.603-.602V2.448a.603.603 0 0 1 .603-.602h7.22a.922.922 0 0 0 0-1.845h-7.22A2.458 2.458 0 0 0 0 2.46V21.54A2.461 2.461 0 0 0 2.46 24h19.08A2.457 2.457 0 0 0 24 21.54v-7.627a.923.923 0 0 0-.935-.923Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs></svg
          ></span>
        </a>
      </h2>
    </article>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Observer from 'vue-intersection-observer'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)
export default {
  components: { Observer },
  props: {
    name: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: 'title needed',
    },
    client: {
      type: String,
      default: null,
    },
    featureImg: {
      type: String,
      default: 'https://via.placeholder.com/1920x1080',
    },
    videoId: {
      type: [String],
      default: '',
    },
    link: {
      type: [String],
      default: '',
    },
  },
  data() {
    return {
      animationCS: null,
      player: null,
    }
  },
  computed: {
    isVideo() {
      if (this.videoId.length > 4) {
        return true
      } else {
        return false
      }
    },
    hasLink() {
      if (this.link.length > 3) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.scrollAnimation()

    this.setupVideo()
  },
  methods: {
    scrollAnimation() {
      const heading = this.$el.querySelector('h2')
      const textSplit = new SplitText(heading, { type: 'chars' })
      const text = textSplit.chars
      if (text.length > 0) {
        this.animationCS = gsap.fromTo(
          text,
          {
            autoAlpha: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: CustomEase.create(
              'custom',
              'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
            ),
            stagger: {
              each: 0.075,
              from: 'random',
            },
          }
        )
      }
    },
    setupVideo() {
      // const vm = this
      const el = this.$el.querySelector('video')
      if (this.isVideo) {
        this.player = el
      }
      // this.player.pause()
    },
    onChange(entry) {
      if (entry.isIntersecting) {
        this.player.play()
      } else {
        this.player.pause()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
  padding: var(--headerHeight) calc(var(--headerHeight) + var(--headerHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    padding: var(--genSpacing);
  }
}
a {
  // width: 100%;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  text-decoration: none;
}
.feature-image {
  width: 100%;
  max-width: 1024px;
  position: relative;
  aspect-ratio: 16 / 9;
  img,
  video,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
  img {
    z-index: 1;
  }
  video {
    z-index: 2;
  }
  .observer {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
h2 {
  padding-top: var(--genSpacing);
  position: relative;
  z-index: 1;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 400;
  text-align: center;
  font-size: var(--p);
  // flex-grow: 1;
  // letter-spacing: -0.035vmin;
}
.linkicon {
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  svg {
    width: 100%;
    path {
      fill: var(--foregroundColor);
    }
  }
}
</style>
