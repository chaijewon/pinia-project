// router => @GetMapping / @PostMapping
import HomeView from "@/views/HomeView.vue";
import RecipeDetailView from "@/views/RecipeDetailView.vue";
import { createRouter,createWebHistory } from "vue-router";
const routes=[
    {
        path:"/",
        name:'home',
        component:HomeView
    },
    {
        path:"/recipe/detail/:no",
        name:"recipe_detail",
        component:RecipeDetailView
    }
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router