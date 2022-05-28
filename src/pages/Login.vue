<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10">
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
            label="Entrar"
            color="primary"
            class="full-width"
            outline
            type="submit"
          />
        </div>
        <div class="q-mt-sm">
          <q-btn
            label="Registrar"
            color="primary"
            class="full-width"
            size="sm"
            flat
            :to="{ name: 'register' }"
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
  name: "PageLogin",
  setup() {
    const router = useRouter();
    const { login } = useAuthUser();
    const form = ref({
      email: "",
      password: "",
    });

    const $q = useQuasar();

    const handleLogin = async () => {
      try {
        await login(form.value);
        router.push({ name: "me" });
        $q.notify({
          color: "positive",
          message: "Login realizado com sucesso!",
        });
      } catch (error) {
        $q.notify({
          color: "negative",
          textColor: "white",
          message: "Erro ao realizar login",
        });
      }
    };

    return {
      form,
      handleLogin,
    };
  },
});
</script>
