<template>
  <div>
    <!-- STRAT NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark" id="navbar">
      <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo text-uppercase" href="/">
          <i class="mdi">
            <img src="@/assets/images/navbar/logo.png" alt="" srcset="">
          </i>xDAN -AI
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
              <a v-scroll-to="{ el: '#features', offset: -5 }" class="nav-link" data-scroll-spy-id="features"
                href="javascript: void(0);">介绍</a>
            </li>
            <li class="nav-item">
              <a v-scroll-to="{ el: '#services', offset: -5 }" class="nav-link" data-scroll-spy-id="services"
                href="javascript: void(0);">业务</a>
            </li>
            <li class="nav-item">
              <a v-scroll-to="{ el: '#about', offset: -5 }" class="nav-link" data-scroll-spy-id="about"
                href="javascript: void(0);">产品</a>
            </li>
            <li class="nav-item">
              <a v-scroll-to="{ el: '#pricing', offset: -5 }" class="nav-link" data-scroll-spy-id="pricing"
                href="javascript: void(0);">技术</a>
            </li>
            <li class="nav-item">
              <a v-scroll-to="{ el: '#box' }" class="nav-link" data-scroll-spy-id="blog"
                href="javascript: void(0);">模型</a>
            </li>
            <li class="nav-item">
              <a v-scroll-to="{ el: '#contact' }" class="nav-link" data-scroll-spy-id="contact"
                href="javascript: void(0);">联系我们</a>
            </li>
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <button type="button" class="btn btn-custom navbar-btn btn-rounded">Start</button>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                  <path fill="#000000"
                    d="M31 10H13a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-3 16H16v-2h12Zm0-4H16v-2h12Zm0-4H16v-2h12Z"
                    class="clr-i-solid clr-i-solid-path-1" />
                  <path fill="#000000" d="M6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"
                    class="clr-i-solid clr-i-solid-path-2" />
                  <path fill="#000000" d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"
                    class="clr-i-solid clr-i-solid-path-3" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z">
                  </path>
                </svg>
                <svg class="twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                  <path fill="#888888"
                    d="M5.032 14.286c6.037 0 9.34-4.837 9.34-9.032c0-.137 0-.274-.01-.41A6.56 6.56 0 0 0 16 3.2c-.6.256-1.235.425-1.885.5a3.207 3.207 0 0 0 1.443-1.757c-.645.37-1.35.63-2.085.77a3.322 3.322 0 0 0-1.862-.958a3.384 3.384 0 0 0-2.082.334a3.223 3.223 0 0 0-1.442 1.49a3.08 3.08 0 0 0-.208 2.03a9.57 9.57 0 0 1-3.747-.963a9.269 9.269 0 0 1-3.018-2.354a3.086 3.086 0 0 0-.36 2.314c.189.787.68 1.475 1.376 1.924a3.344 3.344 0 0 1-1.49-.398v.04c0 .734.263 1.444.743 2.01a3.3 3.3 0 0 0 1.89 1.102c-.483.128-.99.146-1.482.055a3.19 3.19 0 0 0 1.168 1.577a3.36 3.36 0 0 0 1.9.627A6.732 6.732 0 0 1 0 12.86a9.527 9.527 0 0 0 5.032 1.423" />
                </svg> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAVBAR -->
    <div v-scroll-spy>
      <!--START HOME-->
      <section class="section bg-home home-half" id="home" style="background-size: cover;background-position: center;"
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
      </section>
      <!--END HOME-->

      <section class="section-sm bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/1.png" alt="logo-img" class="mx-auto img-fluid d-block" />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/2.png" alt="logo-img" class="mx-auto img-fluid d-block" />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/3.png" alt="logo-img" class="mx-auto img-fluid d-block" />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img src="@/assets/images/clients/4.png" alt="logo-img" class="mx-auto img-fluid d-block" />
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
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    const navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.style.backgroundColor = "#272a44";
        navbar.style.color = 'white'
        navbar.style.padding = "10px";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "20px";
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
  }
};
</script>

<style scoped>
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

img {
  width: 40px;
}
</style>
