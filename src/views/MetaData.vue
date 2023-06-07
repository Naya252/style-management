<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
export default defineComponent({
  setup(){
    let title = inject('title')
    let changeTitle = inject('changeTitle', (val: string) => {})

    let fieldTitle = ref('');

    async function onSubmitTitle(v: any) {
     await v.then(({valid}: any)=>{
        if(valid){
          changeTitle(fieldTitle.value)
        }
      })
    }

    return {
      fieldTitle,
      title,
      onSubmitTitle
      }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    
  }
})
</script>

<template>
  <v-container>
    <h1 class="mb-4">Meta</h1>
    <v-row>
      <v-col xs="12" sm="6">
        <v-form @submit.prevent="onSubmitTitle" ref="formTitle">
          <v-card class="pa-4" title="Title">
            <v-card-item>
              <v-text-field
                class="my-2"
                v-model="fieldTitle"
                :rules="[(v) => !!v || 'Item is required']"
                :placeholder="title"
                required
              ></v-text-field>
            </v-card-item>

            <v-card-actions class="mx-2 mb-2">
              <v-btn type="submit" variant="outlined" color="primary"> Submit </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>

      <v-col xs="12" sm="6">
        <v-card title="Favicon"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
