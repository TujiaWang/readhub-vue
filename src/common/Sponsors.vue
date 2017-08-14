<template>
    <aside>
        <h2>Sponsors</h2>
        <div>
            <a href=""><img src="../../static/images/eico.ecd077f9.png" alt=""></a>
            <a href=""><img src="../../static/images/lagouyunrenshi.c934e505.png" alt=""></a>
            <a href=""><img src="../../static/images/lantouzi.f9c0d8d7.png" alt=""></a>
            <a href=""><img src="../../static/images/mingdao.9b6fcb91.png" alt=""></a>
            <a href=""><img src="../../static/images/shumalizhi.75bd545b.png" alt=""></a>
            <a href=""><img src="../../static/images/wegene.7ab819ea.png" alt=""></a>
            <a href=""><img src="../../static/images/xiaomiquan.97e2495f.png" alt=""></a>
            <a href=""><img src="../../static/images/zongguanjia.e6fe2bcf.png" alt=""></a>
        </div>
    </aside>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    aside{
        float:right;
        width:256px;
        h2{
            font-size: 16px;
            color: #afafaf;
            line-height: 1.78em;
            margin-bottom: 10px;
        }
        a{
            width: 121px;
            height: 75px;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
            border: 1px solid #e5e5e5;
            position: relative;
            border-radius: 0;
            img{
                width: 121px;
                height: 75px;
            }
            &:hover{
                box-shadow: 0 4px 18px -4px rgba(0,0,0,.1);
                transform: perspective(500px) scaleZ(.1) translateZ(100px);
            }
            &:nth-child(even){
                margin-right:0;
            }
        }
    }
</style>