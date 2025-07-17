document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
      // Load Google Maps embed iframe for Algeria (Nabil's location)
      const mapContainer = document.querySelector("#load-iframe-map");
      
      if (mapContainer) {
        mapContainer.innerHTML = `<iframe 
          class="contact__iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51836.863123455275!2d3.0419574!3d36.7538253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6e5b2e6b0d%3A0x4ba!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2s!4v1647123456789!5m2!1sen!2s" 
          width="100%" 
          height="300" 
          style="border:0; border-radius: 1rem;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0">
        </iframe>`;
      }
    }, 800);
});
