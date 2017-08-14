<template>
    <div class="home">
        <rh-header></rh-header>
        <main>
            <div class="content">
                <router-view></router-view>
            </div>
            <rh-spon></rh-spon>
        </main>
        <rh-footer></rh-footer>
    </div>
</template>
<script>
    // const Header = resolve => require(['../common/Header.vue'], resolve)
    // const Sponsors = resolve => require(['../common/Sponsors.vue'], resolve)
    import Header from './common/Header.vue'
    import Sponsors from './common/Sponsors.vue'
    import Footer from './common/Footer.vue'
    export default {
        components:{
            'rh-header':Header,
            'rh-spon':Sponsors,
            'rh-footer':Footer
        }
    }
</script>
<style lang="less" scoped>
    main{
        margin: 38px auto 0;
        min-height: 900px;
        width: 960px;
        .content{
            display: inline-block;
            width: 67%;
            max-width: 625px;
        }
    }
</style>
