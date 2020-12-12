<template>
  <div>
    <v-container>
      <v-flex row justify-center ml-0 mt-10>
        <v-select
            style="font-size: 18px"
            :items="items"
            v-model="item"
            item-text="value"
            item-value="key"
            label="Solo field"
            solo
            filled
            height=60
        ></v-select>
      </v-flex>
    </v-container>
    <UserSaidHello v-if="item=='USER_SAID_HELLO'"/>
    <Friends v-else/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Friends from "@/components/people/Friends";
import UserSaidHello from "@/components/people/UserSaidHello";

export default {
  data: () => ({
    item: 'USER_SAID_HELLO',
    items: [
      {
        key: 'USER_SAID_HELLO',
        value: 'Twoje przywitania'
      },
      {
        key: 'BOTH_SAID_HELLO',
        value: 'Twoi znajomi'
      }
    ],
  }),
  methods: {
    ...mapActions(["getRelationships"]),
  },
  computed: {
    ...mapState({
      people: (state) => state.peopleStore.people,
      relationships: (state) => state.relationshipStore.relationships,
    }),
    peopleToWhoUserSaidHello() {
      return this.people.filter((el) => {
        return el.status != null && el.status === 'USER_SAID_HELLO';
      });
    },
    friends() {
      return this.people.filter((el) => {
        return el.status != null && el.status === 'BOTH_SAID_HELLO';
      });
    }
  },
  created() {
    this.getRelationships();
  },
  components: {
    UserSaidHello,
    Friends,
  }
}
</script>

<style scoped>

.v-text-field input {
  font-size: 1.2em;
}
</style>