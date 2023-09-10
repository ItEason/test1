<template>
  <div>
    <!-- STRAT NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark" id="navbar">
      <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo text-uppercase" href="/">
          <i class="mdi">
            <!-- <img src="@/assets/images/navbar/logo.png" alt="" srcset="">
            <img src="@/assets/images/navbar/logo1(1).png" alt="" srcset=""> -->
            <img src="@/assets/images/navbar/logo3.png" alt="" srcset="">
          </i>
          xDAN -AI
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu()">
          <i class="mdi mdi-menu"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-center" id="mySidenav" v-scroll-spy-active="{ class: 'active' }">
            <!-- <li class="nav-item">
              <a v-scroll-to="{ el: '#home' }" class="nav-link" data-scroll-spy-id="home"
                href="javascript: void(0);">首页</a>
            </li> -->
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#features', offset: -5 }" class="nav-link"
                data-scroll-spy-id="features" href="javascript: void(0);">介绍</a>
            </li>
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#services', offset: -5 }" class="nav-link"
                data-scroll-spy-id="services" href="javascript: void(0);">业务</a>
            </li>
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#about', offset: -5 }" class="nav-link" data-scroll-spy-id="about"
                href="javascript: void(0);">产品</a>
            </li>
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#pricing', offset: -5 }" class="nav-link" data-scroll-spy-id="pricing"
                href="javascript: void(0);">技术</a>
            </li>
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#box' }" class="nav-link" data-scroll-spy-id="blog"
                href="javascript: void(0);">模型</a>
            </li>
            <li class="nav-item">
              <a ref="navItem" v-scroll-to="{ el: '#contact' }" class="nav-link" data-scroll-spy-id="contact"
                href="javascript: void(0);">联系我们</a>
            </li>
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <div class="row">
                  <form>
                    <div class="form-group">
                      <select class="form-control form-control-sm" v-model="language" id="languageSelect">
                        <option value="zh">中文</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <!-- 更多语言选项... -->
                      </select>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAVBAR -->
    <div v-scroll-spy>
      <!--START HOME-->
      <section class="section bg-home home-half home" id="home"
        :style="{ 'background': 'url(' + require('@/assets/images/bg-home.jpg') + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h4 class="home-small-title">xDAN -AI</h4>
              <h1 class="home-title">We love make things amazing and simple</h1>
              <p class="padding-t-15 home-desc mx-auto">
                Maecenas class semper class semper sollicitudin lectus lorem
                iaculis imperdiet aliquam vehicula tempor auctor curabitur pede
                aenean ornare.
              </p>
              <p class="play-shadow margin-l-r-auto">
                <a v-b-modal.modal class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-center"></i>
                </a>
                <b-modal id="modal" hide-footer size="lg" centered header-close-variant="white">
                  <youtube video-id="lG0Ys-2d4MA" ref="youtube" width="900" height="500"></youtube>
                </b-modal>
              </p>
            </div>
          </div>
        </div>

        <div data-v-14f3abfb="" class="wave-effect wave-anim">
          <div data-v-14f3abfb="" class="waves-shape shape-one">
            <div data-v-14f3abfb="" class="wave wave-one"
              :style="{ 'background-image': ' url(' + require('@/assets/images/wave-shape/wave1.png') + ')' }">
            </div>
          </div>
          <div data-v-14f3abfb="" class="waves-shape shape-two">
            <div data-v-14f3abfb="" class="wave wave-two"
              :style="{ 'background-image': ' url(' + require('@/assets/images/wave-shape/wave2.png') + ')' }">
            </div>
          </div>
          <div data-v-14f3abfb="" class="waves-shape shape-three">
            <div data-v-14f3abfb="" class="wave wave-three"
              :style="{ 'background-image': ' url(' + require('@/assets/images/wave-shape/wave3.png') + ')' }">
            </div>
          </div>
        </div>
      </section>
      <!--END HOME-->

      <section class="section-sm bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/1.png" alt="logo-img" class="mx-auto img-fluid d-block" />
                <p class="padding-t-15 mx-auto  text-center">全链路大模型优化</p>
                <div class="section-title-border margin-t-20"></div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/2.png" alt="logo-img" class="mx-auto img-fluid d-block" />
                <p class="padding-t-15 mx-auto  text-center">13B/70B开源榜单TOP1</p>
                <div class="section-title-border margin-t-20"></div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/3.png" alt="logo-img" class="mx-auto img-fluid d-block" />
                <p class="padding-t-15 mx-auto  text-center">突破性上下文128k</p>
                <div class="section-title-border margin-t-20"></div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0 ">
                <img src="@/assets/images/clients/4.png" alt="logo-img" class="mx-auto img-fluid d-block" />
                <p class="padding-t-15 mx-auto  text-center">智能数据合成技术</p>
                <div class="section-title-border margin-t-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <About />
      <Pricing />
      <BoxVue />
      <!-- <Testimonial />
      <GetStarted />
      <Blog /> -->
      <Contact />
      <Footer />
      <Switcher />
    </div>
  </div>
</template>

<script>
import Features from "@/components/features";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Switcher from "@/components/switcher";
import BoxVue from '../../views/Box.vue';
/**
 * Index-1 component
 */
export default {
  components: {
    Features,
    Services,
    About,
    Pricing,
    // Testimonial,
    // GetStarted,
    // Blog,
    Contact,
    Footer,
    Switcher,
    BoxVue
  },
  mounted() {
    window.onscroll = function () {
      onwindowScroll();
    };

    const navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.style.backgroundColor = "#272A33";
        navbar.style.padding = "10px";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "18px";
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    }
  },
  data() {
    return {
      language: 'zh'
    }
  }
};
</script>

<style scoped>
#home {
  background-size: cover !important;
  background-position: center center !important;
}

::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}

::v-deep .modal-header {
  border: none;
}

::v-deep .modal-backdrop {
  opacity: 0.5;
}

/* ::v-deep .navbar-custom.navbar-white .navbar-nav li a {
  color: white !important;
} */
::v-deep .form-control,
.form-group {
  margin-bottom: 0 !important;
}

.mdi img {
  width: 40px;
}
</style>
