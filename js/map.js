document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {

      document.querySelector(
        "#load-iframe-map"
      ).innerHTML = `<iframe 
    class="contact__iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1831.7952175902146!2d2.6509392759463415!3d39.579688824503556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM0JzQ3LjYiTiAywrAzOScwOS44IkU!5e0!3m2!1sen!2ses!4v1716987377920!5m2!1sen!2ses" 
        width="800" 
        height="300" 
        style="border:0;"  
        >
    </iframe>`
    },1000);
  });
;
