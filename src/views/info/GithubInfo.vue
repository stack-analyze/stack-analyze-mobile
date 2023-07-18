<script setup lang="ts">
// states
const user = ref("");
const githubUser = ref<Partial<GithubSchema>>({});

// computers
const IsEmptyGitInfo = computed(
  () => Object.values(githubUser.value).length === 0
);

// methods
const getGitUser = async () => {
  if(!user.value) {
    return openToast("this field is required", "warning");
  }

  try {
    const { data } = await axios.get(`https://api.github.com/users/${user.value}`)

    githubUser.value = data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error github user info',
      subHeader: 'problem to req api'
    });
  }
  
  user.value = "";
};

const clearGitUser = () => {
  githubUser.value = {};
};

</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <stack-input 
        v-model="user" 
        label-txt="enter a github user" 
        input-type="text" 
      />
      
      <ion-grid>
        <stack-buttons
          init-btn-name="get github user"
          :init-validate="false"
          @init-function="getGitUser"
          clear-btn-name="clear github user"
          :clear-validate="IsEmptyGitInfo"
          @clear-function="clearGitUser"
        />
      </ion-grid>
      
      <ion-card class="stack-card" mode="ios">
        <ion-card-header mode="md">
          <ion-img 
            :src="githubUser.avatar_url || '/assets/img/No-image-found.jpg'"
            :alt="githubUser.login || 'profile github'" 
            class="github-img"
          />
          
          <ion-card-title>
            {{ githubUser.login || "no username" }}
          </ion-card-title>
          
          <ion-card-subtitle>
            {{ githubUser.name ?? "no name" }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content mode="md">
          <ion-grid>
            <ion-row>
              <ion-col size="12">
              <ion-item>{{ githubUser.bio ?? "no bio" }}</ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Followers:</ion-label>
                  <ion-text>{{ githubUser.followers }}</ion-text>
                </ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Following:</ion-label>
                  <ion-text>{{ githubUser.following }}</ion-text>
                </ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Account age:</ion-label>
                  <ion-text>{{ format(githubUser.created_at) }}</ion-text>
                </ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Twitter username:</ion-label>
                  <ion-text>
                    {{ githubUser.twitter_username ?? "no twitter info" }}
                  </ion-text>
                </ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Repos:</ion-label>
                  <ion-text>{{ githubUser.public_repos }}</ion-text>
                </ion-item>
              </ion-col>

              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Gists:</ion-label>
                  <ion-text>{{ githubUser.public_repos }}</ion-text>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
