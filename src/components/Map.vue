<template>
<div id="map">
  <div class="container-sm" id="map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="./assets/logo.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-geoloc>
        <template>
          <vl-feature v-if="latAirplane > 0 && lonAiplane > 0">
            <vl-geom-point :coordinates="[latAirplane, lonAirplane]"/>
            <vl-style-box>
              <vl-style-icon
                src="./assets/airplane-icon.png"
                :scale="0.5"
                :anchor="[0.1, 0.95]"
                :size="[64, 64]"/>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
    <button type="button" class="btn btn-sm btn-info" v-on:click="SearchAirplanes">Search Airplanes</button>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return { 
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
      latAirplane: Number,
      lonAirplane: Number
    }
  },
  props: {
    zoomMap: Number,
    centerMap: Number,
    rotationMap: Number,
    geolocPositionMap: undefined
  },
  methods: {
    SearchAirplanes() {
      if (this.center[0].length < 0 && this.center[1].length < 0) {
        alert('No coordinates, please move map.')
      } else {
        axios.get(`https://opensky-network.org/api/states/all?lamin=${this.center[1]}&lomin=${this.center[0]}&lamax=${this.center[1]}&lomax=${this.center[0]}`).then(res => {
          console.log(res)
          console.log(this.center)
        }) 
      }
    }
  }
}
</script>
<style>

</style>