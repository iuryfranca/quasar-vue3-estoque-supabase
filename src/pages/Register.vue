<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10">
        <q-input
          v-model="form.name"
          label="Nome"
          name="name"
          :rules="[(v) => !!v || 'Nome é obrigatório']"
          :error-messages="{ required: 'Nome é obrigatório' }"
        />
        <q-input
          v-model="form.email"
          label="Email"
          name="email"
          type="email"
          :rules="[(v) => !!v || 'E-mail é obrigatório']"
          :error-messages="{ required: 'E-mail é obrigatório' }"
        />

        <q-input
          v-model="form.password"
          label="Senha"
          name="password"
          type="password"
          :rules="[(v) => !!v || 'Senha é obrigatória']"
          :error-messages="{ required: 'Senha é obrigatória' }"
        />

        <div class="q-mt-sm">
          <q-btn
            label="Registrar"
            color="primary"
            class="full-width"
            outline
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  name: "PageRegister",
  setup() {
    const router = useRouter();
    const { register } = useAuthUser();
    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const $q = useQuasar();

    const handleRegister = async () => {
      try {
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
        $q.notify({
          color: "positive",
          textColor: "white",
          message: "Registro realizado com sucesso!",
        });
      } catch (error) {
        $q.notify({
          color: "negative",
          textColor: "white",
          message: "Erro ao realizar o registro",
        });
      }
    };

    return {
      form,
      handleRegister,
    };
  },
});
</script>
