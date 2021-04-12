<template>
<q-page class="flex column">
    <div class="col q-pa-sm q-ma-sm">
      <q-input
        outlined
        border-color="white"
        dark
        rounded
        v-model="cityName"
        label-color="white"
        label="Location"
        >
        <template
          v-slot:prepend>
          <q-icon
          name="my_location"
          color="white" />
        </template>
        <template
          v-slot:append>
          <q-icon
          name="search "
          color="white" />
        </template>
      </q-input>
    </div>
    <div class="col text-white text-center">
      <div class="class text-h4 text-light">
        Bangalore
      </div>
      <div class="text-h6 text-weight-light">
        Sunny
      </div>
      <div class="text-h1 text-weight-thin q-my-lg relative-position">
        <span>8</span>
        <span class="text-h4 relative-position degree">&deg;</span>
      </div>
    </div>
    <div class="col text-center">
      <q-img src="https://www.fillmurray.com/100/100" :ratio="4/3"  style="width: 200px; max-width:50%" alt=""/>
    </div>
</q-page>
  
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CurrentWeather extends Vue {
    data() {
    return {
      cityName: null
    }
  }

}
</script>

<style>

</style>