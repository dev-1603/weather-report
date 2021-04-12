<template>
  <div>
    <q-page class="flex column" :class="background">
      <div class="col q-pa-sm q-ma-sm">
        <q-input
          outlined
          border-color="white"
          :dark="
            background.includes('day') && background !== 'rainy-day'
              ? false
              : true
          "
          rounded
          v-model="cityName"
          :label-color="
            background.includes('day') && background !== 'rainy-day'
              ? 'black'
              : 'white'
          "
          label="Location"
          @keyup.enter="getlocationcoords(cityName)"
        >
          <template v-slot:prepend>
            <q-icon
              name="my_location"
              @click="getcurrentLocation"
              color="blue-4"
            />
          </template>
          <template v-slot:append>
            <q-icon
              name="search "
              @click="getlocationcoords(cityName)"
              color="white"
            />
          </template>
        </q-input>
      </div>
      <!-- current Day Data -->
      <template v-if="currentweatherData && tab === 'today'">
        <div class="col text-white text-center">
          <span class="text-h6">{{ todayDateTime }}</span>
          <div class="class text-h4 text-light">
            {{ currentweatherData.name }}
          </div>
          <div class="text-h6 text-weight-light">
            {{ currentweatherData.weather[0].main }}
          </div>
          <div class="text-h1 text-weight-thin q-my-lg relative-position">
            <span>{{ currentweatherData.main.temp }}</span>
            <span class="text-h4 relative-position degree">&deg;C</span>
          </div>
          <q-img
            :src="`http://openweathermap.org/img/wn/${currentweatherData.weather[0].icon}@2x.png`"
            :ratio="4 / 3"
            style="width: 200px; max-width: 50%"
            alt=""
          />
        </div>
      </template>

      <!-- hourlyData for 48 hours -->
      <template v-else-if="hourlyData && tab === 'hourly'" class="text-center">
        <div class="col column">
          <span class="text-h6 text-grey-5">{{ currentDate }}</span>
          <q-scroll-area
            class="q-ma-sm"
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 900px; max-height: 75vh; max-width: 100%"
          >
            <q-list separator class="q-gutter-sm">
              <q-card
                style="
                  background: radial-gradient(circle, #55b9f2 0%, #bfedff 100%);
                "
                v-for="hour in hourlyData"
                :key="hour.dt"
              >
                <q-expansion-item expand-separator>
                  <template v-slot:header class="row">
                    <q-item-section>{{ hour && hour.time }}</q-item-section>
                    <q-item-section class="row">
                      <span>{{ hour && hour.temp }}&deg;C</span>
                    </q-item-section>
                    <q-img
                      :src="`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`"
                      :ratio="4 / 3"
                      style="width: 50px; max-width: 50%"
                      alt=""
                    />
                    <q-item-section side class="q-mr-lg">
                      <span class="text-grey-10 q-pr-md" style="width: 15px">{{
                        hour && hour.weather[0].description
                      }}</span>
                    </q-item-section>
                    <!-- <q-item-section avatar>
                  <q-avatar
                    icon="bluetooth"
                    color="primary"
                    text-color="white"
                  />
                </q-item-section> -->

                    <!-- <q-item-section side>
                  <div class="row items-center">
                    <q-icon name="star" color="red" size="24px" />
                    <q-icon name="star" color="red" size="24px" />
                    <q-icon name="star" color="red" size="24px" />
                  </div>
                </q-item-section> -->
                  </template>
                  <br />
                  <q-separator color="primary" class="q-m t-sm" />

                  <q-card bordered>
                    <q-card-section class="row q-gutter-x-md">
                      <span class="float-left"
                        ><q-icon flat name="thermostat" color="primary" />feels
                        Like<br />{{ hour.feels_like }} &deg;C</span
                      >
                      <q-space />
                      <span
                        ><q-icon flat name="fas fa-wind" color="primary" /> Wind
                        Speed<br />{{ hour.wind_speed }} Km/Hr</span
                      >
                      <q-space />
                      <span
                        ><q-icon flat name="fas fa-tint" color="primary" />
                        humidity <br />{{ hour.humidity }} %</span
                      >
                      <q-space />
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card>
            </q-list>
          </q-scroll-area>
        </div>
      </template>
      <template v-else-if="weeklyData && tab === 'week'">
        <span class="text-h6 text-grey-7 q-ml-md">{{
          currentweatherData.name
        }}</span>
        <q-scroll-area
          class="q-ma-sm"
          :thumb-style="thumbStyle"
          :content-style="contentStyle"
          :content-active-style="contentActiveStyle"
          style="height: 900px; max-height: 75vh; max-width: 95vw"
        >
          <q-list separator class="q-gutter-sm">
            <q-card
              style="
                background: radial-gradient(circle, #55b9f2 0%, #bfedff 100%);
              "
              v-for="day in weeklyData"
              :key="day.dt"
            >
              <q-expansion-item expand-separator>
                <template v-slot:header class="row">
                  <q-item-section>{{ day && day.weekDay }}</q-item-section>
                  <q-item-section class="row">
                    <span>Day: {{ day && day.temp.day }}&deg;C</span>
                    <span>Night: {{ day && day.temp.night }}&deg;C</span>
                  </q-item-section>
                  <q-img
                    :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
                    :ratio="4 / 3"
                    style="width: 50px; max-width: 50%"
                    alt=""
                  />
                  <q-item-section side class="q-mr-lg">
                    <span class="text-grey-10 q-pr-md" style="width: 15px">{{
                      day && day.weather[0].description
                    }}</span>
                  </q-item-section>
                </template>
                <q-separator color="primary" class="q-mt-sm" />

                <q-card bordered>
                  <q-card-section class="row q-gutter-x-sm q-mb-none">
                    <span class="text-weight-bold"
                      ><q-icon flat name="thermostat" color="primary" /> Max<br />{{ day.temp.max }}&deg;C</span>
                    <span class="text-weight-bold"
                      ><q-icon flat name="thermostat" color="primary" /> Min<br />{{ day.temp.min }} &deg;C</span>
                    <span class="text-weight-bold"
                      ><q-icon flat name="fas fa-wind" color="primary" /> Wind Speed<br />{{ day.wind_speed }} Km/Hr</span>
                    <span class="text-weight-bold"
                      ><q-icon flat name="fas fa-tint" color="primary" />Humidity <br />{{ day.humidity }} %</span>
                  </q-card-section>
                  <q-card-section class="col column">
                    <span class="float-left text-subtitle1 text-weight-bold"
                      style="word-wrap: break-word"
                      ><q-icon flat name="thermostat" color="primary" />feels
                      Like</span
                    >
                    <q-list class="row q-gutter-x-xs">
                      <span class="text-weight-bold">Morning: {{ day.feels_like.morn }}&deg;C, </span>
                      <span class="text-weight-bold">Day: {{ day.feels_like.day }}&deg;C ,</span>
                      <span class="text-weight-bold">Evening: {{ day.feels_like.eve }}&deg;C, </span>
                      <span class="text-weight-bold">Night: {{ day.feels_like.night }}&deg;C</span>
                    </q-list>
                    <q-space />
                  </q-card-section>
                  <q-card-section class="row">
                    <span
                      ><q-icon flat name="wb_sunny" color="primary" />
                      Sunrise <br />{{ day.sunrise }}</span
                    >
                    <q-img
                      class="q-mx-sm"
                      src="../assets/sunrise-sunset.svg"
                      style="width: 450px; max-width: 50%"
                      alt=""
                    />
                    <span
                      ><q-icon flat name="fas fa-sun" color="primary" /> Sunset
                      <br />{{ day.sunset }}</span
                    >
                    <q-space />
                  </q-card-section>
                </q-card>

                <!-- <q-card bordered>
                  <q-card-section class="row">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card> -->
              </q-expansion-item>
              <!-- <q-item-section>
                      <q-item-label class="full-width ellipsis">
                        {{ file.name }}
                        <q-tooltip>
                          {{ file.name }}
                        </q-tooltip>
                      </q-item-label>
                    </q-item-section> -->
            </q-card>
          </q-list>
        </q-scroll-area>
      </template>
      <template v-else>
        <div class="col column text-center text-white">
          <div class="col text-h2 text-weight-thin">Weather</div>
          <div class="text-center q-pa-sm q-ma-md">
            <q-btn
              dense
              class="colcol-6"
              flat
              size="md"
              style="with: 200px; max-width: 50vw"
              @click="getcurrentLocation()"
              unelevated
            >
              <q-icon left size="sm" name="my_location" />
              <span>Get My Location</span>
            </q-btn>
          </div>
        </div>
      </template>
      <q-footer dense flat bg-color="red">
        <q-tabs
          v-model="tab"
          active-bg-color="blue-10"
          active-color="white"
          class="text-blue-10"
          narrow-indicator
          dense
          align="justify"
        >
          <q-tab name="today" icon="today" label="Today" />
          <q-tab name="hourly" icon="alarm" label="Hourly Forcast" />
          <q-tab name="week" icon="view_week" label="Week Data" />
        </q-tabs>
      </q-footer>
    </q-page>
    <q-dialog persistent full-height v-model="spinner" :maximized="true">
      <q-card class="column full-height transparent">
        <q-card-section class="col q-pt-none">
          <div class="q-gutter-md absolute-center z-max">
            <div>
              <q-spinner-hourglass color="primary" size="5em" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import axios from "axios";
import Component from "vue-class-component";
import { date } from "quasar";
var bgurl = null;
// import VueGoogleAutocomplete from "vue-google-autocomplete";

@Component
export default class HomePage extends Vue {
  data() {
    return {
      utc: null,
      currentDate: null,
      todayDateTime: null,
      background: "",
      spinner: false,
      cityName: null,
      tab: "today",
      currentweatherData: null,
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555",
      },
      contentActiveStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "black",
      },
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },
      backgroundImage: {
        day: null,
        night: null,
      },
      hourlyData: null,
      weeklyData: null,
      coords: {
        lat: null,
        long: null,
      },
      weatherapi: "https://api.openweathermap.org/data/2.5/",
    };
  }
  get pageImg() {
    return this.background;
  }

  created() {
    this.getcurrentLocation();
  }
  getFormatedDate(datestamp, type = "time") {
    let returnval = "";
    let timeStamp = new Date(datestamp.uxix * 1000);
    const localTime = timeStamp.getTime();
    const localOffset = timeStamp.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    if (type === "time") {
      returnval = date.formatDate(
        new Date(utc + datestamp.offset * 1000),
        "h:mm a"
      );
    }
    return returnval;
  }

  getLocation() {
    const self = this;
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${this.coords.latitude},${this.coords.longitude}&key=23ab96e488084be0a8cfb98aae1d0108`
      )
      .then((res) => {
        self.location = res?.data?.results[0].formatted;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  getcurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.coords = pos.coords;
          // this.getLocation();
          this.loadWeather();
        },
        (error) => {
          if (error.code == error.PERMISSION_DENIED) {
            this.today.desc =
              "Please grant location permition to see today's Weather report";
            this.loading = false;
          }
        }
      );
    }
  }

  loadWeather(city = false) {
    this.spinner = true;
    let url = `${this.weatherapi}weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&appid=c1c6636484d256236706e894da9269a3`;
    let onecallUrl = `${this.weatherapi}onecall?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&appid=c1c6636484d256236706e894da9269a3&exclude=minutely&exclude=current`;
    if (city) {
      url = `${this.weatherapi}weather?q=${city}&units=metric&appid=c1c6636484d256236706e894da9269a3`;
      onecallUrl = `${this.weatherapi}onecall?lat=${city}&units=metric&appid=c1c6636484d256236706e894da9269a3&exclude=minutely`;
    }
    const self = this;
    // `https://api.darksky.net/forecast/3d2707e4079ea36c7ca9abe64fb850db/${this.lat},${this.lon}`;
    // onecall  &exclude=minutely
    // , axios.get(onecallUrl)
    axios
      .all([axios.get(url), axios.get(onecallUrl)])
      .then(
        axios.spread((...responses) => {
          const dayresponse = responses[0];
          self.currentweatherData = dayresponse.data;
          self.cityName = dayresponse?.data?.name;
          const onecallResponse = responses[1];
          this.background = this.bgPage(dayresponse.data?.weather?.[0]);
          self.spinner = false;
          const d = new Date();
          const localTime = d.getTime();
          const localOffset = d.getTimezoneOffset() * 60000;
          this.utc = localTime + localOffset;
          this.todayDateTime = date.formatDate(
            new Date(this.utc + dayresponse.data.timezone * 1000),
            `DD-MMMM-YYYY  ddd \nh:mm a`
          );
          this.currentDate = date.formatDate(
            new Date(this.utc + dayresponse.data.timezone * 1000),
            `DD MMMM YYYY  dddd`
          );
          self.prepareweatherdata(onecallResponse.data);
          // use/access the results
        })
      )
      .catch((errors) => {
        if ((_.includes(errors?.response?.data?.message), "wrong")) {
          this.$q.notify({
            message: "city not found",
            type: "negative",
            position: "top",
            textColor: "white",
          });
        }
        this.spinner = false;
        // react on errors.
      });
  }

  prepareweatherdata(data) {
    console.log({ data });

    this.hourlyData = _.map(data?.hourly, (x) => {
      let timeStamp = new Date(x.dt * 1000);
      const localTime = timeStamp.getTime();
      const localOffset = timeStamp.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      return {
        ...x,
        time: date.formatDate(
          new Date(utc + data.timezone_offset * 1000),
          "h:mm a"
        ),
      };
    });
    this.weeklyData = _.map(data?.daily, (x) => {
      let timeStamp = new Date(x.dt * 1000);
      const localTime = timeStamp.getTime();
      const localOffset = timeStamp.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      return {
        ...x,
        weekDay: date.formatDate(
          new Date(utc + data.timezone_offset * 1000),
          "Do MMMM  dddd"
        ),
        sunrise: date.formatDate(
          new Date(
            new Date(x.sunrise * 1000).getTime() +
              new Date(x.sunrise * 1000).getTimezoneOffset() * 60000 +
              data.timezone_offset * 1000
          ),
          "h:mm a"
        ),
        sunset: date.formatDate(
          new Date(
            new Date(x.sunset * 1000).getTime() +
              new Date(x.sunrise * 1000).getTimezoneOffset() * 60000 +
              +data.timezone_offset * 1000
          ),
          "h:mm a"
        ),
      };
    });
  }

  getlocationcoords(city) {
    if (city?.length) {
      const self = this;
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=23ab96e488084be0a8cfb98aae1d0108`
        )
        .then((res) => {
          const coord = res?.data?.results?.[0]?.geometry;
          self.coords = { latitude: coord?.lat, longitude: coord?.lng };
          self.loadWeather();
          // self.location = res?.data?.results[0].formatted;
          // this.loadWeather(res?.data?.results[0]?.components?.city);
          // res?.data?.results[0].components?.city +
          // ", " +
          // res.results[0].components?.state;
        })
        .catch((e) => {
          console.error(e);
        });
      // https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY
    }
  }

  bgPage(weather) {
    let url = "../assets/background/";
    const weathercondition = weather?.main;
    let classBg = "";
    if (this.currentweatherData?.weather?.[0]?.icon?.endsWith("n")) {
      if (weathercondition === "Clouds") classBg = "night-cloud";
      else if (weathercondition === "Mist") classBg = "misty-night";
      else if (weathercondition === "Thunderstorm") classBg = "Thunderstorm";
      else if (weathercondition === "Snow") classBg = "snowy-night";
      else if (weathercondition === "Drizzle") classBg = "drizzle";
      else if (weathercondition === "Rain") classBg = "rainy-night";
      else classBg = "normal-night";
      return `${classBg}`;
    } else if (this.currentweatherData?.weather?.[0]?.icon?.endsWith("d")) {
      if (weathercondition === "Clouds") classBg = "cloudy-day";
      else if (weathercondition === "Mist") classBg = "mist-day";
      else if (weathercondition === "Thunderstorm") classBg = "Thunderstorm";
      else if (weathercondition === "Snow") classBg = "snowy-night";
      else if (weathercondition === "Drizzle") classBg = "drizzle";
      else if (weathercondition === "Rain") classBg = "rainy-day";
      else classBg = "sunrise";
      return `${classBg}`;
    }
    return `${classBg}`;
  }
}
</script>


<style scoped>
.q-page {
  background: linear-gradient(to top, #43c6ac, #191654);
}
.bg-day {
  background-image: url("../assets/background/sunrise.jpg");
  object-fit: contain;
  /* background: linear-gradient(to top, #f3fb50, #64b3f4); */
}
.bg-night {
  background-image: url("../assets/background/sunrise.jpg");
  object-fit: contain;
}
.night-cloud {
  background-image: url("../assets/background/cloudy-night.jpg");
  object-fit: contain;
}
.Thunderstorm {
  background-image: url("../assets/background/thunderstrom.jpeg");
  object-fit: contain;
}
.drizzle {
  background-image: url("../assets/background/drizzle.png");
  object-fit: contain;
}
.rainy-night {
  background-image: url("../assets/background/rainy-day.jpg");
  object-fit: contain;
}
.normal-night {
  background-image: url("../assets/background/dark-night.jpg");
  size: 100vw;
  object-fit: contain;
}
.cloudy-night {
  background-image: url("../assets/background/cloudy-night.jpg");
  object-fit: contain;
}
.misty-night {
  background-image: url("../assets/background/misty-night.jpg");
  object-fit: contain;
}
.snowy-night {
  background-image: url("../assets/background/snow-night.jpg");
  object-fit: contain;
}
.cloudy-day {
  background-image: url("../assets/background/cloudy-day.jpg");
  object-fit: contain;
}

.rainy-day {
  background-image: url("../assets/background/rainy-day.jpg");
  object-fit: contain;
}
.sunrise {
  background-image: url("../assets/background/sunrise.jpg");
  size: 100vw;
  object-fit: contain;
}
.cloudy-night {
  background-image: url("../assets/background/cloudy-night.jpg");
  object-fit: contain;
}
.mist-day {
  background-image: url("../assets/background/mist-day.jpg");
  object-fit: contain;
}
.snow-day {
  background-image: url("../assets/background/snow-day.jpg");
  object-fit: contain;
}
.degree {
  top: -5vh;
}
.q-footer {
  /* background-color: linear-gradient(to top, #43c6ac, #191654); */
  opacity: 1;
  background-color: rgba(239, 247, 251, 0.483);
  /* opacity: 50%; */
  /* height: 50px; */
  font-size: 1cm;
}
</style>
