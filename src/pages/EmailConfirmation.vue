<template>
  <q-page padding>
    <p class="text-h6">Obrigado pelo seu Registro!</p>
    <p>
      Agora é preciso que você confirme seu e-mail:
      <span class="text-primary text-bold">{{ $route.query.email }}</span>
    </p>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageEmailConfirmation",
});
</script>
