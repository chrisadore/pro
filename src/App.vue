


<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="80"
    >
    <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" color="black"></v-app-bar-nav-icon>
    
      
        <router-link to="/home">     <div class="d-flex align-center">   <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src='./components/static/mlogo.svg'
          transition="scale-transition"
          width="200"
        /></div>
        </router-link>


      
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-xs-only" right>
      <v-btn text depressed color="orange"
      v-for="item in navItems" 
      :key="item.title" router :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      </v-toolbar-items>  
<!--       <v-app-bar-nav-icon right @click.stop="drawer2 = !drawer2" color="black" ></v-app-bar-nav-icon>    -->
    </v-app-bar>
    
 <v-navigation-drawer 
      temporary
      v-model="drawer"
      fixed
    >
      <v-list
      fixed 
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-yellow--text text--accent-4" color="orange"
        >
          <v-list-item v-for="item in navItems" 
      :key="item.title" router :to="item.link">
            <v-list-item-title >
               
        <v-icon left color="orange">{{ item.icon }}</v-icon>
         {{ item.title }}
          </v-list-item-title>
            
 
          </v-list-item>  
        </v-list-item-group>
      </v-list>
      
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>
  <br>
  

    


    <v-footer
    padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text>
          <v-btn
            v-for="item in menuItems" 
      :key="item.title" 
            class="mx-4"
            icon
          >
            <a :href="item.link" rel="noopener noreferrer" target="_blank" ><v-icon size="24px" >{{ item.icon }}</v-icon></a>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>


      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
      drawer: false,
      drawer2: false,
      group: null,       
  }),
  watch: {
      group () {
        this.drawer = false
        this.drawerw = false
      },
    },
   computed: {
    menuItems () {
      let menuItems= [
        {icon: 'mdi-facebook-box', link: 'https://www.facebook.com/mahemanipal/', col:'red'},        
        {icon: 'mdi-twitter-box', link: 'https://twitter.com/ManipalUni'},
        {icon: 'mdi-instagram', link: 'https://www.instagram.com/manipal_admissions/?hl=en'},
        {icon: 'mdi-youtube', link: 'https://www.youtube.com/user/ManipalUniversity'}
      ]
      return menuItems
    },

     navItems () {
      let navItems= [
        { icon:'mdi-school' , title: 'Partner Universities', link:'/list'},
        { icon:'mdi-script' , title: 'Guidelines', link:'/guidelines'},
      ]
      return navItems
    } 

}
}

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Varela+Round');

a{
  text-decoration: none;
}

body{
  text-align: justify;
}
h1 {
  font-family: 'Varela Round', sans-serif;
  font-size: 30px;
  
}
p {
  font-family: 'Varela Round', sans-serif;
  color: #262623;
}
ul{
    font-family: 'Varela Round', sans-serif;
  color: #262623;
}
</style>