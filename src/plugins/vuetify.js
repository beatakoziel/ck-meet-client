import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: "#FAF7F1",
                secondary: '#937166',
                accent: "#6199BF",
                error: '#b71c1c',
            },
            dark: {
                primary: "#FAF7F1",
                secondary: '#937166',
                accent: "#6199BF",
                error: '#b71c1c',
            },
        },
    },
})

export default vuetify;