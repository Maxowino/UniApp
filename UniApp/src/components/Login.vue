<script>

</script>
<template>
   
<div class="container">


    <div  id="login" class="wrapper">
        <form action="">
             <br><br><br> <h1>Log In</h1>
             <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
          
            <div class="input-box">
                <input type="email" v-model="email" placeholder="Enter your Email"  required/>
                <i class='bx bx-user-circle'></i>
            </div>
           
            <div class="input-box">
                <input type="password" v-model="password" placeholder="Enter your Password"  required/>
                <i class='bx bxs-lock-alt' ></i>
            </div>
            <div class="rememberme">
                <input type="checkbox" v-model="checked"/>Remember me
            </div>
            <button type="submit" class="btn">Login</button>
       </form>

    </div>
</div>

</template>
<script>
    export default
    {

    }
</script>
<style scoped>
.container
{
    justify-content: center;
    align-items: center;
    display: flex;
    min-height: 100vh;
    background-color: purple;
}
.wrapper
{   
    width: 420px;
    background: purple;
   
    align-items: center;

  
}
.wrapper h1
{
    font-size: 36px;
    text-align: center;
    color: gold;
}
.wrapper .input-box
{
    position: relative;
   width: 100%;
   height: 50px;
   margin: 30px 0;
}
.input-box input
{
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    border: 2px solid gold;
    border-radius: 30px;
    font-size: 16px;
    color: gold;
    padding: 20px 45px 20px 20px;
}
.input-box input::placeholder
{
    color: gold;


}
.input-box i
{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: gold;
}
.wrapper .rememberme
{
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: gold;
    margin-bottom: 20px;
}
.rememberme input
{
    accent-color: gold;
    margin-right: 4px;
   
}
.wrapper .btn
{
    width: 100%;
    height: 45px;
    background: gold;
    border: none;
    outline: none;
    border-radius: 40px;
   color: purple;
   font-size: 16px;
   font-weight: 600;

}

</style>