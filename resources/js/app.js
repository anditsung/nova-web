import Vue from 'vue';
import NovaWeb from './NovaWeb'

Vue.config.productionTip = false

import './fields'
import './components'

;(function () {
    this.CreateNovaWeb = function (config) {
        return new NovaWeb(config)
    }
}).call(window)
