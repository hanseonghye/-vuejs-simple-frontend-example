<template>
  <table class="table is-fullwidth is-bordered is-striped">
    <thead>
      <th>
        E-Mail
        <b-tooltip
          label="the email address assoicated with this user"
          position="is-right"
        >
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th></th>
    </thead>

    <tbody>
      <tr class="table-warning" v-if="!collection[0]">
        <td>no user avaiable</td>
        <td></td>
      </tr>

      <UserListItem v-for="m in collection" :key="m.id" :model="m" />
    </tbody>
  </table>
</template>

<script>
import UserListItem from "./UserListItem";

export default {
  props: {
    collection: {
      required: true
    }
  },
  computed: {
    UserListItem
  }
};
</script>
