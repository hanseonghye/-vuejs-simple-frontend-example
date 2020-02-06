<template>
  <section class="home">
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Settings
          </h1>
          <h2 class="subtitle">
            import / export data
          </h2>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content">
          <h2>import data</h2>
          <p class="is-size-6">
            import a <code>.json</code> file containing your data.
          </p>
          <div class="file">
            <label class="file-label">
              <input
                type="file"
                class="file-input"
                accept=".json"
                id="inputGroupFile01"
                @change="processFile($event)"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  choose a file...
                </span>
              </span>
            </label>
          </div>

          <small class="text-success" v-if="importSuccess">
            <i class="fa fa-times-times"></i>
            successfully imported data
          </small>

          <small class="text-danger" v-if="importError">
            <i class="fa fa-times-times"></i>
            error importing data
          </small>

          <h2>export data</h2>
          <p class="is-size-6">
            export your data as a <code>.json</code> file.
          </p>
          <button class="button is-success" @click="exportData()">
            <i class="fa fa-fw fa-download"></i>
            export
          </button>

          <h2>flush data</h2>
          <p class="is-size-6">
            flush all the data and reload the app.
          </p>
          <button class="button is-danger" @click="flushData">
            <i class="fa fa-fw fa-trash-alt"></i>
            flush data
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const DownloadFile = require("downloadjs");
const storeModules = ["user", "task"];

export default {
  name: "Settings",
  metaInfo: {
    title: "Settings"
  },
  data() {
    return {
      importSuccess: false,
      importError: false
    };
  },
  methods: {
    processFile(event) {
      this.importSuccess = false;
      this.importError = false;

      const file = event.target.files[0];
      const reader = new FileReader();

      try {
        reader.onload = e => {
          const importedJson = JSON.parse(e.target.result);

          storeModules.forEach(each => {
            if (importedJson[each] && Array.isArray(importedJson[each])) {
              this.$store.commit(
                `${each}/collection/items`,
                importedJson[each]
              );
            }
          });

          this.importSuccess = true;

          window.location = "/";
        };

        reader.readAsText(file);
      } catch (e) {
        this.importSuccess = false;
        this.importError = true;
      }
    },
    exportData() {
      const state = {};
      storeModules.forEach(
        each => (state[each] = this.$store.state[each].collection.items)
      );

      const filename = `task_export_${new Date().getTime()}`.json;

      DownloadFile(
        JSON.stringify(state, null, 2),
        filename,
        "application/json"
      );
    },
    flushData() {}
  }
};
</script>
