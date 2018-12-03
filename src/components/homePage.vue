<template>
    <div class="header">
        <div class="upper ">
            <div class="background">
                <div class="search">
                    <div class="zy">
                        <div class="left">
                            <a href="https://yys.cbg.163.com/cgi/mweb/search/role">
                                <i class="icon icon-search"></i>
                                <span class="text">搜索</span>
                            </a>
                        </div>
                    </div>
                    <div class="right">
                        <a class="icon-bottom-031">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="circular">
            <a href=" ">
                <span class="texta">2018年8月29日起，藏宝阁支持更多服务器啦，点击即可查看</span>
            </a>
        </div>
        <div class="column">
            <a href="">
                <div class="zuo">

                         <a href="">
                         <i class="icon-bottom-01"></i>
                         <span>登记出售</span>
                         </a>

                </div>
            </a>
            <span class="xian"></span>
            <div class="you">
                <a href="">
                    <i class="icon-bottom-01"></i>
                    <span>全部商品</span>
                </a>
            </div>
        </div>
        <div class="Middle" style="width: 100%; height: 150px;">
            <a href="" class="ig"
               style=" background-color: rgb(245, 252, 251); display: block; float: left; width: 50%; height: 75px;">
                <div style="float: left; color: rgb(112, 151, 146); margin:10px">
                    <span style="display: block; font-size: 16px; margin-bottom:-6px;">黑晴明</span><br>
                    <span style="display: block; font-size: 12px;">一不小心就晒黑了</span>
                </div>
                <img src="../public/img/20001.png" width="75px" height="75px" class="tu">
            </a>
            <a href="" class="ig"
               style="background-color: rgb(253, 247, 240); display: block; float: right; width: 50%; height: 75px;">
                <div style="float: left; color: rgb(206, 124, 40); margin:10px">
                    <span style="display: block; font-size: 16px; margin-bottom:-6px;">白藏主</span><br>
                    <span style="display: block; font-size: 12px;">小白会一直陪着你</span>
                </div>
                <img src="../public/img/bai.png" width="75px" height="75px" class="tu">
            </a>
            <a href="" class="ig"
               style="background-color: rgb(253, 247, 240); display: block; float: left; width: 50%; height: 75px;">
                <div style="float: left; color: rgb(206, 124, 40); margin:10px">
                    <span style="display: block; font-size: 16px; margin-bottom:-6px;">雪童子</span><br>
                    <span style="display: block; font-size: 12px;">天要下雪了</span>
                </div>
                <img src="../public/img/xue.png" width="75px" height="75px" class="tu">
            </a>
            <a href="" class="ig"
               style="background-color: rgb(245, 252, 251); display: block; float: right; width: 50%; height: 75px;">
                <div style="float: left; color: rgb(112, 151, 146); margin:10px">
                    <span style="display: block; font-size: 16px; margin-bottom:-6px;">蚌精四件</span><br>
                    <span style="display: block; font-size: 12px;">大家把盾拿好</span>
                </div>
                <img src="../public/img/bang.png" width="75px" height="75px" class="tu">
            </a>
        </div>
        <div class="zx">
            <img src="../public/img/yun2.png" class="zuo">
            <h2>最新上架</h2>
            <img src="../public/img/yun.png" class="zuo">
        </div>
        <div class="border"></div>

        <div class="xh" v-for="(i,index) in this.result" :key="index">
            <div class="buttom">
                <span class="right" style="float: right">￥{{i.price}}</span>
                <div>
                    <span class="dj">{{i.equip_level}}级</span>
                    <span class="qf">{{i.area_name}}-{{i.server_name}}</span>
                </div>
            </div>
            <a href="">
                 <div class="buttom">
                     <span class="collection" style="float: right">{{i.collect_num}}人收藏</span>
                     <div class="desc" v-for="(p,index) in i" :key="index">
                         <span class="details">{{p.desc_sumup}}</span>
                         <div class="six">
                             <span class="ssr" v-for="(h,index) in p.highlights" :key="index">{{h}}</span>
                         </div>
                         <ul class="picture" >
                             <li class="picture_a" v-for="(f,index) in p.top_heros" :key="index">
                                 <div class="picture_b">
                                     <div class="img_a">
                                         <div class="block"></div>
                                         <img :src="f.icon" class="img">
                                         <span class="gouyu">
                                             <i class="gouyu_a"></i>
                                             <i class="gouyu_a"></i>
                                             <i class="gouyu_a"></i>
                                             <i class="gouyu_a"></i>
                                             <i class="gouyu_a"></i>
                                             <i class="gouyu_a"></i>
                                         </span>
                                         <span class="jue">觉</span>
                                         <span class="man">
                                             <span class="man_a">满</span>
                                         </span>
                                     </div>
                                 </div>
                                 <div class="name_1">{{f.name}}</div>
                             </li>
                         </ul>
                     </div>
                 </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {

        created() {
            this.axios('/static/data.json')
                .then(this.getResData)
        },
        data() {
            return {
                result: []
            }
        },
        methods: {
            getResData(res) {
                console.log(res)
                this.result = res.data.result
                console.log('this.result', this.result)
            }

            },
        components: {
        }

    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .header
        flex: 1
        overflow: hidden
        background: rgb(245, 245, 245)
        .background
            padding-bottom: 48.53%
            background: url("../public/img/upper-1.jpg") no-repeat
            background-size: 100% auto

            .search
                position: fixed
                top: 0
                z-index: 2
                height: 2.25rem
                line-height: 2.25rem
                width: 100%
                .zy
                    .left
                        overflow: hidden
                        padding: .3rem 0 .3rem .5rem
                        padding-right: 10%
                        & > a
                            display: block
                            height: 33px
                            line-height: 1.65rem
                            border-radius: .25rem
                            border: 1px solid #e5e5e5
                            text-align: left
                            color: #999
                            font-size: .7rem
                            background: hsla(0, 0%, 100%, .9)
                            i
                                font-size: 16px
                                margin: 0 1px 0 6px
                                vertical-align: -6px
                            .text
                                vertical-align: -4px
                                font-size: 14px
                .right
                    position: absolute
                    top: 9px
                    right: 8px
                    & > a
                        box-sizing: border-box
                        display: inline-block
                        font-size: 24px
        .circular

            width: 100%
            height: 38px
            background: #fffaef
            .texta
                padding: 0 10px
                line-height: 38px
                font-size: .25rem
                color: #e74e4b
        .column
            position: relative
            margin: 5px 0 0 0
            background: white
            width: 100%
            height: 52px
            .zuo
                width: 49.5%
                height: 52px
                float: left
                & > a
                    line-height: 52px
                    margin: 0 0 0 29%
                    i
                        font-size: 28px
                        vertical-align: middle
                    span
                        vertical-align: middle
                        font-size: 13px
                        color: black

            .you
                width: 49%
                height: 52px
                float: right
                & > a
                    line-height: 52px
                    margin: 0 0 0 32%
                    i
                        font-size: 28px
                        vertical-align: middle
                    span
                        vertical-align: middle
                        font-size: 13px
                        color: black
            .xian
                display: inline-block
                width: 1px
                height: 15px
                margin: 21px auto
                background: rgba(0, 0, 0, .1)
        .Middle
            .ig
                position: relative
                .tu
                    position: absolute
                    top: 0
                    right: 0
        .zx
            background: white
            margin-top: 5px
            text-align: center
            padding: 9px
            & > h2
                display: inline-block
                vertical-align: middle
                font-weight: 700
            .zuo
                vertical-align: middle
                width: 80px
                height: 16px
        .border
            width: 95%
            height: 1px
            margin: 0 auto
            background: rgba(7, 17, 27, 0.1)
        .xh
            background: white
            margin-bottom: 5px
            padding: 10px
            background: white

        .buttom
            margin: 5px 0
            .right
                color: #e74e4b
                font-weight: 700
                font-size: 15px
            .dj
                font-weight: 700
                vertical-align: middle
                font-size: 16px
            .qf
                color: #999999
                vertical-align: middle
                font-size: 10px
            .collection
                font-size:  .6rem
            .details
                display: block
                color: #999999
                font-size:  .6rem
                margin-bottom: 8px
                margin-top: -4px
                .desc
                    margin-bottom: 5px
            .six
                .ssr
                    font-size: 10px
                    padding: 2px 6px 2px 6px
                    border-radius: .15rem
                    background: #f1f1f1
                    color: #333
            .picture

                margin: 12px -.5rem 0 0

                .picture_a
                    display: inline-block
                    width: 18%
                    padding-right: .5rem
                    .picture_b
                        border: 2px solid #f8d26b
                        border-top-right-radius: .15rem
                        border-top-left-radius: .15rem
                        .img_a
                            position: relative
                            width: 100%
                            height: 0
                            padding-bottom: 100%
                            .block
                                position: absolute
                                z-index: 2
                                top: 0
                                left: 0
                                border: .3rem solid #fabf20
                                border-left-color: #f8d26b
                                border-top-color: #f8d26b
                                border-bottom-color: transparent
                                border-right-color: transparent

                            .img
                                position: absolute
                                top: 0
                                left: 0
                                width: 100%
                                height: 100%
                            .gouyu
                                position: absolute
                                bottom: 0
                                left: 0
                                padding-left: 2px
                                width: 100%
                                font-size: 1px
                                text-align: center
                                background-color: hsla(44,91%,70%,.6)
                                .gouyu_a
                                    display: inline-block
                                    margin-left: -5px
                                    height: 10px
                                    width: 8px
                                    background-size: 100% 100%
                                    background-image: url('../public/img/gouyu.png')
                            .jue
                                position: absolute
                                bottom: 15px
                                right: 3px
                                width: 20%
                                height: 20%
                                font-size: 2px
                                background: #aa39c6
                                color: white
                            .man
                                position: absolute
                                left: 2%
                                top: 2%
                                width: 18%
                                height: 18%
                                z-index: 20
                                border: 1px solid #9d5b0b
                                background: #4b322c
                                transform: rotate(45deg)
                                .man_a
                                    position: absolute
                                    left: 0
                                    top: 0
                                    font-size: 1px
                                    color: #fff
                                    transform: rotate(-45deg)

                    .name_1
                        font-size: .5rem
                        line-height: 1.8
                        text-align: center
                        color: #333
                        background: #f2f2f2
</style>
