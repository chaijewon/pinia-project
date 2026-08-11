<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <router-link class="navbar-brand" to="/">Boot+JPA</router-link>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">레시피
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                <li><a href="/recipe/find">레시피 검색</a></li>
                <li><a href="/recipe/chef_list">쉐프</a></li>
                </ul>
            </li>
            <li><a href="/databoard/list">자료실</a></li>
            <li><router-link to="/youtube/list">동영상 검색</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
</script>
<style>
</style>