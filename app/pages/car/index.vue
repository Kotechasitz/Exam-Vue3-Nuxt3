<template>
  <div class="container">
    <div class="car-section">
      <img
        :src="images[activeIndex]"
        class="main-image"
      >

      <div class="carousel-wrapper">
        <button
          class="nav-btn"
          @click="prev"
        >
          <img
            src="/img/left-arrow.png"
            alt="left"
          >
        </button>

        <div
          ref="carousel"
          class="carousel"
        >
          <img
            v-for="(img, i) in images"
            :key="i"
            :src="img"
            :class="{ active: i === activeIndex }"
            @click="setActive(i)"
          >
        </div>

        <button
          class="nav-btn"
          @click="next"
        >
          <img
            src="/img/right-arrow.png"
            alt="right"
          >
        </button>
      </div>
    </div>

    <div class="info-section">
      <div class="title">
        Mercedes-Benz
      </div>
      <div class="subtitle">
        E200 AMG Line
      </div>

      <table>
        <tbody>
          <tr v-for="(item, i) in specs" :key="i">
            <td>{{ item.label }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activeIndex: 0,
      images: [
        '/img/car1.png',
        '/img/car2.png',
        '/img/car3.png',
        '/img/car4.png',
        '/img/car5.png',
        '/img/car6.png',
        '/img/car7.png',
        '/img/car8.png',
        '/img/car9.png'
      ],
      specs: [
        { label: 'Type:', value: 'GY' },
        { label: 'Version:', value: '35 TFSI' },
        { label: 'Master Number:', value: '137749178' },
        { label: 'Type Approval Number:', value: '1AC270' },
        { label: 'Production From / To:', value: '2020' },
        { label: 'Engine Power (Kw/Ps):', value: '110/150' },
        { label: 'System Power (Kw/Ps):', value: '180/210' },
        { label: 'PCD:', value: '5/112' },
        { label: 'Center Bore:', value: '57,1 Mm' },
        { label: 'Fuel', value: 'Hybrid Gasoline/E' },
        { label: 'Axis Load Front', value: '1145 Kg' },
        { label: 'Axis LoadRear:', value: '1250 Kg' },
        { label: 'Max Speed', value: '232' }
      ]
    }
  },

  methods: {
    setActive(index: number) {
      this.activeIndex = index
    },
    next() {
      if (this.activeIndex < this.images.length - 1) {
        this.activeIndex++
        this.scrollToActive()
      }
    },
    prev() {
      if (this.activeIndex > 0) {
        this.activeIndex--
        this.scrollToActive()
      }
    },
    scrollToActive() {
      const el = this.$refs.carousel as HTMLElement
      const activeEl = el.children[this.activeIndex] as HTMLElement

      activeEl.scrollIntoView({
        inline: 'center',
        block: 'nearest'
      })
    }
  }
})
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";
</style>
