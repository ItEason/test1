
<template>
    <div id="scroll-container" class="show" ref="swapper" @click="scrollTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 16 16">
            <path fill="#0390fc" fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z">
            </path>
        </svg>
    </div>
</template>
  
<script>
export default {
    name: 'BiChevronUp',
    mounted() {
        /** 获取DOM元素 */
        const container = document.getElementById("scroll-container");

        /** 监听事件，修改样式 */
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 120 ||
                document.documentElement.scrollTop > 120) {
                container.style.opacity = 1;
            } else {
                container.style.opacity = 0;
            }
        })
    },
    methods: {
        scrollTop() {
            /** 将页面滚动到顶部 */
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

<style scoped>
@media (max-width: 575px) {
    #scroll-container {
        opacity: 0 !important;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    #scroll-container {
        right: 20px !important;
        bottom: 20px !important;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    #scroll-container {
        right: 30px !important;
        bottom: 30px !important;
    }
}

@media (min-width: 992px) and (max-width: 1280) {
    #scroll-container {
        right: 40px !important;
        bottom: 40px !important;
    }
}

#scroll-container {
    opacity: 0;
    position: fixed;
    cursor: pointer;
    right: 60px;
    bottom: 60px;
    z-index: 999;
    transition: all 1s;
}
</style>