<template>
    <div id="app">
        <div class="tab">
            <div class="tab-item">
                <router-link to="/">
                    <div class="bottom">
                    <span class="icon icon-bottom-02"></span>
                    <span class="text">首页</span>
                    </div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link to="order">
                    <div class="bottom">
                    <span class="icon icon-bottom-01"></span>
                    <span class="text">订单</span>
                    </div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link to="my">
                    <div class="bottom">
                    <span class="icon icon-bottom-03"></span>
                    <span class="text">我的</span>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view :result="result"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                result: []
            }
        },
        components: {

        }
     }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
     #app
        .tab
            display: flex
            position: fixed
            width: 100%
            height: 48px
            bottom: 0
            line-height: 40px
            border-top: 1px solid rgba(7, 17, 27, 0.1)
            background: white
            z-index: 555
            .tab-item
                flex: 1
                text-align: center
                .bottom
                    padding: 16px 0
                    .icon
                        display: block
                        margin: -12px 0
                        font-size: 24px
                    .text
                       display: inline-block
                       font-size: .5rem
                       color: #666666
                       &.active
                          color: rgb(242, 88, 85)
</style>
