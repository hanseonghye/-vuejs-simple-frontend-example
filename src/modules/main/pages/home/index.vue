<template>
  <section class="home">
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Tasks
          </h1>
          <h2 class="subtitle">
            A simple Vue.js
            <br />
            Great for learning and prototyping - hack it!
          </h2>

          <a
            class="button is-light is-medium"
            href="https://alpha.codotype.io/generators/codotype-vuejs-simple-generator/build"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png"
              alt="Codotype Logo"
              style="margin-right: 0.5rem; height: 1.5rem; width: 1.5rem; float: left;"
            />
            Generated with Codotype
          </a>

          <br />
          <br />

          <a href="https://bulma.io" target="_blank">
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with Bulma"
              width="256"
              height="48"
            />
          </a>

          <br />
          <br />

          <b-field grouped group-multiline position="is-centered">
            <div class="control">
              <a href="">
                <b-taglist attached>
                  <b-tag type="is-dark">vue</b-tag>
                  <b-tag type="is-success ">2.5.2</b-tag>
                </b-taglist>
              </a>
            </div>

            <div class="control">
              <a href="">
                <b-taglist attached>
                  <b-tag type="is-dark">vue-router</b-tag>
                  <b-tag type="is-success">3.0.1</b-tag>
                </b-taglist>
              </a>
            </div>
          </b-field>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">Data overview</h1>
          <p class="is-size-4">
            here is some space todo something
            <i class="far fa-fw fa-lg fa-laugh" />
          </p>
          <p class="is-size-6">
            <i class="far fa-fw fa-lightbulb" />
            check out the
            <router-link to="/settings">Settings</router-link> page to
            <b>Import</b>, <b>Export</b>
          </p>

          <hr />

          <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter">
              <div class="tile is-parent">
                <article class="title is-child box">
                  <p class="title">{{ users.length }}</p>
                  <p class="subtitle">Users</p>
                </article>
              </div>
            </div>

            <div class="column is-one-quarter">
              <div class="title is-parent">
                <article class="title is-child box">
                  <p class="title">{{ tasks.length }}</p>
                  <p class="subtitle">Tasks</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFooter />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import HomeFooter from "./HomeFooter";

export default {
  name: "Home",
  metaInfo: {
    title: "Home"
  },
  components: {
    HomeFooter
  },
  computed: mapGetters({
    users: "user/collection/items",
    tasks: "task/collection/items"
  })
};
</script>
