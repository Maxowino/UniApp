<script>

</script>

<template>

    <div id="landingpage" class="bg-purple">
      
        <h1>Welcome to UniApp</h1>
         <div class="titlebox">
            <img src="https://media.istockphoto.com/id/1283581279/vector/graduation-hat-and-diploma-icon.jpg?s=612x612&w=0&k=20&c=VLt0IlK4GB6csyH-cAQN722Nt7Ai5Igh0zduLDge3Eg="  alt="" >
            <div class="h1-box">
                <h1>Belobog College of Arts</h1>
            </div>
          </div>
          <br>
          <div class="motto" align="center">
            <p> Learning and wisdom</p>
          </div>
          <br>
            
          <div class="nav1">
            <nav align="center" class="navbar">
                <a href="#">Student Life</a>
                <a href="#">Accommodation</a>
                <a href="#">Book Tour</a>
                <a href="#">Foreign Students</a>
            </nav>
          </div>
          <br>
          <br><br><br><br>
          <div  align="center">
            <h2>INTAKE IS ONGOING</h2>
          </div>
          <br>
          <br>
          <br>
          <div class="courses" align="center">          
            <button><strong  color="black">Courses</strong></button>
          </div>
          <br><br>
          <div class="extra" align="center">
            <button><strong>Extracurricular</strong></button>
          </div>
          <br>
          <br>
          <div class="alumni" align="center">          
                <button></button>
          </div>
          <br>
          <br>
          <div class="research" align="center">          
            <button><strong>Research Institutes</strong></button>
          </div>
          <br>
          <br>
          <div class="events" align="center">                     
          </div>
          <br>
          <br>
          <div class="mentor" align="center">          
               
          </div>
          
          <br><br>
          <div class="enroll" align="center">
                <button><strong>ENROLL</strong></button>
                
          </div>
          <br><br><br>
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

<style scoped>
          .titlebox 
        {
            display: flex;
            justify-content: center;
            align-items: center;

        }

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
        template
        {
          
            background-color:#361159;
            margin-top: 0%;
        }

        .h1-box
        {
            font-size: medium;
        }
        .h1-box h1
        {
          
            font-size: 60px;
            color: orange;
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


        .motto p
        {
            font-style: italic;
            color: orange;
            font-size:18px;
        }
        *
        { 
          
            margin: 0;
            padding: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        .nav1
        {
          
            width:fit-content;
            justify-content: center;
            padding: 20px;
            margin-left: 25%;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color:transparent;
            border-style: solid;
            border-color: orange;
            border-inline: 1px;
            border-inline-start: 1px;  
            z-index: 100; 
            top: auto;
            left: auto;
          
        }
            
        .navbar a
        {

            font-size: 20px;
            color: gold;
            text-decoration: none;
            margin-left: 25px;
            position: relative;
            font-weight: 500;
        }
        .navbar a::before
        {
            content: '';
            position: absolute;
            top: 100%;
            left: auto;
            width: 0;
            height: 2px;
            background: gold;
            transition: .2s;
          
        }
        .navbar a:hover::before
        {
            width: 100%;

        }
        h2
        {
            color: orange;
            font-size: 40px;
        }
        .courses 
        {
          
          display: flex;
          justify-content: center;
          align-items: center;   
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 50px;
        }
        .courses
        {
            background-image: url(https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif);
            background-position: center;
            height: 170px;
            background: size 200px; 
            justify-self: center;
            background-repeat: no-repeat;  
            opacity: 0.8;
            color: black;
            
        }
        h3
        {
            font-weight: 800;
            color:black;
        }
        .extra
        {
          
            background-position: center;
            justify-self: center;
            background-clip: content-box;
            background-image: url(https://onthegosports.com.au/cdn/shop/articles/sports_1920x.jpg?v=1627890142);
            background-size: 880px;
            height: 170px;
            background-repeat: no-repeat;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 50px;


        }
        .alumni
        {
            background-image: url(https://media.istockphoto.com/id/924684764/vector/alumni-badge-icon-flat-vector-illustration-on-white-background.webp?s=1024x1024&w=is&k=20&c=vAx1q4uLjwj1umnFdoJzO4HGnivZGYTd9vhEmwSGyuw=);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 880px;
            height: 170px;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 50px;

            

        }
        .research
        {
            background-image: url(https://www.unisa.ac.za/static/corporate_web/Content/Training/Research/Image/top-banner.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 880px;
            height: 170px;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 50px;

        }
        .events
        {
            background-image: url(https://www.decathlon.co.za/img/cms/Event%20pic/5573247_1.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 880px;
            height: 170px;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 50px;


        }
        .mentor
        {
            background-image: url(https://media.licdn.com/dms/image/C4D12AQHkpFKVRtSz5g/article-cover_image-shrink_720_1280/0/1616408891412?e=2147483647&v=beta&t=8_PaNIJgBnxsHnaZljXTh7Ohj5BllN14MMXePMbSmW0);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 880px;
            height: 170px;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 50px;



        }

        .enroll
        {
            background-color: blueviolet;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 450px;
            height: 120px;
            margin-left: 30%;
            margin-right: 30%;
            border-radius: 30px;

            display: flex;
            justify-content: center;
            align-items: center;   
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 40px;
            align-content: center;
            color: gold;
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
        .name1
        {
            background-size: 880px;
            height: 150px;
        }

</style>