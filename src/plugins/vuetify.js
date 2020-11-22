import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: "#447BA6",
                secondary: '#937166',
                accent: "#6199BF",
                error: '#b71c1c',
                card: "white",
                warning: "#b71c1c"
            },
            dark: {
                primary: "#447BA6",
                secondary: '#937166',
                accent: "#6199BF",
                error: '#b71c1c',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#b71c1c',
                card: "#121212"
            },
        },
    },
})

export default vuetify;