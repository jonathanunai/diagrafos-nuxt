<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      },
    }
  },
}
</script>
