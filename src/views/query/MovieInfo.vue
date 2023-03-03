<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input 
        v-model="movieTitle" 
        label-txt="enter a movie:" 
        input-type="text" 
      />
      
      <ion-grid>
        <stack-buttons
          init-btn-name="get github user"
          :init-validate="false"
          @init-function="getMovies"
          clear-btn-name="clear github user"
          :clear-validate="isEmptyMovies"
          @clear-function="clearMovies"
        />
        <ion-row>
          <movie-card 
            v-for="movie of movies"
            :key="movie.id"
            :movieData="movie"
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// states
const movieTitle = ref("");
const movies = ref<Movie[]>([]);

// computers
const isEmptyMovies = computed(() => movies.value.length === 0);

// methods
const clearMovies = () => {
  movies.value = []
};

const getMovies = async () => {
  if(!movieTitle.value) return openToast("this field is required", "warning");
  
  try {
    const { data } = await movieApi.get("/search/movie", {
      params: {
        api_key: import.meta.env.VITE_APP_MOVIE_CODE,
        query: movieTitle.value,
        page: 1,
      }
    });
    
    const results = data.results.sort((x: Movie, y: Movie) => {
      // date values
      const primaryDate = new Date(x.release_date);
      const secondaryDate = new Date(y.release_date);
      
      return primaryDate.getTime() - secondaryDate.getTime();
    });
    
    movies.value = results
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error movie info',
      subHeader: 'problem to req api'
    });
  }
  
  movieTitle.value = "";
};
</script>
