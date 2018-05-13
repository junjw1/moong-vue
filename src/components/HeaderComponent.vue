<template>
  <div class="v-header flex-row nav_fixed">
    <a
      href="/"
      class="v-header-logo">MOONG</a>
    <div class="v-header-search-outer">
      <div class="v-header-search-inner">
        <input
          class="v-header-search"
          type="text"
          placeholder="파리 상품을 검색해보세요">
      </div>
    </div>
    <div class="v-nav">
      <ul class="flex-row">
        <li>KRW&nbsp;&nbsp;대한민국 원</li>
        <li>장바구니</li>
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  created: function () {
    console.log('created header component')
  }
}
</script>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}

.v-header {
  min-width: 1280px;
  height: 64px;
  line-height: 64px;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  -webkit-transform: translateZ(0);

  &.nav_fixed {
    position: fixed;
    width: 100%;
    z-index: 1002;
  }

  &.flex-row {
    min-width: auto;
  }

  .v-header-logo {
    color: #e6400e;
    font-size: 27px;
    text-decoration: none;
    transition: 0.70s;
    -webkit-transition: 0.70s;
    -moz-transition: 0.70s;
    -ms-transition: 0.70s;
    -o-transition: 0.70s;

    &:hover {
      transition: 0.70s;
      -webkit-transition: 0.70s;
      -moz-transition: 0.70s;
      -ms-transition: 0.70s;
      -o-transition: 0.70s;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  .v-header-search-outer {
    margin-left: 40px;
    display: inline-block;
    position: relative;
    flex: 0 1 auto;
    -webkit-box-flex: 0;

    .v-header-search-inner {
      width: 320px;

      .v-header-search {
        width: 100%;
        height: 38px;
        border-radius: 2px;
        background-color: #f5f5f5;
        border: 1px solid #fff;
        font-size: 16px;
        color: #ff5722;
        padding-left: 10px;
        text-shadow: 0 0 0 #333;
        -webkit-text-fill-color: transparent;
        box-sizing: border-box;

        &:focus {
          border: 1px solid #ff5722;
          outline-width: 0;
          background: #fff;
        }

        &::placeholder {
          color: #ccc;
        }
      }
    }
  }
}

.v-nav {
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  margin-left: auto;
  position: relative;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0 20px;
    list-style: none;
  }
}
</style>
