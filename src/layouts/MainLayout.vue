<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MainLayout extends Vue {
  data () {
    return {


    }
  }
}
</script>
