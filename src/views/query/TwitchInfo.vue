<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input
        v-model="userStr"
        label-txt="enter a twitch user for search example a,b,c:"
        input-type="text"
      />

      <ion-grid>
        <stack-buttons
          init-btn-name="get twitch users"
          :init-validate="false"
          @init-function="twitchInfo"
          clear-btn-name="clear twitch users"
          :clear-validate="isEmptyUsers"
          @clear-function="resetTwitch"
        />

        <ion-row>
          <twitch-user-info
            v-for="user of twitchUsers"
            :key="user.id"
            :twitch-user="user"
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// states
const userStr = ref("");
const twitchUsers = ref<TwitchUser[]>([]);

// computers
const isEmptyUsers = computed(() => twitchUsers.value.length === 0);

// methods
const twitchInfo = async (): Promise<void> => {
  if (!userStr.value) {
    return openToast("this field is required", "warning");
  }

  // params
  const params = new URLSearchParams();

  // split
  const userList = userStr.value.split(",");

  if (userList.length === 100) {
    return openToast("users must be 100", "danger");
  }

  userList.forEach((user) => {
    params.append("login", user);
  });

  try {
    const { data: twitchData } = await axios.get("https://api.twitch.tv/helix/users", {
      params,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TWITCH_TOKEN}`,
        "Client-Id": import.meta.env.VITE_APP_TWITCH_CLIENT,
      },
    });

    twitchUsers.value = twitchData.data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error twitch info",
      subHeader: "problem to req api",
    });
  }

  userStr.value = "";
};

const resetTwitch = () => {
  twitchUsers.value = [];
};
</script>
