import React from "react";


function Footer() {
  return (
    <div>
    <footer class="bg-[#333333] text-white py-4 px-6 mx-[100px]">
  <div class="container mx-auto flex justify-between">
    <div>
      <h3 class="text-xl font-semibold mb-4">Services</h3>
      <ul class="space-y-2">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">How to Buy</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-4">About Us</h3>
      <ul class="space-y-2">
        <li><a href="#">Our Motto</a></li>
        <li><a href="#">Payments</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
      <input type="email" placeholder="Email" class="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"/>
      <button class="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Send Email</button>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-4">Donate Us</h3>
      <ul class="space-y-2">
        <li><a href="#">Payment Methods</a></li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto flex justify-between mt-4">
    <div>
      <a href="#">Terms of Service</a>
      <span class="mx-2">|</span>
      <a href="#">Privacy Policy</a>
    </div>
    <div>
      <a href="#" class="mr-4">Facebook</a>
      <a href="#">Twitter</a>
    </div>
  </div>
</footer>

</div>
  )
}

export default Footer