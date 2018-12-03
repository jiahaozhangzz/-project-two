<template>
    <div>

            <div class="header">
                <div class="text">登陆</div>
            </div>
            <div class="border"></div>
            <div class="dlym">
            <div class="zl">
                <div class="zl_1">
                    <input class="input" type="text" placeholder="用户名">
                </div>
                <div class="border_1"></div>
                <div class="zl_1">
                    <input class="input" type="password" placeholder="密码" oninput="this.value=this.value.replace(/[^0-9A-z\.]/g,'');"/>
                </div>
                <div class="border_1"></div>
                <div class="dl">
                    <router-link :to="{path: '/ordt'}" class="dl_2">
                        <span class="dl_1"></span>登陆
                    </router-link>
                </div>
            </div>
            </div>
            <div class="sm">
                试运行期间仅支持网易账号登录哦<br/><br/>
                其他合作渠道账号正在紧张准备中，请阴阳师大人耐心等待
            </div>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

        .header
            height: 2.5rem
            text-align: center
            line-height: 2.5rem
            .text
                font-size: 16px
                font-weight: 600
        .dlym
            padding-top: 20%
        .border
            height: 1px
            background: rgba(7, 17, 27, 0.1)
            width: 100%
        .border_1

            width: 95%
            margin: 0 auto
            height: 1px
            background: rgba(7, 17, 27, 0.1)
        .zl_1
            width: 100%
            margin: 0 15px
            .input
                margin: 5px 0 0 0
                height: 2.5rem
                width: 100%
                border: 0
                background-color: transparent
                outline: none
        .dl
            margin: 15px 15px 0 15px
            background: #e76464
            border-radius: 4px
            height: 2.4rem
            line-height: 2.4rem
            text-align: center
            .dl_2
                width: 100%
                height: 100%
                color: white
                .dl_1
                    font-size: 18px
                    color: white
        .sm
            padding: 20px 15px 15px 15px
            text-align: center
            font-size: .6rem
            color: #999
</style>
