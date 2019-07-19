<template>
  <div id="app">
    <div class="app">
      <div id="slider">
        <div class="window" @mouseover="stop" @mouseleave="play">
          <ul class="container" :style="containerStyle">
            <li>
              <img :src="sliders[sliders.length - 1].img" alt>
            </li>
            <li v-for="(item, index) in sliders" :key="index">
              <img :src="item.img" alt>
            </li>
            <li>
              <img :src="sliders[0].img" alt>
            </li>
          </ul>
          <ul class="direction">
            <li class="left" @click="move(600, 1, speed)">
              <svg
                class="icon"
                width="30px"
                height="30.00px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
                ></path>
              </svg>
            </li>
            <li class="right" @click="move(600, -1, speed)">
              <svg
                class="icon"
                width="30px"
                height="30.00px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
                ></path>
              </svg>
            </li>
          </ul>
          <ul class="dots">
            <li
              v-for="(dot, i) in sliders"
              :key="i"
              :class="{dotted: i === (currentIndex-1)}"
              @click="jump(i+1)"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "Lbt",
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      sliders: [
        {
          img: 'static/images/lb1.png'
        },
        {
          img: 'static/images/lb2.png'
        },
        {
          img: 'static/images/lb3.png'
        }
      ],
      currentIndex: 1,
      distance: -600,
      transitionEnd: true,
      speed: this.initialSpeed
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 600)
        : (this.currentIndex -= offset / 600);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -3000) this.distance = -600;
          if (des > -600) this.distance = -3000;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 600;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

.styA {
  color: #adadad;
  text-decoration: none;
  padding-left: 35px;
  font-size: 20px;
}

.styB {
  color: black;
  text-decoration: none;
  padding-left: 35px;
  font-size: 18px;
}

.styC {
  color: black;
  text-decoration: none;
  padding-left: 20px;
  font-size: 18px;
}

.shadow {
  -webkit-box-shadow: #cdcdb4 0px 0px 10px;
  -moz-box-shadow: #cdcdb4 0px 0px 10px;
  box-shadow: #cdcdb4 0px 0px 10px;
  background: #eeff99;
}

body {
  background-color: #f2f2f2;
}

#right li {
  list-style: none;
  display: inline-block;
  border: none;
  height: 30px;
  line-height: 30px;
  width: 100px;
  padding-top: 10px;
}

a:hover {
  color: #cd853f;
}

.image-enter-active {
  transition: all 1.5s linear;
}

.image-leave-active {
  transition: all 1.5s linear;
}

.image-enter-to {
  transform: translateX(0);
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}

.image-leave-to {
  transform: translateX(-100%);
}

.active {
  opacity: 1;
}

.app {
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 0px;
  position: relative;
}

.app img {
  width: 260px;
  height: 320px;
}
*{
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 847125 */
    src: url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.eot');
    src: url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.woff') format('woff'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont";
    font-size:16px;
    font-style:normal;
  }
  #slider{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 300px;
  }
  .slider-imgcontainer {
    position: absolute;
    left: 0;
    width: 400%;
    height: 300px;
    transition: left .5s linear;
  }
  img {
    width: 25%;
    height: 300px;
  }
  .slider-buttons {
    position: absolute;
    width: 30%;
    left: 35%;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .slider-imgindex {
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin: 0 10px;
    background-color: rgba(255, 248, 248, 0.98);
    border-radius: 7px;
    transition: width .3s linear;
  }
  .slider-imgindex-active {
    width: 60px;
  }
  .slider-move {
    position: absolute;
    top: 40%;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .slider-move span {
    cursor: pointer;
    text-align: center;
    color: #fff;
    line-height: 60px;
    width: 50px;
    background-color: rgba(8,1,1,0.62);
  }
  .slider-move span:hover{
    background-color: rgba(8,1,1,0.9);
  }
</style>