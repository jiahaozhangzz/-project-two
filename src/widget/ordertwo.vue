<template>
    <div class="content">
        <div class="order">
            <div class=main>
                订单
            </div>
        </div>
        <div class="luyou">
        <span class="aaa">全部</span>
        <span class="aaa">待付款</span>
        <span class="aaa">已取消</span>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.content
    flex: 1
    height: 100%
    width: 100%
    .order
        width: 100%
        height: 45px
        line-height: 45px
        .main
            left: 50%
            text-align: center
            font-weight: 700
            background: white
    .luyou
        display: flex
        position: fixed
        width: 100%
        top: 45px
        line-height: 40px
        text-align: center
        .aaa
            flex: 1
            font-size: .7rem
            color: #cccccc
            &.active
                color: black
</style>
