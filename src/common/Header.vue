<template>
    <header>
        <div class="content">
            <a href="" class="logo"><img src="../../static/images/readhub_logo@2x.c5c683e7.png" alt=""></a>
            <nav>
                <router-link to="/">热门话题</router-link>
                <router-link to="tech">科技动态</router-link>
                <router-link to="news">开发者资讯</router-link>
            </nav>
            <div class="contact">
                <a href="">联系我们</a>
                <a href="javascript:void(0);">加入我们</a>
            </div>
        </div>
    </header>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    header{
        height: 80px;
        background-color: #fff;
        border-bottom: 1px solid #dcdcdc;
        position: relative;
        .content{
            width:960px;
            margin:0 auto;
            .logo{
                float: left;
                margin-right: 30px;
                margin-top: 23px;
                img{
                    width: 130px;
                    height: 34px;
                }
            }
            nav{
                clear: left;
                height: 80px;
                line-height: 80px;
                display: inline-block;
                a{
                    text-decoration: none;
                    font-size: 16px;
                    margin-right: 40px;
                    color: #737373;
                }
                a.router-link-exact-active{
                    font-weight: 700;
                    color: #246394;
                }
            }
            .contact{
                height: 80px;
                float: right;
                position: relative;
                line-height: 80px;
                a{
                    font-size: 14px;
                    color: #999;
                    margin-left: 23px;
                    text-decoration: none;
                }
            }
        }
    }
</style>