<template>
  <div class="v-content">
    <section class="v-content-banner"/>
    <div class="v-content-inner">
      <section>
        <div style="z-index:1;width:760px;">
          <header style="padding-bottom:30px">
            <nav>
              <span>
                <a href="/"><span>메인 페이지</span></a>
              </span>
              <span class="left-arrow">></span>
              <span>
                <a href="/"><span>파리</span></a>
              </span>
              <span class="left-arrow">></span>
              <span style="color:#888;">
                {{ house.title }}
              </span>
            </nav>
            <div style="display:table;width:100%">
              <div style="display:table-cell;vertical-align:bottom;margin-bottom:20px;line-height:20px;width:81%">
                <h1 style="font-size:32px;margin-bottom:0;line-heigth:40px;font-weight:bold;">{{ house.title }}
              </h1></div>
              <div style="display:table-cell;vertical-align:bottom;margin-bottom:20px;font-size:14px;padding-top:15px;text-align:right;">위시리스트</div>
            </div>
          </header>
          <ul class="basic-info">
            <li
              v-for="(info, index) in infos"
              :key="index">
              <div style="width:180px;line-height:1.5;display:inline-block;margin-left:14px;vertical-align:top;font-size:14px;">
                {{ info.description }}
              </div>
            </li>
          </ul>
          <div style="padding:30px 0;font-size:14px;">
            <div>
              <ul style="margin-bottom:0px;">
                <li
                  v-for="(content, index) in contentList"
                  :key="index"
                  style="margin-bottom:6px;">
                  {{ content }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    contentList: function () {
      var content = this.house.content || []
      return content.split('- ').splice(1)
    },
    infos: function () {
      var sortedInfos = this.house.activityBasicInfos || []
      sortedInfos.sort((a, b) => { return a.id > b.id ? 1 : a.id < b.id ? -1 : 0 })
      return sortedInfos
    },
    ...mapGetters({
      house: 'getHouse'
    })
  },
  created: function () {
    this.$store.dispatch('getHouse')
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  position: relative;
  top: 64px;

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: #e6400e;
  }
}
.v-content-banner {
  height: 500px;
  background-image: url(../assets/images/banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #e0e0e0;
  overflow: hidden;
}
.v-content-inner {
  padding-top: 30px;
}
.basic-info {
  padding: 0;
  padding-bottom: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 0;

  li {
    display: inline-block;
    width: 32.9%;
    padding-top: 20px;
    list-style-type: none;
  }
}
</style>
