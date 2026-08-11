<template>
  <HeaderCont/>
  <router-view/>
</template>
/*
    Pinia 
     => vuejs의 공식 라이브러리 : 상태관리 
        상태관리 = 데이터의 변경을 관리 
                 ============ HTML
     => 특징 
        가볍다 => 성능의 최적화 
        TypeScript를 지원 = WebStorm 
        어려운 부분을 삭제 : Mutation = 수정/삭제 
        Composition 지원 : setup()
        Devtools와 연동 
     => 구성요소 
        state : 데이터 저장소 : 전역 처리
        getters : computed => 가공된 값을 반환 
        actions : 서버연결 => 데이터를 읽어온다 
*/
<script>
import HeaderCont from './components/HeaderCont.vue';

export default {
  name: 'App',
  components: {
    HeaderCont
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
