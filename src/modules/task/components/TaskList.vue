<template>
  <table class="table is-fullwidth is-bordered is-striped">
    <thead>
      <th>
        Title
        <b-tooltip label="Describe the task" position="is-right">
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th>
        Done
        <b-tooltip label="whether or not the task is done" position="is-right">
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th>Assignee</th>
      <th></th>
    </thead>

    <tbody>
      <tr class="table-warning" v-if="!collection[0]">
        <td>no tasks available</td>
        <td></td>
        <td></td>
      </tr>

      <TaskListItem v-for="m in collection" :key="m.id" :model="m" />
    </tbody>
  </table>
</template>

<script>
import TaskListItem from "./TaskListItem";

export default {
  props: {
    collection: {
      required: true
    }
  },
  components: {
    TaskListItem
  }
};
</script>
