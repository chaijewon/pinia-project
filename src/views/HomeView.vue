<template>
    <div class="container">
        <div class="row">
        총   <span style="color: green;font-size: 20px">{{parseInt(recipe_list.count).toLocaleString()}}</span>개의 맛있는 레시피가 있습니다.
        </div>
        <div class="row" style="margin-top: 10px">
            <div class="col-sm-3" v-for="(vo,index) in recipe_list.list" :key="index">
                <a href="#">
                <div class="thumbnail">
                    <img :src="vo.poster" 
                         :title="vo.title"
                        style="width: 250px;height: 150px">
                    <p style="color:red">{{vo.chef}}</p>
                </div>
                </a>
            </div>
        </div>
        <div class="row text-center" style="margin-top: 10px;">
            <ul class="pagination">
                <li v-if="recipe_list.pages[2]>1"><a class="a-link">&laquo;</a></li>
                <li v-for="(i,index) in range(recipe_list.pages[2],recipe_list.pages[3])" :key="index"><a class="a-link">{{ i }}</a></li>
                <li v-if="recipe_list.pages[3]<recipe_list.pages[1]"><a class="a-link">&raquo;</a></li>
            </ul>
        </div> 
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRecipeStore } from '@/store/recipe';
/*
    HomeView 실행  브라우저에서 / 
       |
    <script setup> 실행 
       |
    Pinia recipeStore 생성 
       |
    storeToRefs() 를 이용해서 store에 저장된 state를 가지고 온다 
       |
    onMounted() 실행 
       |
    recipeListData(1) 호출 
       |
     Pinia Actions 실행 
       | 
      recipe_list가 갱신
       |
    HTML이 자동으로 갱신 

    export default{
      data(){
        return {
          recipe_list:{}
        }
      },
      methods:{
         recipeListData(){}
      },
      mounted(){
      
      }
    }

    <script setup>
    const recipe_list-{} => 안에 선언된 변수가 
                            변경이 되면 
                            <template>안에 있는 
                            HTML이 자동 변경이 된다
    const foodListData=()=>{}
    
*/
   const recipeStore=useRecipeStore()
   // pinia의 store사용 
   const {recipe_list}=storeToRefs(recipeStore)
   // state값을 읽어 온다 
   // action 함수 호출 
   const recipeListData=async(page)=>{
     await recipeStore.recipeListData(page)
     console.log(recipe_list.value)
   }
   // 시작과 동시 서버 연결 
   onMounted(()=>{
      recipeListData(1)
   })
   const range=(start,end)=>{
     const arr=[]
     const len=end-start
     for(let i=0;i<=len;i++)
     {
        arr[i]=start
        start++
     }
     return arr
   }
</script>
<style>
.row {
    width:960px;
    margin: 0px auto;
}
h3 {
   text-align: center;
}
.a-link{
    cursor: pointer;
}
</style>