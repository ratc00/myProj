<template>
  <div class="profile">
    <h1 class="subheading grey--text my-8 mx-10 px-10" >Profile</h1>

    <v-container fluid pa-0>
            <v-row align="center" justify="center" 
                style="height:50vh" dense>
                <v-col cols="12" lg="6" md="6" class="fill-height d-flex flex-column justify-center align-center" v-for="user in users" :key="user.name">
                    <v-card flat tile>
                      <v-avatar size="200" class="grey lighten-2">
                        <v-img :src="user.avatar"></v-img>
                      </v-avatar>
                        <v-card-text class="text-center sub-heading">{{user.name}}</v-card-text>
                        <v-card-text class="text-center">Age: {{user.age}}</v-card-text>
                        <v-card-text class="text-center">Birthdate: {{user.birthdate}}</v-card-text>
                        <v-card-actions>
                          <v-btn class="justify-center">
                            <span>Edit</span>
                          </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    
  </div>
</template>

<script>


  export default {
    data() {
      return {
        users: [
          { name: 'testname1', age: 'testage', birthdate: 'testdate', avatar: '/avatar.jpg' }
        ]
      }
    }

  }
</script>
