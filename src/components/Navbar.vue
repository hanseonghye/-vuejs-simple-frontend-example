<template>
  <header class="navbar is-bold">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <i class="fa fa-cubes fa-2x fa-fw"></i>Tasks
        </router-link>
        <a
          class="navbar-item is-hidden-desktop"
          href="https://github.com/ndro/vue-webpack-buefy"
        >
          <b-icon pack="fa" icon="github" type="is-black"></b-icon>
        </a>

        <div class="navbar-burger burger" data-target="navbarDropdown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarDropdown" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/users" class="navbar-item">Users</router-link>
          <router-link to="/tasks" class="navbar-item">Tasks</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/settings" class="button is-primary"
                >Settings</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #e0e0e0;
}
</style>
