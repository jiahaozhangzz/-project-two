<template>
    <div class="main">
        <div class="header">
            <div class="text1">我的藏宝阁</div>
        </div>
        <div class="rng">
            <div class="tt"><img src="../public/img/tx.png" width="90px" height="90px" class="tx"></div>

            <div class="dl">

                    <router-link :to="{path: '/ord'}" class="dl_1">登陆</router-link>
            </div>
        </div>
        <div class="zhong">
            <div class="entrance" style="margin-top: 5px">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">我的收藏</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="entrance" style="margin-top: 5px">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">我的登记</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="border"></div>
            <div class="entrance">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">我的出售</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="border"></div>
            <div class="entrance">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">网易支付</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="entrance" style="margin-top: 5px">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">手机号</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="border"></div>
            <div class="entrance">
                <div class="ico">
                    <a href="" class="tb icon-jiantou">
                        <span class="text">帮助中心</span>
                    </a>
                    <span class="icon icon-my_07 "></span>
                </div>
            </div>
            <div class="border"></div>
            <a href="">
                 <div class="entrance">

                     <div class="ico">
                         <a class="tb icon-jiantou">
                             <span class="text">意见反馈</span>
                         </a>
                         <span class="icon icon-my_07 "></span>
                     </div>

                 </div>
            </a>
        </div>
    </div>
</template>

<script>
    import ord from './order'
    export default {
        components: {
            ord
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .main
        background: rgb(245, 245, 245)
        .header
            height: 45px
            width: 100%
            background: white
            z-index: 10
            .text1
                font-size: 16px
                font-weight: 700
                text-align: center
                line-height: 45px
        .rng
            display: flex
            position: relative
            background: url('../public/img/my01.jpg') 100% 100% no-repeat
            width: 100%
            height: 250px
            align-items: center
            .tt
                width: 100%
                text-align: center
                .tx
                    border-radius: 50%
            .dl
                position: absolute
                bottom: 2.1rem
                width: 100%
                text-align: center
                line-height: 4px
                .dl_1
                    display: inline-block
                    min-width: 5.5em
                    line-height: 28px
                    font-size: .7rem
                    background: #e74e4b
                    border-radius: 3em
                    color: white
                    border: 1px solid #e74e4b
        .entrance
            background: white
            .ico
                padding: 16px 16px 16px 12px
                vertical-align: middle
                width: 100%
                .tb
                    width: 100%
                    .text
                        margin: 0 0 0 10px
                        color: #000
                        font-size: 15px
                        vertical-align: bottom
                .icon

                    position: fixed
                    right: 8px
                    vertical-align: bottom
        .border
            width: 95%
            height: 1px
            margin: 0 auto
            background: rgba(7, 17, 27, 0.1)
</style>
