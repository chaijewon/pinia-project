import { defineStore } from "pinia";
// import java.util.* 
// import java.util.Scanner
import axios from "axios";
export const useRecipeStore=defineStore('recipe',{
   // 1. 저장 공간 (데이터) => state
   // data()
   state:()=>({
      recipe_list:{},
      recipe_detail:{},
      find_list:{}
   }),
   // 2. action => 서버와 연결 => 데이터 처리
   // 비동기 형식 => Redux
   actions:{
      async recipeListData(page){
        console.log('recipeListData Call',page)
        const response=await axios.get('http://localhost:8080/recipe/list_vue',{
            params:{
                page
            }
        })
        console.log(response)
        this.recipe_list=response.data
      }
   }
})