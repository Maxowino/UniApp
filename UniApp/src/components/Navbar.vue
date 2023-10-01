<template>
    <div>
        <v-app-bar color="purple">
            <v-app-bar-title>   <div class="titlebox">
            <img src="https://media.istockphoto.com/id/1283581279/vector/graduation-hat-and-diploma-icon.jpg?s=612x612&w=0&k=20&c=VLt0IlK4GB6csyH-cAQN722Nt7Ai5Igh0zduLDge3Eg="  alt="" >
            <div class="h1-box">
                <h1>Belobog College of Arts</h1>
            </div>
          </div>
        </v-app-bar-title>
            <v-spacer></v-spacer>
            <div>
                <v-btn to="/" color="orange" dark>Home</v-btn>
            </div>
            <div>
                <v-btn to="/aboutus" color="orange" dark> About</v-btn>
            </div>
            <div>
                <v-btn to="/login" color="orange" dark> Log In</v-btn>
            </div>
            
            <div>
                <v-btn to="/register" color="orange" > Register</v-btn>
            </div>

        </v-app-bar>
    </div>
</template>
<style scoped>
     img
        {
            max-width: 60px;
            float: left;
            border: 1px solid;
            border-radius: 10px;
            margin-right: 3px;
          
        }
        
        .titlebox 
        {
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .h1-box
        {
            font-size: medium;
        }
        .h1-box h1
        {
          
            font-size: 30px;
            color: orange;
        }
        .h1-box
        {
            font-size: medium;
        }
</style>