<template>
    <v-footer class="d-flex flex-column">
        <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>Get connected with us on social networks</strong>
        </div>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="small"></v-btn>

            <div class="px-4 py-2 bg-black text-center w-100 " >
                {{  new  Date ().getFullYear()}}-<strong>Mandela University</strong>

            </div>

    </v-footer>
</template>
<script>
export default{
    data: ()=>(
        {
            icons:[
                'mdi-facebook',
                'md-twitter',
                'md-Linkedin',
                'md-instagram',

            ]
        }
         
        )
        }

</script>