<template>
  <!--START FEATURES-->
  <section class="section" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">企业介绍</h1>
          <div class="section-title-border margin-t-20"></div>
          <p class="section-subtitle font-secondary text-muted text-center padding-t-30">xDAN
            -AI已经崭露头角，是一家引领人工智能（AI）研发的世界级初创公司。希望在更多领域上与AI结合，为人们带来便利。</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>xDAN -AI</h3>
            <p class="text-muted web-desc">{{ slides[0].summary }}</p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li v-for="(item, index) in slides[0].content" :key="index" class>{{ item }}</li>

            </ul>
            <a href="#" class="btn btn-custom margin-t-30">
              了解更多
              <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/business/rank.jpg" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END FEATURES-->
  <!-- <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/business/rank.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/business/rank.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/business/rank.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div> -->
</template>

<script>

export default {
  name: 'Features',
  components: {

  },
  data() {
    return {
      slides: [{
        title: 'xDAN -AI', summary: `130亿模型级别 全球TOP5超轻量调优 成本 ⬇️ 20倍( 超越400亿 Falcon模型 ).
                 超越99%同量级模型=400亿模型上一轮霸主Falcon.`,
        content: [
          "跨级别竞争", "超过 Llama2-13b-chat（59.9）", "超过 chatGLM6B  27% 清华智浦", "超过 baichuan7B  29% 百川智能", "world class AI startup  ｜ Leaderboard of OpenLLM"
        ]
      },
        // {
        //   title: '业务方向', summary: 'xDAN -AI Focus on solving the problem of human memory',
        //   content: [
        //     "人类第二层记忆", "法律AI大模型", "政务大脑"
        //   ]
        // },
        // {
        //   title: '技术方向', summary: 'Reshape the AI drive application pattern, creating unprecedented possibilities for AI and human intelligence fusion to pave the way',
        //   content: [
        //     "LLM Service", "数据合成", "行业大模型"
        //   ]
        // },
        // {
        //   title: '排名榜单',
        //   summary: 'OpenLLM  跨级别 TOP1 模型',
        //   src: '/img/rank.jpg'
        // }
      ]
    }
  }
};
</script>