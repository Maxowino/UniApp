
<template>
    <div id ="register"  class="bg-purple">
<v-container>
    <v-container>
        <v-layout column>
            <v-card
                class="mx-auto"
                width="500"
            >
            <br>
                <v-toolbar
                    color="purple"
                    theme="dark"
                >
                 <v-toolbar-tile class="text-h6">
                    User Registration
                 </v-toolbar-tile>
    
                </v-toolbar>
             <v-container>
                <v-text-field
                    v-model="first"
                    color="purple"
                    label="First Name"
                    variant="underlined"
                    >
                </v-text-field>

                <v-text-field
                    v-model="last"
                    color="purple"
                    label="Last Name"
                    variant="underlined"
                    >
                </v-text-field>

                <v-text-field
                    v-model="email"
                    color="purple"
                    label="Email"
                    variant="underlined"
                    >
                </v-text-field>

                <v-text-field
                    v-model="phone"
                    color="purple"
                    label="Phone Number"
                    variant="underlined"
                    type="number"
                    >
                </v-text-field>

                <v-text-field
                    v-model="password"
                    color="purple"
                    label="Password"
                    placeholder="Enter your password"
                    variant="underlined"
                    type="password"
                    >
                </v-text-field>
                <v-checkbox
                v-model="terms"
                color="secondary"
                label="I agree to site terms and conditions" 
                >               
                </v-checkbox>            
             </v-container>

             <v-divider></v-divider>
             <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="success">
                        Complete Registration
                        <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>

             </v-card-actions>

        </v-card>

        </v-layout>
    </v-container>
</v-container>
    </div>
    <footer class="bg-purple">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <div class="titlebox2" >
            <img src="https://media.istockphoto.com/id/1283581279/vector/graduation-hat-and-diploma-icon.jpg?s=612x612&w=0&k=20&c=VLt0IlK4GB6csyH-cAQN722Nt7Ai5Igh0zduLDge3Eg="  alt="">
            <div class="h2-box">
                <h2>Belobog College of Arts</h2>
            </div>
          </div>
          <br><br>
          <div class="contact" align="center">
            Contact Us
          </div>
          <br><br>
          <div align="center">
            <i class="fa-brands fa-facebook"></i> 
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <br><br>
          <div class="mail" align="center">
             belobogcollege@gmail.com
          </div>
          <br>
          <div align="center" class="copy">
            &copy;  2023
          </div>
          <br><br><br>
    </footer>
</template>
<script>
     export default{
         data:()=>({
            first: null,
            last: null,
            email: null,
            password:null,
            phone: null,
            terms: null,
        }),

     }
</script>
<style scoped>
    .titlebox2
        {
            display: flex;
            justify-content: center;
            align-items: center;

        }
        img
        {
            max-width: 60px;
            float: left;
            border: 1px solid;
            border-radius: 10px;
            margin-right: 3px;
          
        }
        .h1-box
        {
            font-size: medium;
        }
        .h1-box h2
        {
          
            font-size: 50px;
            color: orange;
        }
        h2
        {
            color: orange;
            font-size: 40px;
        }
        .contact
        {
            font-size: 30px;
            color: gold;
        }
        .fa-facebook
        {
            font-size: 38px;
            color: blue;
          
        }
        .fa-twitter
        {
            font-size: 38px;
            color: aqua;
            
        }
        .fa-instagram
        {
            font-size: 38px;
            color: orange;
            
        }
        .fa-youtube
        {
            font-size: 38px;
            color: red;
            
        }
        .fa-linkedin
        {
            font-size: 38px;
            color:blue;
            
        }
        .mail
        {
            color: gold;
            font-size: 25px;
        }
        .copy
        {
            font-size: 20px;
            color: gold;
        }


</style>