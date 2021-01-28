<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
              <button class="btn btn-outline-danger" @click="logout">
                Or click here to logout.
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from "@/api/user.js";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  async asyncData() {
    const { email, bio, image, username, password } = JSON.parse(
      Cookie.get("user")
    );
    const user = {
      email,
      bio,
      image,
      username,
      password,
    };
    return {
      user,
    };
  },
  middleware: "authenticated",
  name: "SettingsIndex",
  methods: {
    logout: function () {
      this.$store.commit("setUser", null);
      Cookie.remove("user");
    },
    async onSubmit() {
      await updateUser({ user: this.user });
  
    },
  },
};
</script>

<style>
</style>
