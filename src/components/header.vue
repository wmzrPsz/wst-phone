<template>
  <div class="ez-header">
    <div class="dingjia">
      <div class="baoc_jia">
        <p >开启你的旅行</p>
        <div class="baoc_sou">
          <i><img src="../assets/img/A/xpjcs_sea_icon.png"></i>
          <input type="text" placeholder="搜索旅行地/酒店/旅游/景点门票/交通" name="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ez-header',
  props: {
    // msg: String
  }
}
</script>

<style scoped lang="less">
  .baoc_jia{
    background-image: url('../assets/img/B/1.png')
  }
</style>
