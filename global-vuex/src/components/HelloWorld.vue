<template>
<h3>Counter</h3>
<h3>{{counter}} x 2 = {{times2}}</h3>
<button @click="increment">Incrementar</button>
</template>

<!-- <script >

import { defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2']),
  },
  methods: {

    ...mapMutations(['setCounter']),

    increment() {
      this.setCounter(this.counter + 1);
    }
  }
})

</script> -->

<!-- <script >
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore();

    const counter = computed(() => store.state.counter);
    const times2 = computed(() => store.getters.times2);

    const increment = () => {
      store.commit('setCounter', store.state.counter + 1);
    };

    return {
      counter,
      times2,
      increment
    };
  }
});
</script> -->

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

  const store = useStore();

  const counter = computed(() => store.state.counter);
  const times2 = computed(() => store.getters.times2);

  const increment = () => {
    store.commit('setCounter', store.state.counter + 1);
  };

</script>