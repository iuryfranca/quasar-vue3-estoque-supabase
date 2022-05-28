<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="row">
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn-dropdown color="white" flat icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const { logout } = useAuthUser();
    const router = useRouter();
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Você deseja realmente sair?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: "login" });
      });
    };

    return {
      router,
      leftDrawerOpen,
      handleLogout,
    };
  },
});
</script>
