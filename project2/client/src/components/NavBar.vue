<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text">
                <span class="font-weight-light">My</span>
                <span>Project</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute temporary class="blue-grey lighten-4">
          <v-layout column align-center>
            <v-flex class = "mt-5">
              <v-avatar size="100">
                <img src="/avatar.jpg" alt="">
              </v-avatar>
              <p class = "subheading mt-1">
                testname1
              </p>
            </v-flex>
          </v-layout>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Menu
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        some text
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>

    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
          { title: 'Profile', icon: 'mdi-account', route: '/profile' },
          { title: 'Gallery', icon: 'mdi-image', route: '/gallery' },
          { title: 'About', icon: 'mdi-help-box', route: '/about' },
        ],
        }
    }
}
</script>
