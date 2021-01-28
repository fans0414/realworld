exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return publish; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取公共文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 发表文章评论

const publish = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=bf83e804&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.bio)+"\n          ")+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              Follow "+_vm._s(_vm.user.username)+"\n          ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'my_articles',
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.user.username,
                    tab: 'my_articles',
                  },
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'favorited_articles',
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.user.username,
                    tab: 'favorited_articles',
                  },
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.articles),function(item,index){return _vm._ssrNode("<li>","</li>",[_vm._ssrNode("<div class=\"article-meta\"><a href><img"+(_vm._ssrAttr("src",item.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(item.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateformatter")(item.createdAt,"MMM DD, YYYY")))+"</span></div> <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: item.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n                ")+"</button></div> "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                  name: 'article',
                  params: {
                    slug: item.slug,
                  },
                }}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=bf83e804&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "UserProfile",

  async asyncData({
    params
  }) {
    console.log("params.tab: ", params.tab);
    const page = Number.parseInt(params.page || 1);
    const limit = 20;
    const tab = params.tab || "my_articles";
    const queryParams = params.tab === "my_articles" ? "author" : "favorited";
    const {
      data
    } = await Object(article["d" /* getArticles */])({
      [queryParams]: params.username,
      limit,
      offset: (page - 1) * limit
    });
    const {
      articles,
      articlesCount
    } = data;
    return {
      tab,
      articles,
      // 文章列表
      articlesCount // 文章总数

    };
  },

  watchQuery: ["tab"],
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eaac64ea"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map