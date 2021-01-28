<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>
              {{ user.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {{ user.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'my_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                      tab: 'my_articles',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                      tab: 'favorited_articles',
                    },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <ul>
              <li v-for="(item, index) in articles" :key="index">
                <div class="article-meta">
                  <a href=""><img :src="item.author.image" /></a>
                  <div class="info">
                    <a href="" class="author">{{ item.author.username }}</a>
                    <span class="date">{{
                      item.createdAt | dateformatter("MMM DD, YYYY")
                    }}</span>
                  </div>
                  <button
                    class="btn btn-outline-primary btn-sm pull-xs-right"
                    :class="{ active: item.favorited }"
                  >
                    <i class="ion-heart"></i> {{ item.favoritesCount }}
                  </button>
                </div>
                <nuxt-link
                  class="preview-link"
                  :to="{
                    name: 'article',
                    params: {
                      slug: item.slug,
                    },
                  }"
                >
                  <h1>{{ item.title }}</h1>
                  <p>{{ item.description }}</p>
                  <span>Read more...</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
import { mapState } from "vuex";
export default {
  middleware: "authenticated",
  name: "UserProfile",
  async asyncData({ params }) {
    console.log("params.tab: ", params.tab);
    const page = Number.parseInt(params.page || 1);
    const limit = 20;
    const tab = params.tab || "my_articles";
    const queryParams = params.tab === "my_articles" ? "author" : "favorited";
    const { data } = await getArticles({
      [queryParams]: params.username,
      limit,
      offset: (page - 1) * limit,
    });
    const { articles, articlesCount } = data;
    return {
      tab,
      articles, // 文章列表
      articlesCount, // 文章总数
    };
  },
  watchQuery: ["tab"],
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
</style>
