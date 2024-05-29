<template>
    <footer>
      <div class="container-footer">
        <div class="footer-logo">
            <a href="#header"><img :src="logoImage" class="footer-logo" alt="Footer Logo"></a>
        </div>
        <div class="top">
            <h1>Let the adventure begin!</h1>
        </div>
        <div class="bottom">
            <div class="row-footer">
                <div class="col-4">
                    <h2>Opening hours</h2>
                    <p>Day quest: 10am - 2pm <br> Night quest: 6pm - 10pm</p>
                </div>
                <div class="col-4">
                    <h2>Connect with us</h2>
                    <div class="icons">
                        <p><a :href="facebookLink" target="_blank"><img :src="facebookIcon" alt="Facebook"></a></p>
                        <p><a :href="instagramLink" target="_blank"><img :src="instagramIcon" alt="Instagram"></a></p>
                        <p><a :href="emailLink" target="_blank"><img :src="emailIcon" alt="Email"></a></p>
                        <p><a :href="phoneLink" target="_blank"><img :src="phoneIcon" alt="Phone"></a></p>
                        <p><a :href="websiteLink" target="_blank"><img :src="websiteIcon" alt="Website"></a></p>
                    </div>
                </div>
                <div class="col-4">
                    <h2>Useful links</h2>
                    <p><a href="#header">HOME</a></p>
                    <p><a href="#about">ABOUT</a></p>
                    <p><a href="#intro">STORY</a></p>
                    <p><a href="#quests">QUESTS</a></p>
                    <p><a href="#googlemap">LOCATION</a></p>
                    <p><a href="#faq">FAQ</a></p>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 Fantasy Festival Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import logoImage from '@/assets/images/logo1.png';
  import facebookIcon from '@/assets/images/fb.png';
  import instagramIcon from '@/assets/images/insta.png';
  import emailIcon from '@/assets/images/mail.png';
  import phoneIcon from '@/assets/images/phone.png';
  import websiteIcon from '@/assets/images/website.png';
  
  const facebookLink = "https://m.facebook.com/fantasyfestivalen?locale=ik_US";
  const instagramLink = "https://www.instagram.com/fantasyfestivalen/";
  const emailLink = "mailto:fantasyfestival@esbjerg.dk";
  const phoneLink = "tel:+4576162000";
  const websiteLink = "https://fantasyfestival.dk/";
  </script>