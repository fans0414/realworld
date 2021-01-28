import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86bf93e4 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7c0f98c3 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _061bc805 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _711ea976 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _903663f2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _9e5d475e = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _a38a22dc = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _86bf93e4,
    children: [{
      path: "",
      component: _7c0f98c3,
      name: "home"
    }, {
      path: "/login",
      component: _061bc805,
      name: "login"
    }, {
      path: "/register",
      component: _061bc805,
      name: "register"
    }, {
      path: "/profile/@:username/:tab",
      component: _711ea976,
      name: "profile"
    }, {
      path: "/settings",
      component: _903663f2,
      name: "settings"
    }, {
      path: "/editor",
      component: _9e5d475e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _a38a22dc,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
