<script>
/**
 * About component
 */
export default {
  name: 'About',
  methods: {
    linkTo(src) {
      console.log(src);
    }
  }
}
</script>

<template>
  <!--START ABOUT-US-->
  <section class="section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="about-title mx-auto text-center">
            <h2 class="section-title text-center">公司产品</h2>
            <div class="section-title-border margin-t-20"></div>
            <p class="text-muted pt-4"> xDAN -AI 站在AI创新的前沿，具有创新产品 忘不了AI Note 、 网红元宇宙 和 课堂笔记</p>
          </div>
        </div>
      </div>
      <div class="row margin-t-50 justify-content-center">
        <!-- <div class="col-lg-3 col-sm-6"> -->
        <div class="col-lg-3 col-sm-6 text-center">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt src="@/assets/images/products/memory.jpg" class="img-fluid rounded" />
              </div>
            </div>
            <h4 class="team-name">忘不了</h4>
            <p class="text-uppercase team-designation">
              基于现代人的记忆遗忘和信息过载问题完成语音交互，一键智能检索海量信息 Al原生时代的个人记忆助手
            </p>
            <p class="text-uppercase team-designation">
              <i class="mdi mdi-arrow-right" @click="linkTo(1)"></i>
            </p>
          </div>
        </div>

        <!-- <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt src="@/assets/images/products/universe.png" class="img-fluid rounded" />
              </div>
            </div>
            <h4 class="team-name">网红元宇宙</h4>
            <p class="text-uppercase team-designation">Designer</p>
          </div>
        </div> -->
        <!-- 
        <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt src="@/assets/images/products/classnotes.png" class="img-fluid rounded" />
              </div>
            </div>
            <h4 class="team-name">课堂笔记</h4>
            <p class="text-uppercase team-designation">Developer</p>
          </div>
        </div> -->

        <!-- <div class="col-lg-3 col-sm-6">
          <div class="team-box text-center">
            <div class="team-wrapper">
              <div class="team-member">
                <img alt src="@/assets/images/team/img-4.jpg" class="img-fluid rounded" />
              </div>
            </div>
            <h4 class="team-name">Joshua Stemple</h4>
            <p class="text-uppercase team-designation">Manager</p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!--END ABOUT-US-->
</template>