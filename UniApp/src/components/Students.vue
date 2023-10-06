
<template>
    <div id ="students"  class="bg-purple">
<v-container>
    <v-container>
        <v-layout column>
            <v-card
                class="mx-auto"
                
            >
            <br>
                <v-toolbar
                    color="purple"
                    theme="dark"
                >
                 <v-toolbar-tile class="text-h6">
                   Students
                 </v-toolbar-tile>
    
                </v-toolbar>
              <v-container>
                <v-table>
                <thead class="header">
                <tr>
                    <th class="text-left">First Name</th>
                    <th class="text-left">Last Name</th>
                    <th class="text-left">Gender</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Phone</th>
                   
                </tr >
                    
                </thead>
                <tbody>
                <tr v-for="student in students" :key ="student.id">
                    <td>{{student.firstname }}</td>
                    <td>{{student.lastname }}</td>
                     <td>{{ student.gender }}</td>
                     <td>{{student.email }}</td>
                   
                    <td>{{student.phone }}</td>
                </tr>
                </tbody>
            </v-table>
        </v-container>
            


             <v-divider></v-divider>

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
         data () {
            return {
            
                students : [
                    {
                        firstname:'John',
                        lastname:'Richards',
                        gender:'Male',
                        email:'johnrichards@gmail.com',
                        phone:789989796
                    },

                    {   firstname:'Maxwell',
                        lastname:'James',
                        gender:'Male',
                        email:'maxwelljames@gmail.com',
                        phone:723456789
                    },
                    {
                        firstname:'Davis',
                        lastname:'jared',
                        gender:'Male',
                        email:'davisjared@gmail.com',
                        phone:712345678
                    },
                    {   firstname:'John',
                        lastname:'Richards',
                        gender:'Male',
                        email:'johnrichards@gmail.com',
                        phone:723458976}

                    
                ]

            }
           
        }

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