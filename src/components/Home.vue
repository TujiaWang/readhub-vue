<template>
    <div class="home">
        <div class="topicItem" @click="onClick(index)" :class="{'selected' : ind == index}" v-for="(item,index) in data">
            <h2 class="topicTitle">
                <span class="content">消息称挖财拟赴美 IPO，筹资 2 亿美元</span>
                <span class="time">28 分钟前</span>
            </h2>
            <div class="summary" data-clamp-text="来自彭博近日的消息，据知情人士透露，中国一款颇为流行的记账理财工具——挖财目前已选择摩根大通、摩根士丹利和瑞银安排其拟议赴美 IPO 事宜 ... 挖财于 2009 年 6 月在中国推出个人记账工具 「挖财记账理财」，此后又逐步推出了挖财宝理财、挖财信用卡管家、钱管家、钱堂社区等产品 ... 不久前的 2017 年 5 月 15 日，挖财宣布，已获得国家开发银行的股权投资平台国开金融有限责任公司领投的 4200 万美元战略投资，宽带资本、新天域资本、启明创投、汇桥资本集团等作为跟投机构参与了本轮投资。" style="height: 84px; overflow: hidden;">来自彭博近日的消息，据知情人士透露，中国一款颇为流行的记账理财工具——挖财目前已选择摩根大通、摩根士丹利和瑞银安排其拟议赴美 IPO 事宜 ... 挖财于 2009 年 6 月在中国推出个人记账工具 「挖财记账理财」，此后又逐步推出了挖财宝理财、挖财信...</div>
            <div class="ReactCollapse--collapse">
                <div class="ReactCollapse--content">
                    <div class="main" v-if="ind == index">
                        <div>
                            <div class="articleItem">
                                <a class="articleTitle" href="http://36kr.com/p/5087874.html" target="_blank">挖财拟赴美 IPO，但仍有瓶颈待突破</a>
                                <div class="meta">
                                    <span>
                                        <a class="visited" target="_blank" href="http://36kr.com/p/5087874.html">36Kr</a>
                                    </span>
                                </div>
                            </div>
                            <div class="articleItem">
                                <a class="articleTitle" href="http://www.lanjingtmt.com/news/detail/27480.shtml" target="_blank">消息称挖财拟赴美上市，筹资 2 亿美元</a>
                                <div class="meta">
                                    <span>
                                        <a class="" target="_blank" href="http://www.lanjingtmt.com/news/detail/27480.shtml">蓝鲸TMT</a>
                                    </span>
                                </div>
                            </div>
                            <div class="topicMeta">
                                <a class="topicLink" href="/topic/1vEnvc5jfnM" target="_blank">查看话题<span></span></a>
                            </div>
                            <p class="fix"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>
<script>
    export default {
        data(){
            return {
                show:false,
                isSelected:false,
                data : 5,
                ind:'false'
            }
        },
        methods:{
            onClick(index){
                console.log(index);
                if(this.ind == index){
                    this.ind = 'false';
                }else{
                    this.ind = index;
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .topicItem{
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        &:first-child .topicTitle{
            padding-top:0;
        }
        &:first-child.selected .topicTitle{
            padding-top:37px;
        }
        .topicTitle{
            color: #333;
            font-weight: 500;
            font-size: 17px;
            line-height: 1.78em;
            padding:37px 0 8px;
            margin:0;
            cursor: pointer;
            position: relative;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            .content{
                margin-right: 15px;
            }
            .time{
                font-size: 14px;
                color: #999;
                font-weight: 400;
                display: inline-block;
            }
        }
        .summary{
            color: #737373;
            font-size: 15px;
            line-height: 1.9em;
            cursor: pointer;
            padding-bottom: 37px;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .main{
            .articleItem{
                margin-left: 8px;
                margin-bottom: 10px;
                padding-left: 12px;
                position: relative;
                display: block;
                .articleTitle{
                    color: #333;
                    font-size: 14px;
                    line-height: 1.4em;
                    display: inline;
                    text-decoration: none;
                    margin-right: 15px;
                    cursor: pointer;
                    &:visited{
                        color:#999!important;
                    }
                    &:hover{
                        color: #246394;
                        text-decoration: underline;
                    }
                }
                .meta{
                    display: inline-block;
                    color: #a3a3a3;
                    font-size: 14px;
                    a{
                        color:#999!important;
                        text-decoration: none;
                        &:hover{
                            text-decoration:underline;
                        }
                    }
                }
            }
            .topicMeta{
                min-height: 30px;
                position: relative;
                .topicLink{
                    font-size: 12px;
                    color: #909090;
                    position: absolute;
                    bottom: 8px;
                    right: 10px;
                    text-decoration: none;
                    &:hover{
                        text-decoration:underline;
                    }
                    span{
                        position: relative;
                        top: 0;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 4px 0 4px 6px;
                        border-color: transparent transparent transparent #b2b2b2;
                        display: inline-block;
                        margin-left: 6px;
                    }
                }
            }
            .fix{
                height: 16px;
            }
        }
        &.selected{
            background-color: #fff;
            border: 1px solid #d4d6d8;
            border-radius: 8px;
            position: relative;
            z-index: 10;
            box-shadow: 0 4px 18px -4px rgba(0,0,0,.1);
            margin-left: -22px;
            margin-right: -22px;
            margin-top: -1px;
            padding-left: 21px;
            padding-right: 21px;
            z-index: 1;
        }
    }
</style>